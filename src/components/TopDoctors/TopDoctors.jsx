import { useState } from "react";
import doctor1 from "../../assets/logos/doctor1.jpg";
import doctor2 from "../../assets/logos/doctor2.jpg";
import doctor3 from "../../assets/logos/doctor3.jpg";
import specialistPortraits from "../../assets/doctors/specialist-portraits.png";

import {
  Star,
  Building2,
  BriefcaseMedical,
  Clock,
  ArrowRight,
} from "lucide-react";
import BookingButton from "../booking/BookingButton";

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
  // Additional doctors use unique portraits from the project image sheet.
  {
    id: 4,
    image: specialistPortraits,
    portraitPosition: "0% 0%",
    name: "Dr. Ramakanta Panda",
    speciality: "Cardiac Surgeon",
    rating: 4.8,
    reviews: 1120,
    hospital: "Asian Heart Institute",
    experience: "33 Years Experience",
    timing: "Today, 5:15 PM",
    fee: "₹2,200",
  },
  {
    id: 5,
    image: specialistPortraits,
    portraitPosition: "50% 0%",
    name: "Dr. Upendra Kaul",
    speciality: "Interventional Cardiologist",
    rating: 4.7,
    reviews: 986,
    hospital: "Batra Hospital",
    experience: "36 Years Experience",
    timing: "Tomorrow, 11:30 AM",
    fee: "₹1,900",
  },
  {
    id: 6,
    image: specialistPortraits,
    portraitPosition: "100% 0%",
    name: "Dr. Neeraj Bhalla",
    speciality: "Electrophysiologist",
    rating: 4.6,
    reviews: 742,
    hospital: "Fortis Escorts",
    experience: "22 Years Experience",
    timing: "Today, 6:00 PM",
    fee: "₹1,700",
  },
  {
    id: 7,
    image: specialistPortraits,
    portraitPosition: "0% 100%",
    name: "Dr. Purshotam Lal",
    speciality: "Cardiologist",
    rating: 4.8,
    reviews: 1298,
    hospital: "Metro Heart Institute",
    experience: "45 Years Experience",
    timing: "Tomorrow, 9:00 AM",
    fee: "₹2,100",
  },
  {
    id: 8,
    image: specialistPortraits,
    portraitPosition: "50% 100%",
    name: "Dr. Nitin Chandra Mehta",
    speciality: "Heart Failure Specialist",
    rating: 4.7,
    reviews: 654,
    hospital: "Max Super Speciality",
    experience: "24 Years Experience",
    timing: "Today, 3:45 PM",
    fee: "₹1,600",
  },
  {
    id: 9,
    image: specialistPortraits,
    portraitPosition: "100% 100%",
    name: "Dr. Vivek Jawali",
    speciality: "Cardiac Surgeon",
    rating: 4.9,
    reviews: 1410,
    hospital: "Fortis Hospital",
    experience: "30 Years Experience",
    timing: "Tomorrow, 1:00 PM",
    fee: "₹2,300",
  },
];

const TopDoctors = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleDoctors = showAll ? doctors : doctors.slice(0, 3);

  return (
    <section className="bg-gradient-to-br from-[#eaf7f7] via-[#d9f0ee] to-[#c8e9e7] py-24">
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

          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-2 rounded-full border border-teal-300 bg-white/70 px-6 py-3 text-teal-800 duration-300 hover:bg-teal-600 hover:text-white"
          >
            {showAll ? "View Less" : "View All"}
            <ArrowRight
              size={18}
              className={`transition-transform duration-300 ${
                showAll ? "-rotate-90" : ""
              }`}
            />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-3xl border border-teal-100 bg-white/90 p-6 shadow-md duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                {doctor.portraitPosition ? (
                  <div
                    role="img"
                    aria-label={doctor.name}
                    className="h-20 w-20 rounded-2xl bg-cover"
                    style={{ backgroundImage: `url(${doctor.image})`, backgroundSize: "300% 200%", backgroundPosition: doctor.portraitPosition }}
                  />
                ) : (
                  <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-2xl object-cover" />
                )}

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {doctor.name}
                  </h3>

                  <p className="text-sm font-medium text-teal-600">
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

                  <BookingButton doctor={doctor} className="rounded-xl bg-teal-600 px-5 py-2 text-white duration-300 hover:bg-teal-700">Book</BookingButton>
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
