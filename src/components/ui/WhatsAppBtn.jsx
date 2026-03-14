import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "2348012345678";

  const message = encodeURIComponent(
    "Hello, I would like to book an appointment at PrimeCut Barbershop."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="group fixed bottom-6 right-6 z-50">

    {/* Tooltip */}
    <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
      Chat with us
    </div>

    {/* Pulse Ring */}
    <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-70 animate-ping"></span>

    {/* Button */}
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>

  </div>

  );
};

export default WhatsAppButton;