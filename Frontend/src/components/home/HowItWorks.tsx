const steps = [
  {
    step: 1,
    title: "Apply Online",
    desc: "Fill your application online — fast, secure & error-checked.",
    image: "/assets/images/1.png",
  },
  {
    step: 2,
    title: "Mail Documents",
    desc: "Send your documents — no consulate lines, we handle it.",
    image: "/assets/images/1.png",
  },
  {
    step: 3,
    title: "Receive Visa",
    desc: "Track progress — receive your visa fast and hassle-free.",
    image: "/assets/images/1.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-14">
          How Does Migrate2West Work?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {s.step}
              </div>
              <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-24 mx-auto mb-4"
                />
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
