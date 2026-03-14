import { useState } from "react";
import { motion } from "framer-motion";
import { gallery } from "../data/gallery";

/* ===============================
   Full Premium Gallery Page
================================ */
const GalleryPage = () => {
 

  const [lightbox, setLightbox] = useState({ open: false, src: "", title: "" });

  return (
    <section className="relative w-full bg-black text-white min-h-screen py-28 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest text-sm font-semibold">GALLERY</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Our Full Portfolio</h1>
          <div className="w-24 h-[2px] bg-primary mx-auto mt-4"></div>
          <p className="text-gray-300 max-w-xl mx-auto mt-4">
            Explore all our premium haircuts, beard trims, and VIP grooming transformations.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-white/10"
              onClick={() => setLightbox({ open: true, src: img.src, title: img.title })}
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                  <h3 className="text-white font-semibold text-lg">{img.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <img src={lightbox.src} alt={lightbox.title} className="w-full h-auto rounded-3xl shadow-2xl"/>
            <h3 className="text-white font-bold text-xl mt-4 text-center">{lightbox.title}</h3>
            <button
              onClick={() => setLightbox({ open: false, src: "", title: "" })}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-primary transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default GalleryPage;