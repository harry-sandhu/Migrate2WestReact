import { adminFetch } from "./client";

/* ---------- BLOGS ---------- */
export const getAdminBlogs = async () => {
  const res = await adminFetch("/api/blogs/admin");
  return res.json();
};

export const deleteBlog = async (id: string) => {
  const res = await adminFetch(`/api/blogs/${id}`, {
    method: "DELETE",
  });
  return res.json();
};



/* ---------- PAYMENTS ---------- */
export const getPayments = async () => {
  const res = await adminFetch("/api/payment");
  return res.json();
};

export const updatePaymentStatus = async (id: string, status: string) => {
  const res = await adminFetch(`/api/payment/${id}/status`, {
    method: "PUT",
    body: JSON.stringify({ status }),
  });
  return res.json();
};

/* ---------- SLOTS ---------- */
export const getSlotsAdmin = async () => {
  const res = await adminFetch("/api/slots/admin");
  return res.json();
};

export const deleteSlot = async (id: string) => {
  const res = await adminFetch(`/api/slots/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

/* ---------- CONTACTS ---------- */
export const getContacts = async () => {
  const res = await adminFetch("/api/contact");
  return res.json();
};

/* ---------- USERS ---------- */
export const getUsers = async () => {
  const res = await adminFetch("/api/auth");
  return res.json();
};

/* ---------- TESTIMONIALS ---------- */
export const getTestimonials = async () => {
  const res = await adminFetch("/api/testimonials");
  return res.json();
};


/* ---------- CREATE BLOG ---------- */
export const createBlog = async (data: any) => {
  const res = await adminFetch("/api/blogs", {
    method: "POST",
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || "Failed to create blog");
  }

  return json.data;
};


/* ---------- CONTACTS ---------- */
export const getAdminContacts = async () => {
  const res = await adminFetch("/api/contact");

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || "Failed to fetch contacts");
  }

  return json.data;
};


/* ---------- TESTIMONIALS ---------- */
export const getAdminTestimonials = async () => {
  const res = await adminFetch("/api/testimonials");
  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || "Failed to fetch testimonials");
  }

  return json.data;
};

export const createTestimonial = async (data: any) => {
  const res = await adminFetch("/api/testimonials", {
    method: "POST",
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || "Failed to create testimonial");
  }

  return json.data;
};

export const deleteTestimonial = async (id: string) => {
  const res = await adminFetch(`/api/testimonials/${id}`, {
    method: "DELETE",
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message || "Failed to delete testimonial");
  }

  return json;
};


export const toggleCalledAPI = async (id: string) => {
  const res = await adminFetch(`/api/contact/${id}/toggle-called`, {
    method: "PATCH",
  });

  return res.json();
};