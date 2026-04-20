import { publicFetch } from "./client";

export const registerUser = async (data: {
  name: string;
  email: string;
  phone: string;
  password: string;
}) => {
  const res = await publicFetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || "Registration failed");
  }

  return json;
};

export const loginUser = async (email: string, password: string) => {
  const res = await publicFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || "Login failed");
  }

  return json;
};