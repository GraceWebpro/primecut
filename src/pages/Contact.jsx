import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-black text-white py-24 mt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest text-sm font-semibold">
            CONTACT US
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Get In Touch
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have questions or need assistance? Contact our barbershop
            and our team will respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg hover:border-primary transition">
            <Phone className="text-primary mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">(123) 456-7890</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg hover:border-primary transition">
            <Mail className="text-primary mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-400">contact@barbershop.com</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg hover:border-primary transition">
            <MapPin className="text-primary mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-400">
              123 Madison Avenue <br />
              New York, NY
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              className="text-primary mt-2 inline-block"
            >
              Open in Maps →
            </a>
          </div>

        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12">

          <form className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-xl space-y-6">

            <h3 className="text-2xl font-semibold mb-4">
              Send Us a Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-primary resize-none"
            />

            <button className="bg-primary text-black font-semibold px-8 py-3 rounded-xl hover:scale-105 transition">
              Send Message
            </button>

          </form>

          {/* Business Hours */}
          <div className="flex flex-col justify-center">

            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-xl">

              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-primary" size={26} />
                <h3 className="text-2xl font-semibold">
                  Opening Hours
                </h3>
              </div>

              <div className="space-y-4 text-gray-400">

                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact