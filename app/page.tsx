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
          <h1 className="text-7xl font-bold">
            Dipak B Patil
          </h1>

          <h2 className="text-3xl text-sky-400 mt-4">
            Data Analyst | ML Engineer
          </h2>

          <p className="text-xl text-gray-300 mt-6">
            Transforming Data into Business Insights
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">

  <a
    href="#projects"
    className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg transition"
  >
    View Projects
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
  >
    View Resume
  </a>

  <a
    href="/resume.pdf"
    download
    className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg transition"
  >
    Download Resume
  </a>

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