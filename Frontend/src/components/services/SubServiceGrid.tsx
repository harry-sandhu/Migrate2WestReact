import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

type SubService = {
  title: string;
  desc: string;
  href?: string;
  active?: boolean;
};

type Props = {
  services: SubService[];
};

export default function SubServiceGrid({ services }: Props) {
  // First card selected by default
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Ambient background */}
      <div className="absolute -top-40 right-0 w-[30rem] h-[30rem] bg-blue-100/60 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-40 w-[26rem] h-[26rem] bg-indigo-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => {
            const isSelected = index === selectedIndex;

            return (
              <div
                key={item.title}
                onClick={() => setSelectedIndex(index)}
                className={`group relative rounded-3xl p-7 transition-all duration-300 cursor-pointer
                  ${
                    isSelected
                      ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl"
                      : "bg-white/80 backdrop-blur border border-gray-100 hover:-translate-y-1 hover:shadow-xl"
                  }`}
              >
                {/* Icon */}
                <div
                  className={`h-12 w-12 rounded-xl mb-6 flex items-center justify-center
                    ${
                      isSelected
                        ? "bg-white/20"
                        : "bg-blue-50 text-blue-600"
                    }`}
                >
                  <div className="h-3 w-3 rounded-full bg-current opacity-80" />
                </div>

                <h4 className="text-lg font-semibold mb-3">
                  {item.title}
                </h4>

                <p
                  className={`text-sm mb-8 leading-relaxed ${
                    isSelected ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {item.desc}
                </p>

                {/* CTA */}
                {item.href &&(
                <Link
                  to={item.href}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    variant="white"
                    className="w-full bg-white text-blue-700 hover:bg-gray-100"
                  >
                    Apply Now →
                  </Button>
                </Link>)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
