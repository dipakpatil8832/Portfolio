export default function Skills() {
  const skills = [
    "Python",
    "SQL",
    "Power BI",
    "Machine Learning",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "Streamlit",
    "Git & GitHub",
    "Statistics",
    "EDA",
    "Data Visualization",
  ];

  return (
    <section
      id="skills"
  className="relative z-10 min-h-screen bg-transparent text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-sky-400 hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-center">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}