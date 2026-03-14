import { motion } from "framer-motion";
import { gallery } from '../../data/gallery'

/* ===============================
   Premium Gallery / Portfolio Section
================================ */
const GallerySection = () => {

  return (
    <section id="gallery" className="relative w-full bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest text-sm font-semibold">GALLERY</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Work</h2>
          <div className="w-24 h-[2px] bg-primary mx-auto mt-4"></div>
          <p className="text-gray-300 max-w-xl mx-auto mt-4">
            Browse some of our finest haircuts, beard trims, and VIP grooming sessions.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.slice(0, 6).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/10"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
            <a
                href="/gallery"
                className="inline-block px-8 py-3 bg-primary mt-6 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
                View Full Gallery
            </a>
            </div>
      </div>
    </section>
  );
}

export default GallerySection