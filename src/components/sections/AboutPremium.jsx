import React from 'react'
import { Star, Menu, Scissors } from "lucide-react";
import { motion } from "framer-motion";
import { ABOUT_STATS } from '../../utils/constants';
import BgImg from '../../assets/gallery/bgImage.jpeg'
import About from '../../assets/about/about.avif'

const AboutPremium = () => {
  return (
    <section id='about' className="relative w-full bg-black text-white py-28 overflow-hidden">
      
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
      
      {/* subtle background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/20 blur-[160px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image Stack */}
        <div className="relative">
          <img
            src={BgImg}
            className="rounded-3xl shadow-2xl"
            alt="Barber cutting hair"
          />

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-10 -left-5 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl px-4 py-2 shadow-xl">
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-sm text-gray-300">Years Experience</p>
          </div>


          <img
            src={About}
            className="absolute -bottom-10 -right-10 w-56 rounded-2xl border border-white/10 shadow-xl"
            alt="Beard grooming"
          />

          {/* Decorative border */}
          <div className="absolute -top-10 -left-10 w-40 h-40 border border-primary/40 rounded-3xl" />
        </div>

        {/* Right Content */}
        <div className="space-y-4">

          <div>
            <p className="text-primary tracking-[0.35em] text-xs font-semibold">
              OUR STORY
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Crafting Confidence
              <br />
              Through Precision Grooming
            </h2>

            <div className="w-24 h-[2px] bg-primary mt-5" />
          </div>

          <p className="text-gray-300 leading-relaxed text-lg max-w-xl">
            At PrimeCut, we believe a haircut is more than just grooming —
            it's a statement of confidence. Our master barbers combine traditional
            craftsmanship with modern style to deliver an experience that
            leaves every gentleman looking sharp and confident.
          </p>

          {/* Animated barber tool icons */}
          <div className="flex gap-6 pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 p-4 rounded-xl"
            >
              <Scissors className="text-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white/5 border border-white/10 p-4 rounded-xl"
            >
              <Star className="text-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white/5 border border-white/10 p-4 rounded-xl"
            >
              <Menu className="text-primary" />
            </motion.div>
          </div>

          {/* Premium highlight cards */}
          <div className="grid sm:grid-cols-3 gap-6 pt-4">

            {ABOUT_STATS.map((stat) => (
               <div key={stat.id} className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-xl">
               <h3 className="text-2xl font-bold text-primary">{stat.value}</h3>
               <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
             </div>
            ))}
          </div>

          {/* Founder Signature */}
          <div className="pt-6">
            <p className="text-gray-400 italic">
              — Michael Carter
            </p>
            <p className="text-sm text-gray-500">Founder</p>
          </div>


        </div>

      </div>
    </section>
  );
}

export default AboutPremium

