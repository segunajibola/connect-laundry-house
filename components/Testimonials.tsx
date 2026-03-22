import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Adaeze Nwosu',
    role: 'Busy Professional',
    initials: 'AN',
    color: 'bg-blue-100 text-blue-700',
    rating: 5,
    text: "Connect Laundry House has been a game-changer for me. I never have to worry about laundry anymore — they pick up, clean everything perfectly, and deliver right to my door. Absolutely love the service!",
  },
  {
    name: 'Emeka Okafor',
    role: 'Business Owner',
    initials: 'EO',
    color: 'bg-purple-100 text-purple-700',
    rating: 5,
    text: "I use them for my office shirts every week. The dry cleaning quality is outstanding, and they always deliver on time. Highly recommend to anyone who values clean, crisp, professional-looking clothes.",
  },
  {
    name: 'Fatima Bello',
    role: 'Mother of Three',
    initials: 'FB',
    color: 'bg-green-100 text-green-700',
    rating: 5,
    text: "With three kids, laundry was completely overwhelming. Connect Laundry House saves me so much time every week. Affordable pricing, great results, and the team is always professional and friendly.",
  },
  {
    name: 'Tunde Adeleke',
    role: 'Hotel Manager',
    initials: 'TA',
    color: 'bg-orange-100 text-orange-700',
    rating: 5,
    text: "We use their bulk laundry service for our hotel linens. Consistent quality, reliable turnaround, and excellent communication. They have become our go-to laundry partner and we wouldn't switch.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t take our word for it — hear from the hundreds of happy customers we serve
            every day across Lagos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(({ name, role, initials, color, rating, text }) => (
            <div
              key={name}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex flex-col"
            >
              {/* Decorative quote */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${color} rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}
                >
                  {initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{name}</div>
                  <div className="text-xs text-gray-500">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
