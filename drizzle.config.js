import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./Drizzle/Migration",
  schema: "./Drizzle/schema.js",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
