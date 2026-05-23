# 🛒 ShopAdmin — Role-Based E-Commerce Platform

> A full-stack e-commerce application with **Admin**, **Seller**, and **Customer** roles, built with React, Node.js, Firebase Auth, MongoDB, and Cloudinary.

---

## Tech Stack

**Frontend**

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

**Backend**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express_5-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

---

## Introduction

ShopAdmin is a production-ready, role-based e-commerce platform where **Admins** manage the entire platform, **Sellers** list and manage their products, and **Customers** browse, purchase, and track orders — all backed by a secure, scalable REST API.

- ✅ Role-Based Access Control — Admin, Seller, Customer
- ✅ Firebase Authentication — Email/Password + Google OAuth
- ✅ JWT-Protected APIs — Stateless, cookie-based sessions
- ✅ Cloudinary Image Uploads — Optimized media delivery
- ✅ MongoDB + Mongoose — Flexible, schema-driven data modeling
- ✅ Fully Responsive — Tailwind CSS mobile-first design

---

## Features

### 🔐 Authentication & Authorization
- Firebase Auth with Email/Password and Google OAuth
- JWT tokens issued on login, stored in HTTP-only cookies
- Role-based route guards on both frontend and backend
- Password hashing with bcrypt
- Input validation with the Validator library

### 🛠️ Admin Panel
- Platform-wide dashboard with sales, user, and order analytics
- Manage all users — promote, demote, or remove accounts
- Full control over all products and categories
- Order status management across all sellers

### 🏪 Seller Dashboard
- Create and manage a seller profile
- Add, edit, and delete own product listings
- Upload product images directly to Cloudinary via Multer
- Track and view orders for their products

### 🛍️ Customer Storefront
- Browse and search products with filters
- Shopping cart with quantity management
- Order placement and order history
- Profile and account management

---

## Project Structure

```
shopAdmin/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/        # Navbar, Footer, Loader
│   │   │   ├── admin/
│   │   │   ├── seller/
│   │   │   └── customer/
│   │   ├── context/           # Auth, Cart context
│   │   ├── hooks/             # Custom React hooks
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   ├── seller/
│   │   │   ├── customer/
│   │   │   └── auth/
│   │   ├── routes/            # Protected route wrappers
│   │   ├── services/          # Axios API functions
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── backend/
│   ├── config/                # DB & Cloudinary setup
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── roleMiddleware.js
│   │   └── uploadMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Category.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   └── adminRoutes.js
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## Quick Start

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js v18+](https://nodejs.org/)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- A [Firebase](https://firebase.google.com/) project
- A [Cloudinary](https://cloudinary.com/) account

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/shopAdmin.git
cd shopAdmin
```

**2. Backend setup**

```bash
cd backend
npm install
cp .env.example .env   # Fill in your credentials
npm run dev            # Runs on http://localhost:5000
```

**3. Frontend setup**

```bash
cd ../frontend
npm install
cp .env.example .env   # Fill in your credentials
npm run dev            # Runs on http://localhost:5173
```

---

## Environment Variables

> ⚠️ Never commit `.env` files. Both are included in `.gitignore`.

### `backend/.env`

```env
PORT=5000
NODE_ENV=development

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

CLIENT_URL=http://localhost:5173
```

### `frontend/.env`

```env
VITE_API_BASE_URL=http://localhost:5000/api

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## Roles & Permissions

| Feature | Customer | Seller | Admin |
|---|:---:|:---:|:---:|
| Browse Products | ✅ | ✅ | ✅ |
| Place Orders | ✅ | ✅ | ✅ |
| Manage Own Orders | ✅ | ✅ | ✅ |
| Add / Edit Products | ❌ | ✅ own | ✅ all |
| Delete Products | ❌ | ✅ own | ✅ all |
| Seller Dashboard | ❌ | ✅ | ✅ |
| Manage All Users | ❌ | ❌ | ✅ |
| Manage All Orders | ❌ | ❌ | ✅ |
| Platform Analytics | ❌ | ❌ | ✅ |

---

## API Overview

All routes are prefixed with `/api`.

### Auth — `/api/auth`
| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/register` | Public | Register a new user |
| POST | `/login` | Public | Login, receive JWT cookie |
| POST | `/logout` | Auth | Logout, clear cookie |
| GET | `/me` | Auth | Get current user |

### Products — `/api/products`
| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/` | Public | List all products |
| GET | `/:id` | Public | Get single product |
| POST | `/` | Seller, Admin | Create product |
| PUT | `/:id` | Seller (own), Admin | Update product |
| DELETE | `/:id` | Seller (own), Admin | Delete product |

### Orders — `/api/orders`
| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/` | Customer | Place an order |
| GET | `/my-orders` | Auth | Get own orders |
| GET | `/` | Admin | Get all orders |
| PUT | `/:id/status` | Admin | Update order status |

### Admin — `/api/admin`
| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/users` | Admin | List all users |
| PUT | `/users/:id/role` | Admin | Change user role |
| DELETE | `/users/:id` | Admin | Delete a user |

---

## Available Scripts

**Backend**
```bash
npm run dev     # Dev server with nodemon
npm start       # Production server
```

**Frontend**
```bash
npm run dev     # Vite dev server
npm run build   # Production build
npm run preview # Preview production build
npm run lint    # ESLint check
```
