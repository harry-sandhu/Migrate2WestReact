import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

export default function ProtectedRoute({
  children,
  adminOnly = false,
}: ProtectedRouteProps) {
  const token = localStorage.getItem("m2w_token");
  const user = JSON.parse(localStorage.getItem("m2w_user") || "null");

  // ❌ Not logged in
  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  // ❌ Admin route but not admin
  if (adminOnly && user?.role !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
}