export default function FeaturedProject() {
  return (
    <section 
    
    id="FeaturedProject"
  className="relative z-10 bg-transparent text-white py-20"
  >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Featured Project
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <span className="text-sky-400">
              HOTEL BOOKING ANALYSIS
            </span>

            <h3 className="text-4xl font-bold mt-4">
              Hotel Booking Cancellation Analysis
            </h3>

            <p className="text-gray-400 mt-6">
              Analyzed 119K+ booking records to identify
              cancellation patterns, customer behavior,
              revenue trends and operational insights.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-slate-900 p-4 rounded-lg">
                119K+
                <br />
                Records
              </div>

              <div className="bg-slate-900 p-4 rounded-lg">
                <a
                  href={"https://hotel-booking-cancelation-analysis-2026.streamlit.app/dashboard"}
                  target="_blank"
                  className="block w-full text-center bg-sky-500 hover:bg-sky-600 py-3 rounded-lg"
                >
                  View Dashboard
                </a>
              </div>

            </div>

          </div>

          <div>

            <img
              src="/project/hotel_booking.png"
              alt="project"
              className="rounded-2xl border border-slate-800"
            />

          </div>

        </div>

      </div>

    </section>
  );
}