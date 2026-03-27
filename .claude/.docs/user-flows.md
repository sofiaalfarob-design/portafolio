# User Flows - Sofia Alfaro Portfolio

---

## Flow 1: First-Time Visitor - Portfolio Discovery

**Goal:** A potential client or recruiter lands on the homepage and explores Sofia's expertise and work.

```
Step 1: Land on Home Page
  - Implementación de Skeleton Loaders para evitar saltos de layout (CLS).
  |
  v
Step 2: Experience the Hero Section
  - Ver Video (Background/Showreel) con [Autoplay + Mute] para impacto visual inmediato.
  - Leer Título, Especialización y "Key Stats" (8+ años, 30+ proyectos).
  - Validar status con el badge "Available for remote projects".
  |
  +---> [Option A] Click "View Case Studies" -> Smooth scroll a #projects.
  +---> [Option B] Click "Let's Talk" -> Smooth scroll a #contact.
  +---> [Option C] Scroll natural (activación de Scroll-Spy en el Navbar).
  |
  v
Step 3: Scan Featured Case Studies (2x2 Grid)
  - Orden de lectura jerárquico: 
    1. Categoría (Contexto rápido) 
    2. Título (Nombre del proyecto) 
    3. Descripción (Propuesta de valor/Problema resuelto).
  - Revisión de métricas de impacto y tags técnicos (herramientas AI/Design).
  |
  +---> Hover en Card: Micro-interacción (elevation + color shift).
  +---> Click "View this Project" -> Navegación a Case Study Detail.
  +---> Click "View more projects" -> Navegación a /case-studies.
  |
  v
Step 4: View Experimental Lab section
  - Proyectos de innovación con badges de estado dinámicos (Live/WIP/Planned).
  |
  +---> Click "Book a Call" ->  https://calendly.com/
  |
  v
Step 5: Trust Signals & Technical Breadth
  - Browse "Skills & Methodology" (6 categorías).
  - Read "Why Work With Me" (Propuesta de valor estratégica).
  |
  v
Step 6: Conversion (Sticky Footer/CTA Section)
  - Acceso a LinkedIn, Email, Resume, GitHub.
```

**Key conversion points:** "Let's Talk" (hero), "Book a Call" (lab), CTA section (bottom)

---

## Flow 2: Browsing Case Studies

**Goal:** A visitor wants to explore the full portfolio of case studies.

```
Step 1: Navigate to Case Studies page
  - Via: Navbar "Case Studies" link, Hero "View Case Studies" CTA, or "View more projects" link
  |
  v
Step 2: Read Case Studies Hero
  - Heading: "Selected Case Studies: Solving Business Challenges Through Design."
  - Subtext about SaaS, B2B, and AI-driven products
  |
  +---> [Option A] Click "Get in touch" -> Navigate to contact
  +---> [Option B] Click "Book a call" -> External booking
  +---> [Option C] Scroll down to browse
  |
  v
Step 3: Browse Case Study Grid (2x2 layout)
  - 4 case study cards with thumbnails, categories, titles, descriptions, metrics, tags
  - Cards:
    1. Cleaning App - "From Concept to Functional MVP in 21 Days"
    2. Propelus - "Scalable Architecture: The Design-to-Code Bridge"
    3. Continuing Education - "The 'Chameleon' Component System"
    4. Arkose Labs - "Shifting from 'Technical' to 'Decision-Maker'"
  |
  +---> Click "View this Project" / "View project" -> Navigate to specific Case Study Detail
  +---> Continue scrolling
  |
  v
Step 4: View Strategic Framework
  - Discovery -> Execution -> Optimization methodology
  |
  v
Step 5: Reach CTA / Contact section
  - Same conversion options as home page
```

---

## Flow 3: Reading a Case Study

**Goal:** A visitor reads a specific case study in depth to evaluate design methodology and business impact.

```
Step 1: Land on Case Study Detail page
  - Via: Case study card link from Home or Case Studies page
  |
  v
Step 2: View Hero (dark themed)
  - See category tags (purple pills)
  - Read subtitle + title
  - See role label
  - View hero image/mockup
  |
  v
Step 3: Read Overview Bar
  - Tools used (e.g., Claude, Figma, ChatGPT)
  - Timeline (e.g., "3 Weeks: Concept & Functional App")
  |
  v
Step 4: Read Main Content Sections (2-3 sections)
  - Section pattern: Heading -> Body text -> Supporting visual
  - Typical flow:
    a. The Challenge (problem statement)
    b. The Solution / Approach (methodology)
    c. Technical Deep Dive or Key Features (implementation details, often 3-column cards)
  |
  v
Step 5: View Business Impact section
  - 3 purple metric cards showing quantified results
  - e.g., "60% reduction in development costs", "Time-to-Market: 3 weeks vs 16 weeks"
  |
  v
Step 6: Browse Related Cases ("See our work")
  - 3 compact case cards for other projects
  - "View all" button to go to full case studies list
  |
  +---> Click a related case card -> Navigate to another Case Study Detail
  +---> Click "View all" -> Navigate to /case-studies
  +---> Continue scrolling
  |
  v
Step 7: Reach CTA / Contact section
  - Same conversion options as all pages
```

---

## Flow 4: Direct Contact

**Goal:** A visitor decides to reach out to Sofia.

```
Path A: Via Navbar
  Step 1: Click "Get in touch" in navbar (available on any page)
  Step 2: Navigate to CTA section or open contact modal

Path B: Via CTA Section (bottom of every page)
  Step 1: Scroll to "Ready to Accelerate Your Product?" section
  Step 2: Choose contact method:
    - "Connect on LinkedIn" -> LinkedIn
    - "Send Email" -> mailto:sofia.alfablan@gmail.com
    - "Book a Call" -> Booking page

Path C: Via Footer
  Step 1: Scroll to footer
  Step 2: Click LinkedIn, email, Behance, or Resume link

Path D: Via Case Studies Hero
  Step 1: On /case-studies page
  Step 2: Click "Get in touch" or "Book a call"
```

