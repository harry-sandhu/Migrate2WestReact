import mongoose, { Schema, Document } from "mongoose";

export interface IServiceData extends Document {
  passportFresh: {
    normal: { adult: number; child: number };
    express: { adult: number; child: number };
    consultation: number;
  };

  passportRenewal: {
    normal: { adult: number; child: number };
    express: { adult: number; child: number };
    consultation: number;
  };

  passportLost: {
    normal: { adult: number; child: number };
    express: { adult: number; child: number };
    consultation: number;
  };

  passportDamaged: {
    normal: {
      adult: { minor: number; major: number };
      child: { minor: number; major: number };
    };
    express: {
      adult: { minor: number; major: number };
      child: { minor: number; major: number };
    };
    consultation: number;
  };

  visaPricing: any;

  hotelConfirmation: {
    visaPurpose: { serviceFee: number };
    dummyBooking: { serviceFee: number };
    international: { serviceFee: number };
    groupLongStay: { serviceFee: number };
  };

  airTicket: {
    domestic: { serviceFee: number };
    international: { serviceFee: number };
    group: { serviceFee: number };
    rescheduleCancellation: { serviceFee: number };
  };

  travelInsurance: {
    international: { serviceFee: number };
    domestic: { serviceFee: number };
    student: { serviceFee: number };
    seniorCitizen: { serviceFee: number };
  };

  tourPackages: {
    domestic: { serviceFee: number };
    international: { serviceFee: number };
  };

  jobAssistance: {
    resume: { serviceFee: number };
    "cover-letter": { serviceFee: number };
    interview: { serviceFee: number };
    marketing: { serviceFee: number };
    counseling: { serviceFee: number };
  };

  careerCounseling: {
    "young-professional": { serviceFee: number };
    "experienced-professional": { serviceFee: number };
  };

  permanentResidence: {
    canada: { serviceFee: number };
    australia: { serviceFee: number };
    assessment: { serviceFee: number };
    consultation: { serviceFee: number };
  };

  frro: {
    registration: { serviceFee: number };
    "visa-extension": { serviceFee: number };
    "exit-permit": { serviceFee: number };
    "change-details": { serviceFee: number };
  };

  meetAssist: {
    arrival: { serviceFee: number };
    departure: { serviceFee: number };
    transit: { serviceFee: number };
  };

  coaching: {
    ielts: { serviceFee: number };
    pte: { serviceFee: number };
    celpip: { serviceFee: number };
    "gre-gmat-sat": { serviceFee: number };
    oet: { serviceFee: number };
    french: { serviceFee: number };
    german: { serviceFee: number };
  };

  oci: {
    new: { serviceFee: number };
    renewal: { serviceFee: number };
    misc: { serviceFee: number };
    "visa-assistance": { serviceFee: number };
  };

  studyAbroad: {
    "country-selection": { serviceFee: number };
    "university-shortlisting": { serviceFee: number };
    "sop-lor": { serviceFee: number };
    application: { serviceFee: number };
    "offer-letter": { serviceFee: number };
    visa: { serviceFee: number };
    loan: { serviceFee: number };
    "pre-departure": { serviceFee: number };
  };
}

const num = { type: Number, default: 0 };

const ServiceDataSchema = new Schema<IServiceData>({
  passportFresh: {
    normal: { adult: num, child: num },
    express: { adult: num, child: num },
    consultation: num,
  },

  passportRenewal: {
    normal: { adult: num, child: num },
    express: { adult: num, child: num },
    consultation: num,
  },

  passportLost: {
    normal: { adult: num, child: num },
    express: { adult: num, child: num },
    consultation: num,
  },

  passportDamaged: {
    normal: {
      adult: { minor: num, major: num },
      child: { minor: num, major: num },
    },
    express: {
      adult: { minor: num, major: num },
      child: { minor: num, major: num },
    },
    consultation: num,
  },

  visaPricing: Schema.Types.Mixed,

  hotelConfirmation: {
    visaPurpose: { serviceFee: num },
    dummyBooking: { serviceFee: num },
    international: { serviceFee: num },
    groupLongStay: { serviceFee: num },
  },

  airTicket: {
    domestic: { serviceFee: num },
    international: { serviceFee: num },
    group: { serviceFee: num },
    rescheduleCancellation: { serviceFee: num },
  },

  travelInsurance: {
    international: { serviceFee: num },
    domestic: { serviceFee: num },
    student: { serviceFee: num },
    seniorCitizen: { serviceFee: num },
  },

  tourPackages: {
    domestic: { serviceFee: num },
    international: { serviceFee: num },
  },

  jobAssistance: {
    resume: { serviceFee: num },
    "cover-letter": { serviceFee: num },
    interview: { serviceFee: num },
    marketing: { serviceFee: num },
    counseling: { serviceFee: num },
  },

  careerCounseling: {
    "young-professional": { serviceFee: num },
    "experienced-professional": { serviceFee: num },
  },

  permanentResidence: {
    canada: { serviceFee: num },
    australia: { serviceFee: num },
    assessment: { serviceFee: num },
    consultation: { serviceFee: num },
  },

  frro: {
    registration: { serviceFee: num },
    "visa-extension": { serviceFee: num },
    "exit-permit": { serviceFee: num },
    "change-details": { serviceFee: num },
  },

  meetAssist: {
    arrival: { serviceFee: num },
    departure: { serviceFee: num },
    transit: { serviceFee: num },
  },

  coaching: {
    ielts: { serviceFee: num },
    pte: { serviceFee: num },
    celpip: { serviceFee: num },
    "gre-gmat-sat": { serviceFee: num },
    oet: { serviceFee: num },
    french: { serviceFee: num },
    german: { serviceFee: num },
  },

  oci: {
    new: { serviceFee: num },
    renewal: { serviceFee: num },
    misc: { serviceFee: num },
    "visa-assistance": { serviceFee: num },
  },

  studyAbroad: {
    "country-selection": { serviceFee: num },
    "university-shortlisting": { serviceFee: num },
    "sop-lor": { serviceFee: num },
    application: { serviceFee: num },
    "offer-letter": { serviceFee: num },
    visa: { serviceFee: num },
    loan: { serviceFee: num },
    "pre-departure": { serviceFee: num },
  },
});

export default mongoose.model<IServiceData>(
  "ServiceData",
  ServiceDataSchema
);