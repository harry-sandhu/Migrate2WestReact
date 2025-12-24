import clsx from "clsx";

type ButtonVariant = "primary" | "black" | "white" | "gold";

interface ButtonProps {
  children: string;
  hoverText?: string;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  children,
  hoverText,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center overflow-hidden rounded-xl px-6 py-5 font-semibold text-sm tracking-wide transition-all duration-300";

  const variants = {
    primary: "bg-blue-600 text-white",
    black: "bg-black text-white",
    white: "bg-[#de9803] text-title",
    gold: "bg-[#1d6bd5] text-white",
  };

  const hoverBg = {
    primary: "after:bg-black",
    black: "after:bg-blue-600",
    white: "after:bg-blue-600",
    gold: "after:bg-blue-600",
  };

  return (
    <button
      className={clsx(
        base,
        variants[variant],
        "after:absolute after:inset-0 after:translate-y-full after:transition-transform after:duration-500 after:content-[''] hover:after:translate-y-0",
        hoverBg[variant],
        className
      )}
    >
      {/* Default text */}
      <span className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-[150%] hover:opacity-0">
        {children}
      </span>

      {/* Hover text */}
      {hoverText && (
        <span className="absolute flex items-center gap-2 translate-y-full opacity-0 transition-all duration-300 hover:translate-y-0 hover:opacity-100">
          {hoverText}
        </span>
      )}
    </button>
  );
}
