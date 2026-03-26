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

| Position | Item            | Link Target          |
|----------|-----------------|----------------------|
| Left     | Logo (S.)       | `/` (Home)           |
| Right    | Portfolio       | `/#projects` (anchor)|
| Right    | Case Studies    | `/case-studies`      |
| Right    | The Lab         | `/#lab` (anchor)     |
| Right    | About Me        | `/#about` (anchor)   |
| Right    | **Get in touch** (CTA button) | `/#contact` or modal |

### Footer Navigation

| Column          | Links                                      |
|-----------------|---------------------------------------------|
| Quick Links     | Case Studies, The Lab, Tech Stack, About Me |
| Contact         | LinkedIn, Email, Behance, Resume (PDF)      |
| Bottom left     | (c) 2026 Sofia Alfaro. All rights reserved. |
| Bottom right    | "Designed and developed with AI, automation, and lots of coffee" |

---

## Page-by-Page Breakdown

---

### 1. Home Page (`/`)

The homepage is a long-scroll single page with distinct sections stacked vertically. It serves as the primary landing experience, showcasing expertise, work, skills, and contact.

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
  - "View Case Studies" (outlined/secondary)
  - "Let's Talk" (outlined/secondary)
- **Visual collage:** Masonry-style grid of project screenshots, phone mockups, video thumbnails, and UI screens filling the lower portion of the hero

#### Section 2: Featured Case Studies (`#projects`)

- **Label badge:** "Case Studies" (purple pill)
- **Heading:** "High-Impact Projects"
- **Subtext:** Description of strategic initiatives
- **CTA link:** "View more projects" (text link)
- **Layout:** 2-column grid of case study cards (4 cards total)
- **Card structure** (each card):
  - Large thumbnail image (rounded corners)
  - Category label in purple (e.g., "AI Implementation & Rapid Prototyping")
  - Title (bold, black)
  - Description paragraph
  - Metrics line (e.g., "MVP in 1 week | 40% Workflow Efficiency | 100% Functional Logic")
  - Tag pills (e.g., "AI Strategy", "Claude", "Figma", "Product Design", "User Testing")
  - "View this Project" link with arrow icon
  - Subtle separator line between metadata and link

#### Section 3: The Experimental Lab (`#lab`)

- **Label badge:** "The Experimental Lab" (purple pill)
- **Heading:** "Technical Experimentation & Continuous Innovation"
- **Subtext:** Description about experimenting with AI and automation
- **CTA:** "Book a Call" button (outlined, top-right)
- **Layout:** 3-column card grid
- **Card structure** (each card):
  - Image thumbnail (rounded)
  - Title (bold)
  - Status label (e.g., "Completed", "In Progress", "Planned")
  - Description paragraph
  - Tag pills at bottom

#### Section 4: Skills & Methodology (`#tech-stack`)

- **Label badge:** "Tech Stack" (purple pill)
- **Heading:** "Skills & Methodology"
- **Subtext:** Hybrid profile description
- **Layout:** 2-row, 3-column grid of skill category cards (6 total)
- **Skill cards:**
  - Purple icon (top-left circle)
  - Category title (bold)
  - Bulleted list of skills
- **Categories:**
  1. Design & Prototyping Tools (Figma, Adobe, Framer, Principle, After Effects)
  2. Technologies & AI Implementation (Prompt Engineering, ChatGPT/Claude API, HTML/CSS/JS, React, Tailwind CSS)
  3. Design Systems & Architecture (Tokens, Component Libraries, Atomic Design, Accessibility WCAG 2.1)
  4. Processes & Strategy (Agile/Scrum/Kanban, Design Thinking, JTBD, User Story Mapping)
  5. Research & Validation (User Research, Usability Testing, A/B Testing, Analytics)
  6. Soft Skills (Team Work, Emotional Intelligence, Project Management, Creativity)

#### Section 5: Why Work With Me

- **Heading:** "Why Work With Me?"
- **Description paragraph:** Positioning statement about approach
- **Layout:** 3-column card grid
- **Cards** (each with purple icon):
  1. Startup & Enterprise Experience
  2. Cross-Functional Leadership
  3. Continuous Learning Mindset

#### Section 6: CTA / Contact (`#contact`)

- **Label badge:** "Get in touch" (purple pill)
- **Heading:** "Ready to Accelerate Your Product?"
- **Subtext:** Invitation to connect
- **CTA buttons** (3 side by side):
  - "Connect on LinkedIn" (purple/filled, with LinkedIn icon)
  - "Send Email" (purple/filled, with email icon)
  - "Book a Call" (outlined, with calendar icon)
