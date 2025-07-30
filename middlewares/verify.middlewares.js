import { verify } from "argon2";
import { verifyJWTToken } from "../services/auth.Services.js";

export const verifyAuthentication = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    req.user = null;
    return next();
  }
  try {
    const decodedToken = verifyJWTToken(token);
    req.user = decodedToken;
    // console.log(`req.user`, req.user);
    req.user = decodedToken;
  } catch (error) {
    console.error("Token verification failed:", error); // ✅ catch error
    req.user = null;
  }
  return next();
};
