import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function AdminGuard({ children }: any) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const check = async () => {
      const token = localStorage.getItem("m2w_token");

      if (!token) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok && data.user.role === "admin") {
          setAllowed(true);
        } else {
          setAllowed(false);
        }
      } catch {
        setAllowed(false);
      }

      setLoading(false);
    };

    check();
  }, []);

  if (loading) return <div>Checking...</div>;

  if (!allowed) return <Navigate to="/admin/login" />;

  return children;
}