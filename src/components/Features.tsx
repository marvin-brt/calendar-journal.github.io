import { Card } from "@/components/ui/card";
import { Calendar, Mic, Smile, Search, Palette, Shield } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Calendar View",
    description: "Beautiful monthly overview of your thoughts and memories",
    image: "/lovable-uploads/9b0b7c3e-3593-4fb8-bf5c-2f02f95e8e34.png"
  },
  {
    icon: Mic,
    title: "Voice Memos",
    description: "Record your thoughts when writing isn't convenient",
    image: "/lovable-uploads/0fa42f9d-f53f-48f1-8192-b61d6bfde3f9.png"
  },
  {
    icon: Smile,
    title: "Mood Tracking with Emojis",
    description: "Express your feelings with simple, intuitive emojis",
    image: "/lovable-uploads/38028cd2-6860-490e-8f10-39f832401149.png"
  },
  {
    icon: Search,
    title: "Search Functionality",
    description: "Find any memory or thought instantly",
    image: "/lovable-uploads/9b0b7c3e-3593-4fb8-bf5c-2f02f95e8e34.png"
  },
  {
    icon: Palette,
    title: "Light/Dark Themes",
    description: "Choose the perfect look for any time of day",
    image: "/lovable-uploads/9723fb89-fd98-43f5-b593-32c9f36078c2.png"
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your thoughts stay private and secure",
    image: "/lovable-uploads/38028cd2-6860-490e-8f10-39f832401149.png"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything you need to journal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple features that make journaling a joy, not a chore
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 group border-border/50 hover:border-primary/20 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};