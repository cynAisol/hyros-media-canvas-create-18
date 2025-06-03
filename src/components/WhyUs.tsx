
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import FloatingEmoji from "./FloatingEmoji";

const WhyUs = () => {
  const leftFeatures = [
    "Stunning, Custom Website Design",
    "Mobile-First, Responsive Layout",
    "Lightning-Fast Loading Speed",
    "SEO Optimized for Search Engines",
    "User-Friendly Content Management"
  ];

  const rightFeatures = [
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Businesses Trust Us
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            We deliver exceptional results through our proven expertise and dedication to your success
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              {leftFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#38B6FF] flex-shrink-0" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Center Column - CTA Button */}
            <div className="flex justify-center items-center">
              <div className="text-center">
                <Button className="bg-[#38B6FF] hover:bg-[#2a9ee6] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  GET YOUR FREE PREVIEW
                </Button>
                <p className="text-sm text-foreground mt-4 opacity-80">
                  No commitment required
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {rightFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#38B6FF] flex-shrink-0" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              ))}
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
