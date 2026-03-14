import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../../data/services"; // your services array
import emailjs from "@emailjs/browser";
import BookingImg from '../../assets/bookingImg.jpeg'
import { FaWhatsapp } from "react-icons/fa";

const BookingSection = () => {
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError(false);
  setSuccess(false);

  const templateParams = {
    service: selectedService,
    name: name,
    phone: phone,
    email: email,
    date: date,
    time: time,
    message: message
  };

  try {
    await emailjs.send(
      "service_nnrou8o",   // "service_xxxxxx" your service ID
      "template_l2yg57v",  // "template_abcdef" your template ID
      templateParams,
      "V8YbTK6Cu4MlPG6Q0" // "PUBLIC_KEY_HERE"
    );

    setSuccess(true);

    // Reset form
    setSelectedService("");
    setName("");
    setPhone("");
    setEmail("");
    setDate("");
    setTime("");
    setMessage("");

  } catch (err) {
    console.error(err);
    setError(true);
  }

  setLoading(false);

  
};

const phoneNumber = "2347043421913";

const whaMessage = encodeURIComponent(
  "Hello, I would like to book an appointment at PrimeCut Barbershop."
);

const whatsappLink = `https://wa.me/${phoneNumber}?text=${whaMessage}`;

  return (
    <section
      id="booking"
      className="relative w-full py-28"
      style={{
        backgroundImage: `url(${BookingImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-widest text-sm font-semibold">BOOKING</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            Reserve Your Spot
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mt-4">
            Choose your service, select a convenient time, and enjoy a luxury grooming experience.
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl max-w-4xl mx-auto p-8 shadow-2xl flex flex-col gap-6"
        >

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

       

          {/* Name, Email, Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="" disabled>
                Select a Service
              </option>
              {services.map((service, idx) => (
                <option key={idx} value={service.title}>
                  {service.title} — {service.price}
                </option>
              ))}
            </select>
            
          </div>

          {/* Date & Time */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <label className="text-sm text-gray-300">Special Request</label>
          <textarea
            placeholder="Special Request (Optional)"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-8 py-4 bg-primary text-black font-bold rounded-xl shadow-lg hover:scale-105 transition disabled:opacity-50 hover:shadow-[0_0_25px_theme(colors.primary)] disabled:cursor-not-allowed"
          >
            {loading ? "Sending Booking..." : "Book Appointment"}
          </button>
        </motion.form>

        {/* WhatsApp Quick Booking */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm mb-4">
            Or book instantly on WhatsApp
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:scale-105 transition shadow-lg"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </a>
        </div>


        {success && (
          <div className="mt-6 p-4 rounded-xl bg-green-500/20 border border-green-400 text-green-300 text-center">
            ✔ Booking request sent successfully. We will contact you shortly.
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 rounded-xl bg-red-500/20 border border-red-400 text-red-300 text-center">
            ✖ Failed to send booking. Please try again.
          </div>
        )}
      </div>
    </section>
  );
}

export default BookingSection