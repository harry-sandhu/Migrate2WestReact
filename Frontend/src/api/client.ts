const API_BASE = import.meta.env.VITE_API_BASE;

/* ---------- PUBLIC CALL ---------- */
export const publicFetch = (url: string, options: any = {}) => {
  return fetch(`${API_BASE}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
};

/* ---------- ADMIN CALL ---------- */
export const adminFetch = (url: string, options: any = {}) => {
  const token = localStorage.getItem("m2w_token");

  return fetch(`${API_BASE}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });
};