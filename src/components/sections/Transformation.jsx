import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hair from '../../assets/gallery/haircut.jpeg'
import hairAfter from '../../assets/gallery/haircut_after.png'
import beard from '../../assets/gallery/beard.png'
import beardAfter from '../../assets/gallery/beard_after.png'
import vip from '../../assets/gallery/vip.png'
import vipAfter from '../../assets/gallery/vip_after.png'

/* ===============================
   Premium Before / After Haircut Transformation Section
================================ */
const TransformationsSection = () => {
      const transformations = [
        {
            before: hair,
            after: hairAfter,
            title: "Hair Cutting"
        },
        {
          before: beard,
          after: beardAfter,
          title: "Beard Shaping"
        },
        {
          before: vip,
          after: vipAfter,
          title: "VIP Grooming"
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(Array(transformations.length).fill(0));
    
      const handleToggle = (idx) => {
        setCurrentIndex(prev => {
          const newArr = [...prev];
          newArr[idx] = (newArr[idx] + 1) % 2;
          return newArr;
        });
      };
    
      return (
        <section className="relative w-full bg-black text-white py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-primary tracking-widest text-sm font-semibold">TRANSFORMATIONS</p>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Before & After</h2>
              <div className="w-24 h-[2px] bg-primary mx-auto mt-4"></div>
              <p className="text-gray-300 max-w-xl mx-auto mt-4">
                See the precision and artistry in every haircut and grooming session.
              </p>
            </motion.div>
    
            {/* Transformation Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {transformations.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.7 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl group cursor-pointer"
                  onClick={() => handleToggle(idx)}
                >
                  <div className="relative w-full h-60">
                    {/* Before Image */}
                    <img
                      src={item.before}
                      alt="Before"
                      className={`absolute inset-0 w-full h-full object-cover rounded-t-3xl transition-opacity duration-500 ${currentIndex[idx] === 1 ? 'opacity-0' : 'opacity-100'} md:group-hover:opacity-0`}
                    />
                    {/* After Image */}
                    <img
                      src={item.after}
                      alt="After"
                      className={`absolute inset-0 w-full h-full object-cover rounded-t-3xl transition-opacity duration-500 ${currentIndex[idx] === 1 ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100`}
                    />
    
                    {/* Labels for desktop */}
                    <div className="hidden md:flex absolute top-3 left-3 bg-white/20 backdrop-blur-md px-3 py-1 rounded text-black text-xs font-semibold">
                      Before
                    </div>
                    <div className="hidden md:flex absolute top-3 right-3 bg-white/20 backdrop-blur-md px-3 py-1 rounded text-black text-xs font-semibold">
                      After
                    </div>
    
                    {/* Swipe indicators for mobile */}
                    <div className="flex md:hidden absolute bottom-3 left-1/2 -translate-x-1/2 space-x-2">
                      <span className={`w-2 h-2 rounded-full ${currentIndex[idx] === 0 ? 'bg-primary' : 'bg-gray-400/50'}`}></span>
                      <span className={`w-2 h-2 rounded-full ${currentIndex[idx] === 1 ? 'bg-primary' : 'bg-gray-400/50'}`}></span>
                    </div>
    
                    {/* Optional swipe arrows */}
                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-3 text-white/70 hover:text-primary transition cursor-pointer" onClick={() => handleToggle(idx)}>
                      {/* <ChevronLeft size={20} /> */}
                    </div>
                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-3 text-white/70 hover:text-primary transition cursor-pointer" onClick={() => handleToggle(idx)}>
                      {/* <ChevronRight size={20} /> */}
                    </div>
    
                  </div>
    
                  {/* Card Title */}
                  <div className="absolute bottom-4 left-4 bg-primary/70 px-4 py-2 rounded-lg backdrop-blur-md text-black font-semibold">
                    {item.title}
                  </div>
    
                  {/* Mobile instruction */}
                  <div className="md:hidden absolute bottom-4 right-4 text-xs text-gray-200/80">
                    Tap to toggle
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default TransformationsSection;
