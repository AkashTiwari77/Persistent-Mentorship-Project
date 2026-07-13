import {
  CalendarCheck,
  Users,
  Wallet,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Manage Appointments",
    description: "Handle appointments with an easy-to-use dashboard.",
    icon: CalendarCheck,
  },
  {
    id: 2,
    title: "Reach More Patients",
    description: "Connect with thousands of patients across India.",
    icon: Users,
  },
  {
    id: 3,
    title: "Secure Payments",
    description: "Receive fast and secure online consultation payments.",
    icon: Wallet,
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Track appointments, earnings and patient reviews.",
    icon: BarChart3,
  },
];

const stats = [
  {
    number: "50K+",
    title: "Verified Doctors",
  },
  {
    number: "2M+",
    title: "Patients",
  },
  {
    number: "500+",
    title: "Hospitals",
  },
  {
    number: "99%",
    title: "Satisfaction",
  },
];

const ForDoctors = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero */}

      <section className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold">
            Join India's Trusted
            <br />
            Healthcare Network
          </h1>

          <p className="mt-6 text-xl text-cyan-100 max-w-3xl mx-auto">
            Grow your medical practice, connect with more patients, and manage
            appointments effortlessly.
          </p>

          <div className="flex justify-center gap-6 mt-12">
            <button className="bg-white text-cyan-600 font-bold px-8 py-4 rounded-xl hover:scale-105 transition">
              Register Now
            </button>

            <button className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-cyan-600 transition">
              Doctor Login
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Why Join MediCare?</h2>

          <p className="text-gray-500 mt-5 text-lg">
            Everything you need to grow your medical career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-cyan-600" />
                </div>

                <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

                <p className="text-gray-500 mt-4">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Statistics */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map((item, index) => (
              <div key={index}>
                <h2 className="text-5xl font-bold text-cyan-600">
                  {item.number}
                </h2>

                <p className="text-gray-500 mt-3">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl text-white p-16 text-center">
          <CheckCircle className="mx-auto w-16 h-16 mb-8" />

          <h2 className="text-5xl font-bold">Ready to Join?</h2>

          <p className="mt-6 text-cyan-100 text-lg">
            Become a trusted doctor on MediCare and serve thousands of patients
            every day.
          </p>

          <button className="mt-10 bg-white text-cyan-600 font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 hover:scale-105 transition">
            Register Today
            <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForDoctors;
