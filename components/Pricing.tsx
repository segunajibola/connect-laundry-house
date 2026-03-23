import Image from 'next/image'
import { Check, Sparkles, Truck, CreditCard, MessageCircle } from 'lucide-react'

const packages = [
  {
    name: 'Basic',
    image: '/images/connect-basic-package.jpeg',
    tier: 'Entry Level',
    color: 'border-blue-200',
    badge: 'bg-blue-600',
  },
  {
    name: 'Executive',
    image: '/images/connect-executive-package.jpeg',
    tier: 'Most Popular',
    color: 'border-purple-200',
    badge: 'bg-purple-600',
    featured: true,
  },
  {
    name: 'Platinum',
    image: '/images/connect-platinum-package.jpeg',
    tier: 'Premium',
    color: 'border-yellow-300',
    badge: 'bg-yellow-500',
  },
]

const kgPricing = [
  { label: 'Standard Wash', sublabel: 'per kg, min. 3 kg', price: '₦500' },
  { label: 'Wash & Dry', sublabel: 'per kg, min. 3 kg', price: '₦700' },
  { label: 'Wash, Dry & Fold', sublabel: 'per kg, min. 3 kg', price: '₦900', popular: true },
  { label: 'Bulk Order (10 kg+)', sublabel: 'special discounted rate', price: '₦750 /kg' },
]

const itemPricing = [
  { label: 'Plain Shirt / T-Shirt', price: '₦400' },
  { label: 'Trouser / Jeans', price: '₦600' },
  { label: 'Suit (2-piece)', price: '₦2,500', popular: true },
  { label: 'Gown / Dress', price: '₦800 – ₦1,500' },
  { label: 'Wedding Dress', price: 'Custom quote' },
  { label: 'Duvet / Comforter', price: '₦2,000' },
]

const highlights = [
  {
    icon: Truck,
    title: 'Free Pickup & Delivery',
    desc: 'On all orders above ₦30,000',
    color: 'bg-green-50 border-green-200 text-green-700',
    iconColor: 'bg-green-100 text-green-600',
  },
  {
    icon: CreditCard,
    title: 'Pay-As-You-Go',
    desc: 'No subscription required. Pay only for what you send.',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    iconColor: 'bg-blue-100 text-blue-600',
  },
]

const WA_NUMBER = '2347043845448'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden charges. Pay only for what you need — affordable for everyone.
          </p>
        </div>

        {/* Offer highlights */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16 max-w-2xl mx-auto">
          {highlights.map(({ icon: Icon, title, desc, color, iconColor }) => (
            <div key={title} className={`flex items-start gap-4 p-5 rounded-2xl border ${color}`}>
              <div className={`w-10 h-10 ${iconColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">{title}</p>
                <p className="text-sm opacity-80 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Subscription Packages ── */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Subscription Packages</h3>
            <p className="text-gray-600">
              Choose a recurring plan that suits your lifestyle and save more every month.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {packages.map(({ name, image, tier, color, badge, featured }) => (
              <div
                key={name}
                className={`relative rounded-3xl border-2 ${color} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  featured ? 'ring-2 ring-purple-400 ring-offset-2' : ''
                }`}
              >
                {featured && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Package image — contains all plan details */}
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={image}
                    alt={`Connect Laundry House — ${name} Package`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>

                {/* Bottom CTA bar */}
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-bold text-gray-900">{name} Package</p>
                      <p className="text-xs text-gray-500">{tier}</p>
                    </div>
                    <span className={`w-3 h-3 rounded-full ${badge}`} />
                  </div>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                      `Hi, I'd like to subscribe to the ${name} Package.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#20b95a] text-white text-sm font-semibold rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Get {name} Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Pay-as-you-go tables ── */}
        <div className="mb-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Pay-As-You-Go Rates</h3>
            <p className="text-gray-600">No subscription needed — pay only for what you send.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Per kg */}
            <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-600 px-6 py-5">
                <h4 className="text-xl font-bold text-white">Per Kilogram</h4>
                <p className="text-blue-200 text-sm mt-1">Best for regular everyday laundry</p>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                {kgPricing.map(item => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-6 py-4 transition-colors hover:bg-blue-50/50 ${
                      item.popular ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 font-medium text-gray-900">
                        {item.popular && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-600 text-white text-xs font-semibold rounded-full">
                            <Sparkles className="w-2.5 h-2.5" />
                            Popular
                          </span>
                        )}
                        {item.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{item.sublabel}</div>
                    </div>
                    <div className="text-blue-600 font-bold text-lg tabular-nums">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Per item */}
            <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-800 px-6 py-5">
                <h4 className="text-xl font-bold text-white">Per Item / Dry Clean</h4>
                <p className="text-slate-300 text-sm mt-1">For specific garments and delicates</p>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                {itemPricing.map(item => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-6 py-4 transition-colors hover:bg-slate-50/70 ${
                      item.popular ? 'bg-slate-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2 font-medium text-gray-900">
                      {item.popular && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-800 text-white text-xs font-semibold rounded-full">
                          <Sparkles className="w-2.5 h-2.5" />
                          Popular
                        </span>
                      )}
                      {item.label}
                    </div>
                    <div className="text-slate-700 font-bold text-lg tabular-nums">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Callout note */}
        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-3">
          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-blue-800 text-sm leading-relaxed">
            Express service available at +50% of standard price. All prices include detergent and
            fabric softener. Custom quotes available for bulk, business, and wedding dress orders —
            send us a message on WhatsApp.
          </p>
        </div>
      </div>
    </section>
  )
}
