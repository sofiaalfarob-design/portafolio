# Website Structure - Sofia Alfaro Portfolio

## Owner

**Sofia Alfaro** - Senior Product Designer & AI Implementation Specialist

---

## Sitemap / Page Hierarchy

```
/                           -> Home Page
/case-studies               -> Case Studies List
/case-studies/:slug         -> Case Study Detail (dynamic)
  - /case-studies/cleaning-app
  - /case-studies/propelus
  - /case-studies/continuing-education
  - /case-studies/arkose-labs
```

### Navigation Structure (Header)

| Position | Item                             | Link Target          |
|----------|----------------------------------|----------------------|
| Left     | Logo (image link-home.png)       | `/` (Home)           |
| Right    | Portfolio                        | `/#projects` (anchor)|
| Right    | Case Studies                     | `/case-studies`      |
| Right    | The Lab                          | `/#lab` (anchor)     |
| Right    | About Me                         | `/#contact` (anchor)   |
| Right    | **Get in touch** (CTA button)    | `/#contact` or modal |

### Footer Navigation

| Column          | Links                                      |
|-----------------|---------------------------------------------|
| Quick Links     | Case Studies, The Lab, Tech Stack, About Me |
| Contact         | LinkedIn, Email, Behance, Resume (PDF)      |
| Bottom left     | (c) 2026 Sofia Alfaro. All rights reserved. |
| Bottom right    | "Pixel-perfect, coffee-powered, and 99% user-friendly." |

---

## Page-by-Page Breakdown

---

### 1. Home Page (`/`)

The homepage is a long-scroll single page with distinct sections stacked vertically. It serves as the primary landing experience, showcasing expertise, work, skills, and contact..

#### Section 1: Hero

- **Label badge:** "Available for remote projects" (purple pill badge)
- **Headline:** "Senior Product Designer & AI Implementation Specialist"
- **Subtext:** Brief description of approach (scalable design systems, AI-accelerated workflows)
- **Stats row:** 4 key metrics displayed horizontally
  - `8+` Years of experience
  - `30+` Projects
  - `40%` Efficiency improved
  - `15+` Design Systems
- **CTAs:** Two buttons side by side
  - "View Case Studies" (Black pill/primary)
  - "Let's Talk" (outlined/secondary)
- **Video:** Autoplay muted YouTube embed (iframe), 16:9 aspect ratio, rounded corners with shadow. URL: https://www.youtube.com/embed/dVZVx_XOFrM?autoplay=1&mute=1&rel=0&loop=1&playlist=dVZVx_XOFrM

#### Section 2: Featured Case Studies (`#projects`)
**Background:** Light gray rounded container
- **Label badge:** "Case Studies" (purple pill)
- **Heading:** "High-Impact Projects"
- **Subtext:** Description of strategic initiatives
- **CTA link:** "View more projects" (black pill/primary)
- **Layout:** 2-column grid of case study cards (4 cards total)
- **Card structure** (each card): 
  - Large thumbnail image (rounded corners)
  - Category label in purple (e.g., "AI Implementation & Rapid Prototyping")
  - Title (bold, black)
  - Description paragraph
  - Metrics line (e.g., "MVP in 1 week | 40% Workflow Efficiency | 100% Functional Logic")
  - Tag pills (e.g., "AI Strategy", "Claude", "Figma", "Product Design", "User Testing")
  - CTA: "View this Project" (outlined/secondary/full width)
