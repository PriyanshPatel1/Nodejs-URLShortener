# Nodejs-URLShortener
There is .env file where all your database connection credentials are there here is what you need to add in you .env file.

PORT= give your port number that your project is running
DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE
JWT_SECRET=Jwt token key 
<div align="center">
  <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="120" alt="URL Shortener Logo" />
  <h1>🔗 URL Shortener API</h1>
  <p>A simple, secure, and personal URL shortener built with Node.js, Express.js, and Drizzle ORM.</p>
  <p><strong>🔐 JWT Auth</strong> • <strong>🧾 Drizzle ORM</strong> • <strong>⚡ REST API</strong></p>
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

1. Clone the repository  
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
