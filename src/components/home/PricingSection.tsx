"use client";

import { useState } from "react";
import { CheckCircle2, X, CreditCard, Bitcoin, Wallet } from "lucide-react";

type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  duration: string;
  saving?: string;
  popular?: boolean;
  features: PlanFeature[];
  buttonText: string;
};

const plans: Plan[] = [
  {
    id: "3-months",
    name: "FreeGoTV Basic",
    subtitle: "Perfect for trying out our premium service.",
    price: 35,
    duration: "/ 3 Months",
    saving: "Save 22%",
    features: [
      { text: "HD/4K Streaming Quality", included: true },
      { text: "Full EPG Support", included: true },
      { text: "Antifreeze Technology", included: true },
      { text: "24/7 Standard Support", included: true },
      { text: "Multi-device connection", included: false },
    ],
    buttonText: "Select Basic",
  },
  {
    id: "12-months",
    name: "FreeGoTV Ultimate",
    subtitle: "The ultimate entertainment experience for a full year.",
    price: 69.99,
    oldPrice: 80,
    duration: "/ 12 Months",
    saving: "Save 61%",
    popular: true,
    features: [
      { text: "Premium HD/4K/8K Quality", included: true },
      { text: "Advanced EPG & Catchup", included: true },
      { text: "Premium Antifreeze Tech v2", included: true },
      { text: "24/7 Priority VIP Support", included: true },
      { text: "Up to 3 simultaneous devices", included: true },
    ],
    buttonText: "Get Ultimate Pass",
  },
  {
    id: "6-months",
    name: "FreeGoTV Pro",
    subtitle: "A solid choice for half a year of uninterrupted joy.",
    price: 49.99,
    duration: "/ 6 Months",
    saving: "Save 44%",
    features: [
      { text: "HD/4K Streaming Quality", included: true },
      { text: "Full EPG Support", included: true },
      { text: "Antifreeze Technology", included: true },
      { text: "24/7 Priority Support", included: true },
      { text: "Multi-device connection", included: false },
    ],
    buttonText: "Select Pro",
  },
];

export default function PricingSection() {
  const [devices, setDevices] = useState(1);

  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the ${plan.name} plan (${plan.duration}) with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="pricing" className="relative bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <header className="mx-auto max-w-3xl text-center mb-10">
          <p className="inline-flex rounded-full border border-[#7D927D]/30 bg-[#7D927D]/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#7D927D]">IPTV SUBSCRIPTION PLANS</p>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight text-[#2F3136] sm:text-5xl uppercase">
            Choose Your <span className="text-[#7D927D]">Premium IPTV Plan</span>
          </h2>
          <p className="mt-5 text-xl font-bold tracking-wide text-[#2F3136] sm:text-2xl">Affordable, Buffer-Free Streaming</p>
          <p className="mt-2 text-sm text-[#68717A] sm:text-base">No hidden fees. Instant activation. Unlock unlimited live TV and VOD today.</p>
        </header>

        {/* Device Selector */}
        <div className="mx-auto mb-10 max-w-2xl" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-[#68717A]">Choose your connections</p>
          <div className="grid grid-cols-3 rounded-2xl border border-[#7D927D]/30 bg-white p-1.5 shadow-sm">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  aria-checked={selected}
                  className={`rounded-xl px-3 py-3 text-sm font-bold transition-all ${selected ? "bg-[#FF6B00] text-[#2F3136] shadow-lg shadow-red-600/30" : "text-[#68717A] hover:text-[#2F3136] hover:bg-red-50"}`}
                  key={count}
                  onClick={() => setDevices(count)}
                  role="radio"
                  type="button"
                >
                  {count} Device{count > 1 ? "s" : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 items-start pt-4">
          {plans.map((plan) => (
            <article 
              key={plan.id}
              className={`relative flex flex-col rounded-2xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1 border-2 ${
                plan.popular 
                  ? "border-[#7D927D] shadow-[0_15px_40px_-10px_rgba(255,107,0,0.25)] md:-mt-4" 
                  : "border-red-300 shadow-sm hover:shadow-md hover:border-[#7D927D]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-b-xl rounded-t-sm bg-gradient-to-r from-[#5B7083] to-stone-800 px-5 py-1.5 shadow-md whitespace-nowrap">
                  <span className="text-[10px] font-extrabold uppercase tracking-wide text-[#2F3136]">Best Value - Most Popular</span>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-[#2F3136]">{plan.name}</h3>
              <p className="mt-2 text-sm text-[#68717A] leading-relaxed min-h-[40px]">{plan.subtitle}</p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-black tracking-tighter text-[#7D927D]">${priceFor(plan)}</span>
                <span className="ml-1 text-xs font-semibold text-[#68717A]">{plan.duration}</span>
              </div>
              
              <div className="min-h-[24px] mt-1 flex items-center gap-2">
                {plan.saving && (
                  <p className="text-xs font-bold text-blue-500">{plan.saving}</p>
                )}
                {plan.oldPrice && (
                   <p className="text-xs font-semibold text-[#68717A] line-through">${(plan.oldPrice * devices).toFixed(2)}</p>
                )}
              </div>

              <ul className="mt-6 flex-grow space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <CheckCircle2 className={`h-5 w-5 shrink-0 ${plan.popular ? "text-[#7D927D]" : "text-blue-500"}`} strokeWidth={2.5} />
                    ) : (
                      <X className="h-5 w-5 shrink-0 text-[#68717A]" strokeWidth={2.5} />
                    )}
                    <span className={`text-sm font-medium ${feature.included ? "text-stone-700" : "text-[#68717A]"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                type="button"
                onClick={() => handleOrder(plan)}
                className={`mt-8 w-full rounded-xl py-4 text-sm font-bold text-[#2F3136] transition-all duration-300 ${
                  plan.popular 
                    ? "bg-[#FF6B00] shadow-[0_8px_20px_rgba(255,107,0,0.3)] hover:bg-[#E66000] hover:-translate-y-0.5" 
                    : "bg-stone-800 hover:bg-[#2F3136] hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {plan.buttonText}
              </button>
            </article>
          ))}
        </div>

        {/* Payment Methods & Guarantee */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-white border border-stone-200 p-6 shadow-sm">
            
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h4 className="text-base font-bold text-[#2F3136] flex items-center justify-center sm:justify-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#7D927D]" />
                Secure Payments & Instant Access
              </h4>
              <p className="text-sm text-[#68717A]">Pay safely using Crypto, Credit Card, or PayPal. Your details are encrypted instantly.</p>
            </div>

            <div className="flex items-center gap-4 text-[#68717A]">
              <CreditCard className="h-8 w-8 hover:text-[#FF6B00] transition-colors" />
              <Bitcoin className="h-8 w-8 hover:text-[#FF6B00] transition-colors" />
              <Wallet className="h-8 w-8 hover:text-[#FF6B00] transition-colors" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
