import { useState } from "react";
import { Helmet } from "react-helmet";

const faqs = [
  {
    question: "How much do services cost?",
    answer:
      "Service prices vary depending on the treatment. You can view our full pricing list on the Pricing section or contact us for more details."
  },
  {
    question: "How long does a typical haircut take?",
    answer:
      "Most haircuts take between 30 and 45 minutes depending on the style and service requested.",
  },
  {
    question: "What services does PrimeCut offer?",
    answer:
      "PrimeCut provides premium grooming services including haircuts, beard grooming, hot towel shaves, hair treatments, and luxury VIP grooming packages.",
  },
  {
    question: "Can I choose my barber when booking?",
    answer:
      "Yes. When booking an appointment, you can request your preferred barber if they are available during your selected time.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Yes, walk-ins are welcome. However, we recommend booking an appointment online to avoid waiting during busy hours.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 mt-10">

      <Helmet>
        <meta
          name="description"
          content="Frequently asked questions about the QuickBite food ordering template."
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-300 max-w-xl text-center mx-auto mb-8">
     
        Everything you need to know before booking your appointment.          
      
      </p>

      <div className="space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border dark:border-white/20 rounded-xl p-5 cursor-pointer transition hover:shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">

              <h3 className="font-semibold text-lg">
                {faq.question}
              </h3>

              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>

            </div>

            {openIndex === index && (
              <p className="mt-4 text-gray-500">
                {faq.answer}
              </p>
            )}

          </div>
        ))}

      </div>

      <div className="text-center mt-16">
        <p className="text-gray-500 mb-4">
            Still have questions?
        </p>

        <a
            href="/contact"
            className="bg-primary text-black px-6 py-3 rounded-xl"
        >
            Contact Us
        </a>
        </div>
    </div>
  );
};

export default FAQ;