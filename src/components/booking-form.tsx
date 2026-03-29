"use client";

import { useState, FormEvent } from "react";

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  dateNeeded: string;
  serviceType: string;
  description: string;
}

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    dateNeeded: "",
    serviceType: "",
    description: "",
  });
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* LEFT: Contact Info */}
          <div>
            <h2 className="text-4xl font-extrabold text-[#1B365D] mb-8">
              Book Your Interpreter
            </h2>
            <p className="text-[#2D2D2D] mb-12 text-lg">
              Provide your details and our scheduling team will contact you
              within 60 minutes during business hours.
            </p>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-[#C8553D]">
                  phone_in_talk
                </span>
                <div>
                  <div className="font-bold text-[#1B365D]">Direct Line</div>
                  <a href="tel:+19157016355" className="text-[#2D2D2D] hover:text-[#C8553D] transition-colors">(915) 701-6355</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-[#C8553D]">
                  schedule
                </span>
                <div>
                  <div className="font-bold text-[#1B365D]">
                    Business Hours
                  </div>
                  <div className="text-[#2D2D2D]">
                    Mon-Fri: 8 AM - 6 PM MT
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-[#C8553D]">
                  pin_drop
                </span>
                <div>
                  <div className="font-bold text-[#1B365D]">Headquarters</div>
                  <div className="text-[#2D2D2D]">El Paso, TX 79901</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="bg-[#F5F5F3] p-10 rounded shadow-sm border border-[#E8E8E6]">
            {status === "success" ? (
              <div className="text-center py-12">
                <p className="text-[#1B365D] font-bold text-lg mb-2">
                  Your request has been submitted.
                </p>
                <p className="text-[#2D2D2D]">
                  We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#1B365D] mb-2">
                      Name
                    </label>
                    <input
                      className="w-full bg-white border border-[#E8E8E6] rounded p-3 focus:ring-[#C8553D] focus:border-[#C8553D] focus:outline-none"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#1B365D] mb-2">
                      Company
                    </label>
                    <input
                      className="w-full bg-white border border-[#E8E8E6] rounded p-3 focus:ring-[#C8553D] focus:border-[#C8553D] focus:outline-none"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#1B365D] mb-2">
                      Email
                    </label>
                    <input
                      className="w-full bg-white border border-[#E8E8E6] rounded p-3 focus:ring-[#C8553D] focus:border-[#C8553D] focus:outline-none"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#1B365D] mb-2">
                      Phone
                    </label>
                    <input
                      className="w-full bg-white border border-[#E8E8E6] rounded p-3 focus:ring-[#C8553D] focus:border-[#C8553D] focus:outline-none"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#1B365D] mb-2">
                      Date Needed
                    </label>
                    <input
                      className="w-full bg-white border border-[#E8E8E6] rounded p-3 focus:ring-[#C8553D] focus:border-[#C8553D] focus:outline-none"
                      type="date"
                      name="dateNeeded"
                      value={formData.dateNeeded}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#1B365D] mb-2">
                      Service Type
                    </label>
                    <select
                      className="w-full border border-[#E8E8E6] rounded p-3 focus:ring-[#C8553D] focus:border-[#C8553D] focus:outline-none bg-white"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                    >
                      <option value="">Select service...</option>
                      <option value="legal">Legal</option>
                      <option value="medical">Medical</option>
                      <option value="business">Business</option>
                      <option value="government">Government</option>
                      <option value="remote">Remote</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#1B365D] mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full bg-white border border-[#E8E8E6] rounded p-3 focus:ring-[#C8553D] focus:border-[#C8553D] focus:outline-none"
                    placeholder="Details about your request..."
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#1B365D] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#122440] transition-colors disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Submitting..."
                    : "Request an Interpreter"}
                </button>
                {status === "error" && (
                  <p className="text-red-600 text-sm text-center">
                    Something went wrong. Please try again or contact us
                    directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
