import Image from 'next/image'
import { MessageCircle, CheckCircle } from 'lucide-react'
import { WHATSAPP_NUMBER as WA_NUMBER } from '@/lib/constants'
const WA_MSG = "Hi, I'd like to get a Connect Laundry House membership card."

const perks = [
  'Priority pickup & delivery slots',
  'Exclusive member-only discounts',
  'Physical card delivered to your door',
  'Access to all subscription packages',
]

export default function MemberCard() {
  return (
    <section id="membership" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
              Membership Card
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Get Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Connect Card
              </span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Subscribe to any of our packages and receive your exclusive Connect Laundry House
              membership card — delivered straight to your door. Your card unlocks priority
              service, member discounts, and more.
            </p>

            {/* Perks */}
            <ul className="space-y-3 mb-10">
              {perks.map(perk => (
                <li key={perk} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{perk}</span>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20b95a] text-white font-bold rounded-full text-base transition-all hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Get My Membership Card
            </a>
          </div>

          {/* Right — card images */}
          <div className="relative flex items-center justify-center">
            {/* Card 1 — back, slightly rotated */}
            <div
              className="absolute w-72 sm:w-80 rounded-2xl overflow-hidden shadow-2xl"
              style={{ transform: 'rotate(-6deg) translateX(-20px) translateY(10px)' }}
            >
              <Image
                src="/images/connect-card2.jpeg"
                alt="Connect Laundry House membership card — back"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Card 2 — front, on top */}
            <div
              className="relative w-72 sm:w-80 rounded-2xl overflow-hidden shadow-2xl"
              style={{ transform: 'rotate(3deg) translateX(20px) translateY(-10px)' }}
            >
              <Image
                src="/images/connect-card1.jpeg"
                alt="Connect Laundry House membership card — front"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
