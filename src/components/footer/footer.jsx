import { Heart, ShieldCheck, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const platformLinks = [{ label: "Find Doctors", to: "/find-doctors" }, { label: "Book Appointment", to: "/find-doctors" }, { label: "Video Consultation", to: "/find-doctors" }, { label: "Health Records", to: "/health-records" }];
const companyLinks = [{ label: "About", to: "/about" }, { label: "Careers", to: "/careers" }, { label: "Press", to: "/press" }, { label: "Contact", to: "/contact" }];
const legalLinks = [{ label: "Privacy Policy", to: "/privacy" }, { label: "Terms of Service", to: "/terms" }, { label: "Cookie Policy", to: "/cookies" }, { label: "HIPAA Compliance", to: "/hipaa-compliance" }];

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Heart className="text-white" size={20} />
              </div>

              <h2 className="text-3xl font-bold">
                Medi<span className="text-blue-500">Care</span>
              </h2>
            </div>

            <p className="text-gray-400 mt-8 leading-8">
              Enterprise healthcare management for modern hospitals and clinics.
              Secure, reliable, and built to simplify patient care across India.
            </p>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-6">Platform</h3>

            <FooterLinks links={platformLinks} />
          </div>

         

          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>

            <FooterLinks links={companyLinks} />
          </div>

         

          <div>
            <h3 className="text-xl font-semibold mb-6">Legal</h3>

            <FooterLinks links={legalLinks} />
          </div>
        </div>

       

        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           

            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 MediCare. All rights reserved.
            </p>

            

            <div className="flex flex-wrap items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-400" size={18} />
                HIPAA Compliant
              </div>

              <div className="flex items-center gap-2">
                <Lock className="text-green-400" size={18} />
                256-bit Encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function FooterLinks({ links }) { return <ul className="space-y-4 text-gray-400">{links.map((link) => <li key={link.label}><Link to={link.to} className="transition duration-300 hover:text-white hover:underline hover:underline-offset-4">{link.label}</Link></li>)}</ul>; }
