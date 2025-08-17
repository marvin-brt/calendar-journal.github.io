import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { WhyCalendarJournal } from "@/components/WhyCalendarJournal";
import { UseCases } from "@/components/UseCases";
import { DownloadCTA } from "@/components/DownloadCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <WhyCalendarJournal />
      <UseCases />
      <DownloadCTA />
    </div>
  );
};

export default Index;