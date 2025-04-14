# Order Listing Application

A frontend application built with React.js and Tailwind CSS v4.1.3, featuring a login form and an order listing page with pagination, filters, and search functionality.

## Tech Stack
- **Framework**: React.js (18.3.1)
- **Styling**: Tailwind CSS (4.1.3)
- **Routing**: React Router (6.26.2)
- **Build Tool**: Vite (5.4.8)
- **Mock Backend**: Static JSON data
- **Environment**: Node.js (18+ recommended)

## Features
- **Login Form**: Mock authentication (username: `admin`, password: `password`).
- **Order Listing**:
  - Displays orders in a responsive table.
  - Supports pagination (10 orders per page).
  - Filters by status (All, Pending, Shipped, Delivered).
  - Search by customer name or order ID.
- **Responsive UI**: Mobile-friendly design with Tailwind CSS.
- **Reusable Components**: Button, Input, Select, and Table components.

## Setup & Build Steps

### Prerequisites
- Node.js (18 or higher)
- npm (9 or higher)

### Installation
1. **Clone the repository** (or create the project structure):
   ```bash
   git clone <repository-url>
   cd order-app