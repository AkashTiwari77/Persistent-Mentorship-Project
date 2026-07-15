import {
  ArrowRight,
  CheckCircle,
  CalendarCheck,
  Video,
  ShieldCheck,
} from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-700 px-6 py-12 shadow-2xl sm:rounded-[40px] sm:px-10 sm:py-20">
          {/* Decorative Blur */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-28 -right-20 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16">
            {/* Left Content */}

            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
                Ready to take control
                <br />
                of your health?
              </h2>

              <p className="text-blue-100 text-lg mt-6 leading-8">
                Book appointments with India's top doctors in minutes. Secure
                consultations, instant confirmations, video appointments and
                trusted healthcare — all in one place.
              </p>

              {/* Features */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                <div className="flex items-center gap-3 text-white">
                  <CalendarCheck className="text-cyan-300" />
                  <span>Instant Booking</span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <Video className="text-cyan-300" />
                  <span>Video Consultation</span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck className="text-cyan-300" />
                  <span>100% Secure Platform</span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="text-cyan-300" />
                  <span>Trusted by 1.8M+ Patients</span>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="flex flex-col items-center">
              <button className="bg-white text-blue-600 font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl duration-300 flex items-center gap-3">
                Get Started
                <ArrowRight size={20} />
              </button>

              <button className="mt-5 border border-white/40 text-white px-10 py-4 rounded-full hover:bg-white hover:text-blue-600 duration-300">
                Find Doctors
              </button>
            </div>
          </div>

          {/* Bottom Stats */}

          <div className="relative z-10 mt-16 border-t border-white/20 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-white">12,400+</h3>
                <p className="text-blue-100 mt-2">Verified Doctors</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">1.8M+</h3>
                <p className="text-blue-100 mt-2">Happy Patients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">4.9 ★</h3>
                <p className="text-blue-100 mt-2">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
