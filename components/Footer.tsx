import { Waves, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react'

const quickLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#booking', label: 'Book Pickup' },
  { href: '#contact', label: 'Contact' },
]

const services = [
  'Washing & Drying',
  'Dry Cleaning',
  'Ironing & Folding',
  'Express Service',
  'Pickup & Delivery',
  'Bulk Laundry',
]

const socials = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: MessageCircle, href: 'https://wa.me/2348000000000', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg leading-tight">Connect Laundry House</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional laundry and dry-cleaning services with doorstep pickup &amp; delivery.
              Clean clothes, stress-free life.
            </p>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <span className="text-slate-400 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              {[
                { label: 'Phone', value: '+234 800 000 0000', href: 'tel:+2348000000000' },
                {
                  label: 'Email',
                  value: 'hello@connectlaundry.com',
                  href: 'mailto:hello@connectlaundry.com',
                },
                { label: 'Location', value: 'Lagos, Nigeria', href: '#' },
                { label: 'Hours', value: 'Mon – Sun: 7am – 9pm', href: null },
              ].map(({ label, value, href }) => (
                <li key={label}>
                  <span className="block text-slate-500 text-xs uppercase tracking-wide mb-0.5">
                    {label}
                  </span>
                  {href ? (
                    <a href={href} className="text-slate-400 hover:text-blue-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-slate-400">{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Connect Laundry House. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
