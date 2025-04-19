# 🍽️ Full-Stack Food E-Commerce Website

A beautifully designed full-stack food ordering platform where users can explore signature dishes, manage their cart, and place orders — all in a seamless and responsive experience.

---

## 📌 What the Project Does

- Displays an attractive landing page with a hero banner and featured dishes.
- Allows users to register/login securely using JWT authentication.
- Provides a full shopping cart system with quantity updates.
- Lets users place orders and view their order history.
- Separates admin vs user-level access (extendable for future).

---

## 💡 Why the Project is Useful

This project demonstrates a **real-world full-stack application** built with modern technologies like React, Node.js, and PostgreSQL. It is perfect for:

- Portfolio projects showcasing practical use of authentication, database, and API handling.
- Startups or restaurants wanting a base for their online ordering system.
- Learners who want a working model of a complete React + Node.js integration.

---

## 🚀 How to Get Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
cd front-end && npm install
cd ../back-end && npm install
```

### 3. Configure backend `.env` file

Create a `.env` in the `back-end/` folder:

```
PORT=5000
PGUSER=your_pg_user
PGPASSWORD=your_pg_password
PGDATABASE=your_pg_database
PGHOST=localhost
PGPORT=5432
JWT_SECRET=your_jwt_secret
```

### 4. Start both servers (frontend + backend)

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

---

## ❓ Where to Get Help

If you face any issues:

- Open an issue on the GitHub repository
- Check PostgreSQL, Vite, React, or Express official documentation

---

## 👥 Who Maintains and Contributes

This project is maintained by the community.  
Contributions are welcome — feel free to fork, improve, and submit pull requests.

---

## 📦 Tech Stack

- **Frontend**: React (Vite), TypeScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT
- **API Communication**: Axios

---

## 📄 License

MIT License  
Open-source project built for learning and development.
