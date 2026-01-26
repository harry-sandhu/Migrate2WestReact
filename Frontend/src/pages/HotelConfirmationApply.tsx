import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import PageBanner from "../components/ui/PageBanner";
import ApplicationForm from "../components/forms/ApplicationForm";
import HotelStayForm from "../components/forms/HotelStayFprm";
import PaymentCTA from "../components/passport/PaymentCTA";

import { hotelConfirmationConfig } from "../utils/hotelConfirmationConfig";

export default function HotelConfirmationApply() {
  const { slug } = useParams<{ slug: keyof typeof hotelConfirmationConfig }>();
  const config = slug ? hotelConfirmationConfig[slug] : null;

  if (!config) {
    return <Navigate to="/hotel-confirmation" replace />;
  }

  /* APPLICANT */
  const [applicant, setApplicant] = useState({
    name: "",
    phone: "",
    email: "",
  });

  /* HOTEL DETAILS */
  const [hotel, setHotel] = useState({
    city: "",
    country: "",
    checkIn: "",
    checkOut: "",
    rooms: 1,
    guests: 1,
    notes: "",
  });

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
        title={config.title}
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Hotel Confirmation", href: "/hotel-confirmation" },
          { label: config.title },
        ]}
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          {/* INTRO */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600">
              {config.description}
            </p>
          </div>

          {/* CONTACT FORM */}
          <ApplicationForm
            title="Contact Details"
            subtitle="We’ll contact you once your hotel confirmation is prepared"
            value={applicant}
            onChange={(field, value) =>
              setApplicant({ ...applicant, [field]: value })
            }
          />

          {/* HOTEL DETAILS */}
          <HotelStayForm
            value={hotel}
            onChange={(field, value) =>
              setHotel({ ...hotel, [field]: value })
            }
          />

          {/* PAYMENT */}
          <PaymentCTA
            disabled={!isValid}
            state={{
              serviceType: "hotel-confirmation",
              serviceName: "Hotel Confirmation",
              subServiceName: config.title,

              applicant,
              hotelDetails: hotel,

              breakdown: {
                basePrice: config.serviceFee,
              },

              totalAmount: config.serviceFee,
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
