import { Link } from "react-router-dom";
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
    route: "/cardiology",
    icon: Heart,
    bg: "bg-red-50",
    color: "text-red-500",
  },
  {
    id: 2,
    title: "Neurology",
    doctors: "18 doctors",
    route: "/neurology",
    icon: Brain,
    bg: "bg-purple-50",
    color: "text-purple-500",
  },
  {
    id: 3,
    title: "Pediatrics",
    doctors: "31 doctors",
    route: "/pediatrics",
    icon: Baby,
    bg: "bg-green-50",
    color: "text-green-500",
  },
  {
    id: 4,
    title: "Orthopedics",
    doctors: "15 doctors",
    route: "/orthopedics",
    icon: Bone,
    bg: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    id: 5,
    title: "Dermatology",
    doctors: "22 doctors",
    route: "/dermatology",
    icon: Shield,
    bg: "bg-pink-50",
    color: "text-pink-500",
  },
  {
    id: 6,
    title: "Gastrology",
    doctors: "12 doctors",
    route: "/gastrology",
    icon: Pill,
    bg: "bg-cyan-50",
    color: "text-cyan-500",
  },
  {
    id: 7,
    title: "Oncology",
    doctors: "9 doctors",
    route: "/oncology",
    icon: BadgePlus,
    bg: "bg-blue-50",
    color: "text-blue-500",
  },
  {
    id: 8,
    title: "Radiology",
    doctors: "17 doctors",
    route: "/radiology",
    icon: Stethoscope,
    bg: "bg-indigo-50",
    color: "text-indigo-500",
  },
];

const Speciality = () => {
  return (
    <section className="bg-gradient-to-br from-[#f7fcff] via-[#edfafa] to-[#dff3f1] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">
            Browse by Speciality
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            Find the right specialist for your health needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {specialities.map((item) => {
            const Icon = item.icon;

            return (
              <Link key={item.id} to={item.route} className="block">
                <div className="flex cursor-pointer flex-col items-center rounded-3xl border border-teal-100 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speciality;
