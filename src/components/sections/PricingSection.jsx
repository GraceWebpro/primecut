import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../../data/services"; // import your services array
import { Star, Scissors, Droplet, Crown } from "lucide-react";
import { GiBeard, GiRazor } from "react-icons/gi";   // beard icon

const PricingSection = () => {
  const [filter, setFilter] = useState("All");

 // Define categories based on service titles (or create a category field if needed)
 const categories = [
   { label: "All", icon: Star },              // universal / highlight
   { label: "Haircut", icon: Scissors },      // scissors = haircut
   { label: "Beard", icon: GiBeard },           // razor = beard trim/shave
   { label: "Shave", icon: GiRazor },           // razor = traditional shave
   { label: "Treatment", icon: Droplet },     // droplet = scalp / hair treatment
   { label: "VIP", icon: Crown },             // crown = luxury/VIP service
 ];


  const filteredServices =
    filter === "All"
      ? services
      : services.filter((service) => {
          if (filter === "Haircut") return service.title.includes("Haircut");
          if (filter === "Beard") return service.title.includes("Beard");
          if (filter === "Shave") return service.title.includes("Shave");
          if (filter === "VIP") return service.title.includes("VIP");
          return true;
        });

  return (
    <section className="relative w-full bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-widest text-sm font-semibold">PRICING</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Services & Prices</h2>
          <div className="w-24 h-[2px] bg-primary mx-auto mt-4"></div>
          <p className="text-gray-300 max-w-xl mx-auto mt-4">
            Explore our services and book your luxury grooming experience today.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-3 mb-12 overflow-x-auto md:justify-center scrollbar-hide no-scrollbar px-2">
  {categories.map((cat) => {
    const Icon = cat.icon;
    return (
      <button
        key={cat.label}
        onClick={() => setFilter(cat.label)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium border border-white/20 whitespace-nowrap transition ${
          filter === cat.label
            ? "bg-primary text-black shadow-lg"
            : "hover:bg-white/10"
        }`}
      >
        {Icon && <Icon size={16} className="text-current" />}
        {cat.label}
      </button>
    );
  })}
</div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
  {filteredServices.map((service, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.7 }}
      className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex flex-col md:flex-row gap-6 hover:scale-105 transition-transform duration-300 shadow-2xl"
    >
      
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-48 md:w-32 md:h-32 object-cover rounded-2xl border border-white/10"
      />

      {/* Content */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
            {service.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base">
            {service.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg md:text-xl font-semibold">
            {service.price}
          </span>

          <a
            href="#booking"
            className="px-4 py-2 bg-primary text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}

export default PricingSection;