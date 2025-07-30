import {
  comparePassword,
  createUser,
  generateToken,
  getUserByEmail,
  hashedPassword,
} from "../services/auth.Services.js";
import {
  loginUserSchema,
  registerUserSchema,
} from "../validator/auth.validator.js";

// controllers/authController.js
export const getRegisterPage = (req, res) => {
  if (req.user) return res.redirect("/");
  return res.render("auth/register", { errors: req.flash("errors") });
};
export const postRegister = async (req, res) => {
  if (req.user) return res.redirect("/");

  const { data, error } = registerUserSchema.safeParse(req.body);
  console.log(data);
  if (error) {
    const errors = error.errors[0].message;
    req.flash("errors", errors);
    res.redirect("/register");
  }
  const { name, email, password } = data;
  const userExists = await getUserByEmail(email);
  // if (userExists) return res.redirect("/register");
  if (userExists) {
    req.flash("errors", "User Already Exists");
    return res.redirect("/register");
  }
  const hash = await hashedPassword(password);
  const [user] = await createUser({ name, email, password: hash });
  res.redirect("/login");
};
export const getLoginPage = (req, res) => {
  if (req.user) return res.redirect("/");
  return res.render("auth/login", { errors: req.flash("errors") });
};

export const postLogin = async (req, res) => {
  if (req.user) return res.redirect("/");
  // const { email, password } = req.body;
  const { data, error } = loginUserSchema.safeParse(req.body);

  console.log(data);
  if (error) {
    const errors = error.errors[0].message;
    req.flash("errors", errors);
    res.redirect("/login");
  }
  const { email, password } = data;
  const user = await getUserByEmail(email);
  if (!user) {
    req.flash("errors", "Invalid Email and Password");
    return res.redirect("/login");
  }
  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    req.flash("errors", "Invalid Email and Password");
    return res.redirect("/login");
  }

  const token = generateToken({
    id: user.id,
    name: user.name,
    email: user.email,
  });
  res.cookie("access_token", token);
  return res.redirect("/");
};

export const getMe = async (req, res) => {
  if (!req.user) return res.send("<--Not Logged In-->");
  return res.send(`<h1>Hey  ${req.user.name} -- ${req.user.email}</h1>`);
};

export const logoutUser = async (req, res) => {
  res.clearCookie("access_token");
  res.redirect("/login");
};
