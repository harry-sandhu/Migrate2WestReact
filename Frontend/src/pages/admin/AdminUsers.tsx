import { useEffect, useState } from "react";
import { getUsers } from "../../api/admin";

export default function AdminUsers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers().then(d => setData(d.data || []));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      {data.map((u: any) => (
        <div key={u._id} className="bg-white p-4 mb-4 rounded shadow">
          <p>{u.email}</p>
          <p>{u.phone}</p>
          <p>{u.role}</p>
        </div>
      ))}
    </div>
  );
}