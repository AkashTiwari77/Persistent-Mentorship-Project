import { useState } from "react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Mumbai",
    feedback:
      "Booking my cardiologist appointment was incredibly easy. The doctor was professional, and I received my reports on the same day. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Verma",
    city: "Delhi",
    feedback:
      "The reminder notifications helped me never miss an appointment. The entire booking process took less than two minutes.",
  },
  {
    id: 3,
    name: "Amit Patel",
    city: "Ahmedabad",
    feedback:
      "I found the best dermatologist nearby. The consultation was smooth, and the platform is very easy to use.",
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    city: "Pune",
    feedback:
      "Video consultation saved me a long trip to the hospital. Everything was secure and hassle-free.",
  },
  {
    id: 5,
    name: "Rohan Singh",
    city: "Lucknow",
    feedback:
      "Finding specialists was very simple. I booked an appointment within minutes and the experience was excellent.",
  },
  {
    id: 6,
    name: "Neha Joshi",
    city: "Bengaluru",
    feedback:
      "The interface is clean and modern. I loved how all my appointment history is stored in one place.",
  },
];

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="bg-blue-600 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">What Patients Say</h2>

          <p className="text-blue-100 mt-4 text-lg">
            Real feedback from patients across India
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-white leading-8">"{item.feedback}"</p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                  {item.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>

                  <p className="text-blue-100 text-sm">{item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition"
          >
            {showAll ? "Show Less" : "View More"}

            {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
