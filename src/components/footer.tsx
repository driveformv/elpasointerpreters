export default function Footer() {
  return (
    <footer className="bg-[#1B365D] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm leading-relaxed">
        <div className="md:col-span-1">
          <span className="text-lg font-bold text-white mb-4 block">
            El Paso Interpreters
          </span>
          <p className="text-[#E8E8E6]/80">
            Premier linguistic consulting for the Southwest border region.
            Precision, confidentiality, and professional excellence.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white uppercase tracking-widest mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                className="text-[#E8E8E6]/80 hover:text-white transition-colors"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-[#E8E8E6]/80 hover:text-white transition-colors"
                href="#why-us"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                className="text-[#E8E8E6]/80 hover:text-white transition-colors"
                href="#industries"
              >
                Industries
              </a>
            </li>
            <li>
              <a
                className="text-[#E8E8E6]/80 hover:text-white transition-colors"
                href="#faq"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                className="text-[#E8E8E6]/80 hover:text-white transition-colors"
                href="#contact"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white uppercase tracking-widest mb-6">
            Service Area
          </h4>
          <ul className="space-y-3">
            <li className="text-[#E8E8E6]/80">El Paso, TX</li>
            <li className="text-[#E8E8E6]/80">Las Cruces, NM</li>
            <li className="text-[#E8E8E6]/80">Horizon City, TX</li>
            <li className="text-[#E8E8E6]/80">Socorro, TX</li>
            <li className="text-[#E8E8E6]/80">San Elizario, TX</li>
            <li className="text-[#E8E8E6]/80">Borderplex Region</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white uppercase tracking-widest mb-6">
            Connect
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-xs">call</span>
              <a href="tel:+19157016355" className="text-[#E8E8E6]/80 hover:text-white transition-colors">(915) 701-6355</a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-xs">schedule</span>
              <span className="text-[#E8E8E6]/80">Mon-Fri: 8 AM - 6 PM</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-xs">
                location_on
              </span>
              <span className="text-[#E8E8E6]/80">El Paso, TX</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-[#E8E8E6]/60 text-xs">
          2026 El Paso Interpreters. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
