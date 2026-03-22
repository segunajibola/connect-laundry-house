import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

const contactCards = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+234 800 000 0000',
    sub: 'Call us anytime',
    href: 'tel:+2348000000000',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@connectlaundry.com',
    sub: 'We reply within 2 hours',
    href: 'mailto:hello@connectlaundry.com',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Lagos, Nigeria',
    sub: 'Serving all areas',
    href: '#',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Clock,
    title: 'Operating Hours',
    value: 'Mon – Sun',
    sub: '7:00 AM – 9:00 PM',
    href: '#',
    color: 'bg-orange-50 text-orange-600',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need help? We&apos;re just a message away. Available 7 days a week
            with fast response times.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {contactCards.map(({ icon: Icon, title, value, sub, href, color }) => (
            <a
              key={title}
              href={href}
              className="flex flex-col items-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all text-center group"
            >
              <div
                className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                {title}
              </div>
              <div className="font-bold text-gray-900 text-sm leading-snug">{value}</div>
              <div className="text-xs text-gray-500 mt-1">{sub}</div>
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
          <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <MessageCircle className="w-8 h-8 text-[#25D366]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Prefer to Chat?</h3>
          <p className="text-gray-600 mb-8 max-w-sm mx-auto">
            Reach us instantly on WhatsApp. Book a pickup, ask a question, or get a quick quote.
          </p>
          <a
            href="https://wa.me/2348000000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20laundry%20pickup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] hover:bg-[#20b95a] text-white font-bold rounded-full text-lg transition-all hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
