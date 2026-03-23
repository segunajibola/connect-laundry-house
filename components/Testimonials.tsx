/* Real customer messages — displayed as WhatsApp-style chat bubbles */

const testimonials = [
  {
    initials: "A",
    color: "bg-green-500",
    name: "Adeola",
    role: "Regular Customer",
    time: "2:14 PM",
    lines: ["I really appreciate the urgency Sir", "I hope to get it soon."],
  },
  {
    initials: "F",
    color: "bg-purple-500",
    name: "Funmi",
    role: "Bride-to-Be",
    time: "9:03 AM",
    lines: [
      "Good morning Sir",
      "I'd still subscribe for the wedding dress deals",
      "I'll make payment once I'm ready",
    ],
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
            Real Customers, Real Messages
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Straight from our WhatsApp — unedited, real messages from the people
            we serve every day.
          </p>
        </div>

        {/* WhatsApp chat bubbles */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {testimonials.map(({ initials, color, name, role, time, lines }) => (
            <div
              key={name}
              className="bg-[#e5ddd5] rounded-2xl overflow-hidden shadow-md"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 80%, rgba(37,211,102,0.04) 0%, transparent 60%)",
              }}
            >
              {/* Chat header bar */}
              <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                <div
                  className={`w-9 h-9 ${color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-none">
                    {name}
                  </p>
                  <p className="text-green-200 text-xs mt-0.5">{role}</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-2">
                {lines.map((line, i) => (
                  <div key={i} className="flex justify-end">
                    <div className="relative bg-[#dcf8c6] text-gray-800 text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] shadow-sm">
                      {line}
                      {/* Timestamp on last bubble */}
                      {i === lines.length - 1 && (
                        <span className="text-[10px] text-gray-400 ml-3 float-right mt-1">
                          {time} ✓✓
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA beneath testimonials */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Join hundreds of happy customers — book your first pickup today.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Schedule My Pickup
          </a>
        </div>
      </div>
    </section>
  );
}
