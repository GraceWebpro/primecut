import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../utils/constants';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useScrollSpy, scrollToSection } from '../hooks/useScrollSpy';
import { Button } from "../sections/Hero";
import { Menu, Scissors, X } from "lucide-react";
import { TopBar } from './TopBar';

const Navbar = () => {
  const [open, setOpen] = useState(false);


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
    setOpen(false);

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/5">
      <TopBar />
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-xl font-bold tracking-wide">
          <Scissors className="text-primary" />
          <Link to='/'><span>PrimeCut</span></Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lgx:gap-4 text-sm text-gray-300">
      
          {NAV_LINKS.map(link => {
            const isActive =
              link.type === "route"
                ? location.pathname === link.path
                : activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`
                  px-4 py-2 rounded-lg font-medium transition
                  text-dark dark:text-light
                  hover:text-primary
                  ${isActive ? "text-primary" : "hover:text-primary"}
                `}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link to='/#booking'>
          <Button className="px-4 py-2 text-sm whitespace-nowrap">Book Appointment</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition"            aria-label='menu'
            aria-expanded={open}
         >
            {open ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="flex flex-col gap-6 p-6 text-gray-300">
          {NAV_LINKS.map((link) => {
               const isActive =
                 link.type === "route"
                   ? location.pathname === link.path
                   : activeSection === link.id;

               return (
                 <button
                   key={link.id}
                   onClick={() => handleNavClick(link)}
                   className={`text-left px-4 py-3 rounded-lg font-medium transition ${
                     isActive
                       ? "bg-primary/10 text-primary"
                       : "hover:bg-gray-100 dark:hover:bg-white/10"
                   }`}
                 >
                   {link.label}
                 </button>
               );
             })}
            <Link to='/#booking'>
              <Button className="w-full">Book Appointment</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;