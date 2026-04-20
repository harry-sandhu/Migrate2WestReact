import { useEffect, useState } from "react";
import { getServices } from "../api/public";

export default function useServiceData() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getServices();
        setData(res);
      } catch (err: any) {
        console.error("Service fetch error:", err);
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}