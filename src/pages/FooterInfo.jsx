import { ArrowLeft, FileText, Mail, ShieldCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const pages = {
  "/health-records": { title: "Health Records", label: "Your health, organised", copy: "Keep appointment information and care history in one secure place. Sign in to begin managing your MediCare profile.", action: "Sign in to your account", to: "/login" },
  "/about": { title: "About MediCare", label: "Care made simpler", copy: "MediCare helps patients find verified specialists, book appointments, and manage their healthcare journey with confidence.", action: "Find a doctor", to: "/find-doctors" },
  "/careers": { title: "Careers", label: "Build better care with us", copy: "We are building thoughtful digital healthcare experiences for patients, doctors, and hospitals across India.", action: "Contact our team", to: "/contact" },
  "/press": { title: "Press", label: "MediCare newsroom", copy: "For product updates, partnership opportunities, and media enquiries, our team is happy to help.", action: "Contact press team", to: "/contact" },
  "/contact": { title: "Contact MediCare", label: "We are here to help", copy: "Have a question about MediCare? Email our support team and we will get back to you as soon as possible.", action: "Email support", to: "mailto:support@medicare.example" },
  "/privacy": { title: "Privacy Policy", label: "Your privacy matters", copy: "MediCare is designed to treat personal health information with care. We only use account information to provide and improve our services.", action: "Contact support", to: "/contact" },
  "/terms": { title: "Terms of Service", label: "Clear terms, better care", copy: "These terms explain how MediCare services are offered and how to use the platform responsibly.", action: "Contact support", to: "/contact" },
  "/cookies": { title: "Cookie Policy", label: "A transparent experience", copy: "Cookies help MediCare remember your preferences and improve the experience. You remain in control of your browser settings.", action: "Contact support", to: "/contact" },
  "/hipaa-compliance": { title: "Privacy & Security", label: "Care built on trust", copy: "MediCare uses strong safeguards to protect information shared through the platform and keep healthcare interactions private.", action: "Learn about MediCare", to: "/about" },
};

export default function FooterInfo() {
  const page = pages[useLocation().pathname] || pages["/about"];
  const external = page.to.startsWith("mailto:");
  return <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-6 py-20"><div className="mx-auto max-w-3xl"><Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"><ArrowLeft size={17} />Back to home</Link><section className="mt-8 rounded-3xl border border-teal-100 bg-white p-8 shadow-xl shadow-teal-950/5 sm:p-12"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-teal-100 text-teal-700">{page.title.includes("Privacy") || page.title.includes("Security") ? <ShieldCheck size={27} /> : page.title === "Contact MediCare" ? <Mail size={27} /> : <FileText size={27} />}</div><p className="mt-7 text-sm font-bold uppercase tracking-wider text-teal-700">{page.label}</p><h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{page.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{page.copy}</p>{external ? <a href={page.to} className="mt-8 inline-flex rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white hover:bg-teal-700">{page.action}</a> : <Link to={page.to} className="mt-8 inline-flex rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white hover:bg-teal-700">{page.action}</Link>}</section></div></main>;
}
