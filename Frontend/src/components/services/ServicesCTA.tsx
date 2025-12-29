import { Link } from "react-router-dom";
import Button from "../ui/Button";

const ServicesCTA = () => {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="bg-blue-50 rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="text-center lg:text-left">
            <span className="text-blue-600 font-medium">
              Need Guidance?
            </span>
            <h2 className="text-3xl font-bold mt-2">
              Not sure which service to choose?
            </h2>
          </div>

          <Link to="/contact">
            <Button
              variant="primary"
              className="px-8 py-3 w-full lg:w-auto"
            >
              Schedule a Consultation
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
