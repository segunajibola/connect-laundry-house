import { CalendarDays, ShoppingBag, Sparkles, Truck } from 'lucide-react'

const steps = [
  {
    icon: CalendarDays,
    step: '01',
    title: 'Schedule a Pickup',
    description:
      'Use our booking form or WhatsApp to set a convenient pickup date and time. Available 7 days a week.',
    accent: 'bg-blue-600',
    light: 'bg-blue-50',
    text: 'text-blue-600',
  },
  {
    icon: ShoppingBag,
    step: '02',
    title: 'We Collect Your Laundry',
    description:
      'Our rider arrives at your location, packs your clothes securely, and transports them to our facility.',
    accent: 'bg-purple-600',
    light: 'bg-purple-50',
    text: 'text-purple-600',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'We Wash & Clean Professionally',
    description:
      'Expert cleaning using premium detergents, modern machines, and meticulous care for every single garment.',
    accent: 'bg-cyan-600',
    light: 'bg-cyan-50',
    text: 'text-cyan-600',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Delivered to Your Doorstep',
    description:
      'Your fresh, clean clothes are delivered back neatly folded or on hangers. On time, every time.',
    accent: 'bg-green-600',
    light: 'bg-green-50',
    text: 'text-green-600',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Clean Clothes in 4 Easy Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started is simple. Let us take the laundry stress completely off your plate.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (visible on desktop) */}
          <div
            className="hidden lg:block absolute h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 via-cyan-300 to-green-300 opacity-40"
            style={{ top: '3.25rem', left: '12.5%', right: '12.5%' }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map(({ icon: Icon, step, title, description, accent, light, text }) => (
              <div key={step} className="flex flex-col items-center text-center">
                {/* Icon with step badge */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 ${accent} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span
                    className={`absolute -top-2 -right-2 w-6 h-6 ${light} ${text} text-xs font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm`}
                  >
                    {step}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
}
