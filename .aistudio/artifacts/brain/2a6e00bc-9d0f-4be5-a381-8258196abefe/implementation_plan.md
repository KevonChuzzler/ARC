# African Restoration Centre (ARC) Website Implementation Plan

A professional, minimalistic, and modern single-page website for the **African Restoration Centre (ARC)** focused on reconnecting communities with African heritage, cultural development, and educational programs.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed during initial planning:
> - **Programmes & Services Interaction**: Simple static cards with smooth scrolling to the contact section.
> - **Contact & Get Involved Section**: Detailed contact information paired with an interactive, always-visible WhatsApp widget at the bottom right.
> - **Visual & Photography Style**: Warm, earthy African heritage photography strictly matching the ARC brand color swatches.

- **Confirmed Palette**: Burnt Terracotta (`#C86452`), Ochre Gold (`#F3A83B`), Forest Charcoal (`#2F3E36`), Soft Warm Linen (`#F4EAE1`), and Pure White (`#FFFFFF`).
- **Confirmed Typography**: Elegant display serif (`Cormorant Garamond`) paired with modern clean sans-serif (`Plus Jakarta Sans`).

---

## 1. Overview & Core Concept

The **African Restoration Centre (ARC)** website serves as an official digital home to present ARC's mission—*"People • Roots • Restoration"*. It presents ARC's history, core pillars, key programmes (Learning Sessions, Marriage Preparation, Online Activities), leadership team, and contact channels.

### Key Values & Goals:
- **Heritage & Community First**: Honor African culture, education, and relational restoration.
- **Minimalist & Accessible**: Clear visual hierarchy, spacious layout, zero clutter, zero AI cliché copy.
- **Direct Engagement**: Clear contact details, inquiry form, and persistent WhatsApp quick-connect option.

---

## 2. User Experience & Visual Design

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           STICKY HEADER                                 │
│  [Logo + African Restoration Centre] ── [About • Programmes • Leadership • Contact] ── [CTA]  │
└─────────────────────────────────────────────────────────────────────────┘
                                   │
┌──────────────────────────────────┴──────────────────────────────────────┐
│  SECTION 1: HERO (Split Text & Heritage Image + Brand Badge)            │
│  "Reconnecting Communities with African Heritage and Learning"          │
└──────────────────────────────────┬──────────────────────────────────────┘
                                   │
┌──────────────────────────────────┴──────────────────────────────────────┐
│  SECTION 2: ABOUT ARC (Mission, History & 3 Core Pillars Grid)          │
│  "People • Roots • Restoration"                                         │
└──────────────────────────────────┬──────────────────────────────────────┘
                                   │
┌──────────────────────────────────┴──────────────────────────────────────┐
│  SECTION 3: PROGRAMMES & SERVICES (3 Equal-Sized Grid Cards)            │
│  [ Learning Sessions ]    [ Marriage Preparation ]    [ Online Activities ]│
└──────────────────────────────────┬──────────────────────────────────────┘
                                   │
┌──────────────────────────────────┴──────────────────────────────────────┐
│  SECTION 4: LEADERSHIP (3 Profile Headshot Cards)                       │
│  [ Founder / Director ]      [ Cultural Educator ]     [ Programme Lead ] │
└──────────────────────────────────┬──────────────────────────────────────┘
                                   │
┌──────────────────────────────────┴──────────────────────────────────────┐
│  SECTION 5: CONTACT & GET INVOLVED (Split Info & Map / Form)             │
│  Contact Details • Hours • Social Links • Map │ Interactive Form        │
└─────────────────────────────────────────────────────────────────────────┘
                                   │
               [ FLOATING WHATSAPP BUTTON (Always Visible) ]
```

### Aesthetic Direction & Anti-Slop Discipline
- **Zero-Pill Metadata**: Clean unboxed inline typography with `·` dividers.
- **Top Bar Contract**: Exactly 3 zones (Brand wordmark with logo, 4 concise nav links, 1 action button "Get in Touch").
- **No Cliché Copy**: Direct, human, authentic phrasing.
- **Color Discipline (60-30-10 Rule)**:
  - **60% Canvas**: Crisp white and warm soft linen (`#F4EAE1`).
  - **30% Structure**: Forest Charcoal (`#2F3E36`) text, subtle hairline dividers, and muted containers.
  - **10% Accent**: Terracotta Red (`#C86452`) primary buttons and Ochre Gold (`#F3A83B`) highlights.

---

## 3. Key Product Decisions & Trade-Offs

1. **Sticky Top Bar with Smooth Scrolling**:
   - *Decision*: Native CSS smooth scrolling (`scroll-behavior: smooth`) anchored to `#about`, `#programmes`, `#leadership`, and `#contact`.
   - *Why*: Delivers an immediate, lightweight user experience without heavy routing.
2. **Persistent WhatsApp Floating Widget**:
   - *Decision*: Fixed button at bottom-right of viewport with WhatsApp brand green / charcoal styling and quick tooltip preview.
   - *Why*: Facilitates direct mobile-friendly messaging for African community members.
3. **High-Res Earthy Photography Assets**:
   - *Decision*: Utilize generated high-res visual assets matching the exact color tone of the Acacia tree and warm sun logo.
   - *Why*: Eliminates broken image links and maintains visual harmony.

---

## 4. Technical Architecture & Component Strategy

```
src/
├── components/
│   ├── Navbar.tsx            # Sticky Top Bar (Logo, Nav Links, Primary CTA)
│   ├── Hero.tsx              # Split text/image hero with ARC logo & CTA
│   ├── About.tsx             # Two-column introduction & 3 Core Pillars
│   ├── Programmes.tsx        # 3 Grid cards for Learning, Marriage & Online Activities
│   ├── Leadership.tsx        # Team headshot profiles and bios
│   ├── Contact.tsx           # Split section with Form, Info & Google Maps Embed
│   ├── WhatsAppWidget.tsx    # Fixed persistent quick-chat launcher
│   └── Footer.tsx            # Minimalist footer with copyright & social links
├── App.tsx                   # Main layout container & section orchestration
└── index.css                 # Tailwind CSS directives & color custom variables
```

### Key Interactive Features:
- **Form Submission**: Fully functional interactive contact form with field validation and immediate success state.
- **Program Cards Hover Effects**: Subtle elevation lift and terracotta accent line on hover.
- **Responsive Mobile Navigation**: Clean slide-down mobile menu with smooth anchor locking.
