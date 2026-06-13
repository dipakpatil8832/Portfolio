const projects = [
  {
    title: "Hotel Booking Cancellation Analysis",
    tech: "Python, Pandas, Plotly, Streamlit",
    github:
      "https://github.com/dipakpatil8832/Hotel-Booking-Cancelation-Analysis-Dashboard-Streamlit-",
    live:
      "https://hotel-booking-cancelation-analysis-2026.streamlit.app/",
  },
  {
    title: "Hotel Booking Power BI Dashboard",
    tech: "Power BI, DAX, Power Query",
    github:
      "https://github.com/dipakpatil8832/Power-BI-Dashboard-For-Hotel-Booking-Cancellation-Analysis",
  },
  {
    title: "AmbitionBox EDA",
    tech: "Python, Pandas, Seaborn",
    github:
      "https://github.com/dipakpatil8832/Exploratory-Data-Analysis-on-AmbitionBox-Website",
  },
  {
    title: "Smart Spend",
    tech: "Python, Streamlit",
    github:
      "https://github.com/dipakpatil8832/smart-spend-streamlit-app",
  },
  {
    title: "Customer Churn Analysis",
    tech: "Power BI, SQL",
    github:
      "https://github.com/dipakpatil8832/Customer-Churn-Analysis-",
  },
  {
    title: "Text Emotion Detection",
    tech: "NLP, Machine Learning",
    github:
      "https://github.com/dipakpatil8832/Text-Emotion-detection",
  },

  {
    title: "Business Performance Analysis SQL",
    tech: "SQL, Data Analysis",
    github:
    "https://github.com/dipakpatil8832/business_performance_analysis",
  },

  
];

export default function Projects() {
  return (
    <section
      id="projects"
  className="relative z-10 bg-transparent text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-sky-400 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  className="bg-sky-500 px-4 py-2 rounded-lg"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="border border-white px-4 py-2 rounded-lg"
                  >
                    Live Demo
                  </a>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}