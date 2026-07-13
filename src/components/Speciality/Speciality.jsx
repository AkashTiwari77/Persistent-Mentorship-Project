
import {
  Heart,
  Brain,
  Baby,
  Bone,
  Shield,
  Pill,
  BadgePlus,
  Stethoscope,
} from "lucide-react";

const specialities = [
  {
    id: 1,
    title: "Cardiology",
    doctors: "24 doctors",
    icon: Heart,
    bg: "bg-red-50",
    color: "text-red-500",
  },
  {
    id: 2,
    title: "Neurology",
    doctors: "18 doctors",
    icon: Brain,
    bg: "bg-purple-50",
    color: "text-purple-500",
  },
  {
    id: 3,
    title: "Pediatrics",
    doctors: "31 doctors",
    icon: Baby,
    bg: "bg-green-50",
    color: "text-green-500",
  },
  {
    id: 4,
    title: "Orthopedics",
    doctors: "15 doctors",
    icon: Bone,
    bg: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    id: 5,
    title: "Dermatology",
    doctors: "22 doctors",
    icon: Shield,
    bg: "bg-pink-50",
    color: "text-pink-500",
  },
  {
    id: 6,
    title: "Gastrology",
    doctors: "12 doctors",
    icon: Pill,
    bg: "bg-cyan-50",
    color: "text-cyan-500",
  },
  {
    id: 7,
    title: "Oncology",
    doctors: "9 doctors",
    icon: BadgePlus,
    bg: "bg-blue-50",
    color: "text-blue-500",
  },
  {
    id: 8,
    title: "Radiology",
    doctors: "17 doctors",
    icon: Stethoscope,
    bg: "bg-indigo-50",
    color: "text-indigo-500",
  },
];

const Speciality = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900">
            Browse by Speciality
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            Find the right specialist for your health needs from our wide
            network of certified doctors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-16">
          {specialities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg}`}
                >
                  <Icon className={`w-7 h-7 ${item.color}`} />
                </div>

                <h3 className="mt-5 font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">{item.doctors}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speciality;
