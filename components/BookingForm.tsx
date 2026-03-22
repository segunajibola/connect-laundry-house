'use client'

import { useState } from 'react'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

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
  deliveryDate: string
  notes: string
}

type FieldErrors = Partial<Record<keyof FormData, string>>
type Status = 'idle' | 'loading' | 'success' | 'error'

const EMPTY_FORM: FormData = {
  fullName: '',
  phone: '',
  address: '',
  serviceType: '',
  pickupDate: '',
  deliveryDate: '',
  notes: '',
}

/* ── helpers ── */
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

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }))

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
        // Save booking to Firestore
        await addDoc(collection(db, 'bookings'), {
          ...form,
          status: 'pending',
          createdAt: serverTimestamp(),
        })
      } else {
        // Firebase not configured — simulate network delay
        await new Promise(r => setTimeout(r, 1400))
      }
      setStatus('success')
      setForm(EMPTY_FORM)
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const today = new Date().toISOString().split('T')[0]

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
            Fill in the form below and we&apos;ll confirm your slot within 30 minutes.
          </p>
        </div>

        {/* ── Success state ── */}
        {status === 'success' ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-2xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Booking Received!</h3>
            <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
              We&apos;ve received your pickup request. Our team will call you within 30 minutes to
              confirm the details.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors"
            >
              Book Another Pickup
            </button>
          </div>
        ) : (
          /* ── Form ── */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6"
            noValidate
          >
            {/* Error banner */}
            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">
                  Something went wrong. Please try again or reach us via WhatsApp.
                </p>
              </div>
            )}

            {/* Row — name & phone */}
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
                  placeholder="+234 800 000 0000"
                  className={inputCls(!!errors.phone)}
                />
              </Field>
            </div>

            {/* Address */}
            <Field label="Pickup Address" error={errors.address} required>
              <textarea
                value={form.address}
                onChange={set('address')}
                placeholder="Enter your full address..."
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

            {/* Dates */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Pickup Date" error={errors.pickupDate} required>
                <input
                  type="date"
                  min={today}
                  value={form.pickupDate}
                  onChange={set('pickupDate')}
                  className={inputCls(!!errors.pickupDate)}
                />
              </Field>
              <Field label="Preferred Delivery Date">
                <input
                  type="date"
                  min={form.pickupDate || today}
                  value={form.deliveryDate}
                  onChange={set('deliveryDate')}
                  className={inputCls(false)}
                />
              </Field>
            </div>

            {/* Notes */}
            <Field label="Additional Notes">
              <textarea
                value={form.notes}
                onChange={set('notes')}
                placeholder="Any special instructions, fragile items, or requests..."
                rows={3}
                className={inputCls(false) + ' resize-none'}
              />
            </Field>

            {/* Submit */}
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
                'Schedule My Pickup'
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              By submitting, you agree to be contacted by our team to confirm your booking.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
