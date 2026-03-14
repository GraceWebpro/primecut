import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";
import team1 from '../../assets/Team/barber1.jpeg'
import team2 from '../../assets/Team/barber2.jpeg'
import team3 from '../../assets/Team/barber3.jpeg'

/* ===============================
   Premium Barber Team Section
================================ */
const TeamSection = () => {
    const team = [
        {
          name: "Michael Carter",
          role: "Master Barber",
          image: team1,
          socials: { instagram: "#", twitter: "#", facebook: "#" }
        },
        {
          name: "Samantha Lee",
          role: "Stylist",
          image: team2,
          socials: { instagram: "#", twitter: "#", facebook: "#" }
        },
        {
          name: "James Taylor",
          role: "Beard Specialist",
          image: team3,
          socials: { instagram: "#", twitter: "#", facebook: "#" }
        },
      ];

  return (
    <section id="barbers" className="relative w-full bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest text-sm font-semibold">OUR EXPERTS</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Meet Our Barbers</h2>
          <div className="w-24 h-[2px] bg-primary mx-auto mt-4"></div>
          <p className="text-gray-300 max-w-xl mx-auto mt-4">
            Our talented barbers bring precision, style, and passion to every haircut.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover"/>
              </div>
              <h3 className="text-xl font-bold text-primary">{member.name}</h3>
              <p className="text-gray-300 mb-4">{member.role}</p>

              {/* Socials */}
              <div className="flex justify-center gap-4">
                <a href={member.socials.instagram} className="hover:text-primary transition">
                  <Instagram size={20} />
                </a>
                <a href={member.socials.twitter} className="hover:text-primary transition">
                  <Twitter size={20} />
                </a>
                <a href={member.socials.facebook} className="hover:text-primary transition">
                  <Facebook size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection