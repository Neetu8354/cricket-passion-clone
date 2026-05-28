import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQS = [
  { q: "How do I claim my free Cricket ID?", a: "Tap any 'Claim Free ID' button — our agent shares your secure ID and password on WhatsApp within 60 seconds, no paperwork required." },
  { q: "What's the minimum deposit I can make?", a: "Just ₹100 via UPI, IMPS or Net Banking. Every transaction stays in Indian Rupees, with no hidden fees." },
  { q: "How fast are withdrawals processed?", a: "Verified withdrawals settle to your bank account or UPI ID in under 5 minutes — round the clock, 365 days a year." },
  { q: "Which cricket tournaments are covered?", a: "IPL, T20 & ODI World Cups, BBL, PSL, CPL, Test series and all major domestic leagues — live odds on every fixture." },
  { q: "How does Aviator actually work?", a: "Place a bet, watch the multiplier climb, and cash out before the plane disappears. Simple math, real adrenaline, instant payouts." },
  { q: "Is your support team really available 24/7?", a: "Always. Real humans on WhatsApp in Hindi, English, Telugu and Tamil — average reply under 30 seconds." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const FAQ = () => (
  <section className="container py-14 md:py-20">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="text-center mb-10">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-primary text-xs font-bold tracking-[0.2em] mb-5">
        <HelpCircle className="h-3.5 w-3.5" /> ANSWERS, NOT JARGON
      </span>
      <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight">
        Frequently Asked <span className="text-gradient-gold">Questions</span>
      </h2>
    </div>
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-gradient-card hairline rounded-2xl px-5 hover:border-primary/30 transition-smooth">
            <AccordionTrigger className="text-left font-display font-semibold text-base hover:no-underline py-5">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
