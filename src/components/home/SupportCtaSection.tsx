import { Mail, MessageSquare } from "lucide-react";

export default function SupportCtaSection() {
  return (
    <section className="border-t border-black/10 bg-white px-5 py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0EA5E9]/5 rounded-full blur-[120px] pointer-events-none" />

      <div
        className="relative z-10 mx-auto flex max-w-[565px] flex-col gap-8 rounded-[22px] border border-black/10 bg-white p-8 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div className="max-w-[310px]">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0EA5E9]/35 bg-[#0EA5E9]/10 text-[#0EA5E9]">
            <MessageSquare className="h-5 w-5" />
          </span>
          <h2 className="mt-5 text-3xl font-black uppercase italic leading-[0.9] tracking-tight text-[#0F172A] sm:text-4xl">
            <span className="block">Need Immediate</span>
            <span className="block text-[#0EA5E9]">FreeGoTV IPTV Assistance?</span>
          </h2>
          <p className="mt-4 text-sm leading-5 text-[#64748B]">
            Our dedicated support team is available 24/7 and typically responds within 5 minutes via WhatsApp. Experience world-class customer service from real technical experts, not automated bots.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2.5 sm:w-40">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0EA5E9] px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wide text-[#0F172A] shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:bg-[#0EA5E9] hover:scale-105"
            href="https://wa.me/213552069874?text=Hello%2C%20I%20have%20a%20question%20about%20freegotv%20IPTV."
            rel="noreferrer"
            target="_blank"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Ask on WhatsApp
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wide text-[#0F172A] transition-all hover:border-black/30 hover:bg-[#0F172A]/[0.04] hover:scale-105"
            href="mailto:support@freegotv-iptv.shop"
          >
            <Mail className="h-3.5 w-3.5" />
            Send email
          </a>
        </div>
      </div>
    </section>
  );
}
