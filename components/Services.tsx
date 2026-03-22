import { Shirt, Wind, Package, Zap, Truck, Layers } from 'lucide-react'

const services = [
  {
    icon: Shirt,
    title: 'Washing & Drying',
    description:
      'Full wash and dry cycle using premium detergents. Fresh, clean, and fluffy results returned to you every time.',
    accent: 'bg-blue-600',
    light: 'bg-blue-50',
    text: 'text-blue-600',
  },
  {
    icon: Layers,
    title: 'Dry Cleaning',
    description:
      'Professional dry cleaning for delicate fabrics, suits, gowns, and special garments. Expert care, flawless results.',
    accent: 'bg-purple-600',
    light: 'bg-purple-50',
    text: 'text-purple-600',
  },
  {
    icon: Wind,
    title: 'Ironing & Folding',
    description:
      'Crisp, wrinkle-free clothes returned neatly folded or on hangers — ready to wear straight from the bag.',
    accent: 'bg-cyan-600',
    light: 'bg-cyan-50',
    text: 'text-cyan-600',
  },
  {
    icon: Zap,
    title: 'Express Service',
    description:
      'Need it fast? Same-day and next-day turnaround available for urgent orders. Premium speed, same quality.',
    accent: 'bg-yellow-500',
    light: 'bg-yellow-50',
    text: 'text-yellow-600',
  },
  {
    icon: Truck,
    title: 'Pickup & Delivery',
    description:
      'We come to your door, collect your laundry, and deliver it back fresh. Convenient scheduling, zero hassle.',
    accent: 'bg-green-600',
    light: 'bg-green-50',
    text: 'text-green-600',
  },
  {
    icon: Package,
    title: 'Bulk Laundry',
    description:
      'Ideal for businesses, hotels, salons, and large families. Competitive bulk pricing with reliable turnaround.',
    accent: 'bg-orange-500',
    light: 'bg-orange-50',
    text: 'text-orange-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything Your Wardrobe Needs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From everyday laundry to premium garment care — we handle it all with professionalism
            and precision.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, accent, light, text }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 ${light} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className={`w-6 h-6 ${text}`} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{description}</p>

              {/* Animated underline accent */}
              <div
                className={`mt-5 h-1 w-10 rounded-full ${accent} group-hover:w-full transition-all duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
