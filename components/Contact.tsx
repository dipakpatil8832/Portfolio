import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 bg-transparent text-white py-20"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-8">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Let's connect and discuss opportunities.
        </p>

        <div className="flex justify-center gap-10 text-4xl">

          <a
            href="mailto:dipakpatil229@gmail.com"
            className="hover:text-sky-400"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/dipakpatil8832"
            target="_blank"
            className="hover:text-sky-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/dipak-patil-140356240/"
            target="_blank"
            className="hover:text-sky-400"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
}