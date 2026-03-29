'use client';

import { useState } from 'react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Industries', href: '#industries' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book Now', href: '#contact' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#F5F5F3] sticky top-0 z-50 w-full border-b border-[#E8E8E6] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-xl font-bold text-[#1B365D] tracking-tighter">El Paso Interpreters</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-sm tracking-tight uppercase text-[#2D2D2D] hover:text-[#1B365D] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Mobile click-to-call */}
          <a
            href="tel:+19155550100"
            className="lg:hidden text-[#C8553D] p-2"
            aria-label="Call (915) 555-0100"
          >
            <span className="material-symbols-outlined text-2xl">call</span>
          </a>
          <a href="tel:+19155550100" className="hidden lg:block text-[#1B365D] font-semibold text-sm hover:text-[#C8553D] transition-colors">(915) 555-0100</a>
          <a
            href="#contact"
            className="hidden sm:inline-block bg-[#C8553D] text-white px-6 py-2.5 rounded text-sm font-semibold uppercase tracking-wider hover:bg-[#b04a35] transition-all duration-300"
          >
            Book Now
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#1B365D] p-2"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E8E8E6] bg-[#F5F5F3]">
          <div className="flex flex-col px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-medium text-sm tracking-tight uppercase text-[#2D2D2D] hover:text-[#1B365D] py-3 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-[#C8553D] text-white px-6 py-2.5 rounded text-sm font-semibold uppercase tracking-wider hover:bg-[#b04a35] transition-all duration-300 text-center mt-2"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
