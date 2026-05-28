import { openWA } from "@/lib/wa";
import { MessageCircle, Zap, Smartphone, Headphones, ShieldCheck, BadgeCheck } from "lucide-react";

const REASONS = [
  { icon: MessageCircle, title: "60-Second Free ID", desc: "Your cricket ID delivered on WhatsApp in under a minute — verified, secure, ready to play." },
  { icon: Zap, title: "Lightning Withdrawals", desc: "Cashouts settle to UPI, IMPS or bank in under 5 minutes — every hour, every day." },
  { icon: Smartphone, title: "Mobile-First Experience", desc: "Engineered for Indian networks — buttery smooth on any phone, any plan." },
  { icon: Headphones, title: "Always-On Support", desc: "24×7 WhatsApp care in Hindi, English, Telugu and Tamil — real humans, no bots." },
];

export const TrustSection = () => (
  <section className="container py-14 md:py-20">
    <div className="text-center mb-12 max-w-3xl mx-auto">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-primary text-xs font-bold tracking-[0.2em] mb-5">
        <BadgeCheck className="h-3.5 w-3.5" /> TRUSTED BY 12 LAKH+ PLAYERS
      </span>
      <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
        Built on Trust. <br className="hidden md:block" />
        <span className="text-gradient-gold">Backed by Thousands.</span>
      </h2>
      <p className="text-base md:text-lg text-muted-foreground mt-5 leading-relaxed">
        Khelo24Bet is India's most trusted online sports gaming destination — a <strong className="text-foreground">verified cricket platform</strong> trusted by players for fast withdrawals, fair odds and round-the-clock support on every device.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {REASONS.map((r, idx) => (
        <button
          key={r.title}
          onClick={openWA}
          style={{ animationDelay: `${idx * 80}ms` }}
          className="animate-fade-up group relative overflow-hidden p-6 rounded-2xl bg-gradient-card hairline hover:border-primary/40 transition-smooth text-left shadow-card hover:shadow-elevated hover:-translate-y-1"
        >
          <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />
          <div className="relative h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-smooth">
            <r.icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-display font-bold mb-2 text-base">{r.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
        </button>
      ))}
    </div>

    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> SSL Secured</span>
      <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-primary" /> Verified Payouts</span>
      <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4 text-primary" /> Under 5-Min Withdrawals</span>
      <span className="inline-flex items-center gap-1.5">★ 4.9/5 Player Rating</span>
    </div>
  </section>
);
