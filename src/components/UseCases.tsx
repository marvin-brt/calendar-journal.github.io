import { Card } from "@/components/ui/card";
import { Heart, TrendingUp, Star, Clock } from "lucide-react";

const useCases = [
  {
    icon: Heart,
    title: "Mindfulness & Well-being",
    description: "Track your mental health journey and practice gratitude daily",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Emotional Tracking",
    description: "Understand your emotional patterns and growth over time",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Star,
    title: "Milestone Memories",
    description: "Capture and cherish life's special moments and achievements",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Clock,
    title: "Busy Professionals",
    description: "Quick voice memos when you're on the go but need to reflect",
    color: "bg-green-100 text-green-600"
  }
];

export const UseCases = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Perfect for every lifestyle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're starting your mindfulness journey or maintaining a long-term practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 group border-border/50 hover:border-primary/20 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className={`w-16 h-16 ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <useCase.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};