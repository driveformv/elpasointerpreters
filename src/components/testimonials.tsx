const testimonials = [
  {
    quote:
      "Invaluable support during our multi-day deposition. The interpreter's professionalism and command of legal terminology were exceptional.",
    name: "Maria G.",
    title: "Senior Partner, Gomez Law",
  },
  {
    quote:
      "They are our first call for medical consultations. Their empathy and accuracy ensure our patients feel heard and understood.",
    name: "Dr. James R.",
    title: "Chief of Medicine, EP Regional",
  },
  {
    quote:
      "Flawless execution during our international board meeting. They bridged the linguistic gap effortlessly.",
    name: "Carlos M.",
    title: "COO, Border Logistics Corp",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-[#1B365D] mb-16 text-center">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-10 bg-[#F5F5F3] rounded relative"
            >
              <span className="material-symbols-outlined text-[#C8553D] text-5xl opacity-20 absolute top-4 left-4">
                format_quote
              </span>
              <p className="text-[#2D2D2D] italic mb-8 relative z-10 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-bold text-[#1B365D]">
                  {testimonial.name}
                </div>
                <div className="text-sm text-[#C8553D] font-medium uppercase tracking-wider">
                  {testimonial.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-[#C8553D] text-white px-10 py-4 rounded font-bold uppercase tracking-wide hover:brightness-110 transition-all"
          >
            Book Your Interpreter Today
          </a>
        </div>
      </div>
    </section>
  );
}
