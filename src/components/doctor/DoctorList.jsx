import doctors from "../data/doctors";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  return (
    <div>
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
        />
      ))}
    </div>
  );
};

export default DoctorList;


