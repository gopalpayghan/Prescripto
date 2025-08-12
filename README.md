# 🩺 Prescripto

Prescripto is a **full-stack web application** for booking doctor appointments, managing users, and handling admin/doctor dashboards.  
It features secure authentication, payment integration, cloud storage, and an intuitive UI for both patients and administrators.

## 🚀 Tech Stack

### **Frontend**
- React
- Vite
- Tailwind CSS
- React Router
- Axios
- React Toastify

### **Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Cloudinary (image uploads)
- Multer (file uploads)
- Razorpay & Stripe (payments)
- dotenv

---

## 📦 Installation Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/gopalpayghan/prescripto.git
```

### 2️⃣ Install Dependencies

**Frontend**
```bash
cd prescripto/frontend
npm install
```

**Backend**
```bash
cd prescripto/backend
npm install
```

**Admin (if used)**
```bash
cd prescripto/admin
npm install
```

---

### 3️⃣ Environment Variables Setup

#### **Frontend `.env`**
Create a `.env` file in `frontend/`:
```env
VITE_BACKEND_URL='your_backend_url'
VITE_CURRENCY='INR'
```

#### **Backend `.env`**
Create a `.env` file in `backend/`:
```env
MONGODB_URI='your_mongodb_connection_string'
CLOUDINARY_NAME='your_cloudinary_name'
CLOUDINARY_API_KEY='your_cloudinary_api_key'
CLOUDINARY_SECRET_KEY='your_cloudinary_secret_key'
RAZORPAY_KEY_ID='your_razorpay_key_id'
RAZORPAY_KEY_SECRET='your_razorpay_key_secret'
JWT_SECRET='your_jwt_secret'
ADMIN_EMAIL='your_admin_email'
ADMIN_PASSWORD='your_admin_password'
STRIPE_SECRET_KEY='your_stripe_secret_key'
CURRENCY='INR'
```
> ⚠ **Note:** Never commit your `.env` files with real secrets to public repositories.

---

### 4️⃣ Running the Project

**Backend**
```bash
cd prescripto/backend
npm run server
```

**Frontend**
```bash
cd prescripto/frontend
npm run dev
```

**Admin (if used)**
```bash
cd prescripto/admin
npm run dev
```

---

## 💡 Usage
- **Frontend:** [http://localhost:5173](http://localhost:5173) (default Vite port)  
- **Backend:** [http://localhost:5000](http://localhost:5000) (or configured port)  
- **Admin Panel:** Runs on its respective configured port  

---

## ✨ Features
- 🔐 User authentication & profile management
- 👨‍⚕️ Doctor listing, booking, and availability
- 📊 Admin dashboard for managing doctors, users, and appointments
- 💳 Payment integration (Razorpay, Stripe)
- 📂 Image/file uploads (Cloudinary)
- ⚡ Fast and responsive UI with Tailwind CSS

---

## 🌐 Live Demo
🔗 [View Live Demo](https://prescripto-frontend-03v0.onrender.com/)

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/gopalpayghan/prescripto/issues).

---

## 📂 GitHub Repository
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/gopalpayghan/prescripto)

