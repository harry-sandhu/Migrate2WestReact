import { useEffect, useState } from "react";
import {
  getUsers,
  getContacts,
  getSlotsAdmin,
  getAdminBlogs,
  getPayments,
} from "../api/admin";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    payments: 0,
    revenue: 0,
    slots: 0,
    contacts: 0,
    blogs: 0,
  });

  const [recentPayments, setRecentPayments] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);
  const [serviceSplit, setServiceSplit] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      const [users, payments, slots, contacts, blogs] = await Promise.all([
        getUsers(),
        getPayments(),
        getSlotsAdmin(),
        getContacts(),
        getAdminBlogs(),
      ]);

      const paymentData = payments.data || [];

      // stats
      setStats({
        users: users.data?.length || 0,
        payments: paymentData.length,
        revenue: paymentData.reduce(
          (sum: number, p: any) => sum + (p.amount || 0),
          0
        ),
        slots: slots.data?.length || 0,
        contacts: contacts.data?.length || 0,
        blogs: blogs.data?.length || 0,
      });

      setRecentPayments(paymentData.slice(0, 5));

      // 📈 chart
      setChartData(
        paymentData.slice(0, 7).reverse().map((p: any, i: number) => ({
          name: `Day ${i + 1}`,
          amount: p.amount || 0,
        }))
      );

      // 🧠 service analytics
      const serviceMap: any = {};
      paymentData.forEach((p: any) => {
        serviceMap[p.serviceType] =
          (serviceMap[p.serviceType] || 0) + 1;
      });

      setServiceSplit(
        Object.keys(serviceMap).map((key) => ({
          name: key,
          value: serviceMap[key],
        }))
      );

      setLoading(false);
    };

    fetchAll();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-10">

      {/* 🔥 HERO */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="opacity-80 mt-2">
          Overview of your platform performance
        </p>
      </div>

      {/* 🔥 STATS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <Card title="Users" value={stats.users} />
        <Card title="Payments" value={stats.payments} />
        <Card title="Revenue" value={`₹${stats.revenue}`} highlight />
        <Card title="Slots" value={stats.slots} />
        <Card title="Contacts" value={stats.contacts} />
        <Card title="Blogs" value={stats.blogs} />
      </div>

      {/* 🔥 CHART + PIE */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Revenue */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold mb-4">Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Service Split */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold mb-4">Service Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={serviceSplit}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
              >
                {serviceSplit.map((_, i) => (
                  <Cell key={i} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* 🔥 RECENT PAYMENTS */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-semibold mb-4">Recent Payments</h2>

        {recentPayments.map((p) => (
          <div
            key={p._id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <p className="font-medium">{p.applicant?.name}</p>
              <p className="text-sm text-gray-500">{p.serviceType}</p>
            </div>

            <div className="text-right">
              <p className="font-semibold">₹{p.amount}</p>
              <span className="text-xs text-gray-500">
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

/* CARD */
function Card({ title, value, highlight = false }: any) {
  return (
    <div
      className={`p-5 rounded-2xl shadow transition ${
        highlight
          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
          : "bg-white"
      }`}
    >
      <p className="text-sm opacity-70">{title}</p>
      <h2 className="text-xl font-bold mt-1">{value}</h2>
    </div>
  );
}