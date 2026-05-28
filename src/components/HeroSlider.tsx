import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { openWA } from "@/lib/wa";
import { ChevronLeft, ChevronRight, ArrowRight, Zap } from "lucide-react";
import hero from "@/assets/hero-cricket.jpg";
import promoFantasy from "@/assets/promo-fantasy.jpg";
import promoLive from "@/assets/promo-live.jpg";
import promoArcade from "@/assets/promo-arcade.jpg";

const SLIDES = [
  {
    img: hero,
    eyebrow: "LIVE NOW · IPL 2026",
    title: "Every Ball Counts.",
    accent: "So Does Every Bet.",
    sub: "India's fastest cricket community on WhatsApp — instant odds, expert predictions and member-only bonuses delivered ball-by-ball.",
    alt: "Live cricket betting on Khelo24Bet",
  },
  {
    img: promoFantasy,
    eyebrow: "FANTASY CRICKET",
    title: "Pick Your XI.",
    accent: "Win ₹10 Lakh.",
    sub: "Daily fantasy contests on every fixture. Skill-based scoring, transparent leaderboards, instant results.",
    alt: "Free cricket ID on Khelo24Bet",
  },
  {
    img: promoLive,
    eyebrow: "LIVE SCORES",
    title: "Every Moment.",
    accent: "In Real Time.",
    sub: "Ball-by-ball commentary, live scoreboards and ML-powered predictions — straight to your screen.",
    alt: "Get your cricket ID and play on Khelo24Bet",
  },
  {
    img: promoArcade,
    eyebrow: "PREMIUM LIVE CASINO",
    title: "Real Dealers.",
    accent: "Real Rupees.",
    sub: "Andar Bahar, Teen Patti and Roulette streamed live with HD dealers, 24/7 in INR.",
    alt: "Play online casino games on Khelo24Bet",
  },
];

export const HeroSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);
  const s = SLIDES[i];
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[82vh] min-h-[560px] md:h-[90vh] md:min-h-[680px] w-full">
        {SLIDES.map((sl, idx) => (
          <img
            key={idx}
            src={sl.img}
            alt={sl.alt}
            width={1920}
            height={1080}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${idx === i ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 md:via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

        <div className="container relative z-10 flex h-full items-center pb-16 md:pb-0">
          <div key={i} className="max-w-2xl space-y-5 md:space-y-6 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-primary text-[10px] sm:text-xs font-bold tracking-[0.2em]">
              <Zap className="h-3 w-3 animate-pulse" /> {s.eyebrow}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
              <span className="block">{s.title}</span>
              <span className="block text-gradient-gold">{s.accent}</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">{s.sub}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-3 max-w-md">
              <Button onClick={openWA} size="lg" className="flex-1 bg-gradient-gold text-gold-foreground hover:opacity-95 shadow-gold font-bold text-base rounded-2xl h-14 group">
                Play Now <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={openWA} size="lg" variant="outline" className="flex-1 glass border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/60 font-bold text-base rounded-2xl h-14">
                Claim Free ID
              </Button>
            </div>
          </div>
        </div>

        <button onClick={() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length)} className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full glass items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth" aria-label="Previous">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={() => setI((p) => (p + 1) % SLIDES.length)} className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full glass items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth" aria-label="Next">
          <ChevronRight className="h-6 w-6" />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {SLIDES.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-gradient-gold" : "w-2 bg-muted-foreground/40"}`} aria-label={`Slide ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
