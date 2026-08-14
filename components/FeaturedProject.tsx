export default function FeaturedProject() {
  return (
    <section
      id="FeaturedProject"
      className="relative z-10 bg-transparent text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Featured Projects
        </h2>

        {/* Project 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-24">

          <div>
            <span className="text-sky-400">
              HOTEL BOOKING ANALYSIS
            </span>

            <h3 className="text-4xl font-bold mt-4">
              Hotel Booking Cancellation Analysis
            </h3>

            <p className="text-gray-400 mt-6">
              Analyzed 119K+ booking records to identify cancellation
              patterns, customer behavior, revenue trends and
              operational insights.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-slate-900 p-4 rounded-lg">
                <span className="text-2xl font-bold">
                  119K+
                </span>
                <br />
                Records
              </div>

              <div className="bg-slate-900 p-4 rounded-lg">
                <a
                  href="https://hotel-booking-cancelation-analysis-2026.streamlit.app/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-sky-500 hover:bg-sky-600 py-3 rounded-lg transition"
                >
                  View Dashboard
                </a>
              </div>

            </div>
          </div>

          <div>
            <img
              src="/project/hotel_booking.png"
              alt="Hotel Booking Analysis Dashboard"
              className="rounded-2xl border border-slate-800"
            />
          </div>

        </div>


        {/* Project 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="order-2 md:order-1">

            <img
              src="/project/text_emotion.png"
              alt="AI Toxic Behavior Detection"
              className="rounded-2xl border border-slate-800"
            />

          </div>

          <div className="order-1 md:order-2">

            <span className="text-sky-400">
              MACHINE LEARNING / NLP
            </span>

            <h3 className="text-4xl font-bold mt-4">
              AI-Based Toxic Behavior Detection
            </h3>

            <p className="text-gray-400 mt-6">
              Developed an NLP-based machine learning application
              to detect toxic behavior in social media text and
              analyze emotional patterns from user input.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-slate-900 p-4 rounded-lg">
                <span className="text-lg font-semibold">
                  NLP
                </span>
                <br />
                Text Analysis
              </div>

              <div className="bg-slate-900 p-4 rounded-lg">
                <a
                  href="https://text-emotion-detection-2026.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-sky-500 hover:bg-sky-600 py-3 rounded-lg transition"
                >
                  Live Demo
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}