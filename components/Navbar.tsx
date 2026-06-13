export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-xl font-bold text-sky-400">
          Dipak B Patil
        </h1>

        <div className="flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-sky-400">
            About
          </a>

          <a href="#skills" className="hover:text-sky-400">
            Skills
          </a>

          <a href="#projects" className="hover:text-sky-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-sky-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}