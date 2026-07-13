import { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Users,
  Stethoscope,
  Mail,
  Lock,
  Phone,
  CheckCircle2,
  Video,
  Shield,
  Bell,
} from "lucide-react";

export default function MediCareSignup() {
  const [role, setRole] = useState("patient");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Create account", { role, ...form });
  };

  const features = [
    { icon: CheckCircle2, label: "Instant appointment booking" },
    { icon: Video, label: "HD video consultations" },
    { icon: Shield, label: "HIPAA-compliant & secure" },
    { icon: Bell, label: "Smart health reminders" },
  ];

  return (
    <div className="min-h-screen w-full flex bg-slate-50">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-[420px] flex-col justify-between bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 relative overflow-hidden">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="text-lg font-semibold">MediCare</span>
          </div>

          <div className="mt-40">
            <h1 className="text-4xl font-bold leading-tight">
              Your health journey
              <br />
              starts here.
            </h1>
            <p className="mt-5 text-blue-100 text-sm leading-relaxed max-w-xs">
              Join over 1.8M patients using MediCare to manage appointments,
              consult specialists, and track their health history seamlessly.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-5">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-blue-50">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-blue-200">
          © 2025 MediCare Health Technologies
        </p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </a>

          <h2 className="mt-6 text-3xl font-bold text-slate-900">
            Create your account
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Join MediCare as a patient or doctor
          </p>

          {/* Role selector */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setRole("patient")}
              className={`text-left rounded-xl border p-4 transition-all ${
                role === "patient"
                  ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                  role === "patient" ? "bg-blue-600" : "bg-slate-100"
                }`}
              >
                <Users
                  className={`w-4 h-4 ${
                    role === "patient" ? "text-white" : "text-slate-500"
                  }`}
                />
              </div>
              <p className="font-semibold text-slate-900 text-sm">Patient</p>
              <p className="text-xs text-slate-500 mt-0.5">
                Book appointments &amp; manage health
              </p>
            </button>

            <button
              type="button"
              onClick={() => setRole("doctor")}
              className={`text-left rounded-xl border p-4 transition-all ${
                role === "doctor"
                  ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                  role === "doctor" ? "bg-blue-600" : "bg-slate-100"
                }`}
              >
                <Stethoscope
                  className={`w-4 h-4 ${
                    role === "doctor" ? "text-white" : "text-slate-500"
                  }`}
                />
              </div>
              <p className="font-semibold text-slate-900 text-sm">Doctor</p>
              <p className="text-xs text-slate-500 mt-0.5">
                Manage schedule &amp; patients
              </p>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="jane.smith@email.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-lg border border-slate-200 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  value={form.password}
                  onChange={handleChange("password")}
                  className="w-full rounded-lg border border-slate-200 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Phone number
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className="w-full rounded-lg border border-slate-200 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-sm transition-colors"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
