import * as crypto from "crypto";
import z from "zod";
import {
  deleteShortCodeById,
  findShortLinkById,
  getAllShortLinks,
  getShortLinkByShortCode,
  insertShortLink,
  updateShortCode,
} from "../services/shortener.services.js";

export async function getShortenerPage(req, res) {
  try {
    if (!req.user) return res.redirect("/login");
    const links = await getAllShortLinks(req.user.id);

    return res.render("index", {
      links,
      host: req.host,
      errors: req.flash("errors"),
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
}

export const postShortenLink = async (req, res) => {
  try {
    if (!req.user) return res.redirect("/login");
    const { url, shortCode } = req.body;

    let finalShortCode = shortCode;

    if (!shortCode) {
      let isUnique = false;
      while (!isUnique) {
        const tempCode = crypto.randomBytes(4).toString("hex");
        const existing = await getShortLinkByShortCode(tempCode);
        if (!existing) {
          finalShortCode = tempCode;
          isUnique = true;
        }
      }
    }

    const link = await getShortLinkByShortCode(finalShortCode);
    // console.log("link check if gets ", link);
    if (link) {
      req.flash(
        "errors",
        "Url with that shortcode already exists, please choose another"
      );
      return res.redirect("/");
    }

    // console.log("✅ ShortCode is available:", finalShortCode);
    await insertShortLink({
      url,
      shortCode: finalShortCode,
      userId: req.user.id,
    });
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

export async function redirectToShortLink(req, res) {
  try {
    const { shortCode } = req.params;

    const link = await getShortLinkByShortCode(shortCode);

    if (!link) {
      return res.status(404).send("Short link not found");
    }

    return res.redirect(link.url);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
}

export const getShortenerEditPage = async (req, res) => {
  if (!req.user) return res.redirect("/login");
  // const id = req.params;
  const { data: id, error } = z.coerce.number().int().safeParse(req.params.id);
  if (error) return res.redirect("/404");
  try {
    const shortLink = await findShortLinkById(id);
    if (!shortLink) return res.redirect("/404");
    res.render("edit-shortLink", {
      id: shortLink.id,
      url: shortLink.url,
      shortCode: shortLink.shortCode,
      errors: req.flash("errors"),
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server Error");
  }
};
export const postShortenerEditPage = async (req, res) => {
  if (!req.user) return res.redirect("/login");
  // const id = req.params;
  const { data: id, error } = z.coerce.number().int().safeParse(req.params.id);
  if (error) return res.redirect("/404");

  try {
    const { url, shortCode } = req.body;
    const newUpdateShortCode = await updateShortCode({ id, url, shortCode });
    if (!newUpdateShortCode) return res.redirect("/404");

    res.redirect("/");
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      req.flash("errors", "Shortcode already exists, please choose another");
      return res.redirect(`/edit/${id}`);
    }

    console.error(err);
    return res.status(500).send("Internal server error");
  }
};
// deleteShortCode
export const deleteShortCode = async (req, res) => {
  try {
    const { data: id, error } = z.coerce
      .number()
      .int()
      .safeParse(req.params.id);
    if (error) return res.redirect("/404");

    await deleteShortCodeById(id);
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};
