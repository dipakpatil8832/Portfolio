import Image from "next/image";

export default function About() {
return ( <section
   id="about"
  className="relative z-10 min-h-screen bg-transparent text-white flex items-center py-20"
 > <div className="max-w-7xl mx-auto px-6">


    <h2 className="text-5xl font-bold text-center mb-16">
      About Me
    </h2>

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* Profile Section */}

      <div className="flex flex-col items-center">

        <div className="relative group">

          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative">
            <Image
              src="/img.png"
              alt="Dipak B Patil"
              width={320}
              height={320}
              className="rounded-full border-4 border-slate-800 object-cover"
            />
          </div>

        </div>

        <div className="text-center mt-6">

          <h3 className="text-3xl font-bold">
            Dipak B Patil
          </h3>

          <p className="text-sky-400 text-lg">
            Data Analyst | ML Engineer
          </p>

          <span className="inline-block mt-3 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
            ● Open To Work
          </span>

        </div>

      </div>

      {/* Details Section */}

      <div>

        <p className="text-gray-300 leading-8 text-lg mb-8">
          Passionate Data Analyst and ML Engineer focused on
          transforming raw data into meaningful business insights
          through analytics, visualization, and machine learning.
        </p>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="bg-slate-800/50 p-4 rounded-xl">
            <span className="text-sky-400 font-semibold">
              Role
            </span>
            <br />
            Data Analyst | ML Engineer
          </div>

          <div className="bg-slate-800/50 p-4 rounded-xl">
            <span className="text-sky-400 font-semibold">
              Status
            </span>
            <br />
            Open To Work
          </div>

          <div className="bg-slate-800/50 p-4 rounded-xl">
            <span className="text-sky-400 font-semibold">
              Education
            </span>
            <br />
            B.Tech (AI & ML)
          </div>

          <div className="bg-slate-800/50 p-4 rounded-xl">
            <span className="text-sky-400 font-semibold">
              Location
            </span>
            <br />
            Pune, Maharashtra, India
          </div>

          <div className="bg-slate-800/50 p-4 rounded-xl">
            <span className="text-sky-400 font-semibold">
              Languages
            </span>
            <br />
            English, Hindi, Marathi
          </div>

          <div className="bg-slate-800/50 p-4 rounded-xl">
            <span className="text-sky-400 font-semibold">
              Email
            </span>
            <br />
            dipakpatil0714@gmail.com
          </div>

        </div>

        <div className="mt-8 flex flex-wrap gap-3">

          <span className="bg-sky-500 px-4 py-2 rounded-full">
            Python
          </span>

          <span className="bg-sky-500 px-4 py-2 rounded-full">
            SQL
          </span>

          <span className="bg-sky-500 px-4 py-2 rounded-full">
            Power BI
          </span>

          <span className="bg-sky-500 px-4 py-2 rounded-full">
            EDA
          </span>

          <span className="bg-sky-500 px-4 py-2 rounded-full">
            Machine Learning
          </span>

        </div>

      </div>

    </div>

  </div>
</section>


);
}
