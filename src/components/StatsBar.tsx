import { Trophy, Zap, Shield, Users } from "lucide-react";

const STATS = [
  { icon: Users, label: "Active Players", value: "12L+" },
  { icon: Trophy, label: "Paid Out Daily", value: "₹2.8 Cr" },
  { icon: Zap, label: "Avg. Withdrawal", value: "< 5 min" },
  { icon: Shield, label: "Trusted Since", value: "2018" },
];

export const StatsBar = () => (
  <section className="border-y border-border/60 bg-card/40 backdrop-blur-sm">
    <div className="container py-7 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-4">
      {STATS.map((s, idx) => (
        <div
          key={s.label}
          style={{ animationDelay: `${idx * 60}ms` }}
          className="animate-fade-up flex items-center gap-3 md:gap-4"
        >
          <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 shadow-glow/40">
            <s.icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="font-display text-2xl md:text-3xl font-black text-gradient-gold leading-none">{s.value}</div>
            <div className="text-[11px] md:text-xs text-muted-foreground mt-1 tracking-wide uppercase">{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
