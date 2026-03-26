import {
  Check,
  Sparkles,
  Truck,
  CreditCard,
  MessageCircle,
  Tag,
} from "lucide-react";
import { WHATSAPP_NUMBER as WA_NUMBER } from "@/lib/constants";

const packages = [
  {
    name: "Basic",
    tier: "Entry Level",
    type: "Individual",
    featured: false,
    headerColor: "from-blue-600 to-blue-700",
    ringColor: "",
    tiers: [
      { label: "Monthly",   full: "₦100,000",    promo: "₦50,000",      best: false },
      { label: "Quarterly", full: "₦260,000",    promo: "₦130,000",     best: false },
      { label: "Yearly",    full: "₦1,000,000",  promo: "₦500,000",     best: true  },
    ],
  },
  {
    name: "Platinum",
    tier: "Premium",
    type: "Family",
    featured: false,
    headerColor: "from-yellow-500 to-amber-600",
    ringColor: "",
    tiers: [
      { label: "Monthly",   full: "₦500,000",    promo: "₦250,000",     best: false },
      { label: "Quarterly", full: "₦1,400,000",  promo: "₦700,000",     best: false },
      { label: "Yearly",    full: "₦5,200,000",  promo: "₦2,600,000",   best: true  },
    ],
  },
  {
    name: "Executive",
    tier: "Most Popular",
    type: "Group / Entity",
    featured: true,
    headerColor: "from-purple-600 to-purple-800",
    ringColor: "ring-2 ring-purple-400 ring-offset-2",
    tiers: [
      { label: "Monthly",   full: "₦2,000,000",  promo: "₦1,000,000",   best: false },
      { label: "Quarterly", full: "₦5,600,000",  promo: "₦2,800,000",   best: false },
      { label: "Yearly",    full: "₦20,000,000", promo: "₦10,000,000",  best: true  },
    ],
  },
];


const perkGroups = [
  {
    label: "All plans include",
    labelColor: "text-gray-500",
    dotColor: "bg-blue-500",
    items: [
      "Free pickup & delivery",
      "24hrs customer service",
      "Wash & dry",
      "Garment bagging",
      "Dry cleaning",
      "Membership card",
    ],
  },
  {
    label: "Quarterly & Yearly",
    labelColor: "text-amber-600",
    dotColor: "bg-amber-500",
    items: [
      "Contract of sales",
      "Launch & event access",
      "Timely discount",
    ],
  },
  {
    label: "Yearly only",
    labelColor: "text-green-600",
    dotColor: "bg-green-500",
    items: [
      "Laundry C of O",
      "Personal laundry officer",
      "Membership directory",
    ],
  },
];

const itemPricing = [
  { label: "Plain Shirt / T-Shirt", price: "₦1,000" },
  { label: "Trouser", price: "₦1,000" },
  { label: "Suit (2-piece)", price: "₦5,000", popular: true },
  { label: "Gown / Dress", price: "₦1,500 and above" },
  { label: "Wedding Dress", price: "Custom quote" },
  { label: "Duvet", price: "₦2,000 and above" },
];

const highlights = [
  {
    icon: Truck,
    title: "Free Pickup & Delivery",
    desc: "On all orders above ₦30,000",
    color: "bg-green-50 border-green-200 text-green-700",
    iconColor: "bg-green-100 text-green-600",
  },
  {
    icon: CreditCard,
    title: "Pay-As-You-Go",
    desc: "No subscription required. Pay only for what you send.",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    iconColor: "bg-blue-100 text-blue-600",
  },
];

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
            No hidden charges. Pay only for what you need — affordable for
            everyone.
          </p>
        </div>

        {/* Offer highlights */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16 max-w-2xl mx-auto">
          {highlights.map(({ icon: Icon, title, desc, color, iconColor }) => (
            <div
              key={title}
              className={`flex items-start gap-4 p-5 rounded-2xl border ${color}`}
            >
              <div
                className={`w-10 h-10 ${iconColor} rounded-xl flex items-center justify-center flex-shrink-0`}
              >
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
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Subscription Packages
            </h3>
            <p className="text-gray-600">
              Choose a recurring plan that suits your lifestyle and save more
              every month.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 items-start">
            {packages.map(({ name, tier, type, featured, headerColor, ringColor, tiers }) => (
              <div
                key={name}
                className={`relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${ringColor}`}
              >
                {/* Card header */}
                <div className={`bg-gradient-to-br ${headerColor} px-6 pt-6 pb-5`}>
                  {featured && (
                    <div className="flex justify-center mb-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full">
                        <Sparkles className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">{tier}</p>
                  <h4 className="text-2xl font-bold text-white mb-1">{name}</h4>
                  <span className="inline-block px-2.5 py-0.5 bg-white/15 text-white/90 text-xs font-medium rounded-full">
                    {type}
                  </span>

                  {/* Promo banner */}
                  <div className="mt-4 flex items-center gap-2 bg-white/15 rounded-xl px-3 py-2">
                    <Tag className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <p className="text-white text-xs font-semibold">50% promo discount applied</p>
                  </div>
                </div>

                {/* Pricing rows */}
                <div className="bg-white divide-y divide-gray-100">
                  {tiers.map(({ label, full, promo, best }) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between px-5 py-3.5 ${best ? "bg-green-50" : ""}`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm text-gray-600">{label}</span>
                        {best && (
                          <span className="text-[10px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full leading-none">
                            Best value
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-400 line-through tabular-nums">{full}</span>
                        <span className={`text-sm font-bold tabular-nums ${best ? "text-green-700" : "text-gray-900"}`}>
                          {promo}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Perks */}
                <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 space-y-4">
                  {perkGroups.map(({ label, labelColor, dotColor, items }) => (
                    <div key={label}>
                      <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${labelColor}`}>{label}</p>
                      <ul className="space-y-1.5">
                        {items.map((perk) => (
                          <li key={perk} className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColor}`} />
                            <span className="text-xs text-gray-700">{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="p-4 bg-white border-t border-gray-100">
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                      `Hi, I'd like to subscribe to the ${name} Package.`,
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
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Pay-As-You-Go Rates
            </h3>
            <p className="text-gray-600">
              No subscription needed — pay only for what you send.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            {/* Per item */}
            <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-800 px-6 py-5">
                <h4 className="text-xl font-bold text-white">
                  Per Item / Dry Clean
                </h4>
                <p className="text-slate-300 text-sm mt-1">
                  For specific garments and delicates
                </p>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                {itemPricing.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-6 py-4 transition-colors hover:bg-slate-50/70 ${
                      item.popular ? "bg-slate-50" : ""
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
                    <div className="text-slate-700 font-bold text-lg tabular-nums">
                      {item.price}
                    </div>
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
            Express service available at +50% of standard price. All prices
            include detergent and fabric softener. Custom quotes available for
            bulk, business, and wedding dress orders — send us a message on
            WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
