const stats = [
  {
    value: "12+",
    label: "Years Active",
    description: "A decade of specialized experience in the Paso del Norte region.",
  },
  {
    value: "Same Day",
    label: "Responsiveness",
    description: "Urgent requests handled with priority within 2 hours.",
  },
  {
    value: "100%",
    label: "Certified",
    description: "Every interpreter is fully vetted and state-certified.",
  },
  {
    value: "Border Native",
    label: "Dialect Experts",
    description: "Mastery of local linguistic nuances unique to the border.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#1B365D] text-white" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-20 text-center">
          Why El Paso Businesses Trust Us
        </h2>
        <div className="grid md:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-extrabold text-[#C8553D] mb-4">
                {stat.value}
              </div>
              <div className="text-lg font-semibold uppercase tracking-widest mb-2">
                {stat.label}
              </div>
              <p className="text-white/70 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
