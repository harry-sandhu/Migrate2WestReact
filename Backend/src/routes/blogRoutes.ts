import express from "express";
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogsAdmin
} from "../controllers/blogController";
import { adminOnly, protect } from "../middleware/authmiddleware";

const router = express.Router();

// public
// public
router.get("/", getBlogs);

// ✅ ADMIN FIRST
router.get("/admin", protect, adminOnly, getBlogsAdmin);

// then slug
router.get("/:slug", getBlogBySlug);

router.post("/", protect, adminOnly, createBlog);
router.put("/:id", protect, adminOnly, updateBlog);
router.delete("/:id", protect, adminOnly, deleteBlog);

export default router;