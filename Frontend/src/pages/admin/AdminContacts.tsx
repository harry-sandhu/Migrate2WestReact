import { useEffect, useState } from "react";
import { getAdminContacts } from "../../api/admin";

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
}

export default function AdminContacts() {
  const [data, setData] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await getAdminContacts();
        setData(res || []);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Failed to load contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <div>Loading contacts...</div>;

  if (error) {
    return (
      <div className="text-red-600 text-center">
        {error}
      </div>
    );
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
            <p><strong>{c.name}</strong></p>
            <p>{c.email}</p>
            <p>{c.message}</p>
          </div>
        ))
      )}
    </div>
  );
}