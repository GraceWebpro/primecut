import { Star } from "lucide-react";
import { motion } from "framer-motion";
import BgImg from '../../assets/gallery/bgImage.jpeg'
import HeroImg from '../../assets/hero/HeroImage.avif'

// Simple reusable Button component
export function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-primary text-black hover:bg-[#c19b2e]",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-black",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}


// Premium Hero Section
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${BgImg})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />

      {/* Page Content */}
      <div className="relative z-10">

        <div className="max-w-7xl mx-auto px-6 py-40 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
            >
            <p className="text-primary tracking-[0.3em] text-sm font-semibold">
              LUXURY MEN'S GROOMING
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                More Than A Haircut
                <br />
                <span className="text-primary">It's A Statement.</span>
            </h1>

            {/* Gold divider */}
            <div className="w-28 h-[2px] bg-primary" />


            <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
                Premium haircuts, beard sculpting and luxury grooming designed
                for the modern gentleman. Walk out sharper, more confident,
                and ready for anything.
            </p>

            {/* Buttons */}
            {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-4">
  <Button className="w-full sm:w-auto">Book Appointment</Button>
  <Button variant="outline" className="w-full sm:w-auto">View Services</Button>
</div>

           {/* Floating Glass Trust Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex gap-10 w-fit shadow-lg"
            >
                <div className="flex items-center gap-2">
                <Star className="text-primary" size={18} />
                <span className="text-sm">4.9 Rating</span>
                </div>

                <div className="text-sm">5,000+ Clients</div>

                <div className="text-sm">Since 2015</div>
            </motion.div>
          </motion.div>

          {/* Right side intentionally empty since image is background */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
            >
            {/* Decorative gold frame */}
            <div className="absolute -top-10 -left-10 w-72 h-72 border border-primary/40 rounded-3xl" />

            {/* Cutout Barber Image */}
            <img
              src={HeroImg}
              alt="Barber cutting hair"
                className="relative rounded-3xl shadow-2xl"
            />

            {/* Floating Badge */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-lg border border-primary/40 px-5 py-3 rounded-xl text-sm"
            >
                Award Winning Barbers
            </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
