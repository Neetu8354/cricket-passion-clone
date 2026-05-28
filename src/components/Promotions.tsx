import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Crown, Wallet } from "lucide-react";

const PROMOS = [
  { icon: Gift, title: "Welcome Bonus", value: "₹15,000", desc: "100% match on your first deposit. Activate instantly on WhatsApp.", color: "from-primary to-accent" },
  { icon: Sparkles, title: "Daily Cashback", value: "10%", desc: "Get 10% back on net losses — credited automatically, every single day.", color: "from-secondary to-gold" },
  { icon: Crown, title: "VIP Club", value: "₹1 Lakh", desc: "Personal manager, priority payouts and invite-only tournaments.", color: "from-gold to-secondary" },
  { icon: Wallet, title: "Refer & Earn", value: "₹500", desc: "Per friend who joins via your link. Unlimited referrals, lifetime payouts.", color: "from-accent to-primary" },
];

export const Promotions = () => (
  <section className="container py-14 md:py-20">
    <div className="text-center mb-10 max-w-2xl mx-auto">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-secondary text-xs font-bold tracking-[0.2em] mb-5">
        <Sparkles className="h-3.5 w-3.5" /> REWARDS THAT REWARD YOU
      </span>
      <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight">
        Bonuses Built for <span className="text-gradient-gold">Real Players</span>
      </h2>
      <p className="text-sm md:text-base text-muted-foreground mt-4">100% INR. Direct UPI, IMPS and Net Banking. Withdrawals settle in under 5 minutes.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {PROMOS.map((p, idx) => (
        <div
          key={p.title}
          style={{ animationDelay: `${idx * 80}ms` }}
          className="animate-fade-up group relative overflow-hidden rounded-2xl bg-gradient-card hairline p-6 hover:border-primary/40 transition-smooth shadow-card hover:shadow-elevated hover:-translate-y-1"
        >
          <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-3xl group-hover:opacity-50 transition-smooth`} />
          <div className="relative h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
            <p.icon className="h-5 w-5 text-primary" />
          </div>
          <div className="relative font-display text-4xl font-black text-gradient-gold mb-2 leading-none">{p.value}</div>
          <h3 className="relative font-display font-bold mb-2 text-lg">{p.title}</h3>
          <p className="relative text-sm text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
          <Button onClick={openWA} variant="outline" size="sm" className="relative w-full glass border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary rounded-xl font-semibold">
            Claim Now
          </Button>
        </div>
      ))}
    </div>
  </section>
);
