const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex gap-6">
      {/* Doctor Image */}
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-40 h-40 rounded-xl object-cover"
      />

      {/* Doctor Details */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>

            <p className="text-cyan-600 font-semibold mt-1">
              {doctor.specialty}
            </p>
          </div>

          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
            ⭐ {doctor.rating}
          </div>
        </div>

        <p className="text-gray-600 mt-4">🏥 {doctor.hospital}</p>

        <p className="text-gray-600 mt-2">💼 {doctor.experience} Experience</p>

        <p className="text-gray-600 mt-2">📍 {doctor.location}</p>

        <p className="text-gray-600 mt-2">💰 Consultation Fee : {doctor.fee}</p>

        <div className="flex justify-between items-center mt-6">
          <span className="text-green-600 font-semibold">
            {doctor.availability}
          </span>

          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
