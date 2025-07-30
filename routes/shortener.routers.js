import express from "express";
import * as shortenerControllers from "../controller/shortener.controller.js";
import { deleteShortCodeById } from "../services/shortener.services.js";
const router = express.Router();
router.get("/", shortenerControllers.getShortenerPage);
router.post("/shorten", shortenerControllers.postShortenLink);
router.get("/:shortCode", shortenerControllers.redirectToShortLink);
router
  .route("/edit/:id")
  .get(shortenerControllers.getShortenerEditPage)
  .post(shortenerControllers.postShortenerEditPage);

router.route("/delete/:id").post(shortenerControllers.deleteShortCode);

export const shortenerRoutes = router;
