// import React from 'react'
import React, { useState } from "react";
import axios from "axios";
import { Search, MapPin } from "lucide-react";
import homeimage from "../../assets/logos/homeimage.jpg"
const Hero = () => {
  const [doctorName, setDoctorName] = useState("");
  const [location, setLocation] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchDoctor = async () => {
    if (!doctorName.trim()) {
      alert("Please enter a doctor's name");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.get(
        `http://localhost:5000/api/doctors?name=${encodeURIComponent(doctorName)}`,
      );

      console.log(response.data);

      setDoctorData(response.data.data);
    } catch (error) {
      console.error(error);
      alert("Doctor not found");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-220 flex-col items-center gap-12 bg-gradient-to-br from-[#f7fcff] via-[#dff5f3] to-[#bde8e4] px-6 py-16 xl:flex-row xl:gap-8 xl:pb-10 xl:pl-20 2xl:pl-44">
      <div className="w-full min-w-0 xl:flex-1">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-5 py-2 backdrop-blur-sm">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>

          <p className="px-6 py-3 text-base font-medium text-slate-700">
            Trusted by 2,400+ hospitals nationwide
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Healthcare that works
            <br /> around your schedule{" "}
          </h1>
        </div>
        <div className="mt-6 text-lg font-bold sm:text-xl">
          Book appointments with top specialists in seconds.<br></br> Get
          reminders, video consultations, and your <br />
          complete health history — all in one place.
        </div>
        <div>
          <div className="mt-8 flex w-full max-w-4xl flex-col gap-4 rounded-2xl bg-white px-4 py-4 shadow-xl sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-3 sm:py-1">
            <div className="flex items-center flex-1">
              <Search className="text-gray-400 w-5 h-5" />

              <input
                type="text"
                placeholder="Search doctor"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                className="ml-3 w-full outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <div className="hidden h-10 w-px bg-gray-300 sm:mx-6 sm:block"></div>

            {/* Location */}
            <div className="flex items-center flex-1">
              <MapPin className="text-gray-400 w-5 h-5" />

              <input
                type="text"
                placeholder="New York, NY"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="ml-3 w-full outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <button
              onClick={searchDoctor}
              className="bg-teal-600 px-8 py-3 font-medium text-white transition hover:bg-teal-700 sm:ml-6 sm:rounded-2xl"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
          {doctorData && (
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 max-w-3xl">
              {doctorData.thumbnail && (
                <img
                  src={doctorData.thumbnail.source}
                  alt={doctorData.title}
                  className="w-40 h-40 rounded-xl object-cover mb-4"
                />
              )}

              <h2 className="text-3xl font-bold">{doctorData.title}</h2>

              <p className="text-blue-600 mt-2 font-semibold">
                {doctorData.description}
              </p>

              <p className="text-gray-600 mt-4">{doctorData.extract}</p>
            </div>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <div>
              <button className="rounded-full border border-teal-200 bg-white/70 px-6 py-2 text-slate-700 shadow-md backdrop-blur-sm">
                ❤️ Cardiologist
              </button>
            </div>
            <div>
              <button className="rounded-full border border-teal-200 bg-white/70 px-6 py-2 text-slate-700 shadow-md backdrop-blur-sm">
                🧠 Neurologist
              </button>
            </div>
            <div>
              <button className="rounded-full border border-teal-200 bg-white/70 px-6 py-2 text-slate-700 shadow-md backdrop-blur-sm">
                👶 Pediatrician
              </button>
            </div>
            <div>
              <button className="rounded-full border border-teal-200 bg-white/70 px-6 py-2 text-slate-700 shadow-md backdrop-blur-sm">
                🩺 Dermatologist
              </button>
            </div>
          </div>
          <div className="mt-14 grid max-w-xl grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-teal-200 bg-white/70 px-5 py-4 shadow-lg backdrop-blur-md transition duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                👨‍⚕️
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">15,000+</h2>
                <p className="text-gray-700">Doctors</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-teal-200 bg-white/70 px-5 py-4 shadow-lg backdrop-blur-md transition duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl">
                🏥
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">2,400+</h2>
                <p className="text-gray-700">Hospitals</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-teal-200 bg-white/70 px-5 py-4 shadow-lg backdrop-blur-md transition duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl">
                ⭐
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">4.9</h2>
                <p className="text-gray-700">Average Rating</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-teal-200 bg-white/70 px-5 py-4 shadow-lg backdrop-blur-md transition duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                📅
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">2M+</h2>
                <p className="text-gray-700">Appointments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full xl:w-auto xl:flex-1">
        <img
          src={homeimage}
          alt="homeimage"
          className="mt-0 h-auto w-full rounded-3xl object-cover xl:mt-16 xl:h-[600px] xl:max-w-[800px]"
        />

        <div className="absolute right-0 top-4 rounded-2xl bg-white px-3 py-3 shadow-xl sm:top-8 sm:px-5 sm:py-4">
          <p className="text-gray-500 text-sm">Patient Satisfaction</p>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="font-bold text-xl">4.9</span>
          </div>

          <p className="text-gray-400 text-sm">Based on 48,200 reviews</p>
        </div>

        <div className="absolute bottom-1 left-2 flex items-center gap-2 rounded-2xl bg-white px-3 py-1 shadow-xl sm:gap-4 sm:px-4">
          <div className="w-8 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl">
            ✓
          </div>

          <div>
            <p className="text-gray-400    text-sm">Appointment Confirmed</p>

            <p className="font-semibold">Dr. Mitchell — Jan 15, 2:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
