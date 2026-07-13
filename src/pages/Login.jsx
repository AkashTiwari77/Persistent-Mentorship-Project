import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Mail,
  Lock,
  CheckCircle2,
  Video,
  ShieldCheck,
  Bell,
  ArrowLeft,
} from "lucide-react";

export default function MediCareLogin() {
  const [role, setRole] = useState("Patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const roles = ["Patient", "Doctor", "Admin"];

  const features = [
    { icon: CheckCircle2, text: "Instant appointment booking" },
    { icon: Video, text: "HD video consultations" },
    { icon: ShieldCheck, text: "HIPAA-compliant & secure" },
    { icon: Bell, text: "Smart health reminders" },
  ];

  return (
    <div className="min-h-screen w-full flex bg-white">
      {/* Left panel */}
      <div className="hidden md:flex md:w-[380px] lg:w-[420px] flex-col justify-between bg-gradient-to-br from-blue-600 to-blue-800 text-white px-8 py-10 relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 mb-16">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Heart className="w-4 h-4 fill-white text-white" />
            </div>
            <span className="font-semibold text-lg">MediCare</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight mb-6">
            Your health journey
            <br />
            starts here.
          </h1>

          <p className="text-blue-100 text-sm leading-relaxed mb-10 max-w-xs">
            Join over 1.8M patients using MediCare to manage appointments,
            consult specialists, and track their health history seamlessly.
          </p>

          <div className="flex flex-col gap-5">
            {features.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-blue-50">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-blue-200">
          © 2025 MediCare Health Technologies
        </p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-10 bg-slate-50">
        <div className="w-full max-w-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition"
          >
            ← Back to home
          </Link>

          <h2 className="text-2xl font-bold text-slate-900 mb-1">
            Welcome back
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Sign in to your MediCare account
          </p>

          {/* Role tabs */}
          <div className="grid grid-cols-3 gap-1 bg-slate-100 rounded-xl p-1 mb-6">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`py-2 text-sm font-medium rounded-lg transition-colors ${
                  role === r
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Email */}
          <label className="block text-sm font-medium text-slate-800 mb-1.5">
            Email address
          </label>
          <div className="relative mb-4">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Password */}
          <label className="block text-sm font-medium text-slate-800 mb-1.5">
            Password
          </label>
          <div className="relative mb-4">
            <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Options row */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
              />
              Keep me signed in
            </label>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors">
            Sign in to {role.toLowerCase()} portal
          </button>

          <p className="text-center text-sm text-slate-500 mt-6">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
