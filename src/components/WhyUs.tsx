
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle,
  ArrowRight
} from "lucide-react";
import FloatingEmoji from "./FloatingEmoji";

const WhyUs = () => {
  const leftFeatures = [
    "Results-Driven Approach",
    "Lightning Fast Delivery", 
    "100% Satisfaction Guarantee"
  ];

  const rightFeatures = [
    "Award-Winning Design",
    "Dedicated Support Team",
    "On-Time Delivery"
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
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              {leftFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-6 h-6 bg-[#38B6FF] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-medium text-foreground group-hover:text-[#38B6FF] transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Center CTA */}
            <div className="text-center">
              <Button className="bg-[#38B6FF] hover:bg-white hover:text-black text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                GET YOUR FREE PREVIEW
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {rightFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-6 h-6 bg-[#38B6FF] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-medium text-foreground group-hover:text-[#38B6FF] transition-colors duration-300">
                    {feature}
                  </span>
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
