import { eq } from "drizzle-orm";
import { db } from "../config/db.js";
import { shortLinkTable } from "../Drizzle/schema.js";

export const getAllShortLinks = async (userId) => {
  return await db
    .select()
    .from(shortLinkTable)
    .where(eq(shortLinkTable.userId, userId));
};

export const getShortLinkByShortCode = async (shortCode) => {
  const [result] = await db
    .select()
    .from(shortLinkTable)
    .where(eq(shortLinkTable.shortCode, shortCode));
  return result;
};

export const insertShortLink = async ({ url, shortCode, userId }) => {
  await db.insert(shortLinkTable).values({ url, shortCode, userId });
};

export const findShortLinkById = async (id) => {
  const [result] = await db
    .select()
    .from(shortLinkTable)
    .where(eq(shortLinkTable.id, id));
  return result;
};

// updateShortCode
export const updateShortCode = async ({ id, url, shortCode }) => {
  return await db
    .update(shortLinkTable)
    .set({ url, shortCode })
    .where(eq(shortLinkTable.id, id));
};
export const deleteShortCodeById = async (id) => {
  // return await db.delete(shortLinkTable).where(eq(shortLinkTable.id, id));
  if (!id || typeof id !== "number") {
    throw new Error(`Invalid ID for deletion: ${id}`);
  }

  try {
    return await db.delete(shortLinkTable).where(eq(shortLinkTable.id, id));
  } catch (err) {
    console.error("Error deleting short code:", err);
    throw err;
  }
};