- **Secondary links:** "Download Resume (PDF)", "GitHub"
- **Background:** Light gray rounded container

#### Section 7: Footer

- **Logo:** S. logo (dark pill shape)
- **Tagline:** "Ready to accelerate your product?"
- **Description:** Senior Product Designer specialization summary
- **Quick Links column:** Case Studies, The Lab, Tech Stack, About Me
- **Contact column:** LinkedIn, Email, Behance, Resume (PDF)
- **Copyright line:** (c) 2026 Sofia Alfaro
- **Credits line:** "Designed and developed with AI, automation, and lots of coffee"

---

### 2. Case Studies List (`/case-studies`)

#### Section 1: Hero

- **Label badge:** "Case Studies" (purple pill)
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
  - Cleaning App: Dark navy
  - Propelus: Dark green
  - Continuing Education: Dark navy/blue
  - Arkose Labs: Dark purple
- **Tags:** Row of purple pill badges (category tags)
- **Subtitle:** Category label (e.g., "AI Implementation & Rapid Prototyping")
- **Title:** Case study title (large, white text)
- **Role label:** Role description (e.g., "Lead Product Designer & AI Orchestrator")
- **Hero image:** Large screenshot/mockup with rounded corners, overlapping the dark section

#### Section 2: Overview Bar

- **Layout:** Two-column metadata bar
  - **Tools:** List of tools used (e.g., "Claude, Figma, ChatGPT v4, Prompt Engineering")
  - **Timeline:** Project duration (e.g., "3 Weeks: Concept & Functional App")

#### Section 3: Main Content (Repeating Sections)

The main body uses a consistent pattern of titled content blocks. Each case study has 2-3 of these:

- **Heading** (e.g., "The Challenge: Velocity vs. Viability")
- **Body text** (1-2 paragraphs)
- **Supporting visual** (full-width image/screenshot placeholder)

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

#### Section 5: See Our Work (Related Cases)

- **Label badge:** "Other projects" (purple pill)
- **Heading:** "See our work"
- **Subtext:** Intro line
- **CTA:** "View all" button (top-right)
- **Layout:** 3-column horizontal scroll/grid of case study cards
- **Card structure** (compact version):
  - Thumbnail image
  - Category label (purple)
  - Title
  - Tag pills
  - "View project" link with arrow

#### Section 6: CTA / Contact

- Same "Ready to Accelerate Your Product?" section

#### Section 7: Footer

- Same footer component

---

## Component System Overview

### Global / Shared Components

| Component              | Used On                        | Description |
|------------------------|--------------------------------|-------------|
| `Navbar`               | All pages                      | Fixed top bar: logo left, nav links + CTA right |
| `Footer`               | All pages                      | Logo, tagline, quick links, contact links, copyright |
| `CTASection`           | Home, Case Studies, Case Detail| "Ready to Accelerate Your Product?" with 3 action buttons |
| `SectionBadge`         | All sections                   | Purple pill label above section headings (e.g., "Case Studies", "Tech Stack") |
| `TagPill`              | Case cards, Case detail hero   | Small rounded badges for categorization (purple-highlighted or neutral) |

### Home-Specific Components

| Component              | Description |
|------------------------|-------------|
| `HeroHome`             | Full hero with stats, CTAs, and visual collage |
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

- **Section badges** appear consistently above every section heading as wayfinding elements
- **CTA hierarchy:** Primary = purple filled, Secondary = dark filled, Tertiary = outlined
- **Card links:** "View this Project" / "View project" with arrow icon at card bottom
- **Navigation CTA:** "Get in touch" is the persistent primary action in the navbar
- **Contact section** repeats on every page as the final content before footer
- **Related cases** appear at the bottom of every case detail page to encourage continued browsing

### Responsive Assumptions

- Desktop-first layout (screenshots show desktop viewport)
- 2-column grids likely collapse to single column on mobile
- 3-column grids likely collapse to single or stacked layout
- Hero collage likely reorganizes or hides some items on mobile
- Navbar likely collapses to hamburger menu on mobile

### Naming Conventions (Suggested for Code)

- Pages: `HomePage`, `CaseStudiesPage`, `CaseStudyDetailPage`
- Layout: `Navbar`, `Footer`, `PageLayout`
- Shared: `SectionBadge`, `CTASection`, `TagPill`
- Home: `HeroHome`, `FeaturedCaseStudies`, `ExperimentalLab`, `SkillsMethodology`, `WhyWorkWithMe`
- Case Studies: `HeroCaseStudies`, `CaseStudyGrid`, `StrategicFramework`
- Case Detail: `HeroCaseDetail`, `OverviewBar`, `ContentSection`, `BusinessImpact`, `RelatedCases`
