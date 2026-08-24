import { Monitor, Smartphone, Tv, Box, Laptop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DeviceSupport() {
  return (
    <section className="py-24 bg-stone-50 text-[#0F172A] relative z-10 border-y border-black/10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9] mb-3 block">
            SUPPORTED IPTV DEVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Stream FreeGoTV IPTV Seamlessly on{" "}
            <Link
              href="/installation"
              className="text-[#0EA5E9] hover:text-[#0EA5E9] transition-colors"
            >
              All Your Favorite Devices
            </Link>
          </h2>
        </div>

        {/* Center Image Display */}
        <div className="relative mx-auto max-w-[800px] mb-16 group">
          {/* Subtle background glow for the image */}
          <div className="absolute inset-0 bg-[#0EA5E9]/10 blur-[80px] rounded-full scale-90 -z-10 group-hover:bg-[#0EA5E9]/20 transition-all duration-700"></div>
          
          <div className="relative overflow-visible transition-transform duration-500 hover:scale-[1.02] flex items-center justify-center">
            <Image
              src="/smarters-pro-abonnement.webp"
              alt="IPTV Smarters Pro Devices"
              width={1200}
              height={600}
              sizes="(max-width: 1024px) 100vw, 800px"
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* 3-Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="relative bg-white rounded-2xl p-8 border-y border-r border-stone-200 border-l-4 border-l-[#0EA5E9] shadow-lg hover:shadow-xl hover:border-sky-200 hover:border-l-[#0EA5E9] transition-all duration-300 group overflow-hidden">
            <div className="h-12 w-12 rounded-xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Tv className="h-6 w-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">
              Smart TVs, Android Boxes & Firestick
            </h3>
            <p className="text-[#64748B] leading-relaxed text-sm">
              Experience flawless integration with Samsung and LG Smart TVs, Amazon Firestick, Android TV, and smartphones. Enjoy buffer-free streaming anywhere using our quick{" "}
              <Link
                href="/installation"
                className="text-[#0EA5E9] font-semibold hover:text-[#0EA5E9] transition-colors"
              >
                installation guide
              </Link>
              .
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-2xl p-8 border-y border-r border-stone-200 border-l-4 border-l-[#0EA5E9] shadow-lg hover:shadow-xl hover:border-sky-200 hover:border-l-[#0EA5E9] transition-all duration-300 group overflow-hidden">
            <div className="h-12 w-12 rounded-xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Box className="h-6 w-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">
              MAG Devices & STB Emulators
            </h3>
            <p className="text-[#64748B] leading-relaxed text-sm">
              Connect your MAG box or STB emulator in seconds. Simply provide your MAC address, and we'll provision your device with high-speed portal access to our complete live channel and{" "}
              <Link
                href="/channels"
                className="text-[#0EA5E9] font-semibold hover:text-[#0EA5E9] transition-colors"
              >
                VOD library
              </Link>
              .
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-2xl p-8 border-y border-r border-stone-200 border-l-4 border-l-[#0EA5E9] shadow-lg hover:shadow-xl hover:border-sky-200 hover:border-l-[#0EA5E9] transition-all duration-300 group overflow-hidden">
            <div className="h-12 w-12 rounded-xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Laptop className="h-6 w-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">
              Windows & Mac Computers
            </h3>
            <p className="text-[#64748B] leading-relaxed text-sm">
              Turn your computer into a premium entertainment hub. Windows and Mac users can stream in incredible 4K quality using industry-leading{" "}
              <Link
                href="/installation"
                className="text-[#0EA5E9] font-semibold hover:text-[#0EA5E9] transition-colors"
              >
                IPTV players
              </Link>{" "}
              like VLC or IPTV Smarters Pro.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
