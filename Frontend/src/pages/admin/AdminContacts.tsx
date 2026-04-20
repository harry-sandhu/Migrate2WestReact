import { useEffect, useState } from "react";
import { getAdminContacts, toggleCalledAPI } from "../../api/admin";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  agree: boolean;
  called: boolean;
  createdAt: string;
}

export default function AdminContacts() {
  const [data, setData] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await getAdminContacts();

        console.log("API:", res);

        setData(Array.isArray(res) ? res : res.data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Failed to load contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleToggle = async (id: string) => {
    try {
      await toggleCalledAPI(id);

      setData((prev) =>
        prev.map((item) =>
          item._id === id
            ? { ...item, called: !item.called }
            : item
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading contacts...</div>;

  if (error) {
    return <div className="text-red-600 text-center">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Contacts</h1>

      {data.length === 0 ? (
        <p className="text-gray-500">No contacts found</p>
      ) : (
        data.map((c) => (
          <div
            key={c._id}
            className="bg-white p-4 mb-4 rounded shadow"
          >
            <p className="font-semibold text-lg">{c.name}</p>

            <p>Email: {c.email}</p>
            <p>Phone: {c.phone}</p>
            <p>Country: {c.country}</p>
            <p>Message: {c.message}</p>

            <p>Agreed: {c.agree ? "Yes" : "No"}</p>

            <p className="text-sm text-gray-500">
              {new Date(c.createdAt).toLocaleString()}
            </p>

            <button
              onClick={() => handleToggle(c._id)}
              className={`mt-3 px-3 py-1 rounded text-white ${
                c.called ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {c.called ? "Called" : "Mark as Called"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}