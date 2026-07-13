import TopDoctorList from "./TopDoctorList";

const TopDoctors = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900">Top Doctors</h2>

          <p className="text-gray-600 text-lg mt-4">
            Meet our experienced specialists dedicated to providing world-class
            healthcare services.
          </p>
        </div>

        <TopDoctorList />
      </div>
    </section>
  );
};

export default TopDoctors;
