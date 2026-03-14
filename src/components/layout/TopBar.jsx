import { Phone, Clock } from "lucide-react";
import { FaYoutube, FaTwitter, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

/* ===============================
   Premium Top Bar with Rounded Corners
================================ */
export function TopBar() {
  return (
    <div className="flex justify-center mt-2">
      <div className="max-w-7xl w-full bg-white text-black text-sm border border-black/10 rounded-b-2xl overflow-hidden">
        <div className="px-6 py-2 flex items-center justify-between">

          {/* Left: Contact Info */}
          <div className="flex items-center gap-6 font-medium">
            <div className="flex items-center gap-2">
              <Phone size={16} className="hover:text-primary transition"/>
              <span>Call Us: (012) 345 6789</span>
            </div>

            <div className="hidden md:flex items-center gap-2 text-gray-700">
              <Clock size={16} className="hover:text-primary transition"/>
              <span>Opening Hours: Sun - Fri 08am - 09pm</span>
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="hidden md:flex items-center gap-4 text-gray-900">
            <a href="#" className="hover:text-primary transition">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaYoutube size={18} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaTiktok size={18} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
