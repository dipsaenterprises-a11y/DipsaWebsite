import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@assets/Logo_1764581843061.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Dipsa Enterprises" className="h-10 w-auto" />
              <span className="font-heading font-bold text-xl tracking-tight">
                Dipsa Enterprises
              </span>
            </div>
            <p className="text-slate-400 max-w-md mb-6 leading-relaxed">
              Pioneering hygiene solutions for modern living. Our brands OCTO WASH and DEXTA set the standard for cleanliness and purity in every home.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61575655732921" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://x.com/Octo_wash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/dipsaenterprises" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#octo-wash" className="text-slate-400 hover:text-white transition-colors">Octo Wash</a></li>
              <li><a href="#dexta" className="text-slate-400 hover:text-white transition-colors">Dexta</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <span>Chandrapur Colony 7, Matabari,<br />Udaipur, Gomati District,<br />Tripura, 799120</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone size={20} className="text-primary shrink-0" />
                <span>(+91) 8259076839</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail size={20} className="text-primary shrink-0" />
                <span>dipsaenterprises@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dipsa Enterprises Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
