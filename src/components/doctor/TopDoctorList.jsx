import topRatedDoctors from "./TopRatedDoctors";
import DoctorCard from "./DoctorCard";

const TopDoctorList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {topRatedDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default TopDoctorList;
