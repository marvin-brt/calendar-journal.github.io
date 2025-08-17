import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Calendar Journal
            </h1>
            <p className="text-xl sm:text-2xl text-accent font-semibold mb-4">
              Simple. Clean. Personal.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Transform your daily thoughts into lasting memories. A beautiful journal that fits your life, 
              with calendar views, voice memos, and mood tracking.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="appstore" size="lg" className="h-14 px-6">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button variant="appstore" size="lg" className="h-14 px-6">
                <Play className="w-5 h-5 mr-2" />
                Get it on Google Play
              </Button>
            </div>
          </div>

          {/* Hero Screenshot */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <Card className="bg-card shadow-strong hover:shadow-glow transition-all duration-500 p-2 rounded-3xl overflow-hidden max-w-sm">
              <img 
                src="/lovable-uploads/38028cd2-6860-490e-8f10-39f832401149.png" 
                alt="Calendar Journal App Overview" 
                className="w-full h-auto rounded-2xl"
              />
            </Card>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};