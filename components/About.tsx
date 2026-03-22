import { CheckCircle, Zap, Shield, Heart } from 'lucide-react'

const values = [
  {
    icon: CheckCircle,
    title: 'Reliability',
    description: 'We show up on time, every time. Your laundry is in safe hands from pickup to delivery.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Zap,
    title: 'Speed',
    description: 'Same-day and next-day express options so you are never left waiting for clean clothes.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Shield,
    title: 'Hygiene',
    description: 'Premium detergents, sanitization protocols, and careful garment handling — every order.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Heart,
    title: 'Convenience',
    description: 'Schedule anytime. We collect from your doorstep and return everything clean and fresh.',
    color: 'bg-red-50 text-red-600',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We Make Laundry{' '}
              <span className="text-blue-600">Simple &amp; Smart</span>
            </h2>
            <p className="text-lg text-gray-600 mb-5 leading-relaxed">
              Connect Laundry House is a reliable, tech-enabled laundry service designed to make life
              easier for busy professionals, families, and businesses. We handle everything — from
              everyday washing to premium dry cleaning — so you can focus on what matters most.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We serve customers across Lagos with fast, affordable, and high-quality garment care.
              Every item is treated with respect, cleaned to perfection, and returned on time.
            </p>

            {/* Mission statement */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-100">
              <p className="text-blue-800 font-medium italic text-lg leading-relaxed">
                &ldquo;Our mission is to deliver spotless, professionally cared-for garments right to
                your door — making clean clothes one less thing to worry about.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — values grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
