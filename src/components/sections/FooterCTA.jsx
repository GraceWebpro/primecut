import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import ctaImg from '../../assets/hero/HeroImage.avif'

const FooterCTA = () => {
  return (
    <section
      className="relative py-24 border-t border-white/40"
      style={{
        backgroundImage:
          `url(${ctaImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Ready for a Fresh Look?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-300 mt-4 max-w-2xl mx-auto"
        >
          Book your appointment today and experience premium grooming
          services tailored for the modern gentleman.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
        >
          <a
            href="#booking"
            className="bg-primary text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 transition shadow-lg"
          >
            Book Appointment
          </a>

          <a
            href="tel:+1234567890"
            className="flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-xl text-white hover:bg-white hover:text-black transition"
          >
            <Phone size={18} />
            Call Us
          </a>
        </motion.div>

      </div>
    </section>
  );
}
 export default FooterCTA