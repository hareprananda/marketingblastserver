import express from "express";
import ContactController from "../controllers/ContactController";

const router = express.Router();

router.get("/contact", ContactController.getContact);
router.get("/contact/:id", ContactController.getSingleContact);
router.post("/contact", ContactController.addContact);
router.put("/contact/:id", ContactController.updateContact);
router.delete("/contact/:id", ContactController.deleteContact);

export default router;
