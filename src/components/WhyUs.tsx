
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Square, Triangle, Hexagon } from "lucide-react";
import FloatingEmoji from "./FloatingEmoji";

const WhyUs = () => {
  const allFeatures = [
    "Stunning, Custom Website Design",
    "Mobile-First, Responsive Layout",
    "Lightning-Fast Loading Speed",
    "SEO Optimized for Search Engines",
    "User-Friendly Content Management",
    "24/7 Customer Support",
    "100% Satisfaction Guarantee",
    "Free SSL Certificate & Security",
    "Social Media Integration",
    "Analytics & Performance Tracking",
    "Professional Branding & Logo",
    "Cross-Browser Compatibility",
    "E-commerce Integration",
    "Cloud Hosting & Backup"
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-[#38B6FF] text-white border-0">
            Why Choose Us
          </Badge>
          
          {/* Title and Subheader */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            WHY BUSINESSES TRUST US
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-12">
            We deliver exceptional results through our proven expertise and dedication to your success
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Features in 2 columns */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                What You Get With Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#38B6FF] flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image with Geometric Shapes */}
            <div className="flex justify-center items-center">
              <div className="relative">
                {/* Main Image */}
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-[#38B6FF] relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional consultant"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating Geometric Shapes */}
                <div className="absolute -top-8 -right-8 animate-bounce">
                  <Circle className="w-12 h-12 text-[#38B6FF] fill-[#38B6FF]/20" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 animate-pulse">
                  <Square className="w-10 h-10 text-[#38B6FF] fill-[#38B6FF]/30" />
                </div>
                
                <div className="absolute top-4 -left-8 animate-bounce" style={{ animationDelay: '1s' }}>
                  <Triangle className="w-8 h-8 text-[#38B6FF] fill-[#38B6FF]/25" />
                </div>
                
                <div className="absolute -top-4 left-1/3 animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <Hexagon className="w-6 h-6 text-[#38B6FF] fill-[#38B6FF]/20" />
                </div>
                
                <div className="absolute bottom-8 -right-4 animate-bounce" style={{ animationDelay: '1.5s' }}>
                  <div className="w-4 h-4 bg-[#38B6FF]/40 rounded-full"></div>
                </div>
                
                <div className="absolute top-1/2 -right-10 animate-pulse" style={{ animationDelay: '2s' }}>
                  <div className="w-6 h-6 bg-[#38B6FF]/30 transform rotate-45"></div>
                </div>
                
                <div className="absolute -bottom-8 left-1/3 animate-bounce" style={{ animationDelay: '0.8s' }}>
                  <div className="w-3 h-8 bg-[#38B6FF]/35 rounded-full"></div>
                </div>
                
                {/* Floating rings */}
                <div className="absolute top-12 right-12 w-16 h-16 border-2 border-[#38B6FF]/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-16 left-8 w-12 h-12 border-2 border-[#38B6FF]/20 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button at Bottom */}
        <div className="text-center mt-16">
          <Button className="bg-[#38B6FF] hover:bg-[#2a9ee6] text-white px-12 py-8 text-2xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            GET YOUR FREE PREVIEW
          </Button>
          <p className="text-sm text-foreground mt-4 opacity-80">
            No commitment required
          </p>
        </div>

        {/* Floating Emojis */}
        <FloatingEmoji count={5} />
        <FloatingEmoji count={3} />
      </div>
    </section>
  );
};

export default WhyUs;
