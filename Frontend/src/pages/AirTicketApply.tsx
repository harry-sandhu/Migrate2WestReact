import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import PageBanner from "../components/ui/PageBanner";
import ApplicationForm from "../components/forms/ApplicationForm";
import FlightDetailsForm from "../components/forms/FlightDetailsForm";
import PaymentCTA from "../components/passport/PaymentCTA";

import { airTicketConfig } from "../utils/airTicketConfig";

type ServiceType = "domestic" | "international" | "group";

export default function AirTicketApply() {
  const { slug } = useParams<{ slug: keyof typeof airTicketConfig }>();

  if (!slug) {
    return <Navigate to="/air-tickets" replace />;
  }

  const config = airTicketConfig[slug];

  /* APPLICATION FORM */
  const [applicant, setApplicant] = useState({
    name: "",
    phone: "",
    email: "",
  });

  /* FLIGHT FORM */
  const [flight, setFlight] = useState({
    fromCountry: "",
    toCountry: "",

    fromAirport: "",
    toAirport: "",
    layoverAirport: "",

    tripType: "one-way" as "one-way" | "round-trip",
    departureDate: "",
    returnDate: "",

    adults: 1,
    children: 0,
    infants: 0,

    notes: "",
  });

  const applicantValid =
    applicant.name.trim().length > 1 &&
    applicant.phone.trim().length >= 10 &&
    applicant.email.includes("@");

  const flightValid = config.showFlightForm
    ? flight.fromCountry &&
      flight.fromAirport &&
      flight.toAirport &&
      flight.departureDate &&
      flight.adults >= 1
    : true;

  const isValid = applicantValid && flightValid;

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <PageBanner
        title={config.title}
        bgImage="/images/About-Us-Page.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Air Tickets", href: "/air-tickets" },
          { label: config.title },
        ]}
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {/* DESCRIPTION */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600">{config.description}</p>
            
          </div>

          {/* APPLICATION FORM */}
          <ApplicationForm
            title="Contact Details"
            subtitle="We’ll use this information to contact you"
            value={applicant}
            onChange={(field, value) =>
              setApplicant((prev) => ({
                ...prev,
                [field]: value,
              }))
            }
          />

          {/* FLIGHT FORM */}
          {config.showFlightForm && (
            <FlightDetailsForm
              serviceType={slug as ServiceType}
              value={flight}
              onChange={(field, value) =>
                setFlight((prev) => ({
                  ...prev,
                  [field]: value,
                }))
              }
            />
          )}

          {/* PAYMENT */}
          <PaymentCTA
            disabled={!isValid}
            state={{
              serviceType: "air-ticket",
              serviceName: "Air Tickets",
              subServiceName: config.title,

              applicant,
              flightDetails: flight,

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
