const services = [
  {
    title: "Legal Interpretation",
    description:
      "Court-certified experts for depositions, trials, mediations, and client meetings.",
    icon: "gavel",
  },
  {
    title: "Medical Interpretation",
    description:
      "HIPAA-compliant professionals for complex surgeries, diagnosis, and patient intake.",
    icon: "medical_services",
  },
  {
    title: "Business & Corporate",
    description:
      "Facilitating cross-border commerce with boardroom-level linguistic support.",
    icon: "corporate_fare",
  },
  {
    title: "Government & Immigration",
    description:
      "Supporting USCIS interviews, public hearings, and local agency requirements.",
    icon: "account_balance",
  },
  {
    title: "Remote Interpretation",
    description:
      "Crystal-clear video and audio interpretation for global connectivity via Zoom or Teams.",
    icon: "video_chat",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-[#1B365D] mb-4">
            Interpretation Services
          </h2>
          <div className="w-20 h-1.5 bg-[#C8553D]"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.title}
              className="p-8 border border-[#E8E8E6] rounded hover:border-[#C8553D] transition-colors group"
            >
              <span className="material-symbols-outlined text-4xl text-[#1B365D] mb-6 block">
                {service.icon}
              </span>
              <h3 className="text-xl font-bold text-[#1B365D] mb-4">
                {service.title}
              </h3>
              <p className="text-[#2D2D2D] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:px-24">
          {services.slice(3).map((service) => (
            <div
              key={service.title}
              className="p-8 border border-[#E8E8E6] rounded hover:border-[#C8553D] transition-colors group"
            >
              <span className="material-symbols-outlined text-4xl text-[#1B365D] mb-6 block">
                {service.icon}
              </span>
              <h3 className="text-xl font-bold text-[#1B365D] mb-4">
                {service.title}
              </h3>
              <p className="text-[#2D2D2D] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-[#C8553D] text-white px-10 py-4 rounded font-bold uppercase tracking-wide hover:brightness-110 transition-all"
          >
            Book an Interpreter
          </a>
          <p className="mt-3 text-[#2D2D2D]/60 text-sm">Need one today? Call <a href="tel:+19157016355" className="text-[#1B365D] font-semibold hover:text-[#C8553D]">(915) 701-6355</a></p>
        </div>
      </div>
    </section>
  );
}
