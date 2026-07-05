import logo from "../../assets/logos/logo.png";
import finddoctor from "../../assets/logos/finddoctor.jpg"
import Specialties from "../../assets/logos/Specialties.jpg";
import Hospital from "../../assets/logos/Hospital.jpg";
import fordoctor from "../../assets/logos/fordoctor.jpg";
import home from "../../assets/logos/home.jpg";
function Navbar() {
  return (
    <nav className="w-full ">
      <div className=" flex items-center gap-1 bg-gradient-to-r from-[#FFFFFF] via-[#98ece5] to-[#8aebdb] border border-[#17aaa5] rounded-xl shadow-lg h-20 rounded-xl  ">
        <div className=" flex items-center gap-1  ml-4 font-bold text-2xl">
          <img src={logo} alt="MediCare Logo" className="w-10 h-10" />
          <span className="text-black">Medi</span>
          <span className="text-blue-500">Care</span>
        </div>

        <div
          className="group flex ml-80 items-center mr-4 gap-2 px-4 py-2 rounded-xl
             cursor-pointer border border-transparent
             transition-all duration-300 ease-in-out
             hover:bg-white
             hover:border-cyan-200
             hover:shadow-xl
             hover:shadow-cyan-300/30
             hover:-translate-y-1"
        >
          <img
            src={home}
            alt="Find Doctor"
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6"
          />

          <h3 className="font-bold text-xl text-gray-800  transition-colors duration-300 group-hover:text-cyan-600">
            Home
          </h3>
        </div>

        <div
          className="group flex items-center  gap-2 px-4 py-2 rounded-xl
             cursor-pointer border border-transparent
             transition-all duration-300 ease-in-out
             hover:bg-white
             hover:border-cyan-200
             hover:shadow-xl
             hover:shadow-cyan-300/30
             hover:-translate-y-1"
        >
          <img
            src={finddoctor}
            alt="Find Doctor"
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6"
          />

          <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-cyan-600">
            Find Doctor
          </h3>
        </div>
        <div
          className="group flex items-center gap-2 ml-8 px-4 py-2 rounded-xl
             cursor-pointer border border-transparent
             transition-all duration-300 ease-in-out
             hover:bg-white
             hover:border-cyan-200
             hover:shadow-xl
             hover:shadow-cyan-300/30
             hover:-translate-y-1"
        >
          <img
            src={Specialties}
            alt="Specialties"
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6"
          />

          <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-cyan-600">
            Specialties
          </h3>
        </div>
        <div
          className="group flex items-center gap-2 ml-8 px-4 py-2 rounded-xl
             cursor-pointer border border-transparent
             transition-all duration-300 ease-in-out
             hover:bg-white
             hover:border-cyan-200
             hover:shadow-xl
             hover:shadow-cyan-300/30
             hover:-translate-y-1"
        >
          <img
            src={Hospital}
            alt="Hospitals"
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6"
          />

          <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-cyan-600">
            Hospitals
          </h3>
        </div>
        <div
          className="group flex items-center gap-2 ml-8 px-4 py-2 rounded-xl
             cursor-pointer border border-transparent
             transition-all duration-300 ease-in-out
             hover:bg-white
             hover:border-cyan-200
             hover:shadow-xl
             hover:shadow-cyan-300/30
             hover:-translate-y-1"
        >
          <img
            src={fordoctor}
            alt="For Doctor"
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6"
          />

          <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-cyan-600">
            For Doctor
          </h3>
        </div>
        <div className="ml-50">
          <button
            className="px-5 py-2 rounded-xl
               bg-white text-cyan-700 font-semibold
               border border-cyan-500
               transition-all duration-300 ease-in-out
               hover:bg-cyan-500
               hover:text-white
               hover:shadow-xl
               hover:shadow-cyan-300/50
               hover:-translate-y-1
               active:scale-95"
          >
            Sign In
          </button>
        </div>
        <div className="ml-4">
          <button
            className="px-5 py-2 rounded-xl
               bg-white text-cyan-700 font-semibold
               border border-cyan-500
               transition-all duration-300 ease-in-out
               hover:bg-cyan-500
               hover:text-white
               hover:shadow-xl
               hover:shadow-cyan-300/50
               hover:-translate-y-1
               active:scale-95
               focus:outline-none
               focus:ring-2
               focus:ring-cyan-300
               cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
