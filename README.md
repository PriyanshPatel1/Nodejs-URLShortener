# Nodejs-URLShortener
There is .env file where all your database connection credentials are there here is what you need to add in you .env file.

PORT= give your port number that your project is running
DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE
JWT_SECRET=Jwt token key 
<div align="center">
  <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="120" alt="URL Shortener Logo" />
  <h1>🔗 URL Shortener API</h1>
  <p>A simple, secure, and personal URL shortener built with Node.js, Express.js, and Drizzle ORM.</p>
  <p><strong>🔐 JWT Auth</strong> • <strong>🧾 Drizzle ORM</strong> • 
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
🛠️ 3. Configure Environment Variables
Create a .env file in the root directory and add the following:
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
🗃️ 4. Run Database Migrations
Using Drizzle ORM:
npx drizzle-kit push
▶️ 5. Start the Development Server
npm run dev

