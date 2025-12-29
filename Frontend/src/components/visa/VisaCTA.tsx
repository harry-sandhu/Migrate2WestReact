import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function VisaCTA() {
  return (
    <section className="bg-blue-50 py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Apply?
      </h2>
      <p className="text-gray-600 mb-6">
        Talk to our experts and start your visa process today.
      </p>

      <Link to="/contact">
        <Button variant="gold" className="px-10 py-4">
          Speak to an Expert
        </Button>
      </Link>
    </section>
  );
}
