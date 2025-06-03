
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Circle, Square, Triangle, Hexagon } from "lucide-react";
import AnimatedBlob from "@/components/AnimatedBlob";

const WorkingProcess = () => {
  const processSteps = [
    {
      title: "PLANNING",
      description: "Your Custom Strategy",
      iconSrc: "/img/ourPro1.png",
      step: 1
    },
    {
      title: "DEVELOPMENT",
      description: "Build Your Foundation",
      iconSrc: "/img/ourPro2.png",
      step: 2
    },
    {
      title: "LAUNCHING",
      description: "Take You To Orbit",
      iconSrc: "/img/ourPro3.png",
      step: 3
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background text-white relative overflow-hidden">
      {/* Background elements */}
      <AnimatedBlob size="large" color="blue" position="top-left" delay={2} />
      <AnimatedBlob size="medium" color="white" position="bottom-right" delay={0} />
      <AnimatedBlob size="small" color="blue" position="center" delay={4} />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center mb-16 relative">
          <div className="mb-2">
            <div className="h-1 w-16 bg-[#38B6FF] mx-auto"></div>
          </div>
          
          {/* Enhanced title with floating elements */}
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              <span className="text-white">YOUR FUTURE </span>
              <span className="text-[#38B6FF]">NABSTERPLAN.</span>
            </h2>
            
            {/* Floating geometric shapes around the title */}
            <div className="absolute -top-6 -left-8 animate-bounce">
              <Circle className="w-8 h-8 text-[#38B6FF] fill-[#38B6FF]/20" />
            </div>
            
            <div className="absolute -top-4 -right-6 animate-pulse" style={{ animationDelay: '1s' }}>
              <Square className="w-6 h-6 text-white fill-white/30" />
            </div>
            
            <div className="absolute -bottom-2 -left-6 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Triangle className="w-7 h-7 text-[#38B6FF] fill-[#38B6FF]/25" />
            </div>
            
            <div className="absolute -bottom-4 -right-8 animate-pulse" style={{ animationDelay: '1.5s' }}>
              <Hexagon className="w-5 h-5 text-white fill-white/20" />
            </div>
            
            {/* Additional floating dots */}
            <div className="absolute top-2 left-1/4 w-3 h-3 bg-[#38B6FF] rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1 right-1/4 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
            
            {/* Decorative lines */}
            <div className="absolute top-1/2 -left-12 w-8 h-px bg-gradient-to-r from-transparent to-[#38B6FF] animate-pulse" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute top-1/2 -right-12 w-8 h-px bg-gradient-to-l from-transparent to-white animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            
            {/* Floating rings */}
            <div className="absolute -top-8 left-1/3 w-12 h-12 border-2 border-[#38B6FF]/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
            <div className="absolute -bottom-6 right-1/3 w-8 h-8 border border-white/20 rounded-full animate-ping"></div>
            
            {/* Additional decorative elements */}
            <div className="absolute top-8 -left-4 w-1 h-6 bg-gradient-to-b from-[#38B6FF] to-transparent animate-pulse" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute bottom-6 -right-4 w-4 h-1 bg-gradient-to-r from-white to-transparent animate-pulse" style={{ animationDelay: '1.8s' }}></div>
          </div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We'll take care of you, so you can take care of your business.
          </p>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-0 space-y-12 md:space-y-0 md:space-x-4 lg:space-x-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center w-full md:w-1/3">
              <div className="mb-6">
                <img 
                  src={step.iconSrc} 
                  alt={`${step.title} icon`} 
                  className="w-20 h-20 md:w-24 md:h-24 object-contain" 
                />
              </div>
              <h3 className="text-xl font-bold mb-1">
                <span className="text-[#38B6FF]">{step.step}. </span>
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Curved Arrow Path */}
        <div className="hidden md:block relative mt-4 mb-16">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <img 
              src="/img/curveArrow.png" 
              alt="Process Flow" 
              className="w-full max-w-4xl mx-auto" 
              style={{marginTop:"3em"}}
            />
          </div>
        </div>

        {/* Spacer for arrow on mobile */}
        <div className="md:hidden h-16"></div>

        {/* CTA Button */}
        <div className="text-center mt-16" >
          <Button className="bg-[#38B6FF] hover:bg-white hover:text-black text-white px-8 py-3 rounded-md text-lg font-medium" style={{marginTop:"6em"}}>
            START MY MARKETING PLAN
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
