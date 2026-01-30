# Full-Stack Real Estate Management System
 🌐 Live Application
**Link:** [https://magical-elf-82734f.netlify.app/](https://magical-elf-82734f.netlify.app/)
A comprehensive full-stack application developed as a placement task. This project includes a high-converting landing page for customers and a powerful admin dashboard for managing content, inquiries, and subscriptions.

---

## 🚀 Key Features

### 1. Dynamic Landing Page
*   **Hero Section**: Features a professional "Get a Free Consultation" contact form.
*   **"Our Projects" Section**: Automatically displays all real estate projects fetched from the database.
*   **"Happy Clients" Section**: A dynamic testimonial section showing client names, designations, and their feedback.
*   **Newsletter Integration**: A functional subscription box in the footer to collect user leads.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

### 2. Admin Panel (Dashboard)
*   **Project Management**: Full CRUD functionality to add, edit, and search for projects.
*   **Client Management**: Manage testimonial data including names, designations, and images.
*   **Contact Inquiry Tracker**: A central table to view all user submissions from the "Get a Quote" form.
*   **Subscriber List**: A dedicated section to view and track all newsletter email signups.
*   **Search Functionality**: Integrated search bars to find specific projects or clients without scrolling.

---

## 🛠 Tech Stack

**Frontend:**
*   React.js
*   React Router (for navigation)
*   CSS-in-JS (Inline React Styles)

**Backend:**
*   Node.js
*   Express.js
*   MongoDB Atlas (Cloud Database)

---

## 📦 Installation & Setup

### 1. Prerequisites
*   Node.js installed
*   MongoDB Atlas account

### 2. Backend Setup
1.  Navigate to the `/server` folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure your environment variables in a `.env` file:
    ```env
    MONGO_URI=your_mongodb_atlas_connection_string
    PORT=5000
    ```
4.  Start the server:
    ```bash
    npm start
    ```

### 3. Frontend Setup
1.  Navigate to the `/client` folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the application:
    ```bash
    npm start
    ```

---

## 📋 Evaluation Requirements Met

*   **Functionality**: All components (Projects, Clients, Contact Form, Newsletters) are fully functional and connected to the backend.
*   **Code Quality**: Organized into clean, reusable React components with properly managed state.
*   **Design**: Adhered strictly to the provided reference images for color schemes and layouts.
*   **Usability**: Provided an intuitive admin interface for non-technical users to manage data easily.

---

## 🌐 Deployment

*   **Backend**: Hosted on [Insert Platform Name, e.g., Render/Heroku]
*   **Frontend**: Hosted on [Insert Platform Name, e.g., Vercel/Netlify]
*   **Database**: Cloud Sandbox on MongoDB Atlas

---
*This project was completed as part of a Full Stack Development Task.*
