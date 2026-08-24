import Link from "next/link";
import { Monitor, Laptop, Smartphone, Tablet, Tv, Film, ShieldCheck, Zap, Headphones } from "lucide-react";

export default function HeroSection() {
  const highlights = [
    { icon: Tv, title: "+50,000 Channels", desc: "150+ Countries 🇺🇸🇬🇧🇨🇦" },
    { icon: Film, title: "200,000+ VOD", desc: "Movies & Series 4K" },
    { icon: Zap, title: "60 FPS 4K Ultra HD", desc: "Crystal Clear Sports" },
    { icon: Headphones, title: "24/7 Live Support", desc: "WhatsApp & Email" },
  ];

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 flex items-center justify-center bg-[#0F172A] overflow-hidden text-center">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-family-ai.png"
          alt="Family watching FreeGoTV"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#0F172A]/70" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 flex flex-col items-center gap-6">

        {/* Top Tag */}
        <div className="inline-flex items-center border border-[#14B8A6] rounded-full px-4 py-1.5 backdrop-blur-sm bg-[#0F172A]/30">
          <span className="w-2 h-2 rounded-full bg-[#14B8A6] mr-2 animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-bold text-[#0EA5E9] tracking-widest uppercase">
            THE #1 RATED IPTV PROVIDER WORLDWIDE
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white drop-shadow-2xl mt-4">
          <span className="text-[#0EA5E9]">FreeGoTV</span> <span className="uppercase">— Best IPTV service in USA & Canada</span><br />
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl uppercase">| 50,000+ Live Channels in 4K</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 font-medium max-w-3xl mt-4 drop-shadow-lg leading-relaxed">
          FreeGoTV is the best IPTV subscription service in the USA and Canada — offering 50,000+ live TV channels and 150,000+ on-demand movies in 4K UHD. Trusted by thousands of subscribers across the United States and Canada, Moreover, it works on Smart TVs, Firestick, Android, iOS, and MAG Box — with up to 6 simultaneous connections no IP lock, no contracts, and instant activation. Best of all, plans start at $15/month with a free 24-hour trial included
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-8 justify-center w-full sm:w-auto">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20freegotv%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="py-4 px-8 text-sm sm:text-base font-bold text-[#0F172A] bg-[#14B8A6] hover:bg-[#0C8CE9] transition-all duration-300 flex items-center justify-center tracking-wider hover:scale-105"
          >
            GET 12 MONTHS — 2 MONTHS FREE →
          </a>
          <a
            href="#pricing"
            className="py-4 px-8 text-sm sm:text-base font-bold text-[#0EA5E9] bg-black/30 backdrop-blur-md border-2 border-[#14B8A6] hover:bg-[#14B8A6]/20 transition-all duration-300 flex items-center justify-center tracking-wider hover:scale-105"
          >
            SEE PLANS →
          </a>
        </div>

        {/* Bottom Icons */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-white mt-10">
          <div className="flex flex-col items-center gap-3 group hover:text-[#0EA5E9] transition-colors cursor-pointer">
            <Monitor className="h-7 w-7 sm:h-9 sm:w-9 stroke-[1.5]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider">Smart TV</span>
          </div>
          <div className="flex flex-col items-center gap-3 group hover:text-[#0EA5E9] transition-colors cursor-pointer">
            <Laptop className="h-7 w-7 sm:h-9 sm:w-9 stroke-[1.5]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider">Laptop / PC</span>
          </div>
          <div className="flex flex-col items-center gap-3 group hover:text-[#0EA5E9] transition-colors cursor-pointer">
            <Smartphone className="h-7 w-7 sm:h-9 sm:w-9 stroke-[1.5]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider">Android</span>
          </div>
          <div className="flex flex-col items-center gap-3 group hover:text-[#0EA5E9] transition-colors cursor-pointer">
            <Tablet className="h-7 w-7 sm:h-9 sm:w-9 stroke-[1.5]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider">IOS</span>
          </div>
        </div>

        {/* Highlights Cards (As requested) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-12 w-full max-w-[1300px]">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#121212]/90 backdrop-blur-md border border-[#2A2A2A] rounded-xl p-3 sm:p-4 flex items-center gap-3 hover:border-[#0EA5E9]/50 transition-all duration-300 group text-left shadow-2xl"
              >
                <div className="p-2.5 rounded-lg border border-[#0EA5E9]/30 text-[#0EA5E9] group-hover:scale-110 group-hover:bg-[#0EA5E9]/10 transition-all shrink-0 bg-black/40">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-[13px] font-bold text-white leading-tight truncate group-hover:text-[#0EA5E9] transition-colors">
                    {item.title}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#A3A3A3] truncate mt-1 font-medium">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
