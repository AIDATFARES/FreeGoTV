import Link from 'next/link';
import { Headset, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BlogSupportCard() {
  return (
    <div className="my-10 relative overflow-hidden rounded-2xl border border-[#0EA5E9]/20 bg-gradient-to-br from-[#F8FAFC] to-white shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 group">
      {/* Background decoration */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#0EA5E9]/10 rounded-full blur-3xl group-hover:bg-[#0EA5E9]/20 transition-all duration-700"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#14B8A6]/10 rounded-full blur-3xl group-hover:bg-[#14B8A6]/20 transition-all duration-700"></div>

      <div className="flex-1 relative z-10 text-center md:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0EA5E9] mb-4">
          <Headset className="w-3.5 h-3.5" /> 24/7 Technical Assistance
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
          Still Experiencing <span className="text-[#0EA5E9]">Audio Sync</span> Problems?
        </h3>
        <p className="text-slate-600 mb-5 leading-relaxed font-medium">
          If local device adjustments didn&apos;t fix the delay, our team can inspect source stream synchronization and assist with your setup.
        </p>
        
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 justify-center md:justify-start">
          <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" /> Priority Server Inspection
          </li>
          <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" /> Step-by-Step Setup Help
          </li>
        </ul>
      </div>

      <div className="w-full md:w-auto flex flex-col items-center gap-3 relative z-10 shrink-0">
        <Link 
          href="/contact" 
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#14B8A6] to-[#0EA5E9] text-white font-bold rounded-xl shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.4)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
        >
          <Headset className="w-5 h-5" />
          Contact FreeGoTV Support
        </Link>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <HelpCircle className="w-4 h-4 text-slate-400" /> Fast Response & Friendly Assistance
        </div>
      </div>
    </div>
  );
}
