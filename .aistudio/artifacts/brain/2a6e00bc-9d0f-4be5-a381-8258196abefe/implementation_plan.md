# African Restorative Centre (ARC) Decluttering & Refinement Plan (Revised)

This plan details the structural and visual refinements to declutter the ARC single-page website, replace AI-generated images with clean placeholders, streamline pre-headings into unboxed subheadings, add interactive modals for programme details, introduce expand/collapse toggles for leadership biographies, **remove all agency references (Upside & KS Digital)**, and **remove all icons except in the Contact Us section**.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following revisions were explicitly requested:
> - **Agency References**: Completely remove any mention of "Upside", "Upside Digital Marketing & Branding", "KS Digital", and "KS Digital Solutionz" from all site copy, footers, and metadata.
> - **Icon Discipline**: Remove ALL icons from Navbar, Hero, About, Programmes, Other Services, Leadership, and Footer. Keep icons **strictly** in the Contact Us section (and WhatsApp button).
> - **Programme Details**: Click/tap on any programme card opens an **Interactive Modal Popup** displaying complete topic lists and details.
> - **Leadership Biographies**: Profiles show the **1st paragraph with a "Read Full Biography" toggle button** to keep the page clean and uncluttered. Both Co-Directors receive equal visual prominence.
> - **Image Placeholders**: All AI images are replaced with **clean neutral beige containers** (`bg-[#F4EAE1]`) with centered text reading `"Image goes here"`.
> - **Pre-headings & Subheadings**: Remove all pill frames, icon badges, and border boxes attached to pre-headings, rendering them as clean text subheadings.
> - **Programme Titles Only**: Remove all mechanical numbers (`FEATURED 1`, `Programme 04`) and list programmes purely by title.

---

## 1. Overview & Key Changes

1. **Agency Removal**:
   - Strip all credits or references to "Upside Digital Marketing & Branding", "Upside", and "KS Digital Solutionz" from `Footer.tsx`, `Contact.tsx`, `index.html`, and any setup notes.

2. **Strict Icon Governance (Contact Only)**:
   - Remove icon imports (`Sparkles`, `Compass`, `BookOpen`, `ArrowUpRight`, `ArrowRight`, `Users`, `Trees`, `RefreshCw`, `HeartHandshake`, `PlusCircle`, `ArrowUp`, etc.) from Navbar, Hero, About, Programmes, Other Services, Leadership, and Footer.
   - Retain icons strictly in `Contact.tsx` (`Phone`, `Mail`, `MapPin`, `MessageCircle`, `Send`, `Globe`, `Share2`, `CheckCircle`) and the floating `WhatsAppWidget.tsx`.

3. **Remove AI-Generated Images**:
   - Remove image imports (`/src/assets/images/...`).
   - Implement clean aspect-ratio containers (`bg-[#F4EAE1] border border-[#2F3E36]/15`) with centered text reading `"Image goes here"`.

4. **Clean Subheadings**:
   - Strip pill containers, background badges, and icon wrappers from pre-headings.
   - Render pre-headings as clean, unboxed subheadings (`text-xs font-semibold uppercase tracking-widest text-[#C86452]`).

5. **Programmes Section Interactive Modal**:
   - Remove mechanical numbering (`FEATURED 1`, `01`, `Programme 04`).
   - Render cards showing title and 1-2 line summary.
   - Tapping/clicking a programme card opens a clean Modal Dialog displaying full topics, complete descriptions, and an enquiry button.

6. **Leadership Profile Expand/Collapse**:
   - Display both Co-Directors (*Norman Mongalo Raphahlela* & *Reverend Maphampha Rudolph Hlaka*) with equal visual rank.
   - Show initial summary and 1st paragraph of biography, followed by a "Read Full Biography" toggle button that expands the full multi-paragraph bio in-place.

---

## 2. Technical Component Architecture & Plan

```
src/
├── components/
│   ├── Navbar.tsx            # Clean text links (no icons)
│   ├── Hero.tsx              # Unboxed subheading, headline, text buttons, "Image goes here" box (no icons)
│   ├── About.tsx             # Who We Are, Vision, Mission, Objectives, Values (text only, no icons)
│   ├── Programmes.tsx        # Title-only cards (no icons, no numbers), "Image goes here" + Modal trigger
│   ├── OtherServices.tsx     # Gatherings, Coaching & Counselling (text only, no icons)
│   ├── Leadership.tsx        # Equal Co-Directors with 1st paragraph + Read Full Biography toggle (no icons)
│   ├── Contact.tsx           # Contact details with icons (Phone, Mail, MapPin, MessageCircle, Send)
│   ├── ProgrammeModal.tsx    # Modal dialog popup for detailed programme topic viewing
│   └── WhatsAppWidget.tsx    # Floating WhatsApp logo button
└── App.tsx                   # Section orchestration & modal state management
```

---

## 3. Step-by-Step Implementation Strategy

1. **`ProgrammeModal.tsx`**: Create a clean modal dialog component (text-focused, no decorative icons) with backdrop blur, full topic list display, and enquiry action button.
2. **`Programmes.tsx`**: List programmes by title without numbers, replace hero images with `"Image goes here"` placeholders, remove decorative icons, and trigger `ProgrammeModal` on click.
3. **`Leadership.tsx`**: Remove avatar icons and agency notes. Display Co-Directors with 1st paragraph and interactive `isExpanded` state toggle to read full bio.
4. **`Hero.tsx` & `About.tsx` & `OtherServices.tsx`**: Remove all icons, pill badges, and agency credits. Convert pre-headings into clean text subheadings. Replace AI images with `"Image goes here"` containers.
5. **`Contact.tsx` & `Footer.tsx`**: Remove all mentions of Upside and KS Digital. Keep functional icons in `Contact.tsx`. Remove decorative icons from `Footer.tsx`.
