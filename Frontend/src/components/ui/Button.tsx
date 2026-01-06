import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "black" | "white" | "gold";

interface ButtonProps {
  children: ReactNode;
  hoverText?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean; 
}

export default function Button({
  children,
  hoverText,
  variant = "primary",
  className,
  type = "button",
  disabled = false, 
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 \
     text-sm font-semibold tracking-wide transition-all duration-200 ease-out \
     focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 \
     active:translate-y-[1px] active:scale-[0.97]";

  const disabledStyles =
    "opacity-50 cursor-not-allowed pointer-events-none";

  const variants = {
    primary:
      "bg-[#0b3c91] text-white \
       hover:bg-[#0a3278] \
       shadow-sm hover:shadow-md \
       focus-visible:ring-[#0b3c91]",

    black:
      "bg-[#111827] text-white \
       hover:bg-black \
       shadow-sm hover:shadow-md \
       focus-visible:ring-[#111827]",

    white:
      "bg-white text-gray-900 border border-gray-200 \
       hover:bg-gray-50 \
       shadow-sm \
       focus-visible:ring-gray-400",

    gold:
      "bg-[#c9a24d] text-gray-900 \
       hover:bg-[#b8923e] \
       shadow-sm hover:shadow-md \
       focus-visible:ring-[#c9a24d]",
  };

  return (
    <button
      type={type}
      disabled={disabled} 
      className={clsx(
        base,
        variants[variant],
        disabled && disabledStyles, 
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {hoverText && (
        <span className="sr-only xl:not-sr-only xl:ml-2 xl:text-xs xl:opacity-70">
          {hoverText}
        </span>
      )}
    </button>
  );
}
