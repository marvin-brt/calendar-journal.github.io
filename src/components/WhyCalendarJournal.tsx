import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const benefits = [
  "No clutter - just pure focus on your thoughts",
  "Visual calendar overview of your journey", 
  "Private and secure - your data stays yours",
  "Intuitive design that feels natural",
  "Multiple ways to capture moments - text or voice",
  "Beautiful, distraction-free writing experience"
];

export const WhyCalendarJournal = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Calendar Journal?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We believe journaling should be simple, beautiful, and personal. 
              That's why we created Calendar Journal - to give you a clear, 
              focused space for your thoughts.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center animate-scale-in">
            <Card className="bg-card shadow-strong hover:shadow-glow transition-all duration-500 p-4 rounded-3xl overflow-hidden max-w-md">
              <img 
                src="/lovable-uploads/9723fb89-fd98-43f5-b593-32c9f36078c2.png" 
                alt="Simple writing interface" 
                className="w-full h-auto rounded-2xl"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};