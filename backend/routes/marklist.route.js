import express from "express";
import { MarksCreate, MarksDelete, MarksDetails, MarksIndex, MarksUpdate } from "../controllers/marklist.controller.js";
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js";

const router=express.Router();

// Public Routes (Accessible by All Users)
router.get("/", MarksIndex);
router.get("/:id", MarksDetails);

// Protected Routes (Only Admins Can Modify Data)
router.post("/", authenticate, authorizeAdmin, MarksCreate);
router.put("/:id", authenticate, authorizeAdmin, MarksUpdate);
router.delete("/:id", authenticate, authorizeAdmin, MarksDelete);

export default router;