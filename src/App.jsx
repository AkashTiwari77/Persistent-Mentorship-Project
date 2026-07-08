import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero"
import Speciality from "./components/Speciality/Speciality";
import TopDoctors from "./components/TopDoctors/TopDoctors";
import BookingSteps from "./components/bookingsteps/BookingSteps"
import Testimonials from "./components/Testimonials/testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Speciality/>
      <TopDoctors/>
      <BookingSteps/>
      <Testimonials/>
    </>
  );
}

export default App;
