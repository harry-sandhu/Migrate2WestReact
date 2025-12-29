import blogimage from "../images/testimonial-author-img3.png";

export type Blog = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  content: string[];
};

export const blogs: Blog[] = [
  {
    title: "How to Apply for a Tourist Visa",
    excerpt:
      "A step-by-step guide to ensure a smooth and successful tourist visa application.",
    image: blogimage,
    slug: "tourist-visa-guide",
    content: [
      "Applying for a tourist visa can feel overwhelming if you’re unfamiliar with the process.",
      "The first step is identifying the correct visa category based on your travel purpose.",
      "Ensure your passport is valid for at least six months beyond your travel date.",
      "Prepare all required documents including financial proof, travel itinerary, and accommodation details.",
      "Once submitted, track your application and attend the visa interview if required.",
      "With expert guidance, the process becomes simpler and stress-free.",
    ],
  },
  {
    title: "Common Reasons Why Visa Applications Get Rejected",
    excerpt:
      "Avoid common mistakes that lead to visa rejection and improve your approval chances.",
    image: blogimage,
    slug: "visa-rejection-reasons",
    content: [
      "Visa rejections often occur due to incomplete or incorrect documentation.",
      "Providing inconsistent information is a major red flag for visa officers.",
      "Insufficient financial proof can also lead to rejection.",
      "A weak travel history or unclear intent may raise concerns.",
      "Ensuring accuracy and honesty greatly improves approval chances.",
    ],
  },
  {
    title: "Student Visa Checklist: Documents You Must Prepare",
    excerpt:
      "An essential checklist of documents required for student visa applications.",
    image: blogimage,
    slug: "student-visa-document-checklist",
    content: [
      "A student visa requires careful preparation of academic documents.",
      "Offer letter from the institution is mandatory.",
      "Financial statements proving tuition and living expenses are crucial.",
      "Health insurance and accommodation proof are often required.",
      "Preparing early helps avoid last-minute stress.",
    ],
  },
];
