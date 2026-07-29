import { ArrowRight, CalendarDays, Check, HeartPulse, ShieldCheck, Sparkles, Stethoscope, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function CTA() {
  const { user } = useAuth();
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl px-6 py-10 shadow-2xl sm:px-10 lg:px-14 lg:py-14" style={{ background: "linear-gradient(120deg, #0f766e 0%, #0d9488 48%, #0e7490 100%)" }}>
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white opacity-10" />
          <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-cyan-200 opacity-20" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white border-opacity-30 bg-white bg-opacity-10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white"><Sparkles size={14} /> Your health, on your schedule</div>
              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-5xl">Care that feels personal from the very first click.</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-teal-50 sm:text-lg">Find the right specialist, choose a convenient time, and manage every appointment in one calm, secure place.</p>

              <div className="mt-7 grid gap-3 text-sm text-white sm:grid-cols-2">
                <Feature icon={CalendarDays} text="Instant appointment booking" />
                <Feature icon={Video} text="Clinic and video consultations" />
                <Feature icon={ShieldCheck} text="Private and secure by design" />
                <Feature icon={HeartPulse} text="Trusted care, when needed" />
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to={user ? "/find-doctors" : "/register"} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-teal-50">{user ? "Book an appointment" : "Get started free"}<ArrowRight size={17} /></Link>
                <Link to="/find-doctors" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white border-opacity-50 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:bg-opacity-10"><Stethoscope size={17} />Find a doctor</Link>
              </div>
              {user && <p className="mt-4 text-sm text-teal-100">Welcome back, {user.name}. Let’s find care that works for you.</p>}
            </div>

            <div className="mx-auto w-full max-w-lg">
              <div className="rounded-2xl border border-white border-opacity-30 bg-white bg-opacity-15 p-3 shadow-xl">
                <div className="rounded-xl bg-white p-5 sm:p-6">
                  <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-teal-700">MediCare journey</p><h3 className="mt-1 text-xl font-bold text-slate-800">A better way to book care</h3></div><div className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700"><CalendarDays size={21} /></div></div>
                  <div className="mt-5 rounded-xl bg-teal-50 p-4"><p className="text-xs font-semibold text-teal-700">NEXT AVAILABLE CONSULTATION</p><div className="mt-3 flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-full bg-teal-700 font-bold text-white">DR</div><div className="flex-1"><p className="text-sm font-bold text-slate-800">Meet your specialist</p><p className="mt-0.5 text-xs text-slate-500">Choose a doctor based on your needs</p></div><span className="rounded-lg bg-white px-2.5 py-1.5 text-xs font-bold text-teal-700 shadow-sm">Today</span></div></div>
                  <div className="mt-5 space-y-4"><Journey number="1" title="Search with confidence" text="Explore verified specialists and hospitals." done /><Journey number="2" title="Choose your preferred slot" text="See clear availability before you book." /><Journey number="3" title="Receive instant confirmation" text="Your appointment details stay organised." /></div>
                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500"><ShieldCheck size={15} className="text-teal-600" /> Private information. Clear appointments. Better care.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 grid gap-5 border-t border-white border-opacity-25 pt-7 text-center sm:grid-cols-3"><Stat value="12,400+" label="Verified doctors" /><Stat value="1.8M+" label="Patients supported" /><Stat value="4.9 / 5" label="Average care rating" /></div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, text }) { return <div className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-full bg-white bg-opacity-15"><Icon size={15} /></span>{text}</div>; }
function Journey({ number, title, text, done }) { return <div className="flex gap-3"><span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${done ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-500"}`}>{done ? <Check size={16} /> : number}</span><div><p className="text-sm font-bold text-slate-800">{title}</p><p className="mt-0.5 text-xs text-slate-500">{text}</p></div></div>; }
function Stat({ value, label }) { return <div><p className="text-2xl font-bold text-white">{value}</p><p className="mt-1 text-sm text-teal-50">{label}</p></div>; }
