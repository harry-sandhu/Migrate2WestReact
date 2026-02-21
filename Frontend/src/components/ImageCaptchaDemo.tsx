import { useState } from "react";

interface Props {
  onVerified: () => void;
}

const images = Array.from({ length: 9 }).map(
  (_, i) => `https://picsum.photos/seed/${i}/120/120`
);

export default function ImageCaptchaDemo({ onVerified }: Props) {
  const [selected, setSelected] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const toggle = (i: number) => {
    if (verified || loading) return;

    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const handleVerify = async () => {
    if (selected.length === 0) return;

    setLoading(true);

    // fake delay like real captcha
    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);
    setVerified(true);
    onVerified();
  };

  return (
    <div className="border rounded-xl p-4 space-y-4 bg-white">
      <p className="text-sm font-medium">
        Select all images with <b>motorcycles</b>
      </p>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            className={`relative cursor-pointer border ${
              selected.includes(i) ? "border-blue-500" : "border-gray-200"
            }`}
          >
            <img src={src} className="w-full h-24 object-cover" />

            {selected.includes(i) && (
              <div className="absolute inset-0 bg-blue-500/30" />
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={handleVerify}
        disabled={loading || verified}
        className="w-full py-2 rounded bg-blue-600 text-white disabled:opacity-50"
      >
        {loading ? "Verifying…" : verified ? "Verified ✓" : "Verify"}
      </button>
    </div>
  );
}
