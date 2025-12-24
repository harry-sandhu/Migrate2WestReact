export default function Features() {
  const features = [
    {
      title: "99% Approval Rate",
      text: "Fast & Hassle-Free Visa Processing",
    },
    {
      title: "Processing in 48 Hours",
      text: "Get your visa approved within 48 hours",
    },
    {
      title: "Global Visa Experts",
      text: "Trusted experts for 100+ countries",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Trust Badges & Highlights
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="text-center max-w-[310px] mx-auto"
          >
            <div className="h-12 w-12 bg-blue-600 mx-auto mb-6 rounded-full" />
            <h4 className="font-semibold mb-2">{f.title}</h4>
            <p className="text-gray-600">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
