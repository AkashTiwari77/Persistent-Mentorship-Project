import { useState, useEffect } from "react";
import axios from "axios";

import {
  Star,
  Building2,
  BriefcaseMedical,
  Clock,
  ArrowRight,
} from "lucide-react";

import BookingButton from "../booking/BookingButton";

const TopDoctors = () => {
  const [showAll, setShowAll] = useState(false);
  const [doctorList, setDoctorList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch doctors from MySQL through backend API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors");

        if (response.data.success) {
          setDoctorList(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="py-16">
        <div className="flex justify-center items-center">
          <p className="text-gray-600 text-lg">Loading Doctors...</p>
        </div>
      </section>
    );
  }

  // Show 3 initially, maximum 9 when View All is clicked
  const visibleDoctors = showAll
    ? doctorList.slice(0, 9)
    : doctorList.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* =========================
            Heading
        ========================== */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Top Rated Doctors
            </h2>

            <p className="text-gray-500 mt-2">
              Our most highly reviewed specialists
            </p>
          </div>

          {/* View All Button */}
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center justify-center gap-2 rounded-full border border-teal-300 bg-white px-6 py-3 text-teal-800 duration-300 hover:bg-teal-600 hover:text-white"
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

        {/* =========================
            Doctor Cards
        ========================== */}
        {doctorList.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No doctors found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="rounded-3xl border border-teal-100 bg-white p-6 shadow-md duration-300 hover:shadow-xl"
              >
                {/* =========================
                    Doctor Header
                ========================== */}
                <div className="flex items-center gap-4">
                  {/* Doctor Image */}
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-2xl object-cover border border-gray-200"
                    onError={(e) => {
                      e.currentTarget.src = "/doctors/doctor1.jpg";
                    }}
                  />

                  {/* Doctor Basic Information */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 truncate">
                      {doctor.name}
                    </h3>

                    <p className="text-sm font-medium text-teal-600 mt-1">
                      {doctor.specialty}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-2">
                      <Star
                        className="text-yellow-500 fill-yellow-500"
                        size={16}
                      />

                      <span className="font-medium text-gray-800">
                        {doctor.rating}
                      </span>

                      <span className="text-gray-400">({doctor.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* =========================
                    Doctor Details
                ========================== */}
                <div className="mt-6 space-y-3 text-gray-600 text-sm">
                  {/* Hospital */}
                  <div className="flex items-center gap-2">
                    <Building2
                      size={18}
                      className="text-teal-600 flex-shrink-0"
                    />

                    <span>{doctor.hospital}</span>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center gap-2">
                    <BriefcaseMedical
                      size={18}
                      className="text-teal-600 flex-shrink-0"
                    />

                    <span>{doctor.experience} Years Experience</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2">
                    <span className="text-teal-600">📍</span>

                    <span>{doctor.location}</span>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center gap-2 text-green-600 font-medium">
                    <Clock size={18} />

                    <span>{doctor.availability}</span>
                  </div>
                </div>

                {/* Divider */}
                <hr className="my-6" />

                {/* =========================
                    Bottom Section
                ========================== */}
                <div className="flex justify-between items-center gap-4">
                  {/* Consultation Fee */}
                  <div>
                    <p className="text-gray-500 text-sm">Consultation</p>

                    <h3 className="text-2xl font-bold text-gray-900">
                      {doctor.fee}
                    </h3>
                  </div>

                  {/* Book Button */}
                  <BookingButton
                    doctor={doctor}
                    className="rounded-xl bg-teal-600 px-5 py-2 text-white duration-300 hover:bg-teal-700"
                  >
                    Book
                  </BookingButton>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TopDoctors;
