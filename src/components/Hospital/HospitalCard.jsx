import { Star, MapPin, Building2 } from "lucide-react";

const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src={hospital.image}
        alt={hospital.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">{hospital.name}</h2>

        <div className="flex items-center mt-2 text-gray-500">
          <MapPin className="w-4 h-4 mr-2 text-blue-600" />
          {hospital.city}
        </div>

        <div className="flex items-center mt-2 text-gray-500">
          <Building2 className="w-4 h-4 mr-2 text-green-600" />
          {hospital.specialty}
        </div>

        <div className="flex items-center mt-4">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-2" />
          <span className="font-semibold">{hospital.rating}</span>
        </div>

        <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold">
          View Hospital
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
