# Loan Manager - Frontend

![App Screenshot](/screenshots/frontend.png)

React-based frontend for the Loan Manager application, built with Vite.

## Features

- User loan application form with validation
- Admin dashboard with loan statistics
- Loan approval/rejection interface
- Responsive design for all devices

## Technologies

- React 18
- Vite
- Axios
- CSS Modules
- React Router

## Installation

### Prerequisites
- Node.js v16+
- npm v8+


##Install dependencies:
npm install

##Configure environment:
cp .env.example .env

##Start development server:
npm run dev

#Project Structure
loan-manager-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ApplicationForm.jsx
│   │   ├── Dashboard.jsx
│   │   ├── LoanApprover.jsx
│   │   ├── AdminPanel.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Apply.jsx
│   │   ├── Approver.jsx
│   │   ├── Admin.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md


##Available Scripts
npm run dev: Start development server

npm run build: Create production build

npm run preview: Preview production build locally

##Deployment (Vercel)
Push code to GitHub

Create new project in Vercel

Import your repository
