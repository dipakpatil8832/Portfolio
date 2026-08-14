import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import FeaturedProject from "@/components/FeaturedProject";
import Background from "@/components/Background";
import Certifications from "@/components/Certifications";
import MouseGlow from "@/components/MouseGlow";

export default function Home() {
  return (
    <>
      <Background />
      <MouseGlow />
      <Navbar />

      <main className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold">Dipak B Patil</h1>

          <h2 className="text-3xl text-sky-400 mt-4">
            Data Analyst | ML Engineer
          </h2>

          <p className="text-xl text-gray-300 mt-6">
            Turning data into insights and building intelligent machine learning solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
        

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-blue-500 text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition"
              >
                Data Analyst Resume
              </a>

              <a
                href="/Dipak_Patil_ML_Engg_.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-blue-500 text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition"
              >
                ML Engineer Resume
              </a>
            </div>
          </div>
        </div>
      </main>

      <About />
      <Stats />
      <Skills />

      <FeaturedProject />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}
