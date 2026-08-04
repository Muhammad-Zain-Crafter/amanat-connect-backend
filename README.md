# 🎒 Amanat Connect Backend

A robust RESTful API for **Amanat Connect**, a campus lost & found platform that enables students to report lost or found items, submit claims, and allows administrators to manage reports and claims through a secure approval workflow.

## 🔗 Live Links

- API: https://amanat-connect-backend.onrender.com
- Frontend: https://amanat-connect.vercel.app
- Frontend Repository: https://github.com/Muhammad-Zain-Crafter/amanat-connect-frontend

## ✨ Features

### 🔐 Authentication & Authorization
- User Registration & Login
- JWT Authentication (Bearer token via `Authorization` header)
- HTTP-only Cookie support (same-origin/local dev)
- Protected Routes
- Role-based Authorization (User/Admin)
- Forgot Password
- Reset Password
- Change Password

### 📦 Asset Management
- Report Lost Items
- Report Found Items
- Update Asset Details
- Delete Assets
- Get All Approved Assets
- Get Single Asset
- Get User's Reported Assets
- Asset Approval by Admin

### 🤝 Claim Management
- Submit Claim Requests
- Prevent Duplicate Claims
- Prevent Self Claims
- Approve or Reject Claims
- Automatically Update Asset Status

### 👤 User Management
- View User Profile
- Update Profile
- Upload Profile Image

### ☁️ File Uploads
- Multer
- Cloudinary Integration

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- TypeScript
- JWT
- bcrypt
- Multer
- Cloudinary
- Cookie Parser
- Nodemailer
- Express Validator

## 📂 Project Structure

```
src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── db/
├── utils/
└── server.ts
```

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/Muhammad-Zain-Crafter/amanat-connect-backend.git
```

### Navigate to the project

```bash
cd amanat-connect-backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Copy `.env.example` to `.env` and fill in your own values:

```bash
cp .env.example .env
```

```env
PORT=7000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

NODE_ENV=development

MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=your_mailtrap_user
MAIL_PASS=your_mailtrap_pass
MAIL_FROM=your_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> ⚠️ In production, set `NODE_ENV=production` and `CLIENT_URL` to your exact deployed frontend URL (no trailing slash).

### Run Development Server

```bash
npm run dev
```

Server runs on

```
http://localhost:7000
```

## 📌 API Highlights

### Authentication
- Register
- Login
- Logout
- Get Profile
- Forgot Password
- Reset Password
- Change Password

### Assets
- Report Asset
- Get All Assets
- Get Single Asset
- Update Asset
- Delete Asset
- Get My Assets
- Approve Asset

### Claims
- Create Claim
- Get My Claims
- Get All Claims (Admin)
- Approve Claim
- Reject Claim

## 🚧 Project Status

This project is actively under development.

### Planned Improvements
- Email Notifications
- Dashboard Analytics
- Advanced Search & Filtering
- Pagination
- Unit Testing
- Docker Support
- CI/CD Pipeline
- API Documentation (Swagger)

## 👨‍💻 Author

**Muhammad Zain**
- GitHub: https://github.com/Muhammad-Zain-Crafter
- LinkedIn: https://www.linkedin.com/in/muhammad-zain-19ba6a319/

---

⭐ If you found this project helpful, consider giving it a star!
