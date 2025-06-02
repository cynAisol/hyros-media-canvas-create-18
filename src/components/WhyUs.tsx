
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const WhyUs = () => {
  const benefits = [
    "UX/UI that keeps users engaged",
    "Custom Design",
    "Speed Optimized",
    "Mobile Optimized",
    "Conversion Optimized",
    "Unlimited Revisions",
    "Fast Delivery",
    "24/7 Support"
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Human Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />
      
      {/* Blurred Blob Background */}
      <svg
        className="absolute -top-32 -left-32 w-[500px] h-[500px] z-0 blur-3xl opacity-20 pointer-events-none select-none"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="250" cy="250" rx="220" ry="180" fill="#38B6FF" />
        <ellipse cx="350" cy="180" rx="120" ry="90" fill="#ffffff" fillOpacity="0.6" />
      </svg>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center relative">
          <span className="absolute -left-8 top-2 text-3xl">💡</span>
          <Badge className="mb-4 bg-[#38B6FF] text-white border-0">Why Choose Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
            <span>WHY CHOOSE US</span>
            <span className="text-3xl">🌟</span>
          </h2>
          <div className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">Your partner for speed, security, and innovation in digital transformation</div>
          
          {/* How We Work Process Row */}
          <div className="flex justify-center gap-10 mb-10">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-[#38B6FF]/20 border border-[#38B6FF] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">🔍</span>
              </div>
              <span className="text-sm text-muted-foreground font-medium">Discover</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/20 border border-white rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">🎨</span>
              </div>
              <span className="text-sm text-muted-foreground font-medium">Design</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-[#38B6FF]/20 border border-[#38B6FF] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">💻</span>
              </div>
              <span className="text-sm text-muted-foreground font-medium">Develop</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/20 border border-white rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {/* <span className="text-2xl">🚀</span> */}
              </div>
              <span className="text-sm text-muted-foreground font-medium">Deliver</span>
            </div>
          </div>
          {/* <span className="absolute -right-8 top-2 text-3xl">🦄</span> */}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#38B6FF]/10 to-[#38B6FF]/20 rounded-2xl p-8 shadow-lg border border-[#38B6FF]/30 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={`benefit-${benefit.replace(/\s+/g, '-').toLowerCase()}-${index}`} className="flex items-start gap-3 group">
                <div className="w-6 h-6 bg-[#38B6FF] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-foreground text-lg font-medium group-hover:text-[#38B6FF] transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button className="bg-[#38B6FF] hover:bg-[#38B6FF]/80 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              GET YOUR FREE PREVIEW
            </Button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default WhyUs;
