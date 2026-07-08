// import React from 'react'
import { Search, MapPin } from "lucide-react";
import homeimage from "../../assets/logos/homeimage.jpg"
const Hero = () => {
  return (
    <div className="bg-gradient-to-r h-220   flex items-center pb-10 pl-44 from-blue-200 via-blue-400 to-blue-500">
      <div>
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>

          <p className="text-white  px-6 py-3 text-base font-medium">
            Trusted by 2,400+ hospitals nationwide
          </p>
        </div>
        <div>
          <h1 className="font-bold text-6xl">
            Healthcare that works
            <br /> around your schedule{" "}
          </h1>
        </div>
        <div className="mt-6 text-xl font-bold">
          Book appointments with top specialists in seconds.<br></br> Get
          reminders, video consultations, and your <br />
          complete health history — all in one place.
        </div>
        <div>
          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl px-3 py-1 mt-8 mr-2 pr-1 flex items-center justify-between">
           
            <div className="flex items-center flex-1">
              <Search className="text-gray-400 w-5 h-5" />

              <input
                type="text"
                placeholder="Search doctor"
                className="ml-3 w-full outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>

           
            <div className="w-px h-10 bg-gray-300 mx-6"></div>

            {/* Location */}
            <div className="flex items-center flex-1">
              <MapPin className="text-gray-400 w-5 h-5" />

              <input
                type="text"
                placeholder="New York, NY"
                className="ml-3 w-full outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>

            
            <button className="ml-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-medium transition">
              Search
            </button>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <div>
              <button className="px-6 py-2 rounded-full bg-[#8AA6FF]/25 border border-[#BFD0FF]/40 text-white shadow-md backdrop-blur-sm">
                ❤️ Cardiologist
              </button>
            </div>
            <div>
              <button className="px-6 py-2 rounded-full bg-[#8AA6FF]/25 border border-[#BFD0FF]/40 text-white shadow-md backdrop-blur-sm">
                🧠 Neurologist
              </button>
            </div>
            <div>
              <button className="px-6 py-2 rounded-full bg-[#8AA6FF]/25 border border-[#BFD0FF]/40 text-white shadow-md backdrop-blur-sm">
                👶 Pediatrician
              </button>
            </div>
            <div>
              <button className="px-6 py-2 rounded-full bg-[#8AA6FF]/25 border border-[#BFD0FF]/40 text-white shadow-md backdrop-blur-sm">
                🩺 Dermatologist
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-14 max-w-xl">
            <div className="flex items-center gap-4 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 shadow-lg hover:scale-105 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                👨‍⚕️
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">15,000+</h2>
                <p className="text-gray-700">Doctors</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 shadow-lg hover:scale-105 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl">
                🏥
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">2,400+</h2>
                <p className="text-gray-700">Hospitals</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 shadow-lg hover:scale-105 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl">
                ⭐
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">4.9</h2>
                <p className="text-gray-700">Average Rating</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 shadow-lg hover:scale-105 transition duration-300">
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
      <div className="relative">
        
        <img
          src={homeimage}
          alt="homeimage"
          className="w-[800px] h-[600px] object-cover rounded-3xl ml-30 mt-16"
        />

        
        <div className="absolute top-8 right-0 bg-white rounded-2xl shadow-xl px-5 py-4">
          <p className="text-gray-500 text-sm">Patient Satisfaction</p>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="font-bold text-xl">4.9</span>
          </div>

          <p className="text-gray-400 text-sm">Based on 48,200 reviews</p>
        </div>

        
        <div className="absolute bottom-1 pb-1 left-2 bg-white rounded-2xl shadow-xl px-4 py-1   flex items-center gap-4">
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