- Content of cards
  - Card 1: 
    - Image: card-ai-implementation-rapid-prototyping.png  
    - Category label in purple: AI Implementation & Rapid Prototyping
    - Title (bold, black): From Concept to Functional MVP in 21 Days
    - Description paragraph: Orchestrating a hybrid workflow between generative AI and product design to launch a cleaning services MVP in record time.
    - Metrics line: MVP in 1 week | 60% Workflow Efficiency | 100% Functional Logic.
    - Tag pills: AI Strategy, Lovable, Figma, Product Design, Vibe Coding
    - CTA: "View this Project" (outlined/secondary/full width)

  - Card 2: 
    - Image: card-design-systems-engineering.png  
    - Category label in purple: Design Systems & Engineering
    - Title (bold, black): Scalable Architecture: The Design-to-Code Bridge
    - Description paragraph: Building a modular design system using Figma Variables to unify the identity of 20+ commercial pages and streamline developer handoff. 
    - Metrics line: 20+ Pages Impacted | Figma Variables | 0% Handoff Friction.
    - Tag pills: Design Systems, Tailwind, React, Architecture, Design Engineering
    - CTA: "View this Project" (outlined/secondary/full width)

  - Card 3: 
    - Image: card-b2b-cms-design-flexibility.png  
    - Category label in purple: B2B CMS Design & Flexibility
    - Title (bold, black): Empowering the End-User: The "Chameleon" Component System
    - Description paragraph: Redesigning the administrative and public experience of a CMS to allow dynamic content creation without compromising brand integrity.  
    - Metrics line: 100% Client Autonomy | Modular Flexibility | Multi-Theme Components.
    - Tag pills: CMS Design, B2B UX, UI Components, User Empowerment
    - CTA: "View this Project" (outlined/secondary/full width)

   - Card 4: 
    - Image: card-ux-audit-conversion-rate-optimization.png  
    - Category label in purple: UX Audit & Conversion Rate Optimization
    - Title (bold, black): Strategic Storytelling: Shifting from "Technical" to "Decision-Maker"
    - Description paragraph: A deep-dive UX audit and strategic redesign to transform a technical informational site into a high-converting B2B sales machine. 
    - Metrics line: Reduced Bounce Rate | Strategic Mega-Menu | CRO-Focused Narrative.
    - Tag pills: UX Audit, CRO, B2B Strategy, Data-Driven Design
    - CTA: "View this Project" (outlined/secondary/full width)


#### Section 3: The Experimental Lab (`#lab`)

- **Label badge:** "The Experimental Lab" (purple pill)
- **Heading:** "Technical Experimentation & Continuous Innovation"
- **Subtext:** Description about experimenting with AI and automation
- **CTA:** "Book a Call" button (black pill, primary, top-right)
- **Layout:** 3-column card grid
- **Card structure** (each card):
  - Image thumbnail (rounded)
  - Title (bold)
  - Status label (e.g., "Completed", "In Progress", "Planned")
  - Description paragraph
  - Tag pills at bottom
- Content of cards:
  - Card 1 content:
    - Image thumbnail (rounded): card-figma-automation-with-custom-scripts.png
    -  Title (bold): Figma Automation with Custom Scripts
    - Status label: Completed
    - Description paragraph: Development of plugins and scripts using Figma API that automatically generate component documentation, export design tokens to code, and sync changes with development repositories. 70% reduction in manual handoff work.
    - Tag pills at bottom: AI Implementation, SaaS UX, Design Systems, Behavioral Analytics
   - Card 2 content:
    - Image thumbnail (rounded): card-interactive-orototyping-for-mobile-apps.png
    -  Title (bold): Interactive Prototyping for Mobile Apps
    - Status label: In Progress
    - Description paragraph: Creating high-fidelity prototypes with advanced interactions and animations to simulate real user experiences on mobile devices, enabling faster feedback and iteration cycles.
    - Tag pills at bottom
   - Card 3 content:
    - Image thumbnail (rounded): card-accessibility-audit-and-improvements.png
    -  Title (bold): Accessibility Audit and Improvements
    - Status label: Planned
    - Description paragraph: Comprehensive review of existing design assets to identify accessibility barriers, followed by actionable recommendations and implementation to ensure compliance with WCAG standards.
    - Tag pills at bottom: UX Design, Mobile Apps, Prototyping, User Engagement


#### Section 4: Skills & Methodology (`#tech-stack`)

