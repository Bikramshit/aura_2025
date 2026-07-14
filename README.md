# AURA 2025 - Event Management & Project Voting Platform

AURA 2025 is a modern, high-performance web application designed to manage project synopsis submissions, registrations, and live voting for the AURA symposium/event. Built with Next.js 15, Tailwind CSS, MongoDB, Prisma, NextAuth, and Cloudinary, it provides an intuitive user interface for participants, guests, and system administrators.

---

## 🚀 Features

### 👤 User & Admin Authentication
- Secure login and administration portal powered by **NextAuth.js**.
- Role-based dashboard access for verifying registrations and selection processes.

### 📝 Synopsis Submission & Team Registration
- **Multi-member Registrations**: Allows groups to register together by entering details (name, email, WhatsApp, roll number, department) for all members.
- **Document upload**: Integrated file uploads (transaction receipts, student IDs, project drafts) hosted on **Cloudinary**.
- **Payment Verification**: Enables tracking of payment transaction IDs and verification of transaction proofs by administrators.

### 🗳️ Secure Voting System
- Abstract/synopsis voting mechanism for attendees and reviewers.
- **Anti-spam & Security**: Uses unique single-use voting codes (`VotingCode`) generated in the database to ensure fair, one-vote-per-code enforcement.

### 🏆 Interactive Landing Page
- Highlights the event schedule, event day details, selected teams, gallery glimpses of previous years, rewards, and winners.
- Dynamic navigation with smooth scrolling.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), React 18, Tailwind CSS, Radix UI primitives, Lucide Icons, Framer Motion (animations).
- **Form Management**: React Hook Form, Resolvers, Zod.
- **Database & ORM**: MongoDB, Prisma ORM.
- **Media Storage**: Cloudinary, Next-Cloudinary.
- **Authentication**: NextAuth.js, JWT.
- **API Routing**: Next.js API Routes, Next-connect.
- **Mailing**: Nodemailer.

---

## ⚙️ Project Setup

### Prerequisites

- Node.js (v18.x or v20.x recommended)
- MongoDB Database Instance (Atlas or Local)
- Cloudinary Account (for uploads)
- Gmail account with App Password (for mail forwarding)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bikramshit/aura_2025.git
   cd aura_2025
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory. You can copy the template from [.env.example](.env.example):
   ```bash
   cp .env.example .env
   ```
   Open `.env` and fill in your connection secrets, Cloudinary credentials, and mail configuration.

4. **Initialize Database Client**:
   Generate the Prisma client:
   ```bash
   npx prisma generate
   ```

5. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

6. **Production Build**:
   To build the production-ready application:
   ```bash
   npm run build
   npm run start
   ```

---

## 📂 Project Structure

- `app/` - Next.js App Router pages, components, and layout files.
  - `(pages)/` - Pages representing distinct routes (dashboard, voting, settings, registers, etc.).
  - `api/` - Next.js API Route handlers for backend database operations and uploads.
  - `components/` - Global and page-specific reusable components.
- `prisma/` - Prisma schema definitions and database client instance.
- `public/` - Static assets (images, icons, etc.).
- `utils/` - Global utility and helper functions.

---

## ⚠️ Security Notice

> [!WARNING]
> If you have accidentally committed your `.env` file with active credentials in the past:
> 1. Ensure you run a history purge (e.g., using `git-filter-repo` and force pushing).
> 2. **Always rotate your secrets immediately** (generate a new database password, new Cloudinary API secrets, new NextAuth secrets, and new Gmail app passwords). Do not continue to use the compromised credentials in production.
