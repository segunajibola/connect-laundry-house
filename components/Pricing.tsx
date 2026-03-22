import { Check, Sparkles } from 'lucide-react'

const kgPricing = [
  { label: 'Standard Wash', sublabel: 'per kg, min. 3 kg', price: '₦500' },
  { label: 'Wash & Dry', sublabel: 'per kg, min. 3 kg', price: '₦700' },
  {
    label: 'Wash, Dry & Fold',
    sublabel: 'per kg, min. 3 kg',
    price: '₦900',
    popular: true,
  },
  { label: 'Bulk Order (10 kg+)', sublabel: 'special discounted rate', price: '₦750 /kg' },
]

const itemPricing = [
  { label: 'Plain Shirt / T-Shirt', price: '₦400' },
  { label: 'Trouser / Jeans', price: '₦600' },
  { label: 'Suit (2-piece)', price: '₦2,500', popular: true },
  { label: 'Gown / Dress', price: '₦800 – ₦1,500' },
  { label: 'Bedsheet (per piece)', price: '₦800' },
  { label: 'Duvet / Comforter', price: '₦2,000' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden charges. Pay only for what you need. Affordable for individuals and businesses
            alike.
          </p>
        </div>

        {/* Pricing tables */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Per kg */}
          <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-600 px-6 py-5">
              <h3 className="text-xl font-bold text-white">Per Kilogram</h3>
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
              <h3 className="text-xl font-bold text-white">Per Item / Dry Clean</h3>
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

        {/* Callout note */}
        <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-3">
          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-blue-800 text-sm leading-relaxed">
            <strong>Free pickup &amp; delivery</strong> on orders above ₦3,000. Express service
            available at +50% of standard price. All prices include detergent and fabric softener.
            Custom quotes available for bulk or business orders.
          </p>
        </div>
      </div>
    </section>
  )
}
