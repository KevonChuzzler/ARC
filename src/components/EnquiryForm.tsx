import React, { useEffect, useState } from 'react';
import { Check, CheckCircle2, AlertCircle, Send, Loader2, RotateCcw } from 'lucide-react';
import {
  ARC_PROGRAMME_OPTIONS,
  ENQUIRY_INTERESTS,
  type EnquiryInterest,
  type EnquiryPrefill,
} from '../lib/enquiry';

interface EnquiryFormProps {
  prefill?: EnquiryPrefill | null;
  onOpenPrivacyPolicy?: () => void;
}

interface SubmissionReceipt {
  fullName: string;
  email: string;
  interests: EnquiryInterest[];
  programme?: string;
  confirmationEmailSent: boolean;
}

export default function EnquiryForm({ prefill, onOpenPrivacyPolicy }: EnquiryFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interests, setInterests] = useState<EnquiryInterest[]>([]);
  const [programme, setProgramme] = useState(ARC_PROGRAMME_OPTIONS[0]);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(''); // honeypot

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<SubmissionReceipt | null>(null);

  useEffect(() => {
    if (!prefill) return;
    setReceipt(null);
    setErrorMsg(null);
    setInterests((prev) =>
      prev.includes(prefill.interest) ? prev : [...prev, prefill.interest]
    );
    if (prefill.programme) {
      setProgramme(prefill.programme);
    }
  }, [prefill]);

  const toggleInterest = (value: EnquiryInterest) => {
    setErrorMsg(null);
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setInterests([]);
    setProgramme(ARC_PROGRAMME_OPTIONS[0]);
    setMessage('');
    setConsent(false);
    setWebsite('');
    setErrorMsg(null);
    setReceipt(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (interests.length === 0) {
      setErrorMsg('Please select at least one area you are interested in.');
      return;
    }

    if (trimmedMessage.length < 10) {
      setErrorMsg('Please tell us a little more about your enquiry (at least 10 characters).');
      return;
    }

    if (!consent) {
      setErrorMsg(
        'Please confirm your privacy consent before submitting your enquiry.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const apiBase = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '');
      const requestBody = JSON.stringify({
        fullName: trimmedName,
        email: trimmedEmail,
        phone: phone.trim(),
        interests,
        programme: interests.includes('Learning Programmes') ? programme : '',
        message: trimmedMessage,
        consent,
        website,
      });

      const postContact = async (endpoint: string) =>
        fetch(`${apiBase}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: requestBody,
        });

      let response = await postContact('/api/contact');
      let contentType = response.headers.get('content-type') || '';

      // On cPanel / static SPA hosting, /api/contact may rewrite to index.html (text/html).
      // Fall back to /api/contact.php when no Node/Vercel handler intercepted /api/contact.
      if (!apiBase && (!contentType.includes('application/json') || response.status === 404)) {
        const phpResponse = await postContact('/api/contact.php');
        const phpContentType = phpResponse.headers.get('content-type') || '';
        if (phpContentType.includes('application/json')) {
          response = phpResponse;
          contentType = phpContentType;
        }
      }

      if (!contentType.includes('application/json')) {
        setErrorMsg(
          'The enquiry endpoint is not active on this host yet (the server returned an HTML page instead of JSON). Please ensure the backend /api/contact route or cPanel PHP handler is deployed, or email info@africanrestorative.co.za directly.'
        );
        return;
      }

      const payload = (await response.json().catch(() => ({}))) as {
        success?: boolean;
        confirmationEmailSent?: boolean;
        error?: string;
      };

      if (!response.ok || !payload.success) {
        setErrorMsg(
          payload.error ||
            'We could not submit your enquiry right now. Please try again or email info@africanrestorative.co.za directly.'
        );
        return;
      }

      setReceipt({
        fullName: trimmedName,
        email: trimmedEmail,
        interests: [...interests],
        programme: interests.includes('Learning Programmes') ? programme : undefined,
        confirmationEmailSent: Boolean(payload.confirmationEmailSent),
      });
    } catch {
      setErrorMsg(
        'A network error occurred while submitting your enquiry. Please check your connection or email info@africanrestorative.co.za.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (receipt) {
    return (
      <div
        id="contact-form"
        role="status"
        aria-live="polite"
        className="p-8 lg:p-10 rounded-3xl bg-white border border-[#2F3E36]/12 shadow-sm space-y-6"
      >
        <div className="flex items-start gap-4 border-b border-[#2F3E36]/10 pb-6">
          <div className="p-3 rounded-2xl bg-[#2F3E36] text-[#F3A83B] shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452] block">
              Enquiry Submitted
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2F3E36]">
              Thank You, {receipt.fullName}
            </h3>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-[#2F3E36]/85 leading-relaxed">
          <p>
            Your enquiry has been received and routed to the African Restorative Centre at{' '}
            <strong className="text-[#2F3E36]">info@africanrestorative.co.za</strong>.
          </p>
          <p>
            {receipt.confirmationEmailSent
              ? `We have also sent a confirmation copy to ${receipt.email}. A member of our team will review your message and respond shortly.`
              : `A member of our team will review your message and respond to ${receipt.email} shortly.`}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-[#2F3E36]/10 space-y-2 text-sm text-[#2F3E36]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C86452]">
            Submitted Summary
          </p>
          <p>
            <span className="font-semibold">Area(s) of Interest:</span>{' '}
            {receipt.interests.join(', ')}
          </p>
          {receipt.programme && (
            <p>
              <span className="font-semibold">Selected Programme:</span>{' '}
              {receipt.programme}
            </p>
          )}
          <p>
            <span className="font-semibold">Reply Email:</span> {receipt.email}
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <p className="text-xs text-[#2F3E36]/70">
            Need urgent assistance? Call or WhatsApp <strong className="tabular-nums">078 526 9500</strong>.
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2F3E36] hover:bg-[#23302a] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Send Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="p-7 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#2F3E36]/12 shadow-sm space-y-6"
    >
      {/* Form Header */}
      <div className="border-b border-[#2F3E36]/10 pb-5 space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C86452] block">
          Contact &amp; Enquiry Form
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2F3E36]">
          Send Us an Enquiry
        </h3>
        <p className="text-sm text-[#2F3E36]/75 leading-relaxed">
          Share your contact details and what you would like to explore with ARC. Submissions go directly to{' '}
          <span className="font-semibold text-[#2F3E36]">info@africanrestorative.co.za</span>.
        </p>
      </div>

      {/* Honeypot field hidden from human users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="enquiry-website">Website</label>
        <input
          id="enquiry-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label
            htmlFor="enquiry-name"
            className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/80"
          >
            Full Name <span className="text-[#C86452]">*</span>
          </label>
          <input
            id="enquiry-name"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Thabo Mokoena"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errorMsg) setErrorMsg(null);
            }}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#2F3E36]/18 text-sm text-[#2F3E36] placeholder:text-[#2F3E36]/40 focus:outline-none focus:border-[#C86452] focus:bg-white transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="enquiry-email"
            className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/80"
          >
            Email Address <span className="text-[#C86452]">*</span>
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errorMsg) setErrorMsg(null);
            }}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#2F3E36]/18 text-sm text-[#2F3E36] placeholder:text-[#2F3E36]/40 focus:outline-none focus:border-[#C86452] focus:bg-white transition-colors"
          />
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <label
            htmlFor="enquiry-phone"
            className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/80"
          >
            Telephone / WhatsApp Number <span className="text-[#2F3E36]/50 font-normal normal-case">(Optional)</span>
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. 078 526 9500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#2F3E36]/18 text-sm text-[#2F3E36] placeholder:text-[#2F3E36]/40 focus:outline-none focus:border-[#C86452] focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Areas of Interest */}
      <fieldset className="space-y-3">
        <legend className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/80">
          What Are You Interested In? <span className="text-[#C86452]">*</span>{' '}
          <span className="text-[#2F3E36]/55 font-normal normal-case">
            (Select one or more)
          </span>
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ENQUIRY_INTERESTS.map((option) => {
            const isSelected = interests.includes(option.value);
            return (
              <button
                key={option.value}
                type="button"
                role="checkbox"
                aria-checked={isSelected}
                onClick={() => toggleInterest(option.value)}
                className={`min-h-[48px] p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-[#F4EAE1]/75 border-[#C86452] text-[#2F3E36]'
                    : 'bg-[#FBF9F5] border-[#2F3E36]/14 text-[#2F3E36]/85 hover:border-[#2F3E36]/30'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-colors ${
                    isSelected
                      ? 'bg-[#C86452] border-[#C86452] text-white'
                      : 'bg-white border-[#2F3E36]/30'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                </span>
                <span className="space-y-0.5">
                  <span className="block text-sm font-semibold text-[#2F3E36] leading-snug">
                    {option.value}
                  </span>
                  <span className="block text-xs text-[#2F3E36]/65 leading-snug">
                    {option.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Specific Learning Programme Selector when Learning Programmes is checked */}
      {interests.includes('Learning Programmes') && (
        <div className="space-y-1.5">
          <label
            htmlFor="enquiry-programme"
            className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/80"
          >
            Specific Learning Programme <span className="text-[#2F3E36]/50 font-normal normal-case">(Optional)</span>
          </label>
          <select
            id="enquiry-programme"
            name="programme"
            value={programme}
            onChange={(e) => setProgramme(e.target.value)}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#2F3E36]/18 text-sm text-[#2F3E36] focus:outline-none focus:border-[#C86452] focus:bg-white transition-colors"
          >
            {ARC_PROGRAMME_OPTIONS.map((progName) => (
              <option key={progName} value={progName}>
                {progName}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Message */}
      <div className="space-y-1.5">
        <label
          htmlFor="enquiry-message"
          className="block text-xs font-semibold uppercase tracking-wider text-[#2F3E36]/80"
        >
          Your Enquiry / Message <span className="text-[#C86452]">*</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          required
          placeholder="Tell us how we can assist you, your preferred dates or format, or any questions you may have..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errorMsg) setErrorMsg(null);
          }}
          className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#2F3E36]/18 text-sm text-[#2F3E36] placeholder:text-[#2F3E36]/40 focus:outline-none focus:border-[#C86452] focus:bg-white transition-colors resize-y"
        />
      </div>

      {/* POPIA Privacy Notice & Consent Wording */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#FBF9F5] border border-[#2F3E36]/12 space-y-3">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2F3E36]">
            Privacy Notice (POPIA)
          </p>
          <p className="text-xs text-[#2F3E36]/75 leading-relaxed">
            Your personal information is collected strictly to respond to your enquiry and is routed securely to the African Restorative Centre (
            <span className="font-medium text-[#2F3E36]">info@africanrestorative.co.za</span>
            ). In compliance with the Protection of Personal Information Act (POPIA), we never sell or share your details with third parties.{' '}
            {onOpenPrivacyPolicy && (
              <button
                type="button"
                onClick={onOpenPrivacyPolicy}
                className="font-semibold text-[#C86452] hover:underline underline-offset-2 cursor-pointer"
              >
                View Cookie &amp; Privacy Policy
              </button>
            )}
          </p>
        </div>

        <label
          htmlFor="enquiry-consent"
          className="flex items-start gap-3 pt-2 border-t border-[#2F3E36]/10 cursor-pointer min-h-[44px]"
        >
          <input
            id="enquiry-consent"
            name="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              if (errorMsg) setErrorMsg(null);
            }}
            className="mt-1 w-4 h-4 rounded border-[#2F3E36]/40 text-[#C86452] accent-[#C86452] shrink-0 cursor-pointer"
          />
          <span className="text-xs sm:text-sm text-[#2F3E36]/90 leading-snug">
            I consent to the African Restorative Centre (ARC) collecting and processing my personal information submitted in this form to respond to my enquiry, in accordance with POPIA and ARC&apos;s Privacy Policy.{' '}
            <span className="text-[#C86452] font-semibold">*</span>
          </span>
        </label>
      </div>

      {/* Validation / Server Error Banner */}
      {errorMsg && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-[#C86452]/10 border border-[#C86452]/30 text-[#8F3A2B] text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-[#C86452] shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Submit Action */}
      <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-[#2F3E36]/65">
          Fields marked with <span className="text-[#C86452] font-semibold">*</span> are required.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl bg-[#C86452] hover:bg-[#b05342] disabled:opacity-65 disabled:cursor-not-allowed text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Enquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
