import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";
import Industries from "@/components/industries";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import BookingForm from "@/components/booking-form";
import Footer from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "El Paso Interpreters",
      url: "https://elpasointerpreters.com",
      description:
        "Professional English-to-Spanish and Spanish-to-English interpretation services in El Paso, TX. Certified interpreters for legal, medical, business, and government settings.",
      telephone: "+1-915-555-0100",
      address: {
        "@type": "PostalAddress",
        addressLocality: "El Paso",
        addressRegion: "TX",
        postalCode: "79901",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "31.7619",
        longitude: "-106.4850",
      },
      areaServed: [
        { "@type": "City", name: "El Paso" },
        { "@type": "City", name: "Las Cruces" },
        { "@type": "City", name: "Horizon City" },
        { "@type": "City", name: "Socorro" },
        { "@type": "City", name: "San Elizario" },
      ],
      serviceType: [
        "English-Spanish Interpretation",
        "Spanish-English Interpretation",
        "Legal Interpretation",
        "Medical Interpretation",
        "Business Interpretation",
        "Conference Interpretation",
        "Remote Interpretation",
      ],
      knowsLanguage: ["en", "es"],
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How quickly can I book an interpreter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer same-day booking for urgent needs. Typically, we recommend 48 hours notice for complex legal or medical assignments to ensure the best match.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between an interpreter and a translator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Interpreters handle spoken language in real-time, while translators work with written documents. We specialize primarily in professional spoken interpretation.",
          },
        },
        {
          "@type": "Question",
          name: "Are your interpreters certified?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all our professionals hold either State, Federal, or specialized medical certifications, ensuring compliance with all legal requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What areas do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We serve the entire Borderplex region: El Paso TX, Las Cruces NM, Horizon City, Socorro, San Elizario, Anthony, Sunland Park, and surrounding communities.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer remote interpretation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide secure video and phone interpretation for clients who need flexibility or are located outside our immediate service area.",
          },
        },
        {
          "@type": "Question",
          name: "How much do interpreter services cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rates depend on the type of service, duration, and setting. Contact us for a custom quote — we respond within two hours during business hours.",
          },
        },
      ],
    },
    {
      "@type": "Service",
      serviceType: "Legal Interpretation",
      provider: { "@type": "ProfessionalService", name: "El Paso Interpreters" },
      areaServed: { "@type": "City", name: "El Paso" },
      description: "Certified court and legal interpreters for depositions, hearings, trials, and attorney-client meetings in El Paso, TX.",
      availableLanguage: ["English", "Spanish"],
    },
    {
      "@type": "Service",
      serviceType: "Medical Interpretation",
      provider: { "@type": "ProfessionalService", name: "El Paso Interpreters" },
      areaServed: { "@type": "City", name: "El Paso" },
      description: "HIPAA-compliant medical interpreters for hospitals, clinics, and insurance examinations in El Paso, TX.",
      availableLanguage: ["English", "Spanish"],
    },
    {
      "@type": "Service",
      serviceType: "Business Interpretation",
      provider: { "@type": "ProfessionalService", name: "El Paso Interpreters" },
      areaServed: { "@type": "City", name: "El Paso" },
      description: "Professional interpreters for business meetings, conferences, negotiations, and cross-border commerce in El Paso, TX.",
      availableLanguage: ["English", "Spanish"],
    },
    {
      "@type": "Service",
      serviceType: "Government and Immigration Interpretation",
      provider: { "@type": "ProfessionalService", name: "El Paso Interpreters" },
      areaServed: { "@type": "City", name: "El Paso" },
      description: "Certified interpreters for USCIS hearings, consular appointments, and federal proceedings in El Paso, TX.",
      availableLanguage: ["English", "Spanish"],
    },
    {
      "@type": "Service",
      serviceType: "Remote Interpretation",
      provider: { "@type": "ProfessionalService", name: "El Paso Interpreters" },
      areaServed: { "@type": "City", name: "El Paso" },
      description: "Video and phone interpretation services for clients anywhere in the US.",
      availableLanguage: ["English", "Spanish"],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Industries />
        <Testimonials />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
