import { useEffect, useState } from "react";
import axios from "axios";
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

const iconMap = {
  Heart,
  Brain,
  Baby,
  Bone,
  Shield,
  Pill,
  BadgePlus,
  Stethoscope,
};

const Speciality = () => {
  const [specialities, setSpecialities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecialities = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/specialities",
        );

        setSpecialities(response.data.data);
      } catch (error) {
        console.error("Error fetching specialities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpecialities();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading Specialities...
      </div>
    );
  }

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
            const Icon = iconMap[item.icon];

            return (
              <Link key={item.id} to={item.route} className="block">
                <div className="flex cursor-pointer flex-col items-center rounded-3xl border border-teal-100 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg}`}
                  >
                    {Icon && <Icon className={`w-7 h-7 ${item.color}`} />}
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
