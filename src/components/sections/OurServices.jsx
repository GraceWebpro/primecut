import React from 'react'
import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa6';
import { services } from '../../data/services';

const OurServices = () => {
  
  
    return (
      <section id='services' className="relative w-full bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
  
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-primary tracking-widest text-sm font-semibold">OUR SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              What We Offer
            </h2>
            <div className="w-24 h-[2px] bg-primary mx-auto mt-4"></div>
          </motion.div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: idx * 0.2, duration: 0.8 }} 
                className="relative rounded-3xl p-8 bg-gradient-to-tr from-white/5 to-white/10 border border-white/20 backdrop-blur-3xl shadow-2xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-4xl transition-transform duration-500 group" 
              > 
                  
                  {/* Floating Particle Glow */} 
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none"> 
                    <div className="absolute w-16 h-16 bg-gradient-to-tr from-primary/50 to-[#D4AF37]/30 rounded-full blur-3xl -top-6 -left-6 animate-pulse"></div> 
                    <div className="absolute w-24 h-24 bg-gradient-to-br from-[#D4AF37]/40 to-primary/20 rounded-full blur-2xl -bottom-8 -right-8 animate-pulse delay-200"></div> 
                  </div> 
                  
                  {/* Service Icon */} 
                  <div className="mb-6 flex justify-center"> 
                    <div className="bg-white/10 text-primary p-5 rounded-full shadow-xl transform transition-transform duration-500 hover:scale-110"> 
                      {service.icon} 
                    </div> 
                  </div> 
                  
                  {/* Title */} 
                  <h3 className="text-2xl md:text-3xl text-center font-extrabold text-white mb-3 tracking-wide"> 
                    {service.title} 
                  </h3> 
                  
                  {/* Description */} 
                  <p className="text-gray-300 text-center text-sm md:text-base mb-6 leading-relaxed"> 
                    {service.description} 
                  </p> 
                  
                  
                  {/* Subtle Glow Overlay on Hover */} 
                  <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-30 bg-gradient-to-tr from-primary/30 to-[#D4AF37]/30 transition-opacity duration-500 pointer-events-none"></div> 
              </motion.div>
            ))}
          </div>
  
        </div>
      </section>
    );
}

export default OurServices
