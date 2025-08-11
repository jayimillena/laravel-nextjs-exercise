````markdown
 Laravel + Next.js Exercise

A learning project for combining **Laravel (backend API)** with **Next.js (frontend)**, based on tutorials from **AngelJay Academy** on YouTube.

---

 Table of Contents

- [Project Overview](project-overview)  
- [Prerequisites](prerequisites)  
- [Installation](installation)  
  - [Backend (Laravel)](backend-laravel)  
  - [Frontend (Next.js)](frontend-nextjs)  
- [Usage](usage)  
- [Project Structure](project-structure)  
- [Credits & References](credits--references)  
- [License](license)

---

 Project Overview

This repository contains two distinct parts:

- **Laravel** — Serves as the backend API to handle business logic, authentication, and data storage.  
- **Next.js** — Acts as the frontend, consuming API endpoints and rendering dynamic content using React.

It’s a practical exercise following AngelJay Academy’s tutorials.

---

 Prerequisites

Ensure your system has the following installed:

- PHP (>= 8.0) & Composer  
- MySQL or another relational database supported by Laravel  
- Node.js (>= 14.x) & npm or yarn  

---

 Installation

 Backend (Laravel)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jayimillena/laravel-nextjs-exercise.git
   cd laravel-nextjs-exercise
````

2. **Navigate to the Laravel folder** (if there’s a subfolder, like `backend`, adjust accordingly):

   ```bash
   cd backend
   ```

3. **Install dependencies:**

   ```bash
   composer install
   ```

4. **Copy and configure `.env`:**

   ```bash
   cp .env.example .env
   ```

   Update DB credentials and other app-specific settings as needed.

5. **Generate app key and run migrations:**

   ```bash
   php artisan key:generate
   php artisan migrate
   ```

6. **Launch the server:**

   ```bash
   php artisan serve
   ```

---

 Frontend (Next.js)

1. **Navigate to the frontend directory:**

   ```bash
   cd ../frontend
   ```

2. **Install packages:**

   ```bash
   npm install
    or
   yarn
   ```

3. **Set up environment variables** (e.g., API base URL):

   ```env
   NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
   ```

4. **Run the development server:**

   ```bash
   npm run dev
    or
   yarn dev
   ```

---

 Usage

* Visit the Next.js app at:
  `http://localhost:3000`

* Use the Laravel API at:
  `http://127.0.0.1:8000/api/...`

* Experiment with CRUD operations, authentication flows, and UI components.

---

 Project Structure

```
root/
├── backend/      Laravel application
├── frontend/     Next.js application
└── README.md
```

---

 Credits & References

* **AngelJay Academy** — YouTube tutorials inspired this project
* [Laravel Documentation](https://laravel.com/docs)
* [Next.js Documentation](https://nextjs.org/docs)

---

 License

This project is for learning purposes.
Please adjust or apply an appropriate license if you intend to extend or publish it.

---

**GitHub Repository:**
[https://github.com/jayimillena/laravel-nextjs-exercise](https://github.com/jayimillena/laravel-nextjs-exercise)
*This repository is designed for learning Next.js fundamentals. It is intended to be public for future academic reference. All credits belong to **AngelJay Academy** on YouTube for providing the tutorials.*

```
```
