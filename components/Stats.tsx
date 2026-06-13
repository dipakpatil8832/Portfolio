export default function Stats() {
  const stats = [
    { value: "6+", label: "Projects" },
    { value: "3+", label: "Certifications" },
    { value: "4+", label: "Technologies" },
    { value: "2026", label: "Graduation" },
  ];

  return (
    <section 
      className="relative z-10 bg-transparent text-white py-20">
        <h2 className="text-5xl font-bold text-center mb-16">
      Stats
    </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
          
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-slate-950 border border-slate-800 rounded-xl p-8 text-center"
          >
          
            <h2 className="text-4xl font-bold text-sky-400">
              {item.value}
            </h2>

            <p className="text-gray-400 mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}