import { Request, Response } from "express";
import Blog from "../models/Blog";

/* ---------- GET ALL BLOGS ---------- */
export const getBlogs = async (_req: Request, res: Response) => {
  try {
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });

    res.json({ success: true, data: blogs });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};

/* ---------- GET SINGLE BLOG ---------- */
export const getBlogBySlug = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.json({ success: true, data: blog });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};

/* ---------- CREATE BLOG ---------- */
export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, excerpt, content, image } = req.body;

    const slug = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    const blog = await Blog.create({
      title,
      slug,
      excerpt,
      content,
      image
    });

    res.json({ success: true, data: blog });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};

/* ---------- UPDATE BLOG ---------- */
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({ success: true, data: blog });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};

/* ---------- DELETE BLOG ---------- */
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// GET /api/blogs/admin
export const getBlogsAdmin = async (_req: Request, res: Response) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.json({ success: true, data: blogs });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};