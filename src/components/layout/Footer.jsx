import React, { useState, useEffect } from 'react';
import { Scissors, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { NAV_LINKS } from '../../utils/constants';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useScrollSpy, scrollToSection } from '../hooks/useScrollSpy';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {

    if (link.type === "route") {
      navigate(link.path);
      return;
    }

    const scrollAction = () => {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: link.id } });
      } else {
        scrollToSection(link.id);
      }
    };

    setTimeout(scrollAction, 320);
  };

  return (
    <footer className="bg-black text-white pt-24 pb-8 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="text-primary" size={26} />
              <h3 className="text-2xl font-bold">PrimeCut</h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Experience premium grooming services tailored for the modern gentlemen.
              Precision cuts, luxury treatments, and exceptional care.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a className="bg-white/5 p-3 rounded-xl hover:bg-primary hover:text-black transition">
                <Instagram size={18} />
              </a>
              <a className="bg-white/5 p-3 rounded-xl hover:bg-primary hover:text-black transition">
                <Facebook size={18} />
              </a>
              <a className="bg-white/5 p-3 rounded-xl hover:bg-primary hover:text-black transition">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>

            <ul className="space-y-3 text-gray-400">

            {NAV_LINKS.map(link => {
              const isActive =
                link.type === "route"
                  ? location.pathname === link.path
                  : activeSection === link.id;

              return (
                <li
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`
                  hover:text-primary cursor-pointer transition
                    
                    ${isActive ? "text-primary" : ""}
                  `}
                >
                  {link.label}
                </li>
              );
            })}
          
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-primary transition">Haircut & Styling</li>
              <li className="hover:text-primary transition">Beard Grooming</li>
              <li className="hover:text-primary transition">Hot Towel Shave</li>
              <li className="hover:text-primary transition">Hair Wash</li>
              <li className="hover:text-primary transition">Hair Coloring</li>
              <li className="hover:text-primary transition">VIP Grooming</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-primary mt-1" />
                <p>(123) 456-7890</p>
              </div>

              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-primary mt-1" />
                <p>contact@primecut.com</p>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-primary mt-1" />
                <p>
                  123 Madison Avenue
                  <br />
                  New York, NY
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        {/* Bottom Footer */}
<div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

<p>
  © 2026 PrimeCut Template. All rights reserved. Built with ❤️ by GraceTech.
</p>

<div className="flex gap-6 mt-3 md:mt-0">
  <a href="/privacy-policy" className="hover:text-primary transition">
    Privacy Policy
  </a>

  <a href="/terms" className="hover:text-primary transition">
    Terms & Conditions
  </a>
</div>

</div>

      </div>

    </footer>
  );
}

export default Footer