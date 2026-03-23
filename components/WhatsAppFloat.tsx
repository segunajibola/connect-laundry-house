/* Floating WhatsApp button — always visible in bottom-right corner */
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '2347043845448'
const MSG = "Hi, I'd like to book a laundry pickup"

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MSG)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20b95a] text-white font-semibold px-4 py-3 rounded-full shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300 group"
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" />
      <span className="text-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  )
}
