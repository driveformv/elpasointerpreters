const industries = [
  "Law Firms",
  "Hospitals & Clinics",
  "Courts & Legal",
  "Insurance Companies",
  "Government Agencies",
  "Schools & Universities",
  "Fort Bliss / Military",
  "Real Estate",
  "HR Departments",
  "Construction",
  "Manufacturing / Maquiladoras",
];

export default function Industries() {
  return (
    <section className="py-24 bg-[#F5F5F3]" id="industries">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-[#1B365D] mb-12">
          Industries We Serve
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-8 py-3 bg-white border border-[#E8E8E6] text-[#1B365D] font-bold rounded shadow-sm"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
