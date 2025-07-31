
<div align="center">
  <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="120" alt="URL Shortener Logo" />
  <h1>🔗 URL Shortener API</h1>
  <p>A simple, secure, and personal URL shortener built with Node.js, Express.js, and Drizzle ORM.</p>
  <p><strong>🔐 JWT Auth</strong> • <strong>🧾 Drizzle ORM(MYSQL)</strong> • 
</div>

---

## ✨ Features

- 🔐 User Auth – Register/Login with hashed passwords & JWT  
- ✂️ Shorten URLs – Auto or custom shortcodes  
- 👤 User-Specific URLs – Each user sees only their own links  
- 🚀 Redirect Service – `GET /:shortcode` to visit original URLs  
- 🧾 Built with Drizzle ORM – Type-safe SQL queries  
- 🛡️ Secure Sessions – All routes protected with JWT  

---

## ⚙️ Tech Stack

| Tech             | Purpose                          |
|------------------|----------------------------------|
| Node.js          | Backend runtime                  |
| Express.js       | Web framework                    |
| Drizzle ORM      | Database ORM                     |
| PostgreSQL/MYSQ  | Database (choose your flavor)    |
| JWT              | Session authentication           |
| argon2           | Password hashing                 |

---

## 🔧 Setup & Installation

Follow these simple steps to get the project up and running locally:

---

### 📁 1. Clone the Repository

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener

📦 2. Install Dependencies
npm install
### 🛠️ 3. Configure Environment Variables

To get your app working securely, you need to set up a `.env` file. Think of this as your **secret config vault** 🔐.

---

📂 **Step 1**: In the root of your project, create a file named:

📄 **Step 2**: Add the following environment variables:

```env
# 🌐 Database connection string (MYSQL)
DATABASE_URL=your_database_connection_string

# 🔐 Secret key used to sign JWT tokens (keep this safe!)
JWT_SECRET=your_super_secret_key_here

# 🚪 Port for local development server
PORT=3000

### 🗃️ 4. Run Database Migrations

Now it’s time to set up your database tables using **Drizzle ORM** — like planting the seeds for your app 🌱.

---

🚀 **Step-by-step**

🛠️ First, make sure your `.env` file is set correctly and your database is running.

🧱 Then run the migration command:

```bash
npx drizzle-kit push

### ▶️ 5. Start the Development Server

You're just one step away from running your app! 🚀

---

🖥️ **Run this command in your terminal:**

```bash
npm run dev


