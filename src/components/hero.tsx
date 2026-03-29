const trustItems = [
  { icon: 'verified', label: 'Certified Interpreters' },
  { icon: 'schedule', label: 'Same-Day Availability' },
  { icon: 'location_on', label: 'Locally Owned' },
  { icon: 'history_edu', label: '12+ Years Experience' },
];

export default function Hero() {
  return (
    <section className="relative bg-[#F5F5F3] pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1B365D] leading-[1.1] mb-6">
            El Paso&apos;s Professional English-Spanish Interpreters
          </h1>
          <p className="text-xl text-[#2D2D2D] mb-10 max-w-xl leading-relaxed">
            Certified legal, medical, court, and USCIS interpreters for El Paso businesses, law firms, clinics, and government agencies. Same-day availability across the Borderplex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-[#C8553D] text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:brightness-110 transition-all text-center"
            >
              Book an Interpreter
            </a>
            <a
              href="tel:+19155550100"
              className="border-2 border-[#1B365D] text-[#1B365D] px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-[#1B365D] hover:text-white transition-all text-center"
            >
              Call (915) 555-0100
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/Interpreter.jpeg"
              alt="Professional English-Spanish interpreter with headset in El Paso office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded border border-[#E8E8E6]">
            <div className="text-[#C8553D] font-bold text-3xl">12+</div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[#2D2D2D]">Years Serving El Paso</div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[#E8E8E6]">
          {trustItems.map((item) => (
            <div key={item.icon} className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-[#C8553D]">{item.icon}</span>
              <span className="text-sm font-bold uppercase tracking-tighter text-[#1B365D]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
