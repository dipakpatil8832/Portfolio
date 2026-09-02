"use client";

import { useState } from "react";

type Project = {
  title: string;
  tech: string;
  github: string;
  live?: string;
};

const aimlProjects: Project[] = [
  {
    title: "Text Emotion Detection",
    tech: "Python, NLP, Machine Learning, Streamlit",
    github:"https://github.com/dipakpatil8832/Text-Emotion-detection",
    live:"https://text-emotion-detection-2026.streamlit.app/"
  },

  {
    title: "AI Chat Bot with LangChain",
    tech: "LangChain, Output Parsers, Python, Streamlit",
    github: "https://github.com/dipakpatil8832/langchain-llm-chatbot",
    live: "https://ai-studio-chatbot.streamlit.app/",
  },

  {
    title: "Rag Based Vedio Recommendation System",
    tech: "Vector Database, Embedings, Python, Streamlit",
    github: "https://github.com/dipakpatil8832/Video-Lecture-Semantic-Search-using-RAG",
    live: "https://video-lecture-semantic-search.streamlit.app/",
  },
];

const dataAnalyticsProjects: Project[] = [
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
    title: "Business Performance Analysis SQL",
    tech: "SQL, Data Analysis",
    github:
      "https://github.com/dipakpatil8832/business_performance_analysis",
  },

  {
    title: "Freelancer-Client Escrow & Milestone Tracker",
    tech: "MySQL, Data Analysis",
    github:
      "https://github.com/dipakpatil8832/Freelancer-Client-Escrow-Milestone-Tracker-MySQL-",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"aiml" | "analytics">("aiml");

  const projects =
    activeTab === "aiml"
      ? aimlProjects
      : dataAnalyticsProjects;

  return (
    <section
      id="projects"
      className="relative z-10 bg-transparent text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-5xl font-bold text-center mb-10">
          Projects
        </h2>


        {/* Tabs */}

        <div className="flex justify-center mb-12">
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">

            {/* AIML */}

            <button
              onClick={() => setActiveTab("aiml")}
              className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                activeTab === "aiml"
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              AIML
            </button>


            {/* Divider */}

            <div className="h-6 w-px bg-slate-700" />


            {/* Data Analytics */}

            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                activeTab === "analytics"
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Data Analytics
            </button>

          </div>
        </div>


        {/* Projects */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-sky-400 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Project Title */}

              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>


              {/* Technology */}

              <p className="text-gray-400 mb-6">
                {project.tech}
              </p>


              {/* Buttons */}

              <div className="flex gap-4 flex-wrap">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg transition"
                >
                  GitHub
                </a>


                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white hover:bg-white hover:text-black px-4 py-2 rounded-lg transition"
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