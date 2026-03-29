"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "How quickly can I book an interpreter?",
    answer:
      "We offer same-day booking for urgent needs. Typically, we recommend 48 hours notice for complex legal or medical assignments to ensure the best match.",
  },
  {
    question: "What is the difference between an interpreter and a translator?",
    answer:
      "Interpreters handle spoken language in real-time, while translators work with written documents. We specialize primarily in professional spoken interpretation.",
  },
  {
    question: "Are your interpreters certified?",
    answer:
      "Yes, all our professionals hold either State, Federal, or specialized medical certifications, ensuring compliance with all legal requirements.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire Borderplex region: El Paso TX, Las Cruces NM, Horizon City, Socorro, San Elizario, Anthony, Sunland Park, and surrounding communities.",
  },
  {
    question: "Do you offer remote interpretation?",
    answer:
      "Yes. We provide secure video and phone interpretation for clients who need flexibility or are located outside our immediate service area.",
  },
  {
    question: "How much do interpreter services cost?",
    answer:
      "Rates depend on the type of service, duration, and setting. Contact us for a custom quote — we respond within two hours during business hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="py-24 bg-[#F5F5F3]" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-[#1B365D] mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-[#E8E8E6] bg-white rounded overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 text-left font-bold text-[#1B365D] flex justify-between items-center"
              >
                <span>{item.question}</span>
                <span className="material-symbols-outlined">
                  {openIndex === index ? "expand_less" : "expand_more"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-[#2D2D2D] text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
