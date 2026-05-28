import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { StatsBar } from "@/components/StatsBar";
import { WinnersTicker } from "@/components/WinnersTicker";
import { TrustSection } from "@/components/TrustSection";
import { PopularGames } from "@/components/PopularGames";
import { GameSections } from "@/components/GameSections";
import { LiveScores } from "@/components/LiveScores";
import { Promotions } from "@/components/Promotions";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { PaymentBar } from "@/components/PaymentBar";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useSeo } from "@/hooks/use-seo";

const Index = () => {
  useSeo({
    title: "Khelo24Bet — Free Cricket ID & Fast UPI Withdrawals",
    description: "India's trusted sports gaming platform. Free cricket ID, live cricket betting, Aviator & Teen Patti with instant UPI withdrawals and 24x7 support.",
    canonical: "/",
    keywords: "kheloo24ids, online sports gaming platform, free cricket id, live cricket betting, aviator game, teen patti online, fast withdrawal betting",
  });

  return (
    <main>
      <Header />
      <h1 className="sr-only">Play Online Games on Khelo24Bet</h1>
      <HeroSlider />
      <StatsBar />
      <WinnersTicker />
      <TrustSection />
      <PopularGames />
      <GameSections />
      <LiveScores />
      <Promotions />
      <WhatsAppCTA />
      <PaymentBar />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
