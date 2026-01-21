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
      { country: "United States of America", baseCost: 11000, processingDays: "15–30 Days" },
  { country: "Canada", baseCost: 8500, processingDays: "10–20 Days" },

  // Europe (Schengen & UK)
  { country: "United Kingdom", baseCost: 7500, processingDays: "7–15 Days" },
  { country: "France", baseCost: 7000, processingDays: "10–20 Days" },
  { country: "Germany", baseCost: 7200, processingDays: "10–20 Days" },
  { country: "Italy", baseCost: 7000, processingDays: "10–20 Days" },
  { country: "Spain", baseCost: 6800, processingDays: "10–20 Days" },
  { country: "Netherlands", baseCost: 7500, processingDays: "10–20 Days" },
  { country: "Switzerland", baseCost: 8000, processingDays: "10–20 Days" },

  // Asia
  { country: "Japan", baseCost: 6000, processingDays: "7–15 Days" },
  { country: "Singapore", baseCost: 5500, processingDays: "5–10 Days" },
  { country: "Thailand", baseCost: 5000, processingDays: "5–10 Days" },
  { country: "Malaysia", baseCost: 5200, processingDays: "5–10 Days" },

  // Oceania
  { country: "Australia", baseCost: 9000, processingDays: "15–30 Days" },
  { country: "New Zealand", baseCost: 9500, processingDays: "15–30 Days" },

  // Middle East
  { country: "UAE", baseCost: 4000, processingDays: "3–7 Days" },
  { country: "Saudi Arabia", baseCost: 4500, processingDays: "5–10 Days" },
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
      { country: "United States of America", baseCost: 20000, processingDays: "30–60 Days" },
  { country: "Canada", baseCost: 15000, processingDays: "30–45 Days" },

  // Europe
  { country: "United Kingdom", baseCost: 16000, processingDays: "20–40 Days" },
  { country: "Germany", baseCost: 12000, processingDays: "45–60 Days" },
  { country: "Ireland", baseCost: 14000, processingDays: "30–45 Days" },
  { country: "France", baseCost: 13500, processingDays: "30–45 Days" },
  { country: "Netherlands", baseCost: 14500, processingDays: "30–45 Days" },
  { country: "Sweden", baseCost: 13000, processingDays: "30–50 Days" },
  { country: "Finland", baseCost: 12500, processingDays: "30–50 Days" },

  // Oceania
  { country: "Australia", baseCost: 17000, processingDays: "30–60 Days" },
  { country: "New Zealand", baseCost: 16500, processingDays: "30–60 Days" },

  // Asia
  { country: "Japan", baseCost: 11000, processingDays: "30–45 Days" },
  { country: "South Korea", baseCost: 10500, processingDays: "30–45 Days" },
  { country: "Singapore", baseCost: 12000, processingDays: "20–35 Days" },
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
       { country: "United States of America", baseCost: 12000, processingDays: "15–30 Days" },
  { country: "Canada", baseCost: 10000, processingDays: "15–25 Days" },

  // Europe
  { country: "United Kingdom", baseCost: 9000, processingDays: "10–20 Days" },
  { country: "Germany", baseCost: 8500, processingDays: "15–25 Days" },
  { country: "France", baseCost: 8200, processingDays: "15–25 Days" },
  { country: "Italy", baseCost: 8000, processingDays: "15–25 Days" },
  { country: "Spain", baseCost: 7800, processingDays: "15–25 Days" },
  { country: "Netherlands", baseCost: 8800, processingDays: "15–25 Days" },
  { country: "Switzerland", baseCost: 9500, processingDays: "15–30 Days" },

  // Asia
  { country: "Singapore", baseCost: 6500, processingDays: "5–10 Days" },
  { country: "Japan", baseCost: 7500, processingDays: "10–20 Days" },
  { country: "South Korea", baseCost: 7200, processingDays: "10–20 Days" },
  { country: "China", baseCost: 8500, processingDays: "10–20 Days" },

  // Middle East
  { country: "UAE", baseCost: 4500, processingDays: "3–7 Days" },
  { country: "Saudi Arabia", baseCost: 5000, processingDays: "5–10 Days" },
  { country: "Qatar", baseCost: 4800, processingDays: "5–10 Days" },
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
  // Asia (Top medical tourism hubs)
  { country: "India", baseCost: 6000, processingDays: "5–10 Days" },
  { country: "Thailand", baseCost: 7500, processingDays: "7–14 Days" },
  { country: "Singapore", baseCost: 9000, processingDays: "7–15 Days" },
  { country: "Malaysia", baseCost: 8200, processingDays: "7–15 Days" },
  { country: "South Korea", baseCost: 10000, processingDays: "10–20 Days" },

  // Middle East
  { country: "UAE", baseCost: 7000, processingDays: "5–10 Days" },
  { country: "Turkey", baseCost: 8800, processingDays: "10–20 Days" },

  // Europe
  { country: "Germany", baseCost: 12000, processingDays: "15–30 Days" },
  { country: "United Kingdom", baseCost: 14000, processingDays: "15–30 Days" },

  // Americas
  { country: "United States of America", baseCost: 18000, processingDays: "20–45 Days" },
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
  // North America
  { country: "United States of America", baseCost: 25000, processingDays: "6–12 Months" },
  { country: "Canada", baseCost: 18000, processingDays: "2–4 Months" },

  // Europe
  { country: "United Kingdom", baseCost: 22000, processingDays: "2–5 Months" },
  { country: "Germany", baseCost: 16000, processingDays: "3–6 Months" },
  { country: "France", baseCost: 17000, processingDays: "3–6 Months" },
  { country: "Netherlands", baseCost: 17500, processingDays: "3–6 Months" },
  { country: "Sweden", baseCost: 16500, processingDays: "3–6 Months" },
  { country: "Norway", baseCost: 16800, processingDays: "3–6 Months" },

  // Oceania
  { country: "Australia", baseCost: 20000, processingDays: "3–6 Months" },
  { country: "New Zealand", baseCost: 19500, processingDays: "3–6 Months" },

  // Asia
  { country: "Japan", baseCost: 14000, processingDays: "2–4 Months" },
  { country: "South Korea", baseCost: 13500, processingDays: "2–4 Months" },
  { country: "Singapore", baseCost: 15000, processingDays: "2–4 Months" },

  // Middle East
  { country: "UAE", baseCost: 12000, processingDays: "1–3 Months" },
  { country: "Saudi Arabia", baseCost: 13000, processingDays: "1–3 Months" },
  { country: "Qatar", baseCost: 12500, processingDays: "1–3 Months" },
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
    /* ---------- VISITOR VISA ---------- */
  visitor: {
    title: "Visitor (Family / Friend) Visa",
    shortDesc:
      "Visit your family members or friends living abroad for a short duration.",

    supportedCountries: [
      { country: "Canada", baseCost: 9000, processingDays: "15–30 Days" },
      { country: "United Kingdom", baseCost: 8000, processingDays: "10–20 Days" },
      { country: "Australia", baseCost: 9500, processingDays: "20–35 Days" },
      { country: "United States", baseCost: 11000, processingDays: "15–30 Days" },
      { country: "Germany", baseCost: 8500, processingDays: "15–25 Days" },
      
  { country: "Canada", baseCost: 9000, processingDays: "15–30 Days" },

  // Europe
  { country: "United Kingdom", baseCost: 8000, processingDays: "10–20 Days" },
  { country: "Germany", baseCost: 8500, processingDays: "15–25 Days" },
  { country: "France", baseCost: 7800, processingDays: "15–25 Days" },
  { country: "Italy", baseCost: 7600, processingDays: "15–25 Days" },
  { country: "Spain", baseCost: 7400, processingDays: "15–25 Days" },
  { country: "Netherlands", baseCost: 8200, processingDays: "15–25 Days" },
  { country: "Switzerland", baseCost: 8800, processingDays: "15–30 Days" },

  // Asia
  { country: "Japan", baseCost: 6500, processingDays: "10–20 Days" },
  { country: "South Korea", baseCost: 6200, processingDays: "10–20 Days" },
  { country: "Singapore", baseCost: 5800, processingDays: "5–10 Days" },
  { country: "Malaysia", baseCost: 5600, processingDays: "5–10 Days" },

  // Oceania
  { country: "Australia", baseCost: 9500, processingDays: "20–35 Days" },
  { country: "New Zealand", baseCost: 9800, processingDays: "20–35 Days" },

  // Middle East
  { country: "UAE", baseCost: 4200, processingDays: "3–7 Days" },
  { country: "Saudi Arabia", baseCost: 4800, processingDays: "5–10 Days" },
    ],

    entryType: "Single / Multiple",
    validity: "Up to 6 months (varies by country)",

    eligibility: {
      ageLimit: "18+",
      workAllowed: false,
      spouseAllowed: false,
      dependentAllowed: false,
    },

    additionalCosts: {
      perPerson: 1500,
      expressProcessing: 3500,
    },

    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Invitation letter from host (family or friend)",
      "Proof of relationship (if applicable)",
      "Host’s residence permit / passport copy",
      "Proof of accommodation",
      "Proof of sufficient funds",
      "Return flight tickets",
      "Travel insurance",
    ],

    processSteps: [
      "Invitation & document verification",
      "Application submission",
      "Biometrics appointment",
      "Embassy processing",
      "Visa decision",
    ],

    costNotes: [
      "Embassy fees are not included",
      "Invitation requirements vary by country",
    ],

    faqs: [
      {
        q: "Can I work on a visitor visa?",
        a: "No, visitor visas strictly prohibit employment or business activities.",
      },
      {
        q: "Is an invitation letter mandatory?",
        a: "Yes, most countries require an invitation from the host.",
      },
      {
        q: "Can visitor visas be extended?",
        a: "Extensions depend on country rules and are not guaranteed.",
      },
    ],

    countryNotes: [
      {
        country: "Canada",
        notes: [
          "Host must provide proof of legal status",
          "Financial sponsorship may be required",
        ],
      },
      {
        country: "United Kingdom",
        notes: [
          "Strong ties to home country must be demonstrated",
        ],
      },
    ],
  },

};
