import Image from "next/image";
import Link from "next/link";

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white text-[#0F172A] relative z-10 border-b border-black/10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* ========================================================================= */}
        {/* PART 1: How does it work? FreeGoTV Timeline */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9] mb-2 block">
            EASY IPTV SETUP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0EA5E9] tracking-tight">
            Start Streaming FreeGoTV IPTV in 3 Simple Steps
          </h2>
          <p className="text-stone-700 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Getting started with FreeGoTV is remarkably fast and easy. Follow this simple process to unlock your premium entertainment experience instantly.
          </p>
        </div>

        {/* Timeline Steps Container */}
        <div className="relative max-w-[960px] mx-auto mb-28">
          {/* Vertical Dashed Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-black/20 hidden md:block" />

          {/* STEP 1 */}
          <div className="relative mb-16 md:mb-20">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-[#14B8A6] text-[#0F172A] font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.6)]">
                Step One
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Card */}
              <div className="bg-white text-stone-100 p-8 rounded-2xl shadow-xl relative border border-stone-200"
              >
                <h3 className="text-xl font-extrabold text-[#0EA5E9] mb-3">
                  <a
                    href="#pricing"
                    className="hover:text-teal-600 transition-colors"
                  >
                    1. Select Your Premium Plan
                  </a>
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Browse our flexible pricing plans and select the package that fits your lifestyle. After secure checkout, your private login credentials are automatically dispatched via email or{" "}
                  <Link
                    href="/contact"
                    className="text-[#0EA5E9] font-semibold hover:text-teal-600 transition-colors"
                  >
                    WhatsApp
                  </Link>{" "}
                  instantly.
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-2xl bg-[#0F172A]/5 border border-black/10 shadow-xl"
              >
                <Image
                  src="/step-1-order-ai.png"
                  alt="Place your order online"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative mb-16 md:mb-20">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-[#14B8A6] text-[#0F172A] font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.6)]">
                Step Two
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Image */}
              <div className="overflow-hidden rounded-2xl bg-[#0F172A]/5 border border-black/10 shadow-xl order-2 md:order-1"
              >
                <Image
                  src="/step-2-setup-ai.png"
                  alt="Instant installation"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Card */}
              <div className="bg-white text-stone-100 p-8 rounded-2xl shadow-xl relative border border-stone-200 order-1 md:order-2"
              >
                <h3 className="text-xl font-extrabold text-[#0EA5E9] mb-3">
                  <Link
                    href="/installation"
                    className="hover:text-teal-600 transition-colors"
                  >
                    2. Connect Your Device
                  </Link>
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Follow our comprehensive{" "}
                  <Link
                    href="/installation"
                    className="text-[#0EA5E9] font-semibold hover:text-teal-600 transition-colors"
                  >
                    IPTV installation guides
                  </Link>{" "}
                  to configure your Smart TV, Firestick, or mobile device. We fully support industry-leading applications like IPTV Smarters and TiviMate.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-[#14B8A6] text-[#0F172A] font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.6)]">
                Step Three
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Card */}
              <div className="bg-white text-stone-100 p-8 rounded-2xl shadow-xl relative border border-stone-200"
              >
                <h3 className="text-xl font-extrabold text-[#0EA5E9] mb-3">
                  <Link
                    href="/channels"
                    className="hover:text-teal-600 transition-colors"
                  >
                    3. Start Watching Instantly
                  </Link>
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Dive into over 50,000 live international channels and a massive Video on Demand library. Explore our extensive{" "}
                  <Link
                    href="/channels"
                    className="text-[#0EA5E9] font-semibold hover:text-teal-600 transition-colors"
                  >
                    channels catalog
                  </Link>
                  {" "}in stunning 4K and HD quality—with zero buffering.
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-2xl bg-[#0F172A]/5 border border-black/10 shadow-xl"
              >
                <Image
                  src="/step-3-watch-ai.png"
                  alt="Watch and enjoy live TV"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
