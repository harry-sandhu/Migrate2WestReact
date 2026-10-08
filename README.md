# Migrate2West

A full-stack web application for an immigration, visa, and travel-services consultancy ("migrate2west"). It serves both a public marketing/booking site and an admin back office for managing bookings, payments, content, and users.

## What This App Does

Based on the routes, models, and pages in this repository, the platform covers:

- **Passport services** — fresh, renewal, lost, and damaged passport applications
- **Visa services** — visa listings/details, applications, and slot booking (`Visaslot` page, `slotRoutes`)
- **Travel services** — air ticket booking, hotel confirmation, travel insurance, tour packages
- **Immigration services** — permanent residence (Canada/Australia), FRRO registration, OCI (new/renewal)
- **Career & education** — job assistance, career counseling, study-abroad guidance, exam coaching (IELTS, PTE, CELPIP, GRE/GMAT/SAT, OET, French, German)
- **Payments** — order creation and manual payment flows, integrated with the Cashfree payment gateway (`cashfree.js` SDK loaded in the frontend)
- **Content** — a blog (public + admin-managed) and user testimonials
- **Contact/lead capture** — a contact form with admin call-tracking
- **Accounts** — user registration/login/password reset, with an admin dashboard for managing blogs, testimonials, payments, slots, contacts, users, and service pricing data

## Tech Stack

**Backend** (`Backend/`)
- Node.js + Express (TypeScript)
- MongoDB with Mongoose
- JWT-based authentication, bcrypt password hashing
- Google reCAPTCHA v3 verification endpoint
- Deployed to Railway (see `railway`-related commit history) — also contains a `vercel.json`

**Frontend** (`Frontend/`)
- React 19 + Vite + TypeScript
- React Router v7
- Tailwind CSS v4
- Axios for API calls
- Recharts (admin dashboards), jsPDF (document generation), Lottie animations
- Cashfree JS SDK for checkout

## Project Structure

```
Migrate2WestReact/
├── Backend/
│   └── src/
│       ├── app.ts            # Express app, middleware, route mounting
│       ├── server.ts         # Entry point, DB connection, server start
│       ├── config/           # DB and app configuration
│       ├── controllers/      # Route handlers (auth, blog, contact, payment, slots, etc.)
│       ├── middleware/       # Auth middleware (protect / adminOnly)
│       ├── models/           # Mongoose schemas (User, Blog, Contact, Payment, ServiceData, SlotBooking, Testimonial)
│       └── routes/           # Express routers per resource
└── Frontend/
    └── src/
        ├── pages/            # Public pages (service pages, apply flows, blog, visa, passport, etc.)
        ├── pages/admin/       # Admin dashboard pages
        ├── pages/auth/        # Login/Register/Forgot-password
        ├── components/       # Shared UI (layout, ProtectedRoute, etc.)
        └── api/               # API client code
```

## Running Locally

### Backend

```bash
cd Backend
npm install
# create a .env with MONGO_URI, PORT, JWT secret, Cashfree keys, reCAPTCHA keys, etc.
npm run dev      # ts-node-dev, auto-reload
# or
npm run build && npm start
```

### Frontend

```bash
cd Frontend
npm install
npm run dev      # Vite dev server
```

The frontend expects the backend API URL to be configured (see `Frontend/.env` / Vite env variables and `Frontend/src/api`).

## Deployment

The backend is deployed on **Railway** (commit history references Railway-specific fixes for Node version, cold starts, and the Mongoose connection). A `vercel.json` is also present in both `Backend/` and `Frontend/`, suggesting Vercel has been used or considered as an alternative/additional deployment target for the frontend.

## Notes

- No automated test suite is currently present in this repository.
- Several routes (e.g. slot booking, manual payments) are public by design to support the booking/checkout flow; admin-only routes are protected via JWT + role middleware (`protect`, `adminOnly`).
