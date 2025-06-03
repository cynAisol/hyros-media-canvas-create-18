
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Zap, 
  Shield, 
  Award,
  Users,
  Clock
} from "lucide-react";
import FloatingEmoji from "./FloatingEmoji";

const WhyUs = () => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-8 h-8" />,
              title: "Results-Driven Approach",
              description: "Every project is designed with your business goals in mind, ensuring measurable ROI and growth."
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Lightning Fast Delivery",
              description: "We deliver high-quality websites faster than traditional agencies without compromising on quality."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "100% Satisfaction Guarantee",
              description: "We're not happy until you're thrilled with your new website. Your success is our success."
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Award-Winning Design",
              description: "Our team has won multiple design awards and recognition for creating stunning, user-friendly websites."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Dedicated Support Team",
              description: "24/7 support and maintenance to ensure your website runs smoothly and stays updated."
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "On-Time Delivery",
              description: "We respect deadlines and deliver projects on time, every time. No delays, no excuses."
            }
          ].map((item, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#38B6FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#38B6FF] rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Emojis */}
        <FloatingEmoji count={5} />
        <FloatingEmoji count={3} />
      </div>
    </section>
  );
};

export default WhyUs;
