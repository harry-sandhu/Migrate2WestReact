/* ----------------------------------
   Visa Types & Models
---------------------------------- */

export type CountryCost = {
  country: string;
  baseCost: number; // INR
  processingDays: string;
};

export type VisaDetail = {
  title: string;
  shortDesc: string;

  supportedCountries: CountryCost[];

  entryType: string;
  validity: string;

  eligibility: {
    ageLimit?: string;
    workAllowed?: boolean;
    spouseAllowed?: boolean;
    dependentAllowed?: boolean;
  };

  additionalCosts: {
    perPerson: number;
    expressProcessing?: number;
  };

  requirements: string[];

  processSteps: string[];

  costNotes?: string[];

  faqs?: {
    q: string;
    a: string;
  }[];

  countryNotes?: {
    country: string;
    notes: string[];
  }[];
};

/* ----------------------------------
   Visa Details
---------------------------------- */

export const visaDetails: Record<string, VisaDetail> = {
  /* ---------- TOURIST VISA ---------- */
  tourist: {
    title: "Tourist Visa",
    shortDesc:
      "Travel abroad for leisure, sightseeing, or visiting friends and family.",

    supportedCountries: [
      { country: "Canada", baseCost: 8500, processingDays: "10–20 Days" },
      { country: "Australia", baseCost: 9000, processingDays: "15–30 Days" },
      { country: "United Kingdom", baseCost: 7500, processingDays: "7–15 Days" },
      { country: "France", baseCost: 7000, processingDays: "10–20 Days" },
    ],

    entryType: "Single / Multiple",
    validity: "Up to 6 months",

    eligibility: {
      ageLimit: "18+",
      workAllowed: false,
      spouseAllowed: true,
      dependentAllowed: true,
    },

    additionalCosts: {
      perPerson: 1500,
      expressProcessing: 3000,
    },

    requirements: [
      "Valid passport (6+ months validity)",
      "Passport-size photographs",
      "Travel itinerary",
      "Hotel booking or invitation letter",
      "Proof of funds",
      "Return flight tickets",
    ],

    processSteps: [
      "Document verification",
      "Application submission",
      "Biometrics appointment",
      "Embassy processing",
      "Visa decision",
    ],

    costNotes: [
      "Embassy fees are not included",
      "Express processing subject to availability",
    ],

    faqs: [
      {
        q: "Can I work on a tourist visa?",
        a: "No, employment is strictly prohibited on a tourist visa.",
      },
      {
        q: "Is a return ticket mandatory?",
        a: "Yes, most embassies require proof of return or onward travel.",
      },
    ],
  },

  /* ---------- STUDENT VISA ---------- */
  student: {
    title: "Student Visa",
    shortDesc:
      "Study abroad at recognized universities and educational institutions.",

    supportedCountries: [
      { country: "Canada", baseCost: 15000, processingDays: "30–45 Days" },
      { country: "Australia", baseCost: 17000, processingDays: "30–60 Days" },
      { country: "Germany", baseCost: 12000, processingDays: "45–60 Days" },
      { country: "United Kingdom", baseCost: 16000, processingDays: "20–40 Days" },
    ],

    entryType: "Multiple",
    validity: "Course Duration",

    eligibility: {
      ageLimit: "18–45",
      workAllowed: true,
      spouseAllowed: true,
      dependentAllowed: true,
    },

    additionalCosts: {
      perPerson: 2500,
      expressProcessing: 5000,
    },

    requirements: [
      "University offer letter",
      "Academic transcripts",
      "Proof of funds",
      "Language proficiency (IELTS / TOEFL)",
      "Valid passport",
      "Medical & police clearance",
    ],

    processSteps: [
      "University admission confirmation",
      "Financial proof verification",
      "Visa application submission",
      "Biometrics",
      "Visa decision",
    ],

    countryNotes: [
      {
        country: "Germany",
        notes: ["Blocked account is mandatory"],
      },
      {
        country: "Canada",
        notes: ["GIC account required"],
      },
    ],

    faqs: [
      {
        q: "Can students work part-time?",
        a: "Yes, most countries allow limited part-time work during studies.",
      },
    ],
  },

  /* ---------- BUSINESS VISA ---------- */
  business: {
    title: "Business Visa",
    shortDesc:
      "Attend meetings, conferences, and business-related activities abroad.",

    supportedCountries: [
      { country: "USA", baseCost: 12000, processingDays: "15–30 Days" },
      { country: "UK", baseCost: 9000, processingDays: "10–20 Days" },
      { country: "Germany", baseCost: 8500, processingDays: "15–25 Days" },
    ],

    entryType: "Single / Multiple",
    validity: "Short Term",

    eligibility: {
      workAllowed: false,
      spouseAllowed: false,
      dependentAllowed: false,
    },

    additionalCosts: {
      perPerson: 2000,
    },

    requirements: [
      "Invitation letter from host company",
      "Business cover letter",
      "Company registration documents",
      "Travel itinerary",
      "Bank statements",
    ],

    processSteps: [
      "Invitation verification",
      "Application submission",
      "Biometrics",
      "Visa processing",
      "Decision",
    ],
  },

  /* ---------- WORK VISA ---------- */
  work: {
    title: "Work Visa",
    shortDesc:
      "Work legally abroad with sponsorship from an overseas employer.",

    supportedCountries: [
      { country: "Canada", baseCost: 25000, processingDays: "2–4 Months" },
      { country: "Australia", baseCost: 28000, processingDays: "3–6 Months" },
      { country: "Germany", baseCost: 22000, processingDays: "2–5 Months" },
    ],

    entryType: "Multiple",
    validity: "Job Contract Duration",

    eligibility: {
      workAllowed: true,
      spouseAllowed: true,
      dependentAllowed: true,
    },

    additionalCosts: {
      perPerson: 4000,
    },

    requirements: [
      "Employment contract",
      "Work permit approval",
      "Educational certificates",
      "Medical examination",
      "Police clearance",
    ],

    processSteps: [
      "Employer sponsorship",
      "Work permit approval",
      "Visa application",
      "Biometrics",
      "Final decision",
    ],
  },

  /* ---------- MEDICAL VISA ---------- */
  medical: {
    title: "Medical Visa",
    shortDesc:
      "Travel abroad for medical treatment at recognized hospitals.",

    supportedCountries: [
      { country: "India", baseCost: 6000, processingDays: "5–10 Days" },
      { country: "Thailand", baseCost: 7500, processingDays: "7–14 Days" },
    ],

    entryType: "Single",
    validity: "Treatment Period",

    eligibility: {
      workAllowed: false,
      spouseAllowed: true,
      dependentAllowed: true,
    },

    additionalCosts: {
      perPerson: 1000,
    },

    requirements: [
      "Medical reports",
      "Hospital appointment letter",
      "Proof of funds",
      "Passport & photographs",
    ],

    processSteps: [
      "Medical document review",
      "Hospital confirmation",
      "Visa submission",
      "Fast-track approval",
    ],
  },

  /* ---------- SPOUSE / DEPENDENT VISA ---------- */
  spouse: {
    title: "Spouse / Dependent Visa",
    shortDesc:
      "Join your spouse or dependent family member who is legally residing abroad.",

    supportedCountries: [
      { country: "Canada", baseCost: 18000, processingDays: "2–4 Months" },
      { country: "Australia", baseCost: 20000, processingDays: "3–6 Months" },
      { country: "United Kingdom", baseCost: 22000, processingDays: "2–5 Months" },
      { country: "Germany", baseCost: 16000, processingDays: "3–6 Months" },
      { country: "United States", baseCost: 25000, processingDays: "6–12 Months" },
    ],

    entryType: "Multiple",
    validity: "Same as Primary Visa Holder",

    eligibility: {
      workAllowed: true,
      spouseAllowed: true,
      dependentAllowed: true,
    },

    additionalCosts: {
      perPerson: 3000,
      expressProcessing: 6000,
    },

    requirements: [
      "Valid passport",
      "Marriage certificate",
      "Proof of relationship",
      "Spouse’s visa & residence permit",
      "Proof of accommodation",
      "Medical examination",
      "Police clearance",
    ],

    processSteps: [
      "Relationship verification",
      "Application submission",
      "Biometrics",
      "Background checks",
      "Visa decision",
    ],

    faqs: [
      {
        q: "Can I work on a spouse visa?",
        a: "Yes, many countries allow full-time work for spouse visa holders.",
      },
      {
        q: "Does spouse visa processing take longer?",
        a: "Yes, it usually takes longer due to relationship verification.",
      },
    ],
  },
};
