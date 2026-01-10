type Step = 1 | 2;

interface Props {
  step: Step;
  completedStep1: boolean;
  onStepChange: (step: Step) => void;
}

export default function Stepper({
  step,
  completedStep1,
  onStepChange,
}: Props) {
  return (
    <section className="-mt-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center justify-center gap-8 sm:gap-14">

            <button
              onClick={() => onStepChange(1)}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold
                  ${
                    step === 1
                      ? "bg-blue-600 text-white scale-110"
                      : "bg-blue-100 text-blue-600"
                  }`}
              >
                1
              </div>
              <span className="text-sm font-semibold">Applicant</span>
            </button>

            <div className="relative w-24 sm:w-32 h-[4px] bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full bg-blue-600 transition-all
                  ${step === 2 ? "w-full" : "w-0"}`}
              />
            </div>

            <button
              disabled={!completedStep1}
              onClick={() => completedStep1 && onStepChange(2)}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold
                  ${
                    step === 2
                      ? "bg-blue-600 text-white scale-110"
                      : completedStep1
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-200 text-gray-400"
                  }`}
              >
                2
              </div>
              <span className="text-sm font-semibold">Fees</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
