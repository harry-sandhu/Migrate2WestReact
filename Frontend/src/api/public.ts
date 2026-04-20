import { publicFetch } from "./client";

/* ---------- HELPER ---------- */
const handleResponse = async (res: Response) => {
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "API Error");
  }
  return res.json();
};

/* ---------- BLOGS ---------- */
export const getBlogs = async () => {
  const res = await publicFetch("/api/blogs");
  const json = await handleResponse(res);
  return json.data;
};

export const getBlogBySlug = async (slug: string) => {
  const res = await publicFetch(`/api/blogs/${slug}`);
  const json = await handleResponse(res);
  return json.data;
};

/* ---------- SLOTS ---------- */
export const getBookedSlots = async () => {
  const res = await publicFetch("/api/slots");
  const json = await handleResponse(res);
  return json.data; // array of slots
};

/* ---------- CONTACT ---------- */
export const submitContact = async (data: any) => {
  const res = await publicFetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

/* ---------- TESTIMONIALS ---------- */
export const getTestimonials = async () => {
  const res = await publicFetch("/api/testimonials");
  const json = await handleResponse(res);
  return json.data || [];
};


/* ---------- PAYMENT ---------- */
export const createPaymentOrder = async (data: {
  amount: number;
  customer_id: string;
  customer_email: string;
  customer_phone: string;
  serviceType: string;
  subService?: string;
  slot?: string | null;
}) => {
  const res = await publicFetch("/api/payment/create-order", {
    method: "POST",
    body: JSON.stringify(data),
  });

  const json = await handleResponse(res);
  return json.data;
};


/* ---------- MANUAL PAYMENT ---------- */
export const submitManualPayment = async (data: any) => {
  const res = await publicFetch("/api/payment/manual", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return handleResponse(res);
};


/* ---------- PAYMENT STATUS ---------- */
export const getPaymentStatus = async (orderId: string) => {
  const res = await publicFetch(`/api/payment/status/${orderId}`);
  const json = await handleResponse(res);
  return json.data;
};

/* ---------- SERVICES ---------- */
export const getServices = async () => {
  const res = await publicFetch("/api/services");
  const json = await handleResponse(res);
  return json;
};