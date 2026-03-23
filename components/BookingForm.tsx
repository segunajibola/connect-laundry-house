'use client'

import { useState } from 'react'
import { CheckCircle, Loader2, AlertCircle, Copy, Check, MessageCircle } from 'lucide-react'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const WHATSAPP_NUMBER = '2347043845448'
const PAYMENT_PROOF_MSG =
  "Hello, I've made payment for my laundry order. Here is my proof of payment."

const serviceOptions = [
  'Washing & Drying',
  'Dry Cleaning',
  'Ironing & Folding',
  'Express Service (Same-day)',
  'Pickup & Delivery',
  'Bulk Laundry',
  'All Services',
]

type FormData = {
  fullName: string
  phone: string
  address: string
  serviceType: string
  pickupDate: string
  notes: string
}

type FieldErrors = Partial<Record<keyof FormData, string>>
type Status = 'idle' | 'loading' | 'payment' | 'error'

const EMPTY_FORM: FormData = {
  fullName: '',
  phone: '',
  address: '',
  serviceType: '',
  pickupDate: '',
  notes: '',
}

function inputCls(hasError: boolean) {
  return [
    'w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400',
    'focus:outline-none focus:ring-2 transition-all',
    hasError
      ? 'border-red-300 bg-red-50 focus:ring-red-400/25'
      : 'border-gray-200 bg-gray-50 hover:border-gray-300 focus:border-blue-400 focus:ring-blue-500/20',
  ].join(' ')
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="ml-2 p-1 rounded-md hover:bg-gray-200 transition-colors flex-shrink-0"
      title="Copy"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-600" />
      ) : (
        <Copy className="w-4 h-4 text-gray-400" />
      )}
    </button>
  )
}

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [submittedName, setSubmittedName] = useState('')

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  const validate = (): boolean => {
    const e: FieldErrors = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[+\d\s\-()]{7,}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    if (!form.address.trim()) e.address = 'Address is required'
    if (!form.serviceType) e.serviceType = 'Please select a service'
    if (!form.pickupDate) e.pickupDate = 'Pickup date is required'
    else if (new Date(form.pickupDate) < new Date(new Date().toDateString()))
      e.pickupDate = 'Pickup date must be today or in the future'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      if (db) {
        await addDoc(collection(db, 'bookings'), {
          ...form,
          status: 'pending_payment',
          createdAt: serverTimestamp(),
        })
      } else {
        await new Promise(r => setTimeout(r, 1200))
      }
      setSubmittedName(form.fullName.split(' ')[0])
      setStatus('payment')
      setForm(EMPTY_FORM)
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const today = new Date().toISOString().split('T')[0]
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PAYMENT_PROOF_MSG)}`

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-blue-700 to-blue-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full mb-4">
            Book a Pickup
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Schedule Your Pickup
          </h2>
          <p className="text-blue-100 text-lg">
            Fill in the form below — we&apos;ll confirm your slot within 30 minutes.
          </p>
        </div>

        {/* ── Payment details state (shown after booking) ── */}
        {status === 'payment' ? (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Top confirmation bar */}
            <div className="bg-green-500 px-8 py-5 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <p className="font-bold text-white">Booking Confirmed{submittedName ? `, ${submittedName}!` : '!'}</p>
                <p className="text-green-100 text-sm">Complete your payment to finalise the order.</p>
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-6">
              {/* Payment details card */}
              <div className="rounded-2xl border-2 border-blue-100 bg-blue-50 overflow-hidden">
                <div className="px-6 py-3 bg-blue-600">
                  <p className="text-white font-semibold text-sm uppercase tracking-wide">
                    💰 Bank Transfer Details
                  </p>
                </div>
                <div className="divide-y divide-blue-100">
                  {[
                    { label: 'Bank', value: 'Moniepoint' },
                    { label: 'Account Number', value: '6664134027' },
                    { label: 'Account Name', value: 'Eaxyconnect Global Investment Ltd.' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between px-6 py-3.5">
                      <span className="text-sm text-gray-500 font-medium w-36 flex-shrink-0">
                        {label}
                      </span>
                      <div className="flex items-center flex-1 justify-end">
                        <span className="font-bold text-gray-900 text-right">{value}</span>
                        <CopyButton value={value} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instruction */}
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Transfer the exact amount for your order, then tap below to send your proof of
                payment on WhatsApp — we&apos;ll process your pickup immediately.
              </p>

              {/* WhatsApp CTA */}
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#20b95a] text-white font-bold rounded-2xl text-base transition-all hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Send Payment Proof on WhatsApp
              </a>

              <button
                onClick={() => setStatus('idle')}
                className="w-full py-3 text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                ← Book Another Pickup
              </button>
            </div>
          </div>
        ) : (
          /* ── Form ── */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6"
            noValidate
          >
            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">
                  Something went wrong. Please try again or reach us directly via WhatsApp.
                </p>
              </div>
            )}

            {/* Name + phone */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Full Name" error={errors.fullName} required>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={set('fullName')}
                  placeholder="John Doe"
                  className={inputCls(!!errors.fullName)}
                />
              </Field>
              <Field label="Phone Number" error={errors.phone} required>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="07043845448"
                  className={inputCls(!!errors.phone)}
                />
              </Field>
            </div>

            {/* Address */}
            <Field label="Pickup Address" error={errors.address} required>
              <textarea
                value={form.address}
                onChange={set('address')}
                placeholder="e.g. 26 Our Saviour Street, Lekki, Lagos"
                rows={3}
                className={inputCls(!!errors.address) + ' resize-none'}
              />
            </Field>

            {/* Service */}
            <Field label="Service Type" error={errors.serviceType} required>
              <select
                value={form.serviceType}
                onChange={set('serviceType')}
                className={inputCls(!!errors.serviceType)}
              >
                <option value="">Select a service...</option>
                {serviceOptions.map(s => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            {/* Pickup date */}
            <Field label="Pickup Date" error={errors.pickupDate} required>
              <input
                type="date"
                min={today}
                value={form.pickupDate}
                onChange={set('pickupDate')}
                className={inputCls(!!errors.pickupDate)}
              />
            </Field>

            {/* Notes */}
            <Field label="Additional Notes">
              <textarea
                value={form.notes}
                onChange={set('notes')}
                placeholder="Special instructions, delicate items, quantity estimate..."
                rows={3}
                className={inputCls(false) + ' resize-none'}
              />
            </Field>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-2xl transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Schedule My Pickup →'
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              By submitting, you agree to be contacted to confirm your booking details.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
