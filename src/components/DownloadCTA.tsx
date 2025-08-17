import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Play } from "lucide-react";
import { Link } from "react-router-dom";

export const DownloadCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-hero p-12 text-center text-white rounded-3xl shadow-strong animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Start your journey today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your daily thoughts into lasting memories. Download Calendar Journal 
              and discover the joy of simple, beautiful journaling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="h-14 px-8 bg-white text-primary hover:bg-white/90 shadow-medium hover:shadow-strong hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button variant="secondary" size="lg" className="h-14 px-8 bg-white text-primary hover:bg-white/90 shadow-medium hover:shadow-strong hover:scale-105 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Get it on Google Play
              </Button>
            </div>
            
            <p className="text-white/70 text-sm mt-6">
              Free to download • No subscription required • Your privacy guaranteed
            </p>
          </div>
        </Card>
      </div>
      
      {/* Footer */}
      <footer className="mt-16 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Link 
            to="/privacy" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <a 
            href="mailto:hello@calendarjournal.app" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline"
          >
            Contact
          </a>
        </div>
        <p className="text-muted-foreground text-sm">
          &copy; 2024 Calendar Journal. Made with ❤️ for mindful journaling.
        </p>
      </footer>
    </section>
  );
};