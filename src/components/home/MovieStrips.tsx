import Image from "next/image";
import Link from "next/link";

export default function MovieStrips({ children }: { children?: React.ReactNode }) {
  const channelImages = [
    "7R05LaU8Em2zN0LaAqEZMVCx3wb.webp",
    "8iFUWLKBAWDrJ9rOunscgIDrGQ1.webp",
    "Lanterns-S01E.jpg",
    "Mutiny-2026.jpg",
    "OBX-S05.jpg",
    "SMBND-2026-5.jpg",
    "c987gxFjXqYOxZEZKcTkS1ONTWH.webp",
    "hFborW6HmffKL05GIWlkTFdvVpN.webp",
    "iLhi3wqsLOdHB61vySJRm7y09XS.webp",
    "iwCeOpuBtuTP1kLosqgniey5OvX.webp",
    "zqxIT48mWFsC4NSjGEHAcp1pjEo.webp",
    "فيلم-Demon-Slayer-Infinity-Castle-2025-مترجم.jpg",
    "فيلم-Evil-Dead-Burn-2026-مترجم.jpg",
    "فيلم-The-Last-House-2026-مترجم.jpg",
    "مسلسل-From-الموسم-الرابع-مترجم-كامل.jpg",
    "مسلسل-House-of-The-Dragon-الموسم-الثالث.jpg",
    "مسلسل-Reacher-الموسم-الرابع-مترجم-كامل.jpg"
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-16 relative flex flex-col gap-6">
      {/* Section Header */}
      <div className="text-center mb-8 px-4 z-20">
        <span className="inline-block py-1 px-4 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/30 text-[#0EA5E9] text-xs font-bold tracking-widest uppercase mb-4">
          Endless Entertainment
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
          THE ULTIMATE <span className="text-[#0EA5E9]">CINEMATIC</span> EXPERIENCE
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-8">
          Explore a massive library of 200,000+ Films & Series. From the latest blockbuster hits to timeless classics, all available instantly in crystal-clear 4K Ultra HD.
        </p>
        <Link
          href="/channels"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#14B8A6] text-[#0F172A] text-sm md:text-base font-medium bg-[#0F172A]/20 hover:bg-[#14B8A6]/10 transition-colors duration-300 gap-2"
        >
          View FreeGoTV Channel List <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      {children}

      {/* Top Strip (Right to Left) */}
      <div className="relative flex w-max items-center">
        <div className="flex gap-4 md:gap-6 px-2 md:px-3 animate-marquee" style={{ animationDuration: '30s' }}>
          {[...channelImages, ...channelImages, ...channelImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[140px] h-[200px] md:w-[200px] md:h-[300px] relative rounded-md overflow-hidden shadow-2xl border border-black/5 hover:scale-105 hover:border-black/30 hover:z-10 transition-all duration-300">
              <Image src={`/movie/${img}`} alt="Media Poster" fill sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 200px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>



      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}
