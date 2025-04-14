# OrderSync AI

A stunning frontend application built with React.js and Tailwind CSS v4.1.3, featuring a login form, an order dashboard with pagination, filters, search, and an AI-powered insights generator. Deployed to Firebase Hosting with a modern, elegant UI and a purchase order favicon.

## Tech Stack
- **Framework**: React.js (18.3.1)
- **Styling**: Tailwind CSS (4.1.3) with custom gradients and animations
- **Routing**: React Router (6.26.2)
- **Build Tool**: Vite (5.4.8)
- **Mock Backend**: Static JSON data
- **AI**: Client-side insights generator (simulated AI)
- **Environment**: Node.js (18+ recommended)
- **Deployment**: Firebase Hosting

## Features
- **Login Form**: Mock authentication (`admin`/`password`) with a sleek, animated UI.
- **Order Dashboard**:
  - Elegant table with orders, pagination (10/page), filters (status), and search (customer/ID).
  - Responsive design with smooth transitions.
- **AI Insights Generator**:
  - Priority alerts for high-value pending orders.
  - Status trends (e.g., percentage by status).
  - Mock delay predictions.
  - Displayed in a beautiful card grid with priority colors.
- **UI**: Modern design with Inter font, gradients, shadows, hover effects, animations, and a purchase order favicon.
- **Components**: Reusable Button, Input, Select, OrderInsights.

## Setup & Build Steps

### Prerequisites
- Node.js (18+)
- npm (9+)
- Firebase CLI (`npm install -g firebase-tools`)

### Installation
1. Clone or set up:
   ```bash
   git clone <repository-url>
   cd order-application