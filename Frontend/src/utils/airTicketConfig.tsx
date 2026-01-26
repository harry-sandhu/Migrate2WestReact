export const airTicketConfig = {
  domestic: {
    title: "Domestic Air Tickets",
    description:
      "Book affordable and convenient flights across India with trusted airlines.",
    showFlightForm: true,
    showRescheduleForm: false,
    serviceFee: 500,
  },

  international: {
    title: "International Air Tickets",
    description:
      "Fly worldwide with competitive fares and end-to-end booking support.",
    showFlightForm: true,
    showRescheduleForm: false,
    serviceFee: 800,
    
  },

  group: {
    title: "Group Bookings",
    description:
      "Special assistance and pricing for group and corporate travel.",
    showFlightForm: true,
    showRescheduleForm: false,
    serviceFee: 1000,
  },

  "reschedule-cancellation": {
    title: "Flight Rescheduling & Cancellation",
    description:
      "Support for rescheduling, cancellations, and refund processing.",
    showFlightForm: false,
    showRescheduleForm: true,
    serviceFee: 500,
  },
} as const;
