import { Card } from "@/components/ui/card";

const screenshots = [
  {
    src: "/lovable-uploads/38028cd2-6860-490e-8f10-39f832401149.png",
    alt: "Calendar overview with mood tracking"
  },
  {
    src: "/lovable-uploads/9723fb89-fd98-43f5-b593-32c9f36078c2.png",
    alt: "Simple writing interface"
  },
  {
    src: "/lovable-uploads/0fa42f9d-f53f-48f1-8192-b61d6bfde3f9.png",
    alt: "Voice memo recording"
  },
  {
    src: "/lovable-uploads/9b0b7c3e-3593-4fb8-bf5c-2f02f95e8e34.png",
    alt: "Calendar view with statistics"
  }
];

export const Screenshots = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the beautiful, intuitive design that makes journaling a joy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <Card key={index} className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={screenshot.src} 
                  alt={screenshot.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};