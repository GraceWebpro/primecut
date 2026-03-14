import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";

/* ===============================
   Premium Testimonials Section
================================ */
const Testimonials = () => {
  

  return (
    <section className="relative w-full bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest text-sm font-semibold">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">What Our Clients Say</h2>
          <div className="w-24 h-[2px] bg-primary mx-auto mt-4"></div>
        </motion.div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
              </div>
              <div className="flex justify-center mb-2 gap-1 text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{item.text}"</p>
              <h3 className="text-primary font-semibold">{item.name}</h3>
              <p className="text-gray-400 text-sm">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials