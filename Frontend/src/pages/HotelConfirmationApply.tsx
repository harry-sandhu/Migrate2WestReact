import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import useServiceData from "../hooks/useServiceData";

import PageBanner from "../components/ui/PageBanner";
import ApplicationForm from "../components/forms/ApplicationForm";
import HotelStayForm from "../components/forms/HotelStayFprm";
import PaymentCTA from "../components/passport/PaymentCTA";

import { hotelConfirmationConfig } from "../utils/hotelConfirmationConfig";
import aboutImg from "../assets/images/About-Us-Page.webp";
export default function HotelConfirmationApply() {
  const { slug } = useParams<{ slug: keyof typeof hotelConfirmationConfig }>();

  const { data, loading, error } = useServiceData();

  // ✅ MOVE HOOKS UP
  const [applicant, setApplicant] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [hotel, setHotel] = useState({
    city: "",
    country: "",
    checkIn: "",
    checkOut: "",
    rooms: 1,
    guests: 1,
    notes: "",
  });

  // ✅ NOW CONDITIONS
  if (!slug) {
    return <Navigate to="/hotel-confirmation" replace />;
  }

  const config = hotelConfirmationConfig[slug];

  if (!config) {
    return <Navigate to="/hotel-confirmation" replace />;
  }

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-center">{error}</div>;

  // 🔥 MAP SLUG → BACKEND KEY
  const keyMap: any = {
    "visa-purpose": "visaPurpose",
    "dummy-booking": "dummyBooking",
    international: "international",
    "group-long-stay": "groupLongStay",
  };

  const backendKey = keyMap[slug];

  const dynamicFee =
    data?.hotelConfirmation?.[backendKey]?.serviceFee;

  const finalConfig = {
    ...config,
    serviceFee: dynamicFee ?? config.serviceFee,
  };

  const applicantValid =
    applicant.name.trim().length > 1 &&
    applicant.phone.trim().length >= 10 &&
    applicant.email.includes("@");

  const hotelValid =
    hotel.city &&
    hotel.country &&
    hotel.checkIn &&
    hotel.checkOut &&
    hotel.rooms >= 1 &&
    hotel.guests >= 1;

  const isValid = applicantValid && hotelValid;

  return (
    <div className="min-h-screen bg-[#f7f9fc]">

      <PageBanner
        title={finalConfig.title}
        bgImage={aboutImg}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Hotel Confirmation", href: "/hotel-confirmation" },
          { label: finalConfig.title },
        ]}
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600">
              {finalConfig.description}
            </p>
          </div>

          <ApplicationForm
            title="Contact Details"
            subtitle="We’ll contact you once your hotel confirmation is prepared"
            value={applicant}
            onChange={(field, value) =>
              setApplicant({ ...applicant, [field]: value })
            }
          />

          <HotelStayForm
            value={hotel}
            onChange={(field, value) =>
              setHotel({ ...hotel, [field]: value })
            }
          />

          <PaymentCTA
            disabled={!isValid}
            state={{
  serviceType: "hotel-confirmation",
  serviceName: "Hotel Confirmation",
  subServiceName: finalConfig.title,
  applicant,
  hotelDetails: hotel,

  // ✅ required for backend (no real slot needed)
  selectedSlot: "no-slot",

  breakdown: {
    basePrice: finalConfig.serviceFee,
  },
  totalAmount: finalConfig.serviceFee,
}}
          />

          {!isValid && (
            <p className="text-center text-sm text-red-500">
              Please fill all required details to continue
            </p>
          )}
        </div>
      </section>
    </div>
  );
}