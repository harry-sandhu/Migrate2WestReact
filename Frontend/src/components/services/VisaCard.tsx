// src/components/services/VisaCard.tsx

type VisaCardProps = {
  title: string;
  image: string;
  processingTime: string;
};

export default function VisaCard({
  title,
  image,
  processingTime,
}: VisaCardProps) {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4 text-center">
        <h5 className="text-lg font-semibold text-gray-900">
          {title}
        </h5>
        <p className="mt-2 text-sm text-gray-600">
          Processing Time –{" "}
          <span className="font-medium text-gray-900">
            {processingTime}
          </span>
        </p>
      </div>
    </div>
  );
}
