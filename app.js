import express from "express";

import { shortenerRoutes } from "./routes/shortener.routers.js";
import cookieParser from "cookie-parser";
import { authRoutes } from "./routes/auth.routers.js";
import { verifyAuthentication } from "./middlewares/verify.middlewares.js";
import flash from "connect-flash";
import session from "express-session";
const app = express();
const PORT = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(
  session({ secret: "my-secret", resave: true, saveUninitialized: false })
);
app.use(flash());
app.use(verifyAuthentication);
app.use((req, res, next) => {
  res.locals.user = req.user;
  return next();
});

app.use(authRoutes);
app.use(shortenerRoutes);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
