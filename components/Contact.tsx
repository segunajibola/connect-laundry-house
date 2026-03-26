import { Mail, MapPin, MessageCircle, Instagram } from 'lucide-react'

const WHATSAPP_NUMBER = '2347043845448'
const WA_GREETING = "Hi, I'd like to book a laundry pickup"

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    value: 'connectlaundryhouse@gmail.com',
    sub: 'We reply within 2 hours',
    href: 'mailto:connectlaundryhouse@gmail.com',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '26 Our Saviour Street',
    sub: 'Lekki, Lagos, Nigeria',
    href: 'https://maps.google.com/?q=26+Our+Saviour+Street+Lekki+Lagos',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: '@connectlaundryhouse247',
    sub: 'Follow us for offers & updates',
    href: 'https://instagram.com/connectlaundryhouse247',
    color: 'bg-pink-50 text-pink-600',
  },
]

export default function Contact() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_GREETING)}`

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re based in Lekki, Lagos and available 7 days a week. Reach us on any channel
            below — we respond fast.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {contactCards.map(({ icon: Icon, title, value, sub, href, color }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex flex-col items-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 hover:-translate-y-0.5 transition-all text-center group"
            >
              <div
                className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                {title}
              </div>
              <div className="font-bold text-gray-900 text-sm leading-snug break-all">{value}</div>
              <div className="text-xs text-gray-500 mt-1">{sub}</div>
            </a>
          ))}
        </div>

        {/* Map */}
        <div className="mb-10 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <iframe
            title="Connect Laundry House location"
            src="https://maps.google.com/maps?q=26+Our+Saviour+Street,+Lekki,+Lagos,+Nigeria&output=embed"
            width="100%"
            height="360"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* WhatsApp CTA — large, prominent */}
        <div className="bg-gradient-to-br from-[#075E54] to-[#128C7E] rounded-3xl p-10 text-center">
          <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Chat With Us on WhatsApp</h3>
          <p className="text-white/75 mb-8 max-w-sm mx-auto text-sm">
            Fastest way to book a pickup, ask questions, or send your payment proof. We&apos;re
            online and ready to help.
          </p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] hover:bg-[#20b95a] text-white font-bold rounded-full text-lg transition-all hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Book via WhatsApp
          </a>
          <p className="mt-5 text-white/50 text-xs">+234 704 384 5448 · Available 7 days a week</p>
        </div>
      </div>
    </section>
  )
}
