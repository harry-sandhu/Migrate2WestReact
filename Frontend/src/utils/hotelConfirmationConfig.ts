export const hotelConfirmationConfig = {
  "visa-purpose": {
    title: "Visa Purpose Hotel Confirmation",
    description:
      "Hotel booking confirmation accepted for visa and embassy submissions.",
    showStayDetails: true,
    requiresPassportInfo: true,
    serviceFee: 1500,
  },

  "dummy-booking": {
    title: "Dummy Hotel Booking",
    description:
      "Temporary hotel reservation for visa application and documentation needs.",
    showStayDetails: true,
    requiresPassportInfo: false,
    serviceFee: 1200,
  },

  "international": {
    title: "International Hotel Booking",
    description:
      "Confirmed hotel bookings for international travel plans.",
    showStayDetails: true,
    requiresPassportInfo: true,
    serviceFee: 2500,
  },

  "group-long-stay": {
    title: "Group & Long-Stay Booking",
    description:
      "Hotel confirmations for group travel and extended stays.",
    showStayDetails: true,
    requiresPassportInfo: false,
    serviceFee: 3000,
  },
} as const;
