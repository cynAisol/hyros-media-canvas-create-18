
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

            {/* Right Column - Simple Human Face Image */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-[#38B6FF]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional consultant"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
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
