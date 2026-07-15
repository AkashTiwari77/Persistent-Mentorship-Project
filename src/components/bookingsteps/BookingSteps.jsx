import { Search, CalendarDays, BadgeCheck } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Search & Find",
    description:
      "Browse 12,000+ verified doctors across all specialties and locations. Filter by rating, availability, and fee.",
    icon: Search,
  },
  {
    id: "02",
    title: "Book a Slot",
    description:
      "Choose a convenient date and time. Select in-person or video consultation based on your preference.",
    icon: CalendarDays,
  },
  {
    id: "03",
    title: "Get Confirmed",
    description:
      "Receive instant confirmation via email and SMS. Get reminders so you never miss an appointment.",
    icon: BadgeCheck,
  },
];

const BookingSteps = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">
            Book an appointment in 3 steps
          </h2>

          <p className="mt-4 text-base text-gray-500 sm:text-lg">
            Simple, fast, and secure — your health journey starts here
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative text-center flex flex-col items-center"
              >
              
                <h1 className="absolute top-0 right-10 text-7xl font-bold text-gray-100 select-none">
                  {step.id}
                </h1>

                
                <div className="w-16 h-16 rounded-2xl bg-blue-600 shadow-xl flex items-center justify-center mb-8">
                  <Icon className="text-white" size={30} />
                </div>

               
                <h3 className="mb-5 text-2xl font-semibold text-gray-900 sm:text-3xl">
                  {step.title}
                </h3>

               
                <p className="text-gray-500 leading-8 max-w-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
