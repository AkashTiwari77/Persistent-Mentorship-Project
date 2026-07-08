import { Heart, ShieldCheck, Lock } from "lucide-react";

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

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer duration-300">
                Find Doctors
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                Book Appointment
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                Video Consultation
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                Health Records
              </li>
            </ul>
          </div>

         

          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer duration-300">
                About
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                Careers
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                Press
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                Contact
              </li>
            </ul>
          </div>

         

          <div>
            <h3 className="text-xl font-semibold mb-6">Legal</h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer duration-300">
                Privacy Policy
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                Terms of Service
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                Cookie Policy
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                HIPAA Compliance
              </li>
            </ul>
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
