import argon2 from "argon2";
async function hashPassword(password) {
  return argon2.hash(password);
}
async function verifyPassword(password, hashedPassword) {
  return argon2.verify(hashPassword, password);
}
