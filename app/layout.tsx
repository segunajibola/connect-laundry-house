import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Connect Laundry House — Fresh Clothes, Zero Stress',
  description:
    'Professional laundry and dry-cleaning services in Lagos with doorstep pickup & delivery. Washing, dry cleaning, ironing, express same-day service.',
  keywords: 'laundry service Lagos, dry cleaning, pickup delivery laundry, ironing service Nigeria',
  openGraph: {
    title: 'Connect Laundry House',
    description: 'Fresh clothes, zero stress. Pickup & delivery laundry service in Lagos.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