- **Label badge:** "Tech Stack" (purple pill)
- **Heading:** "Skills & Methodology"
- **Subtext:** Hybrid profile description
- **Layout:** 2-row, 3-column grid of skill category cards (6 total)
- **Skill cards:**
  - Icon image displayed at 40x40px directly (no background wrapper)
  - Category title (bold)
  - Bulleted list of skills (bullet text color: #5e5e5e)
- **Categories:**
  1. Icon (design.png) - Design & Prototyping Tools (Figma, Adobe, Framer, Principle, After Effects)
  2.  Icon (technologies.png) - Technologies & AI Implementation (Prompt Engineering, ChatGPT/Claude API, HTML/CSS/JS, React, Tailwind CSS)
  3. Icon (design-systems.png) - Design Systems & Architecture (Tokens, Component Libraries, Atomic Design, Accessibility WCAG 2.1)
  4. Icon (strategy.png) - Processes & Strategy (Agile/Scrum/Kanban, Design Thinking, JTBD, User Story Mapping)
  5. Icon (research.png) - Research & Validation (User Research, Usability Testing, A/B Testing, Analytics)
  6. Icon (soft-skills.png) - Soft Skills (Stakeholder Management & Alignment, Systems Thinking, Technical Empathy, Strategic Problem Solving, Adaptability & Continuous Learning)

#### Section 5: Why Work With Me

**Background:** Light gray rounded container
- **Heading:** "Why Work With Me?"
- **Description paragraph:** Positioning statement about approach
- **Layout:** 3-column card grid
- **Cards** (each with purple icon):
  1. Startup & Enterprise Experience (icon stard-up.png)
  2. Cross-Functional Leadership (icon cross-functional-leadership.png)
  3. Continuous Learning Mindset (icon continuous -learning-mindset.png)

#### Section 6: CTA / Contact (`#contact`)

- **Label badge:** "Get in touch" (purple pill)
- **Heading:** "Ready to Accelerate Your Product?"
- **Subtext:** Invitation to connect
- **CTA buttons** (3 side by side):
  - "Connect on LinkedIn" (purple/filled, with LinkedIn icon)
  - "Send Email" (lila/filled, with email icon)
  - "Book a Call" (outlined, with calendar icon)
- **Secondary links:** "Download Resume (PDF) (link text, with download icon)", "GitHub (link text, with github icon)"
- **Background:** Light gray rounded container

#### Section 7: Footer

- **Logo:** (image link-home.png )
- **Tagline:** "Ready to accelerate your product?"
- **Description:** Senior Product Designer specialization summary
- **Quick Links column:** Case Studies, The Lab, Tech Stack, About Me
- **Contact column:** LinkedIn, Email, Behance, Resume (PDF)
- **Copyright line:** (c) 2026 Sofia Alfaro
- **Credits line:** "Pixel-perfect, coffee-powered, and 99% user-friendly."

---

### 2. Case Studies List (`/case-studies`)

#### Section 1: Hero

- **Label badge:** "Case Studies" (lila pill)
- **Heading:** "Selected Case Studies: Solving Business Challenges Through Design."
- **Subtext:** Description of work across SaaS, B2B, and AI-driven products
- **CTAs:** Two buttons
  - "Get in touch" (dark/filled)
  - "Book a call" (outlined)

#### Section 2: Case Studies Grid

- **Layout:** 2x2 grid of case study cards
- **Card structure:** Same as Home Featured Case Studies cards (see above)
- **Cases displayed:**
  1. AI Implementation & Rapid Prototyping - "From Concept to Functional MVP in 21 Days" (Cleaning App)
  2. Design Systems & Engineering - "Scalable Architecture: The Design-to-Code Bridge" (Propelus)
  3. B2B CMS Design & Flexibility - "Empowering the End-User: The 'Chameleon' Component System" (Continuing Education)
  4. UX Audit & Conversion Rate Optimization - "Strategic Storytelling: Shifting from 'Technical' to 'Decision-Maker'" (Arkose Labs)
- Lazy loading when you have more that four cards

#### Section 3: Strategic Framework

- **Heading:** "My Strategic Framework"
- **Description paragraph:** Approach to combining data-driven audits with AI-accelerated prototyping
- **Layout:** 3-column cards
- **Cards** (each with icon):
  1. **Discovery** - Deep-dive into business goals and user pain points
  2. **Execution** - High-fidelity prototyping with design-to-code alignment
  3. **Optimization** - Iterating based on real-world data and performance metrics

#### Section 4: CTA / Contact

- Same "Ready to Accelerate Your Product?" section as Home page

#### Section 5: Footer

- Same footer component as Home page

---

### 3. Case Study Detail (`/case-studies/:slug`)

Each case study follows a templated structure with a unique color theme per case. The template structure is:

#### Section 1: Hero (Dark Background)

- **Background:** Full-width dark/colored section (color varies per case study)
  - Cleaning App: Dark navy (#02102D)
  - Propelus: Dark green (#002213)
  - Continuing Education: Dark navy/blue (#2B3A72)
  - Arkose Labs: Dark purple (#16023E)
- **Tags:** Row of lilac pill badges displaying the `tools` array (not `tags`). E.g., "Lovable", "Figma", "Claude/GPT-4"
- **Subtitle:** Category label (e.g., "AI Implementation & Rapid Prototyping")
- **Title:** Uses `detailTitle` if available, otherwise falls back to `title`. Card title and detail page title can differ (e.g., card: "From Concept to Functional MVP in 21 Days", detail: "AI-Driven Cleaning Ecosystem")
- **Role label:** Role description (e.g., "Lead Product Designer & AI Orchestrator")
- **Hero image:** Large screenshot/mockup, overlapping the dark section, 0px margin on the bottom

#### Section 2: Overview Bar

- **Layout:** Two-column metadata bar
  - **(example) Tools:** List of tools used (e.g., "Claude, Figma, ChatGPT v4, Prompt Engineering")
  - **(example) Timeline:** Project duration (e.g., "3 Weeks: Concept & Functional App")

#### Section 3: Main Content (Repeating Sections)

Each content section block is individually wrapped in light gray background (`bg-muted`) with rounded corners and padding (`rounded-2xl p-8 md:p-12 my-6`).

The main body uses a consistent pattern of titled content blocks. Each case study has 2-3 of these:

- **Heading** (e.g., "The Challenge: Velocity vs. Viability")
- **Body text** (1-2 paragraphs)
- **Supporting visual** (full-width image/screenshot, optional per section)

Specific content sections vary per case:
- **Cleaning App:** Challenge, Strategic Approach (60/40 Hybrid Workflow), Technical Deep Dive (3-column cards)
- **Propelus:** Challenge (Eliminating Design Debt), Solution (Logic-First System Architecture), Technical Implementation
- **Continuing Education:** Challenge (Breaking the Rigidity), Solution (Chameleon Component System), Key Strategic Features
- **Arkose Labs:** Challenge (High Traffic Low Intent), Diagnosis (Persona Mismatch), Tactical Redesign

#### Section 4: Business Impact

- **Background:** Light gray rounded container
- **Heading:** "Business Impact"
- **Layout:** 3-column grid of metric cards
- **Card structure:**
  - Purple/lilac background with rounded corners
  - Metric headline (bold, e.g., "60%")
  - Description text

#### Section 5: See my Work (Other Cases)

- **Label badge:** "Learn More" (purple pill)
- **Heading:** "See my work"
- **Subtext:** Intro line
- **CTA:** "View other case studies" button (black pill/primary/top-right)
- **Layout:** 3-column horizontal scroll/grid of case study cards
- **Card structure** (compact version):
  - Thumbnail image
  - Category label (purple)
  - Title
  - Tag pills
  - "View project" button (outline pill/secundary)

#### Section 6: CTA / Contact

- Same "Ready to Accelerate Your Product?" section

#### Section 7: Footer

- Same footer component

###Content for each detail case studies:

- Cleaning App:
  - Section 1: Hero (Dark Background #02102D)
    - **Tags:** Row of lila pill badges (category tags): Lovable, Figma, Claude/GPT-4, Prompt Engineering
    - **Subtitle:** AI Implementation & Rapid Prototyping
    - **Title:** Case study title (large, white text): AI-Driven Cleaning Ecosystem
    - **Role label:** Role description: Lead Product Designer & AI Orchestrator 
    - **Hero image:** Large image 0px margin on the bottom and center: cleaning-app-case-hero.png
  - Section 2: Overview Bar
    - **Layout:** Two-column metadata bar
      - Tools: Lovable, Figma, Claude/GPT-4, Prompt Engineering
      - Timeline: 3 Weeks (Concept to Functional App)
  - Section 3: Main Content (Repeating Sections)
    - background: light Gray background with rounded corners
    - **Heading**: The Challenge: Velocity vs. Viability
    - **Body text**: The objective was to validate a complex cleaning service business model by launching a functional MVP in record time. Traditional development cycles (3-6 months) were not an option. We needed a solution that wasn't just a "clickable prototype" but a live, data-driven application capable of handling real booking logic and user management.
    - **Supporting visual**: cleaning-app-case-the-chalence-image.png
    - **Heading**: The Strategic Approach: The 60/40 Hybrid Workflow
    - **Body text**: I pioneered a "Vibe Coding" methodology, acting as the bridge between generative AI and product excellence.
      - Bullet: AI-First Logic (60%): I utilized Lovable to generate the core back-end logic, database schemas, and initial front-end architecture. This allowed for near-instantaneous deployment of functional features.
      - Bullet: Human-Centric Refinement (40%): I took the raw AI output into Figma to perform "Surgery on the UX." AI often hallucinates over-complicated user flows; my role was to simplify, brand, and optimize for mobile-first constraints.
    - **Heading**: Technical Deep Dive:
      - (3-column cards):
        - Card 1: Title (Prompt Engineering for UX) text (I developed complex "Giga Prompts" to ensure the AI respected accessibility standards and logical hierarchies.)
         - Card 2: Title (Correcting AI Hallucinations) text (The initial AI-generated user flow for "Recurring Bookings" was logically flawed. I manually re-architected the logic in Figma and re-prompted the engine to ensure a 0% error rate in the live app.)
         - Card 3: Title (The 7-Day Sprint) text (We moved from a blank canvas to a verified MVP in 1 week. By week 3, the application was fully functional and ready for market testing.)
    - image: cleaning-app-case-closer-image.png
  - Section 4: Business Impact
     **Background:** Light gray rounded container
     - **Heading:** "Business Impact"
     - **Layout:** 3-column grid of metric cards
     - **Card structure:**
      - Card 1: 
        Purple/lilac background with rounded corners
        - Metric headline: 60%
        - Description text: Reduction in traditional development costs.
      - Card 2: 
        Purple/lilac background with rounded corners
        - Metric headline: Time-to-Market
        - Description text: 3 weeks vs. the industry average of 16 weeks.
      - Card 3: 
        Purple/lilac background with rounded corners
        - Metric headline: Result
        - Description text: A fully functional, scalable MVP that allowed the client to secure early-stage feedback with zero design debt.
  - Section 5 See my Work (Other Cases)
    - Same "See my work (other cases)" section
  - Section 6 CTA / Contact
    - Same "Ready to Accelerate Your Product?" section
  - Section 7 Footer
    - Same "Ready to Accelerate Your Product?" section

---

## Component System Overview

### Global / Shared Components

| Component              | Used On                        | Description |
|------------------------|--------------------------------|-------------|
| `Navbar`               | All pages                      | Fixed top bar: logo left, nav links + CTA right |
| `Footer`               | All pages                      | Logo, tagline, quick links, contact links, copyright |
| `CTASection`           | Home, Case Studies, Case Detail| "Ready to Accelerate Your Product?" with 3 action buttons |
| `SectionBadge`         | All sections                   | Purple pill label above section headings, natural casing (not uppercase). E.g., "Case Studies", "Tech Stack", "The Experimental Lab" |
| `TagPill`              | Case cards, Case detail hero   | Small rounded badges for categorization (purple-highlighted or neutral) |

### Home-Specific Components

| Component              | Description |
|------------------------|-------------|
| `HeroHome`             | Full hero with stats, CTAs, and autoplay muted YouTube video embed |
| `StatItem`             | Individual stat display (number + label) |
| `CaseStudyCard`        | Large card with image, category, title, description, metrics, tags, link |
| `LabCard`              | Card with image, title, status badge, description, tags |
| `SkillCard`            | Purple-accented card with icon, category title, bulleted skill list |
| `WhyWorkCard`          | Icon + title + description card |

### Case Studies List Components

| Component              | Description |
|------------------------|-------------|
| `HeroCaseStudies`      | Centered hero with heading, subtext, 2 CTAs |
| `CaseStudyGrid`        | 2x2 grid layout wrapper for case study cards |
| `FrameworkCard`        | Icon + title + description for strategic framework steps |

### Case Study Detail Components

| Component              | Description |
|------------------------|-------------|
| `HeroCaseDetail`       | Dark-background hero with tags, subtitle, title, role, hero image |
| `OverviewBar`          | Two-column Tools/Timeline metadata |
| `ContentSection`       | Heading + body text + optional image block |
| `TechCard`             | Small card within 3-column grids for technical details |
| `BusinessImpact`       | Light container with 3 purple metric cards |
| `MetricCard`           | Purple card with headline metric + description |
| `RelatedCases`         | "See our work" section with 3-column compact case cards |
| `CompactCaseCard`      | Smaller case card with image, category, title, tags, link |

---

## Design Patterns & Conventions

### Color Palette

| Token             | Value / Usage                               |
|-------------------|---------------------------------------------|
| Primary accent    | Purple/lilac (~#D6AFFF / ~#9810FA)     |
| Text primary      | Near-black (~#171717)                     |
| Text secondary    | Medium gray (~#99A1AF)                    |
| Background main   | White (#FFFFFF)                            |
| Background muted  | Light gray (~#F8F8F8 / ~#F2F2F2)       |
| Case hero (varies)| Dark navy, dark green, dark purple per case  |
| Metric cards      | Lilac/purple fill (~#D6AFFF)              |

### Typography Patterns

| Element            | Style                                       |
|--------------------|---------------------------------------------|
| Section badge      | Small, medium weight, inside purple pill     |
| Section heading    | Large/XL, bold, near-black                   |
| Section subtext    | Medium, regular weight, gray                 |
| Card title         | Medium-large, bold/semibold, near-black      |
| Card category      | Small, purple, may be underlined             |
| Body text          | Regular size, regular weight, dark gray      |
| Stats numbers      | Large, bold                                  |
| CTA buttons        | Medium, medium weight                        |

### Layout Patterns

- **Max content width:** ~1200px centered
- **Section spacing:** Generous vertical padding between sections (~80-120px)
- **Grid system:** Predominantly 2-column and 3-column grids
- **Card corners:** Rounded (border-radius ~12-16px)
- **Image corners:** Rounded (~12-16px), some with subtle shadows
- **Section backgrounds:** Alternating white and light gray to create visual rhythm

### Interaction Patterns

- **Section badges** appear consistently above every section heading as wayfinding elements. Natural casing (not uppercase).
- **CTA hierarchy:** Primary = black filled, Secondary = outlined. Exception: CTA/Contact section uses purple filled (LinkedIn), lilac filled (Email), outlined (Book a Call)
- **Card links:** "View this Project" / "View project" as full-width outlined button at card bottom
- **Navigation CTA:** "Get in touch" is the persistent primary action in the navbar
- **Contact section** repeats on every page as the final content before footer
- **Related cases** appear at the bottom of every case detail page to encourage continued browsing

### Responsive Assumptions

- Desktop-first layout (screenshots show desktop viewport)
- 2-column grids likely collapse to single column on mobile
- 3-column grids likely collapse to single or stacked layout
- Hero video maintains 16:9 aspect ratio on all viewports
- Navbar collapses to hamburger menu on mobile

### Naming Conventions (Suggested for Code)

- Pages: `HomePage`, `CaseStudiesPage`, `CaseStudyDetailPage`
- Layout: `Navbar`, `Footer`, `PageLayout`
- Shared: `SectionBadge`, `CTASection`, `TagPill`
- Home: `HeroHome`, `FeaturedCaseStudies`, `ExperimentalLab`, `SkillsMethodology`, `WhyWorkWithMe`
- Case Studies: `HeroCaseStudies`, `CaseStudyGrid`, `StrategicFramework`
- Case Detail: `HeroCaseDetail`, `OverviewBar`, `ContentSection`, `BusinessImpact`, `RelatedCases`

---

## Image Asset Mapping

### Case Study Images

| Case Study             | Card Thumbnail                              | Hero Image                                       | Challenge Image                                          | Closer Image                                        |
|------------------------|---------------------------------------------|--------------------------------------------------|----------------------------------------------------------|-----------------------------------------------------|
| cleaning-app           | card-ai-implementation-rapid-prototyping.png | cleaning-app-case-hero.png                       | cleaning-app-case-the-chalence-image.png                 | cleaning-app-case-closer-image.png                  |
| propelus               | card-design-systems-engineering.png          | propelus-case-hero.png                           | propelus-case-the-chalence-image.png                     | propelus-case-closer-image.png                      |
| continuing-education   | card-b2b-cms-design-flexibility.png          | continuing-education-company-case-hero.png       | continuing-education-company-case-the-chalence-image.png | continuing-education-company-case-closer-image.png  |
| arkose-labs            | card-ux-audit-conversion-rate-optimization.png | arkose-labs-case-hero.png                      | arkose-labs-case-the-chalence-image.png                  | arkose-labs-case-closer-image.png                   |

### Experiment Card Images

| Experiment Card                          | Image File                                                              |
|------------------------------------------|-------------------------------------------------------------------------|
| Figma Automation with Custom Scripts     | card-figma-automation-with-custom-scripts.png                           |
| Interactive Prototyping for Mobile Apps  | card-interactive-orototyping-for-mobile-apps.png                        |
| Accessibility Audit and Improvements     | images/the-experimental-lab/card-accessibility-audit-and-improvements.png |

### Icon Assets

| Component         | Icon Files                                                                                  |
|-------------------|---------------------------------------------------------------------------------------------|
| Skills Section    | design.png, technologies.png, design-systems.png, strategy.png, research.png, soft-skills.png |
| Why Work With Me  | stard-up.png, icons/cross-functional-leadership.png, continuous-learning-mindset.png         |
| CTA Section       | linkedin.png, email.png, schedule-a-call.png, download-pdf.png, github.png                  |
| Logo (Nav/Footer) | link-home.png                                                                                |

---

## Scroll-Spy Behavior

Navbar highlights the active section link in purple as the user scrolls through the home page. Uses `IntersectionObserver` via a custom `useScrollSpy` hook.

**Section IDs tracked:** `projects`, `lab`, `tech-stack`, `about`, `contact`

---

## Data Model (for Dynamic Content)

### Case Study

```typescript
interface CaseStudy {
  slug: string;
  category: string;           // e.g., "AI Implementation & Rapid Prototyping"
  subtitle: string;           // Category/area label
  title: string;              // Card title
  detailTitle?: string;       // Optional: detail page hero title (if different from card title)
  description: string;        // Card-level summary
  role: string;               // e.g., "Lead Product Designer & AI Orchestrator"
  heroImage: string;          // URL for hero image (e.g., "/cleaning-app-case-hero.png")
  thumbnailImage: string;     // URL for card thumbnail (e.g., "/card-ai-implementation-rapid-prototyping.png")
  heroColor: string;          // Hero background color (e.g., "#02102D")
  tools: string[];            // e.g., ["Lovable", "Figma", "Claude/GPT-4"] — also displayed as hero tags
  timeline: string;           // e.g., "3 Weeks (Concept to Functional App)"
  metrics: string;            // Summary metrics line for cards
  tags: Tag[];                // Used on cards only (not on detail hero)
  contentSections: ContentSection[];
  businessImpact: MetricCard[];
  relatedCaseSlugs: string[];
}

interface ContentSection {
  heading: string;
  body: string;               // Plain text with optional \n bullet formatting
  image?: string;             // Optional visual (e.g., challenge or closer image)
  subCards?: TechCard[];      // Optional 3-column detail cards
}

interface MetricCard {
  headline: string;           // e.g., "60%" or "Time-to-Market" or "Result"
  description: string;        // e.g., "Reduction in traditional development costs."
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
interface Experiment {
  title: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  description: string;
  image: string;
  tags: string[];             // Simple string array (not Tag objects)
}
```

### Skill Category

```typescript
interface SkillCategory {
  icon: string;               // Key mapping to icon image file (e.g., "design" -> "/design.png")
  title: string;
  skills: string[];
}
```
