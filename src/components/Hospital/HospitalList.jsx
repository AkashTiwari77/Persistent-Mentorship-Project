import { useEffect, useState } from "react";
import axios from "axios";
import HospitalCard from "./HospitalCard";

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/hospitals");

        console.log("Hospitals fetched from database:", response.data);

        if (response.data.success) {
          setHospitals(response.data.data);
        } else {
          setError("Failed to fetch hospitals");
        }
      } catch (error) {
        console.error("Error fetching hospitals:", error);
        setError("Unable to load hospitals");
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-teal-600">
          Loading Hospitals...
        </p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Top Hospitals in India
        </h1>

        <p className="text-center text-gray-500 mt-4">
          Find India's best hospitals with world-class healthcare services.
        </p>

        {/* Database count */}
        <p className="text-teal-600 font-semibold mt-3">
          {hospitals.length} Hospitals Available
        </p>
      </div>

      {/* Hospital Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {hospitals.map((hospital) => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </section>
  );
};

export default HospitalList;
