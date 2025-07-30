import { relations } from "drizzle-orm";
import { int, mysqlTable, varchar, timestamp } from "drizzle-orm/mysql-core";

/* ---- users table first (so the reference below isn’t undefined) ---- */
export const usersTable = mysqlTable("users", {
  id: int().autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

/* ---- short links ---- */
export const shortLinkTable = mysqlTable("short_link", {
  id: int().primaryKey().autoincrement(),
  url: varchar({ length: 500 }).notNull(),
  shortCode: varchar("short_code", { length: 20 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),

  userId: int("user_id")
    .notNull()
    .references(() => usersTable.id),
});

/* ---- relationships ---- */
export const userRelations = relations(usersTable, ({ many }) => ({
  shortLinks: many(shortLinkTable),
}));

export const shortLinkRelations = relations(shortLinkTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [shortLinkTable.userId],
    references: [usersTable.id],
  }),
}));
