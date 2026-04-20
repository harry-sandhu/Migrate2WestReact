import { useEffect, useState } from "react";
import {
  getAdminBlogs,
  deleteBlog,
  createBlog,
} from "../../api/admin";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  content: string[];
  published: boolean;
}

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    image: "",
    content: "",
  });

  /* ---------------- FETCH ---------------- */
  const fetchBlogs = async () => {
    try {
      const res = await getAdminBlogs();
      setBlogs(res.data || []);
    } catch (err: any) {
      console.error(err);
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* ---------------- CREATE ---------------- */
  const handleCreate = async () => {
    if (!form.title || !form.excerpt || !form.content) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setCreating(true);
      setError("");

      const payload = {
        ...form,
        content: form.content.split("\n"),
      };

      const newBlog = await createBlog(payload);

      setBlogs((prev) => [newBlog, ...prev]);

      setForm({
        title: "",
        excerpt: "",
        image: "",
        content: "",
      });

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to create blog");
    } finally {
      setCreating(false);
    }
  };

  /* ---------------- DELETE ---------------- */
  const handleDelete = async (id: string) => {
    try {
      await deleteBlog(id);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete blog");
    }
  };

  if (loading) return <div>Loading blogs...</div>;

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Blogs</h1>

      {/* ---------------- CREATE FORM ---------------- */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="font-semibold text-lg">Create Blog</h2>

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="border p-2 w-full rounded"
        />

        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
          className="border p-2 w-full rounded"
        />

        <input
          placeholder="Excerpt"
          value={form.excerpt}
          onChange={(e) =>
            setForm({ ...form, excerpt: e.target.value })
          }
          className="border p-2 w-full rounded"
        />

        <textarea
          placeholder="Content (one paragraph per line)"
          value={form.content}
          onChange={(e) =>
            setForm({ ...form, content: e.target.value })
          }
          className="border p-2 w-full h-32 rounded"
        />

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <button
          onClick={handleCreate}
          disabled={creating}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {creating ? "Creating..." : "Create Blog"}
        </button>
      </div>

      {/* ---------------- BLOG LIST ---------------- */}
      <div className="space-y-4">
        {blogs.map((b) => (
          <div
            key={b._id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{b.title}</h3>
              <p className="text-sm text-gray-500">{b.slug}</p>
            </div>

            <button
              onClick={() => handleDelete(b._id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}