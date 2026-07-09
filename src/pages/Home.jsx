import Hero from "../components/home/Hero";
import Speciality from "../components/Speciality/Speciality";
import TopDoctors from "../components/TopDoctors/TopDoctors";
import BookingSteps from "../components/bookingsteps/BookingSteps";
import Testimonials from "../components/Testimonials/testimonials";
import CTA from "../components/CTA/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Speciality />
      <TopDoctors />
      <BookingSteps />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
