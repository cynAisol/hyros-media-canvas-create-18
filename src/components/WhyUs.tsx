
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
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
    "Cross-Browser Compatibility"
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

            {/* Right Column - Enhanced Human Face Image */}
            <div className="flex justify-center items-center">
              <div className="relative">
                {/* Main Image Container */}
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-[#38B6FF] relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional consultant"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38B6FF]/20 to-transparent"></div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#38B6FF] rounded-full opacity-80 animate-pulse flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#38B6FF] font-bold text-lg">✓</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white rounded-full opacity-90 animate-bounce shadow-lg flex items-center justify-center">
                  <span className="text-[#38B6FF] font-bold text-xl">🚀</span>
                </div>
                
                <div className="absolute top-4 -left-6 w-14 h-14 bg-white/90 rounded-lg shadow-lg flex items-center justify-center animate-pulse">
                  <span className="text-[#38B6FF] font-bold text-lg">⭐</span>
                </div>
                
                {/* Achievement badges */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-card p-4 rounded-xl shadow-lg border border-border">
                  <div className="text-center">
                    <div className="font-bold text-[#38B6FF] text-lg">98%</div>
                    <div className="text-foreground text-sm">Client Satisfaction</div>
                  </div>
                </div>
                
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#38B6FF] p-3 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="font-bold text-white text-sm">5+ Years</div>
                    <div className="text-white text-xs">Experience</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-3 rounded-lg shadow-lg border border-[#38B6FF]">
                  <div className="text-center">
                    <div className="font-bold text-[#38B6FF] text-sm">50+</div>
                    <div className="text-foreground text-xs">Projects</div>
                  </div>
                </div>
                
                {/* Floating rings */}
                <div className="absolute top-8 right-8 w-24 h-24 border-4 border-[#38B6FF]/30 rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-12 left-4 w-16 h-16 border-2 border-white/50 rounded-full animate-pulse"></div>
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
