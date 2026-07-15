const DoctorCard = ({ doctor }) => {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:flex-row">
      {/* Doctor Image */}
      <img
        src={doctor.image}
        alt={doctor.name}
        className="h-40 w-40 self-center rounded-xl object-cover sm:self-start"
      />

      {/* Doctor Details */}
      <div className="flex-1">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
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

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
