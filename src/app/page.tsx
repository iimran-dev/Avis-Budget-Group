import { AvisHeader } from "@/components/sections/avis-header";
import { AvisHero } from "@/components/sections/avis-hero";
import { AvisGlobalScale } from "@/components/sections/avis-global-scale";
import { AvisTimeline } from "@/components/sections/avis-timeline";
import { AvisEcosystem } from "@/components/sections/avis-ecosystem";
import { AvisEsg } from "@/components/sections/avis-esg";
import { AvisInnovationLab } from "@/components/sections/avis-innovation-lab";
import { AvisPeople } from "@/components/sections/avis-people";
import { AvisInvestorsNews } from "@/components/sections/avis-investors-news";
import { AvisFinalCta } from "@/components/sections/avis-final-cta";
import { AvisFooter } from "@/components/sections/avis-footer";

export const metadata = {
  title: "Avis Budget Group | Driving the Future of Mobility",
  description:
    "We make life's journeys better by delivering innovative mobility solutions that are safe, sustainable and accessible for all.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <AvisHeader />
      <AvisHero />
      <AvisGlobalScale />
      <AvisTimeline />
      <AvisEcosystem />
      <AvisEsg />
      <AvisInnovationLab />
      <AvisPeople />
      <AvisInvestorsNews />
      <AvisFinalCta />
      <AvisFooter />
    </main>
  );
}
