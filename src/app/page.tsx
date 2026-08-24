import HeroSection from "@/components/home/HeroSection";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};


import BrandMarquee from "@/components/home/BrandMarquee";
import MovieStrips from "@/components/home/MovieStrips";
import ChannelCategories from "@/components/home/ChannelCategories";
import DeviceSupport from "@/components/home/DeviceSupport";
import ComparisonSection from "@/components/home/ComparisonSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import LatestArticlesSection from "@/components/home/LatestArticlesSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";

export default function Home() {
  return (
    <main className="flex-col flex min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* What is FreeGoTV (About Service) replacing TopFeatureBar */}
      <ComparisonSection />

      {/* Cinematic Experience Section */}
      <MovieStrips>
        <div className="text-center mt-2 relative z-20">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#64748B] uppercase">50,000+ PREMIUM LIVE CHANNELS</p>
        </div>
        
        <BrandMarquee />
        
        <div className="text-center mt-8 mb-6 relative z-20">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#64748B] uppercase">150,000+ LATEST MOVIES & SERIES</p>
        </div>
      </MovieStrips>

      <div className="bg-white w-full pb-16">
        <div className="text-center mb-6 relative z-20">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#64748B] uppercase">ALL MAJOR SPORTS & LEAGUES LIVE</p>
        </div>
        <BrandMarquee 
          imagesFolder="dawryate" 
          images={[
            "Untitled-design-50.webp",
            "Untitled-design-51.webp",
            "Untitled-design-52.webp",
            "Untitled-design-53.webp",
            "Untitled-design-54.webp",
            "Untitled-design-55.webp",
            "Untitled-design-56.webp",
            "Untitled-design-57.webp",
            "Untitled-design-58.webp"
          ]}
          cardClassName="flex-shrink-0 w-[140px] h-[200px] md:w-[200px] md:h-[300px] relative rounded-md overflow-hidden shadow-2xl border border-black/5 hover:scale-105 hover:border-black/30 hover:z-10 transition-all duration-300"
          imageClassName="object-cover"
        />
      </div>

      {/* Channel & Installation Quick Links */}
      <div className="w-full bg-white py-6 px-4 text-center border-t border-black/5 relative z-20">
        <p className="text-center text-sm md:text-base text-[#64748B] max-w-3xl mx-auto">
          Find the comprehensive <Link prefetch={false} className="font-semibold text-[#0EA5E9] hover:text-[#0D9488]" href="/channels">FreeGoTV Channel List</Link> or navigate to our <Link prefetch={false} className="font-semibold text-[#0EA5E9] hover:text-[#0D9488]" href="/installation">FreeGoTV Installation Guide</Link> for a quick start.
        </p>
      </div>

      <PricingSection />
      <ChannelCategories />

      {/* Device Support */}
      <DeviceSupport />

      {/* Device Logos Marquee */}
      <div className="w-full bg-white border-t border-black/[0.05] pt-12 pb-6 relative z-10">
        <p className="text-center text-sm font-bold tracking-widest text-[#64748B] uppercase mb-8">Supported on all your favorite devices</p>
        <BrandMarquee
          imagesFolder="devices"
          images={[
            "Amazon-Fire-tv-stick-krooz-tv.webp",
            "Apple-TV-krooz-tv.webp",
            "hisense-krooz-tv.webp",
            "iptv-smarter-krooz-tv.webp",
            "LG-smart-krooz-tv.webp",
            "Shield-krooz-tv.webp",
            "Smart-android-tv-krooz-tv.webp",
            "sony-select-krooz-tv.webp",
            "Tv-media-boxs-krooz-tv.webp",
            "Windows-krooz-tv.webp",
            "xbox-live-krooz-tv.webp"
          ]}
          cardClassName="flex-shrink-0 w-[160px] h-[80px] md:w-[220px] md:h-[100px] relative bg-white border border-stone-200 rounded-2xl p-4 md:p-6 hover:border-sky-300 transition-all duration-300 shadow-md flex items-center justify-center"
          imageClassName="object-contain drop-shadow-sm"
        />
      </div>

      <HowItWorksSection />

      {/* Info & Articles */}
      <FAQSection />
      <LatestArticlesSection />

      {/* Social Proof & Conversion */}
      <SupportCtaSection />
    </main>
  );
}
