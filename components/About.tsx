import Image from "next/image";
import { CheckCircle, Zap, Shield, Heart } from "lucide-react";

const values = [
  {
    icon: CheckCircle,
    title: "Reliability",
    description:
      "We show up on time, every time. Your laundry is in safe hands from pickup to delivery.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Same-day and next-day express options so you are never left waiting for clean clothes.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Shield,
    title: "Hygiene",
    description:
      "Premium detergents, sanitization protocols, and careful garment handling — every order.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Heart,
    title: "Convenience",
    description:
      "Schedule anytime. We collect from your doorstep and return everything clean and fresh.",
    color: "bg-red-50 text-red-600",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left — text */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We Make Laundry{" "}
              <span className="text-blue-600">Simple &amp; Smart</span>
            </h2>
            <p className="text-lg text-gray-600 mb-5 leading-relaxed">
              Connect Laundry House is a reliable, tech-enabled laundry service
              designed to make life easier for busy professionals, families, and
              businesses. We handle everything — from everyday washing to
              premium dry cleaning — so you can focus on what matters most.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We serve customers across Lagos and Abuja with fast, affordable,
              and luxury touch of quality laundry and dry cleaning services.
              Every item is treated with poise, cleaned to perfection, and
              returned on time.
            </p>

            {/* Mission statement */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-100">
              <p className="text-blue-800 font-medium italic text-lg leading-relaxed">
                &ldquo;Our mission is to deliver spotless, professionally
                cared-for garments right to your door — making clean clothes one
                less thing to worry about.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — location image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/connect-laundry-house.jpeg"
                alt="Connect Laundry House — our facility in Lekki, Lagos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Location badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-gray-800">
                  26 Our Saviour Street, Lekki
                </span>
              </div>
            </div>
            {/* Second image — smaller, overlapping */}
            <div className="absolute -bottom-6 -right-4 w-40 h-28 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <Image
                src="/images/connect-laundry-house2.jpeg"
                alt="Connect Laundry House"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </div>
        </div>

        {/* Values grid — full width below */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
