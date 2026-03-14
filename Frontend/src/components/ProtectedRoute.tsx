import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("m2w_token");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const token = localStorage.getItem("m2w_token");
  if (!token) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
}