import { z } from "zod";
export const loginUserSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Please enter valid email address" })
    .max(100, { message: "Email must be no more than 100 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be no more than 100 characters long" }),
});
export const registerUserSchema = loginUserSchema.extend({
  name: z
    .string()
    .trim()
    .min(4, { message: "Name must at least 4 characters Long." })
    .max(100, { message: "Name must be no more than 100 characters." }),
});
