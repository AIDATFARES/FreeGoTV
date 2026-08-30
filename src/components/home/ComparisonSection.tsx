import Image from "next/image";

export default function ComparisonSection() {
  return (
    <section className="bg-white text-[#0F172A] relative z-10 py-20 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/unnamed-300x171.jpg" 
              alt="Watching FreeGoTV on Smart TV" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#14B8A6] mb-4 block">
              ABOUT THE SERVICE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight leading-tight">
              What is <span className="text-[#0EA5E9]">FreeGoTV?</span> — Best IPTV in USA & Canada
            </h2>
            
            <p className="text-stone-600 text-sm md:text-base mb-4 leading-relaxed">
              FreeGoTV is the best IPTV subscription service in the USA and Canada, founded in 2013 and trusted by subscribers from New York to Toronto, Los Angeles to Vancouver. Delivering live TV, on-demand movies, and live sports to viewers across the United States, Canada, and Europe — all over the internet with no cable box required. In particular, FreeGoTV runs on any internet-connected device — Smart TVs, Firestick, Android, iOS, MAG Box — giving you access to a 50,000-channel library without long-term contracts or equipment rental.
            </p>
            
            <p className="text-stone-600 text-sm md:text-base mb-10 leading-relaxed">
              From breaking news and blockbuster movies to live football, basketball, and PPV events. As a result, it is built for modern households that want one flexible subscription covering everything cable used to do — at a fraction of the price. For reference, the official website is <strong className="text-[#0F172A]">freegotv-iptv.shop</strong>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 pt-8 border-t border-stone-200">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-[#0EA5E9] mb-1">50K+</div>
                <div className="text-[10px] md:text-xs text-[#64748B] font-bold uppercase tracking-wider">Live Channels</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-[#0EA5E9] mb-1">150K+</div>
                <div className="text-[10px] md:text-xs text-[#64748B] font-bold uppercase tracking-wider">VOD Titles</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-[#0EA5E9] mb-1">4K</div>
                <div className="text-[10px] md:text-xs text-[#64748B] font-bold uppercase tracking-wider">Ultra HD</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-[#0EA5E9] mb-1">99.9%</div>
                <div className="text-[10px] md:text-xs text-[#64748B] font-bold uppercase tracking-wider">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
