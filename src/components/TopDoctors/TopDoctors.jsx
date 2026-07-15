import doctor1 from "../../assets/logos/doctor1.jpg";
import doctor2 from "../../assets/logos/doctor2.jpg";
import doctor3 from "../../assets/logos/doctor3.jpg";

import {
  Star,
  Building2,
  BriefcaseMedical,
  Clock,
  ArrowRight,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    image: doctor1,
    name: "Dr. Devi Shetty",
    speciality: "Cardiologist",
    rating: 4.9,
    reviews: 1540,
    hospital: "Narayana Health",
    experience: "38 Years Experience",
    timing: "Today, 2:30 PM",
    fee: "₹2,000",
  },
  {
    id: 2,
    image: doctor2,
    name: "Dr. Naresh Trehan",
    speciality: "Cardiac Surgeon",
    rating: 4.8,
    reviews: 1325,
    hospital: "Medanta Hospital",
    experience: "40 Years Experience",
    timing: "Today, 4:00 PM",
    fee: "₹2,500",
  },
  {
    id: 3,
    image: doctor3,
    name: "Dr. Ashok Seth",
    speciality: "Cardiologist",
    rating: 4.9,
    reviews: 1872,
    hospital: "Fortis Escorts",
    experience: "35 Years Experience",
    timing: "Tomorrow, 10:00 AM",
    fee: "₹1,800",
  },
];

const TopDoctors = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Top Rated Doctors
            </h2>

            <p className="text-gray-500 mt-2">
              Our most highly reviewed specialists
            </p>
          </div>

          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-6 py-3 hover:bg-blue-600 hover:text-white duration-300">
            View All
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 hover:shadow-xl duration-300"
            >
              
              <div className="flex items-center gap-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-20 h-20 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {doctor.name}
                  </h3>

                  <p className="text-blue-600 text-sm font-medium">
                    {doctor.speciality}
                  </p>

                  <div className="flex items-center gap-1 mt-1">
                    <Star
                      className="text-yellow-500 fill-yellow-500"
                      size={16}
                    />

                    <span className="font-medium">{doctor.rating}</span>

                    <span className="text-gray-400">({doctor.reviews})</span>
                  </div>
                </div>
              </div>

             
              <div className="mt-6 space-y-3 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <Building2 size={18} />
                  {doctor.hospital}
                </div>

                <div className="flex items-center gap-2">
                  <BriefcaseMedical size={18} />
                  {doctor.experience}
                </div>

                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <Clock size={18} />
                  {doctor.timing}
                </div>
              </div>

              <hr className="my-6" />

              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Consultation</p>

                  <h3 className="text-2xl font-bold">{doctor.fee}</h3>
                </div>

                <div className="flex gap-3">
                  <button className="px-5 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 duration-300">
                    View
                  </button>

                  <button className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 duration-300">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
