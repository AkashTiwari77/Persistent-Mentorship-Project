import logo from "../../assets/logos/logo.png";
import finddoctor from "../../assets/logos/finddoctor.jpg";
import Specialties from "../../assets/logos/Specialties.jpg";
import Hospital from "../../assets/logos/hospital.jpg";
import fordoctor from "../../assets/logos/fordoctor.jpg";
import home from "../../assets/logos/home.jpg";
import { NavLink } from "react-router-dom";
import { UserRound, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="w-full">
      <div className="flex min-h-20 flex-wrap items-center  gap-1 rounded-xl border border-[#17aaa5] bg-gradient-to-r from-[#FFFFFF] via-[#98ece5] to-[#8aebdb] px-3 py-3 shadow-lg sm:px-4">
        <div className="flex items-center gap-1  font-bold text-2xl">
          <img src={logo} alt="MediCare Logo" className="w-10 h-10" />
          <span className="text-black">Medi</span>
          <span className="text-blue-500">Care</span>
        </div>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-1">
          <NavLink to="/">
            <div
              className="group flex items-center gap-2 px-3 py-2 rounded-xl sm:px-4
    cursor-pointer border border-transparent
    transition-all duration-300 ease-in-out
    hover:bg-white hover:border-cyan-200
    hover:shadow-xl hover:shadow-cyan-300/30
    hover:-translate-y-1"
            >
              <img
                src={home}
                alt="Home"
                className="w-8 h-8  flex items-center object-contain"
              />

              <h3 className="font-bold text-xl text-gray-800 group-hover:text-cyan-600">
                Home
              </h3>
            </div>
          </NavLink>

          <NavLink
            to="/find-doctors"
            className="group flex items-center gap-2 px-4 py-2 rounded-xl
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
          </NavLink>
          <NavLink to="/specialities">
            <div
              className="group flex items-center gap-2 px-3 py-2 rounded-xl sm:px-4
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
                alt="Specialities"
                className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6"
              />

              <h3
                className="font-bold text-xl text-gray-800 transition-colors duration-300
      group-hover:text-cyan-600"
              >
                Specialities
              </h3>
            </div>
          </NavLink>
          <NavLink
            to="/hospitals"
            className="group flex items-center gap-2 px-3 py-2 rounded-xl sm:px-4
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
          </NavLink>
          <NavLink
            to="/for-doctor"
            className="group flex items-center gap-2 px-3 py-2 rounded-xl sm:px-4
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
          </NavLink>
        </div>
        
        <div className="ml-1 sm:ml-4">
          {user ? (
            <div className="flex items-center gap-2 rounded-xl border border-cyan-500 bg-white px-3 py-1.5 text-cyan-800 shadow-sm">
              <UserRound size={20} className="text-cyan-600" />
              <div className="leading-tight"><p className="max-w-28 truncate text-sm font-bold">{user.name}</p><p className="text-[11px] font-medium text-cyan-600">Signed in · {user.role}</p></div>
              <button type="button" onClick={logout} title="Sign out" className="ml-1 rounded-lg p-1 text-cyan-700 hover:bg-cyan-50"><LogOut size={17} /></button>
            </div>
          ) : (
          <NavLink to="/login">
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
              Sign In
            </button>
          </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
