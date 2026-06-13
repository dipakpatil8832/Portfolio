import Image from "next/image";

const certifications = [
  {
    title: "Python Programming",
    issuer: "Certification",
    image: "/certificates/python.jpg",
    link: "/certificates/python.jpg",
  },
  {
    title: "Exploratory Data Analysis",
    issuer: "Certification",
    image: "/certificates/eda.jpg",
    link: "/certificates/eda.jpg",
  },
  {
    title: "Power BI",
    issuer: "Certification",
    image: "/certificates/powerbi.jpg",
    link: "/certificates/powerbi.jpg",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative z-10 bg-transparent text-white py-20"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {" "}
        <h2 className="text-5xl font-bold text-center mb-4">Certifications </h2>
        <p className="text-center text-gray-400 mb-16">
          Continuous learning and professional development
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-sky-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-all duration-300 group"
            >
              <div className="overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>

                <p className="text-gray-400 mb-6">{cert.issuer}</p>

                <a
                  href={cert.link}
                  target="_blank"
                  className="block w-full text-center bg-sky-500 hover:bg-sky-600 py-3 rounded-lg"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
