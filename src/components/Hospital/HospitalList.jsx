import hospitals from "../data/hospitals";
import HospitalCard from "./HospitalCard";

const HospitalList = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center">Top Hospitals in India</h1>

      <p className="text-center text-gray-500 mt-4 mb-14">
        Find India's best hospitals with world-class healthcare services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {hospitals.map((hospital) => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
};

export default HospitalList;