---

## Flow 5: Navigation Between Sections (Single-Page Scroll on Home)

**Goal:** User navigates to specific sections via navbar.

```
Navbar links on Home page use anchor scrolling:

  "Portfolio"    -> Scrolls to #projects (Featured Case Studies)
  "Case Studies" -> Navigates to /case-studies
  "The Lab"      -> Scrolls to #lab (Experimental Lab section)
  "About Me"     -> Scrolls to #about (Skills / Why Work With Me)
  "Get in touch" -> Scrolls to #contact (CTA section)
```

---

## UX Insights & Patterns

### Strengths

1. **Consistent CTA placement:** Every page ends with the same "Ready to Accelerate Your Product?" section, creating reliable conversion touchpoints
2. **Progressive disclosure:** Home page provides a high-level overview, case studies list allows comparison, detail pages provide depth
3. **Credibility signals:** Stats in hero (8+ years, 30+ projects), metrics on case cards, business impact section on detail pages
4. **Visual hierarchy:** Section badges create consistent wayfinding; purple accent draws attention to interactive elements
5. **Cross-linking:** Related cases at the bottom of each detail page encourage continued browsing (reduces bounce)
6. **Multiple contact methods:** LinkedIn, email, booking, resume, GitHub - covers different user preferences

### Potential Improvements

1. **No search or filtering:** Case studies page lacks filters (by category, technology, industry) - fine for 4 items but should be planned for scalability
2. **No breadcrumb navigation:** Case study detail pages lack breadcrumbs for orientation (e.g., "Case Studies > Arkose Labs")
3. **Back-to-top mechanism:** Long scroll pages would benefit from a floating back-to-top button
4. **Active nav state:** Unclear if the navbar highlights the current section during scroll on the home page (should implement scroll-spy)
5. **Mobile navigation:** No mobile menu design visible - hamburger menu needed
6. **Case study card hover states:** No visible hover/interaction state in the designs - should add subtle elevation or color shift on hover
7. **Loading states:** No skeleton or loading patterns visible - plan for image-heavy pages

### Interaction Considerations for Code

| Pattern                  | Implementation Notes |
|--------------------------|---------------------|
| Smooth scroll (anchors)  | Use `scroll-behavior: smooth` or JS smooth scroll for navbar anchor links |
| Scroll-spy               | Highlight active nav item based on visible section |
| Case study theming       | Each case study has a unique hero color; use dynamic theming via data/props |
| Tag pill filtering       | Tags are display-only now but could support filtering later |
| CTA button variants      | 3 variants: purple filled, dark filled, outlined - abstract into a Button component |
| Image lazy loading       | Hero collage and case thumbnails should lazy-load for performance |
| Section reveal animation | Sections could use intersection observer for fade-in on scroll |

### Component Reusability Map

```
Component         | Home | Case Studies | Case Detail
------------------|------|--------------|------------
Navbar            |  x   |      x       |     x
Footer            |  x   |      x       |     x
CTASection        |  x   |      x       |     x
SectionBadge      |  x   |      x       |     x
TagPill           |  x   |      x       |     x
CaseStudyCard     |  x   |      x       |     -
CompactCaseCard   |  -   |      -       |     x
BusinessImpact    |  -   |      -       |     x
SkillCard         |  x   |      -       |     -
FrameworkCard     |  -   |      x       |     -
```

### State Considerations

| Component           | States                                           |
|---------------------|--------------------------------------------------|
| Navbar              | Default, scrolled (sticky with shadow), mobile open/closed |
| Nav link            | Default, hover, active (current section/page)    |
| Button (CTA)        | Default, hover, focus, active, disabled           |
| Case study card     | Default, hover (elevation/shadow shift)           |
| Tag pill            | Default (display only), potentially active (if filtering) |
| Lab card status     | "Completed" (green), "In Progress" (yellow/amber), "Planned" (gray) |
| Hero images         | Loading (skeleton), loaded, error                 |
| Section (on scroll) | Hidden (below viewport), visible (animate in)     |

---

## Data Model (for Dynamic Content)

### Case Study

```typescript
interface CaseStudy {
  slug: string;
  category: string;           // e.g., "AI Implementation & Rapid Prototyping"
  subtitle: string;           // Category/area label
  title: string;              // Main heading
  description: string;        // Card-level summary
  role: string;               // e.g., "Lead Product Designer & AI Orchestrator"
  heroImage: string;          // URL for hero image
  thumbnailImage: string;     // URL for card thumbnail
  themeColor: string;         // Hero background color
  tools: string[];            // e.g., ["Claude", "Figma", "ChatGPT v4"]
  timeline: string;           // e.g., "3 Weeks: Concept & Functional App"
  metrics: string;            // Summary metrics line for cards
  tags: Tag[];
  contentSections: ContentSection[];
  businessImpact: MetricCard[];
  relatedCaseSlugs: string[];
}

interface ContentSection {
  heading: string;
  body: string;               // Markdown or rich text
  image?: string;             // Optional visual
  subCards?: TechCard[];      // Optional 3-column detail cards
}

interface MetricCard {
  headline: string;           // e.g., "60%"
  description: string;        // e.g., "Reduction in traditional development costs"
}

interface Tag {
  label: string;
  variant?: 'purple' | 'neutral';
}

interface TechCard {
  title: string;
  description: string;
}
```

### Lab Project

```typescript
interface LabProject {
  title: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  description: string;
  image: string;
  tags: Tag[];
}
```

### Skill Category

```typescript
interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}
```
