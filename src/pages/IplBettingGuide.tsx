import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { openWA } from "@/lib/wa";
import { useSeo } from "@/hooks/use-seo";
import {
  MessageCircle, Trophy, Target, Gift, Shield, Zap, TrendingUp,
  CheckCircle2, AlertTriangle, Clock, Wallet, Star, Activity, Users, Brain, Flame,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/promo-live.jpg";
import tipsImg from "@/assets/promo-fantasy.jpg";
import safetyImg from "@/assets/promo-arcade.jpg";

const SITE = "https://www.kheloo24betting.live";

const FAQS = [
  { q: "Is IPL betting legal in India in 2026?", a: "IPL betting laws vary state by state in India. Online betting on private international platforms like Khelo24Bet is accessible in most states, but states like Telangana, Andhra Pradesh, Tamil Nadu, Karnataka, and Sikkim have specific restrictions. Always check your local state laws before placing real-money bets." },
  { q: "What is the minimum deposit for IPL betting on Khelo24Bet?", a: "You can start IPL betting with a minimum deposit of just ₹100 on Khelo24Bet via UPI, PhonePe, GPay or Paytm. Funds reflect in your wallet within 30 seconds." },
  { q: "Which IPL bet type has the best winning chances?", a: "Match-winner and toss-winner markets give roughly 45-50% win probability. Top batsman, top bowler and over/under run markets offer better value (1.8x-3.5x odds) with disciplined research. Avoid 'man of the match' as a beginner — it has very low strike rate." },
  { q: "How do IPL betting odds work?", a: "Odds show how much you win per ₹1 staked. Decimal odds of 1.80 mean ₹100 returns ₹180 (₹80 profit). Lower odds = higher probability; higher odds = lower probability but bigger payout." },
  { q: "What is the safest IPL betting strategy for beginners?", a: "Stick to match-winner bets on the favourite (odds 1.50-1.80), bet only 1-2% of your bankroll per match, never chase losses, and never bet on every game. Patience beats predictions in IPL." },
  { q: "Can I bet live during an IPL match on Khelo24Bet?", a: "Yes — Khelo24Bet offers live in-play IPL betting on every ball: next-over runs, wicket markets, powerplay totals, batsman milestones and live match-winner odds that update every second." },
  { q: "How fast are IPL betting withdrawals on Khelo24Bet?", a: "Verified UPI withdrawals are processed within 5 minutes, 24x7. Just message our WhatsApp support with your UPI ID after cashing out — funds hit your PhonePe, GPay, Paytm or bank account instantly." },
  { q: "What is bankroll management in IPL betting?", a: "Bankroll management means betting only 1-2% of your total IPL budget on a single match. If your IPL bankroll is ₹10,000, your max bet per game should be ₹100-₹200. This protects you from losing streaks." },
  { q: "Are IPL match-fixing reports real?", a: "BCCI and ICC have strict anti-corruption units. Fixing is extremely rare in modern IPL. Always bet on regulated platforms and avoid 'fixed match' Telegram tipsters — they are 100% scams targeting Indian bettors." },
  { q: "Which IPL team has the best home record?", a: "Chennai Super Kings at Chepauk and Mumbai Indians at Wankhede historically have the strongest home win rates. Always check the venue, recent form and head-to-head before placing any IPL bet." },
  { q: "What are the best IPL betting markets for big wins?", a: "Top batsman of the match (4x-8x), method of dismissal (5x-10x), exact match score (15x+) and outright IPL winner (3x-12x pre-season) offer the biggest payouts — but require research and discipline." },
  { q: "Do weather and pitch affect IPL betting?", a: "Absolutely. Dew in Chennai/Mumbai favours chasing teams. Slow Kotla pitches help spinners. Bangalore wickets favour batting. Always check the toss outcome, pitch report and dew factor before placing live bets." },
  { q: "How do I bet on IPL on my mobile phone?", a: "Get your free Khelo24Bet ID via WhatsApp in 60 seconds, log in on any mobile browser (Chrome/Safari), deposit via UPI, then tap Cricket → IPL to view all live and upcoming match odds. No app download required." },
  { q: "What is the welcome bonus for new IPL bettors?", a: "New Khelo24Bet users get a 100% welcome bonus up to ₹10,000 on their first IPL deposit, plus 5% weekly cashback on net losses during the IPL season." },
  { q: "How can I avoid losing money in IPL betting?", a: "Set a fixed IPL season budget, use bankroll rules (1-2% per match), avoid emotional betting on your favourite team, skip matches you haven't researched, and never use credit or borrowed money to bet." },
];

const STEPS = [
  { title: "Get Your Free IPL Betting ID", desc: "Message WhatsApp support — receive a secure Khelo24Bet ID in under 60 seconds. No documents, no waiting, no app download." },
  { title: "Deposit via UPI in 30 Seconds", desc: "Add funds instantly via PhonePe, GPay, Paytm or any Indian bank. Minimum just ₹100 to start IPL betting." },
  { title: "Open Cricket → IPL Markets", desc: "Browse live match odds, pre-match markets, toss, top batsman, top bowler, over/under and live ball-by-ball options." },
  { title: "Research Before You Bet", desc: "Check pitch report, weather, dew factor, team news, head-to-head and recent form. 5 minutes of research beats 50 emotional bets." },
  { title: "Place a Disciplined Bet", desc: "Stake only 1-2% of your bankroll. Stick to value markets. Confirm your slip, lock the odds." },
  { title: "Withdraw Winnings Instantly", desc: "Hit your target? Cash out, WhatsApp our team your UPI ID, and receive funds in your bank in under 5 minutes." },
];

const BET_TYPES = [
  { name: "Match Winner", odds: "1.50 - 2.50", risk: "Low", best: "Beginners, safe play", icon: Trophy },
  { name: "Toss Winner", odds: "1.90 - 2.00", risk: "Pure chance", best: "Quick fun bets", icon: Activity },
  { name: "Top Batsman", odds: "3.50 - 8.00", risk: "Medium-High", best: "Research-driven players", icon: Target },
  { name: "Top Bowler", odds: "4.00 - 9.00", risk: "Medium-High", best: "Pitch-aware bettors", icon: Zap },
  { name: "Total Runs Over/Under", odds: "1.80 - 2.10", risk: "Medium", best: "Pitch & weather readers", icon: TrendingUp },
  { name: "Outright IPL Winner", odds: "3.00 - 12.00", risk: "Long-term", best: "Pre-season value hunters", icon: Star },
];

const TEAMS_2026 = [
  { team: "Mumbai Indians", strength: "Powerplay batting, death bowling", venue: "Wankhede", odds: "5.50" },
  { team: "Chennai Super Kings", strength: "Spin attack, home dominance", venue: "Chepauk", odds: "6.00" },
  { team: "Royal Challengers Bengaluru", strength: "Top-order firepower", venue: "Chinnaswamy", odds: "7.50" },
  { team: "Kolkata Knight Riders", strength: "Balanced squad, mystery spin", venue: "Eden Gardens", odds: "5.00" },
  { team: "Gujarat Titans", strength: "Bowling depth, finishers", venue: "Narendra Modi Stadium", odds: "6.50" },
  { team: "Rajasthan Royals", strength: "Young Indian core, wrist spin", venue: "Sawai Mansingh", odds: "8.00" },
];

const TESTIMONIALS = [
  { name: "Vikram T., Hyderabad", quote: "Switched from random fixed-match tipsters to disciplined match-winner bets on Khelo24Bet. Made ₹38,000 profit last IPL season with just ₹5,000 bankroll.", win: "₹38,000" },
  { name: "Sneha R., Pune", quote: "The 1-2% bankroll rule changed my IPL betting. No more panic. UPI withdrawal hits my PhonePe in literally 3 minutes — every single time.", win: "₹14,500" },
  { name: "Aditya P., Lucknow", quote: "Live in-play betting on Khelo24Bet is the smoothest I've used. Placed a top-batsman bet on Kohli at 4x — cashed out ₹16,000 the same night.", win: "₹16,000" },
];

const IplBettingGuide = () => {
  useSeo({
    title: "IPL Betting Guide 2026 India | Odds, Tips & Live Markets",
    description: "Complete IPL 2026 betting guide for Indian players. Best markets, team odds, live in-play tips, bankroll strategy & instant UPI withdrawal on Khelo24Bet.",
    canonical: "/ipl-betting-guide-2026",
    keywords: "ipl betting guide 2026, ipl betting tips india, ipl 2026 odds, ipl live betting, ipl match winner tips, ipl top batsman bets, kheloo24bet ipl, ipl betting strategy, ipl satta, ipl betting app india",
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Bet on IPL 2026 in India",
    description: "Step-by-step guide to safely betting on IPL 2026 with instant UPI deposit and withdrawal on Khelo24Bet.",
    step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.desc })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Cricket", item: SITE + "/cricket" },
      { "@type": "ListItem", position: 3, name: "IPL Betting Guide 2026", item: SITE + "/ipl-betting-guide-2026" },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "IPL Betting Guide 2026 India — Odds, Tips & Live Markets",
    description: "Complete IPL 2026 betting guide for Indian players covering bet types, team analysis, bankroll strategy and instant UPI withdrawal.",
    author: { "@type": "Organization", name: "Khelo24Bet Editorial Team" },
    publisher: { "@type": "Organization", name: "Khelo24Bet" },
    datePublished: "2026-01-15",
    dateModified: "2026-06-22",
    mainEntityOfPage: SITE + "/ipl-betting-guide-2026",
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <Header />
      <BreadcrumbNav items={[{ label: "Cricket", href: "/cricket" }, { label: "IPL Betting Guide 2026" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/10 py-12 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold mb-4">
              <Flame className="w-3.5 h-3.5" /> IPL 2026 SEASON — LIVE NOW
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              IPL Betting Guide 2026 — <span className="text-primary">Win Smart, Withdraw Instantly</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              The complete 2026 IPL betting playbook for Indian players. Master match-winner odds, live in-play markets, top-batsman value bets and disciplined bankroll strategy — with UPI deposits in 30 seconds and withdrawals in under 5 minutes on Khelo24Bet.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={openWA} className="gap-2">
                <MessageCircle className="w-5 h-5" /> Get Free IPL ID on WhatsApp
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/cricket">View Live IPL Odds</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> 100% Welcome Bonus</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-primary" /> 5-Min UPI Withdrawal</span>
              <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-primary" /> Licensed & Secure</span>
            </div>
          </div>
          <div className="relative">
            <img src={heroImg} alt="IPL 2026 betting guide India — live odds, top batsman markets, instant UPI withdrawal on Khelo24Bet" className="rounded-2xl shadow-2xl w-full" loading="eager" />
          </div>
        </div>
      </section>

      {/* WHY IPL BETTING */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-3">Why IPL Betting Is Different (And How To Win It)</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
            IPL isn't just a tournament — it's a 60-day data goldmine. Predictable venues, repeating squads, dew patterns and player form make IPL one of the most beatable cricket markets in the world if you bet with discipline, not emotion.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: "74 Matches of Data", desc: "Every IPL season = 74 matches across 10 venues. More data than any other T20 league means clearer trends." },
              { icon: Brain, title: "Predictable Patterns", desc: "Dew at Wankhede, spin at Chepauk, batting paradise at Chinnaswamy — patterns repeat every year." },
              { icon: Wallet, title: "Best Odds in India", desc: "Khelo24Bet offers some of the sharpest IPL odds in the Indian market with no hidden cuts on winnings." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition">
                <item.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BET TYPES TABLE */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-3">Best IPL Betting Markets in 2026</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
            Not all IPL bets are created equal. Here's the honest breakdown of every major market — odds range, risk level, and who each market suits best.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BET_TYPES.map((b, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold">{b.name}</h3>
                </div>
                <dl className="text-sm space-y-1">
                  <div className="flex justify-between"><dt className="text-muted-foreground">Typical Odds:</dt><dd className="font-semibold">{b.odds}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted-foreground">Risk:</dt><dd className="font-semibold">{b.risk}</dd></div>
                  <div className="flex justify-between gap-2"><dt className="text-muted-foreground">Best for:</dt><dd className="font-semibold text-right">{b.best}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img src={tipsImg} alt="Step-by-step IPL 2026 betting on Khelo24Bet — WhatsApp ID, UPI deposit, live markets, fast withdrawal" className="rounded-2xl shadow-xl w-full" loading="lazy" />
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6">How To Bet on IPL 2026 — 6 Simple Steps</h2>
            <ol className="space-y-4">
              {STEPS.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-bold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Button size="lg" className="mt-6 gap-2" onClick={openWA}>
              <MessageCircle className="w-5 h-5" /> Start in 60 Seconds
            </Button>
          </div>
        </div>
      </section>

      {/* TEAM ODDS */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-3">IPL 2026 Team Strength & Outright Odds</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
            Outright winner odds shift daily. Here's a snapshot of top contenders for IPL 2026, their core strengths and home venues to factor into your match-winner bets.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-card border border-border rounded-xl overflow-hidden">
              <thead className="bg-primary/10">
                <tr>
                  <th className="text-left p-3 font-bold">Team</th>
                  <th className="text-left p-3 font-bold">Core Strength</th>
                  <th className="text-left p-3 font-bold">Home Venue</th>
                  <th className="text-right p-3 font-bold">Outright Odds</th>
                </tr>
              </thead>
              <tbody>
                {TEAMS_2026.map((t, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 font-semibold">{t.team}</td>
                    <td className="p-3 text-muted-foreground">{t.strength}</td>
                    <td className="p-3 text-muted-foreground">{t.venue}</td>
                    <td className="p-3 text-right font-bold text-primary">{t.odds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">Indicative odds for illustration. Always check live odds on Khelo24Bet before placing any bet.</p>
        </div>
      </section>

      {/* EXPERT TIPS */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10">7 Expert IPL Betting Tips That Actually Work</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { t: "Track Dew Factor for Night Matches", d: "Wankhede, Eden Gardens and Chepauk see heavy dew after 8 PM. Chasing teams win ~62% of dew-affected games. Always factor toss + dew before backing the team batting first." },
              { t: "Bet the Pitch, Not the Team", d: "Chinnaswamy = batting heaven, Kotla = spinner's paradise, Chepauk = slow turner. Match your bet (over/under runs, top bowler type) to the venue, not your favourite franchise." },
              { t: "Never Chase Losses", d: "After a losing bet, take a break. The IPL has 74 games — there's always another opportunity. Doubling stakes to recover is the #1 reason bettors go broke." },
              { t: "Use the 1-2% Bankroll Rule", d: "Set an IPL season bankroll. Never stake more than 1-2% on a single match. ₹10,000 bankroll = ₹100-₹200 max per bet. This protects you from inevitable losing streaks." },
              { t: "Avoid 'Fixed Match' Tipsters", d: "Every 'guaranteed fixed IPL match' on Telegram and WhatsApp is a scam. BCCI's anti-corruption unit is one of the strictest in world cricket. Trust data, not tipsters." },
              { t: "Shop For Best Odds", d: "Odds vary across platforms. Khelo24Bet consistently posts some of the sharpest IPL odds in India. A 0.10 odds difference is the long-term edge between profit and loss." },
              { t: "Take Advantage of Live Markets", d: "Wickets fall, momentum shifts, odds swing wildly. In-play betting on Khelo24Bet lets you back the value side after the powerplay or after a wicket — when bookmaker odds overreact." },
              { t: "Document Every Bet", d: "Keep a simple notes/Excel log of every IPL bet — market, stake, odds, result. After 30 bets, patterns emerge. You'll know exactly which markets profit and which to skip." },
            ].map((tip, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">{tip.t}</h3>
                  <p className="text-sm text-muted-foreground">{tip.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6">Common IPL Betting Mistakes (Avoid These)</h2>
            <ul className="space-y-3">
              {[
                "Betting on every single IPL match instead of picking spots",
                "Backing your favourite team blindly regardless of form or odds",
                "Ignoring the toss outcome and dew factor in night matches",
                "Using credit cards or borrowed money to fund bets",
                "Chasing losses with bigger stakes after a bad night",
                "Falling for 'guaranteed fixed match' WhatsApp scams",
                "Skipping pitch reports and team news before betting",
                "Withdrawing only when broke instead of locking profits",
              ].map((m, i) => (
                <li key={i} className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={safetyImg} alt="Common IPL betting mistakes Indian players make and how to avoid them safely" className="rounded-2xl shadow-xl w-full" loading="lazy" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10">Real IPL Bettors. Real Withdrawals.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}</div>
                <p className="text-sm mb-4 italic">"{t.quote}"</p>
                <div className="flex justify-between items-center pt-3 border-t border-border">
                  <span className="text-sm font-semibold">{t.name}</span>
                  <span className="text-sm font-bold text-primary">+{t.win}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Gift className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Claim Your ₹10,000 IPL Welcome Bonus</h2>
          <p className="text-base md:text-lg mb-6 opacity-95">
            Start IPL 2026 betting today. 100% bonus on first deposit. 5-minute UPI withdrawal. 24x7 WhatsApp support. No app, no documents, no waiting.
          </p>
          <Button size="lg" variant="secondary" onClick={openWA} className="gap-2">
            <MessageCircle className="w-5 h-5" /> Get Free ID on WhatsApp Now
          </Button>
          <p className="text-xs mt-4 opacity-80 flex items-center justify-center gap-1">
            <Users className="w-3.5 h-3.5" /> 50,000+ Indian players trust Khelo24Bet for IPL betting
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8">IPL Betting 2026 — Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* RESPONSIBLE PLAY */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Shield className="w-8 h-8 mx-auto text-primary mb-3" />
          <h2 className="font-bold mb-2">Play Responsibly</h2>
          <p className="text-sm text-muted-foreground">
            IPL betting is for entertainment — 18+ only. Set a budget, never chase losses, never bet borrowed money, and never let betting affect your family or finances. If you need help, contact a responsible-gaming counsellor. We do not guarantee wins or earnings.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          { to: "/cricket", label: "Live Cricket Betting Markets" },
          { to: "/aviator-strategies", label: "Aviator Game Tricks & Strategies" },
          { to: "/blog/live-cricket-betting-tips-online", label: "Live Cricket Betting Tips" },
          { to: "/blog/how-to-bet-on-live-cricket-matches-online", label: "How To Bet On Live Cricket Matches" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default IplBettingGuide;
