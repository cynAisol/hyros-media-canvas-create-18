
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
    "Analytics & Performance Tracking"
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-[#38B6FF] text-white border-0">
            Why Choose Us
          </Badge>
          
          {/* Prominent CTA Button */}
          <div className="mb-12">
            <Button className="bg-[#38B6FF] hover:bg-[#2a9ee6] text-white px-12 py-8 text-2xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              GET YOUR FREE PREVIEW
            </Button>
            <p className="text-sm text-foreground mt-4 opacity-80">
              No commitment required
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                What You Get With Us
              </h3>
              {allFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#38B6FF] flex-shrink-0" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Right Column - Human Face Image */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-[#38B6FF]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional consultant"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating elements around the image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#38B6FF] rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full opacity-60 animate-bounce"></div>
                
                {/* Achievement badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-card p-4 rounded-xl shadow-lg border border-border">
                  <div className="text-center">
                    <div className="font-bold text-[#38B6FF] text-lg">98%</div>
                    <div className="text-foreground text-sm">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Emojis */}
        <FloatingEmoji count={5} />
        <FloatingEmoji count={3} />
      </div>
    </section>
  );
};

export default WhyUs;
