type Props = {
  title: string;
  description: string;
};

export default function ServiceIntro({ title, description }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
