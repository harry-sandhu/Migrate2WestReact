import { useEffect, useState } from "react";
import {
  getAdminTestimonials,
  createTestimonial,
  deleteTestimonial,
} from "../../api/admin";

interface Testimonial {
  _id: string;
  name: string;
  message: string;
  country?: string;
}

export default function AdminTestimonials() {
  const [data, setData] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    message: "",
    country: "",
  });

  /* ---------------- FETCH ---------------- */
  const fetchTestimonials = async () => {
    try {
      const res = await getAdminTestimonials();
      setData(res || []);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to load testimonials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  /* ---------------- CREATE ---------------- */
  const handleCreate = async () => {
    if (!form.name || !form.message) {
      setError("Name and message are required");
      return;
    }

    try {
      setCreating(true);
      setError("");

      const newItem = await createTestimonial(form);

      setData((prev) => [newItem, ...prev]);

      setForm({
        name: "",
        message: "",
        country: "",
      });

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to create testimonial");
    } finally {
      setCreating(false);
    }
  };

  /* ---------------- DELETE ---------------- */
  const handleDelete = async (id: string) => {
    try {
      await deleteTestimonial(id);
      setData((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete testimonial");
    }
  };

  if (loading) return <div>Loading testimonials...</div>;

  if (error && data.length === 0) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Testimonials</h1>

      {/* FORM */}
      <div className="bg-white p-4 rounded shadow mb-6 space-y-3">

        <input
          value={form.name}
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="border p-2 w-full rounded"
        />

        <input
          value={form.country}
          placeholder="Country"
          onChange={(e) =>
            setForm({ ...form, country: e.target.value })
          }
          className="border p-2 w-full rounded"
        />

        <textarea
          value={form.message}
          placeholder="Message"
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="border p-2 w-full rounded"
        />

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <button
          onClick={handleCreate}
          disabled={creating}
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {creating ? "Adding..." : "Add Testimonial"}
        </button>
      </div>

      {/* LIST */}
      {data.length === 0 ? (
        <p className="text-gray-500">No testimonials found</p>
      ) : (
        data.map((t) => (
          <div
            key={t._id}
            className="bg-white p-4 mb-4 rounded shadow"
          >
            <p className="mb-2">"{t.message}"</p>
            <strong>{t.name}</strong>{" "}
            {t.country && `• ${t.country}`}

            <button
              onClick={() => handleDelete(t._id)}
              className="text-red-500 ml-4"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}