Loan Manager - Frontend

React-based frontend for the Loan Manager application, built with Vite.

Features

- User loan application form with validation
- Admin dashboard with loan statistics
- Loan approval/rejection interface
- Responsive design for all devices

Technologies

- React 18
- Vite
- Axios
- CSS Modules
- React Router

Installation

Prerequisites
- Node.js v16+
- npm v8+

Install dependencies:
 npm install

Configure environment:
 cp .env.example .env

Start development server:
 npm run dev

Project Structure
frontend/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable components
│   │   ├── ApplicationForm.jsx
│   │   ├── Dashboard.jsx
│   │   └── LoanStatusViewer.jsx
│   ├── pages/         # Page components
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
├── vite.config.js     # Build configuration
└── package.json


Available Scripts
 npm run dev: Start development server

npm run build: Create production build

npm run preview: Preview production build locally

Deployment (Vercel)
 Push code to GitHub

Create new project in Vercel

Import your repository
