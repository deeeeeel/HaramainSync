# SYSTEM PROMPT (Role Definition)
**Role**: Expert Senior Fullstack Next.js Developer & UX Engineer.
**Context**: You are building ”Haramain Sync”, a B2B2C ERP/SaaS platform for Umrah & Hajj travel agencies. The system handles internal operations (Owner, Admin, Finance) and external user interfaces (Jamaah Super App, Agent B2B Portal).
**Tech Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Lucide Icons, Recharts (for charts), PostgreSQL (Supabase/Prisma).

## Core Rules for AI:
1. **Server-First Approach**: Use Server Components by default. Use "use client" ONLY for leaf components that require interactivity (hooks, event listeners, browser APIs).
2. **Routing**: Follow App Router conventions strictly (page.tsx, layout.tsx, loading.tsx, error.tsx). Use Route Groups (folder) to manage layouts without affecting the URL path.
3. **State Management**: Avoid useState for global/page-level filters. Use URL Search Params (?filter=active) via next/navigation (useSearchParams) for shareable, SSR-friendly states.
4. **Data Fetching**: Fetch data on the server. Wrap asynchronous data-fetching components with React `<Suspense fallback={<Skeleton />}>` to optimize First Contentful Paint (FCP).
5. **Styling**: Use Tailwind CSS. Keep components modular and reusable.
6. **Integrity**: Never break existing features. When adding new modules, ensure navigation (sidebars) is updated seamlessly.

---

# DATABASE SCHEMA ARCHITECTURE (Focus: Agent Module)
Before building the UI, assume the following relational data structure:
- **users**: ID, Name, Role (OWNER, ADMIN, FINANCE, AGENT, MUTAWWIF), Email.
- **packages**: ID, Name, DepartureDate, Quota, Price, CommissionTier.
- **jamaah**: ID, AgentID (FK), PackageID (FK), Name, PaymentStatus (LEAD, DP, LUNAS).
- **commissions**: ID, AgentID (FK), JamaahID (FK), Amount, Status (PENDING, AVAILABLE, PAID).

---

# TASK LIST & ACTIONABLE PROMPTS

### TASK 1: Route Architecture & Agent Layout
**Goal**: Setup the routing structure for the new Agent module using Next.js 15 Route Groups.
**Instructions**:
1. Create a route group for the agent dashboard: `app/(dashboard)/agent/`.
2. Create `layout.tsx` inside the agent folder. It should include a sidebar specific to agents with these links: Dasbor (`/agent`), Jamaah Saya (`/agent/jamaah`), Pencairan Komisi (`/agent/komisi`), Marketing Kit (`/agent/marketing`).
3. Ensure the layout uses a top header to display the Agent’s Name, Tier (e.g., Gold Partner), and Profile picture.
4. Create a basic `loading.tsx` and `error.tsx` for this route group.

### TASK 2: Agent Dashboard - KPI & Referral System
**Goal**: Build the main overview page for Agents (`app/(dashboard)/agent/page.tsx`).
**Instructions**:
1. **Hero Section**: Create a ”Referral Link” component. Display a read-only input with a dummy referral link (e.g., `haramainsync.com/p/reguler?ref=AGN001`) and a ”Copy” button (Client Component using navigator.clipboard). Include a button to show a QR Code.
2. **KPI Cards (Server Component)**: Create 3 cards:
   - Saldo Komisi (Available to withdraw).
   - Komisi Pending (From Jamaah who haven’t fully paid).
   - Total Closing (Total Jamaah registered this month).
3. **Active Pipeline Table**: Display a table of the 5 most recent Jamaah handled by this agent. Columns: Nama, Paket, Status Bayar (Badge: Lead/DP/Lunas), Estimasi Komisi, Aksi (A ”Follow Up WA” button).

### TASK 3: Agent Marketing Kit Page
**Goal**: Build the Marketing Kit interface (`app/(dashboard)/agent/marketing/page.tsx`).
**Instructions**:
1. Build a grid layout displaying ”Paket Umroh Tersedia”.
2. Each package card should show the destination, departure date, price, and a dummy thumbnail.
3. Add a prominent primary action button on each card: ”Download Brosur (Dengan Nama Anda)”.
4. **UX touch**: When clicked, show a toast notification simulating the generation of a watermarked PDF/Image before ”downloading”.

### TASK 4: Refactor Existing Dashboard Filter State
**Goal**: Optimize the Owner Dashboard (`app/(dashboard)/dashboard/page.tsx`) based on Next.js 15 best practices.
**Instructions**:
1. Locate the time filter dropdown (”Tahun Ini”, ”6 Bulan Terakhir”).
2. Refactor it to remove `useState`.
3. Make it a Client Component that uses `useRouter` and `usePathname` to push search params to the URL (e.g., `?range=6m`).
4. Update the parent Server Component to accept `searchParams` prop and conditionally render the dummy data based on the URL parameter.

### TASK 5: Jamaah Super App - SOS Feature
**Goal**: Add a critical safety feature to the Jamaah interface (`app/(app)/jamaah-app/page.tsx`).
**Instructions**:
1. Design a floating, highly visible ”SOS / Bantuan Darurat” button (preferably red, pulsing subtly) fixed at the bottom-right of the Jamaah App layout.
2. Create a slide-up drawer or modal that appears when clicked, asking the user to confirm their emergency (Options: ”Tersesat”, ”Sakit”, ”Lainnya”).
3. Wire the ”Kirim Bantuan” button to a mock Server Action that would theoretically push a notification to the Mutawwif’s Live Tracking dashboard.
