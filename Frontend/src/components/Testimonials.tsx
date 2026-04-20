import { useEffect, useState } from "react";
import { getTestimonials } from "../api/public";

type Testimonial = {
  _id: string;
  name: string;
  message: string;
  country?: string;
};

export default function Testimonials() {
  const [data, setData] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const res = await getTestimonials();
        setData(res);
      } catch (err) {
        console.error("Failed to load testimonials:", err);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-500">
        Loading testimonials...
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          What Our Clients Say
        </h2>

        {/* 🔥 Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300">

          {data.map((t) => (
            <div
              key={t._id}
              className="min-w-[300px] max-w-[300px] bg-white p-6 rounded-2xl shadow flex-shrink-0"
            >
              <p className="text-gray-700 mb-4">
                "{t.message}"
              </p>

              <div className="text-sm text-gray-500">
                <strong>{t.name}</strong>
                {t.country && <span> • {t.country}</span>}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}