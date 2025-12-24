import { useState } from "react";
import Button from "../ui/Button";
import { countries } from "../../assets/data/countries.ts";

export default function Hero() {
  const [citizen, setCitizen] = useState("Country");
  const [visa, setVisa] = useState("Visa Category");
  const [destination, setDestination] = useState("Which Country");

  return (
    <section className="bg-gray-50 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Fast & Hassle-Free Visa Processing
      </h1>
      <p className="text-gray-600 mb-10">
        Check your destination and apply online for visas anywhere in the world.
      </p>

      {/* Filters */}
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-4xl mx-auto grid gap-4 md:grid-cols-4">
        <select
          value={citizen}
          onChange={(e) => setCitizen(e.target.value)}
          className="border p-3 rounded"
        >
          <option>Country</option>
          {countries.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select
          value={visa}
          onChange={(e) => setVisa(e.target.value)}
          className="border p-3 rounded"
        >
          {["Travel", "Business", "Student", "Work", "Medical"].map((v) => (
            <option key={v}>{v} Visa</option>
          ))}
        </select>

        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border p-3 rounded"
        >
          <option>Which Country</option>
          {countries.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <Button variant="white" hoverText="Check Info">
          Check Requirement
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3 justify-center mt-6 flex-wrap">
        <a href="/contact" className="px-4 py-2 bg-black text-white rounded">
          Contact Us
        </a>
        <a
          href="https://wa.me/919217113001"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          WhatsApp
        </a>
        <a href="tel:+919217113001" className="px-4 py-2 bg-yellow-400 rounded">
          Call
        </a>
      </div>
    </section>
  );
}
