 import { useState } from "react";
import Button from "../ui/Button";
import { countries } from "../../assets/data/countries";
import Lottie from "lottie-react";
import flightMap from "../../assets/Flight_map.json";
import { useNavigate } from "react-router-dom";
import { FaPaperPlane, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Hero() {
  const [citizen, setCitizen] = useState("");
  const [visa, setVisa] = useState("");
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  const ICON_CLASS = "w-5 h-5 shrink-0";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      
      {/* 🔵 LOTTIE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Lottie
          animationData={flightMap}
          loop
          autoplay
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* 🔵 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid gap-16 lg:grid-cols-2 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full">
            Trusted Visa Assistance
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-blue-600">
            Fast & Hassle-Free <br />
            <span className="text-blue-600">Visa Processing</span>
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 text-lg">
            Expert-led visa solutions with fast processing, accurate documentation, and global coverage.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
  <Button
  variant="primary"
  className="px-8 inline-flex items-center gap-2"
>
  <FaPaperPlane className={ICON_CLASS} />
  Apply Now
</Button>


  <a
  href="https://wa.me/919217113001"
  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 transition shadow-md"
>
  <FaWhatsapp className="w-7 h-7 shrink-0" />
  WhatsApp Expert
</a>


  <Button
  variant="primary"
  className="px-8 py-3 inline-flex items-center justify-center gap-2 min-w-[220px]"
  onClick={() => (window.location.href = "tel:+919217113001")}
>
  <FaPhone className={ICON_CLASS} />
  <span className="whitespace-nowrap">Contact Us</span>
</Button>




</div>

        </div>

        {/* Right Filter Card */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 grid gap-5 md:grid-cols-2">
            
            <select
              value={citizen}
              onChange={(e) => setCitizen(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Your Citizenship</option>
              {countries.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
  value={visa}
  onChange={(e) => setVisa(e.target.value)}
  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
>
  <option value="">Visa Type</option>
  <option value="tourist">Tourist Visa</option>
  <option value="business">Business Visa</option>
  <option value="student">Student Visa</option>
  <option value="work">Work Visa</option>
  <option value="medical">Medical Visa</option>
  <option value="visitor">Visitor (Family / Friend)</option>
  <option value="spouse">Dependent (Spouse / Children)</option>
  <option value="other">Other Visa Type</option>
</select>


            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none md:col-span-2"
            >
              <option value="">Destination Country</option>
              {countries.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <div className="md:col-span-2">
              <Button
  variant="primary"
  className="w-full py-4 text-base"
  onClick={() => {
    if (!visa) {
      alert("Please select a visa type");
      return;
    }

    if (visa === "other") {
      navigate("/contact");
    } else {
      navigate(`/visa/${visa}`);
    }
  }}
>
  Check Visa Requirements
</Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
