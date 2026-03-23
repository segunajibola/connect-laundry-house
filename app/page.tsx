import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import BookingForm from '@/components/BookingForm'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import MemberCard from '@/components/MemberCard'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <HowItWorks />
        <BookingForm />
        <Testimonials />
        <MemberCard />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
