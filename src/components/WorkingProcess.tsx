
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Circle, Square, Triangle, Hexagon, Star, Diamond } from "lucide-react";
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

      {/* Reduced floating shapes across the component */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Circle className="w-6 h-6 text-[#38B6FF] fill-[#38B6FF]/20" />
      </div>
      
      <div className="absolute top-1/3 left-8 animate-bounce" style={{ animationDelay: '2s' }}>
        <Triangle className="w-7 h-7 text-[#38B6FF] fill-[#38B6FF]/30" />
      </div>
      
      <div className="absolute top-1/2 right-12 animate-pulse" style={{ animationDelay: '0.8s' }}>
        <Hexagon className="w-6 h-6 text-white fill-white/20" />
      </div>
      
      <div className="absolute bottom-1/3 left-16 animate-bounce" style={{ animationDelay: '1.2s' }}>
        <Star className="w-5 h-5 text-[#38B6FF] fill-[#38B6FF]/25" />
      </div>

      {/* Reduced floating dots */}
      <div className="absolute top-24 left-1/4 w-3 h-3 bg-[#38B6FF] rounded-full animate-ping" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#38B6FF]/40 rounded-full animate-pulse" style={{ animationDelay: '2.8s' }}></div>

      {/* Reduced decorative lines */}
      <div className="absolute top-1/4 left-0 w-20 h-px bg-gradient-to-r from-transparent to-[#38B6FF] animate-pulse" style={{ animationDelay: '1.7s' }}></div>
      <div className="absolute bottom-1/3 left-0 w-12 h-px bg-gradient-to-r from-transparent via-[#38B6FF] to-transparent animate-pulse" style={{ animationDelay: '2.1s' }}></div>

      {/* Reduced floating rings */}
      <div className="absolute bottom-24 left-1/4 w-12 h-12 border border-white/15 rounded-full animate-ping" style={{ animationDelay: '1.4s' }}></div>

      {/* Reduced gradient orbs */}
      <div className="absolute bottom-1/4 left-1/5 w-20 h-20 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.6s' }}></div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center mb-16 relative">
          <div className="mb-2">
            <div className="h-1 w-16 bg-[#38B6FF] mx-auto"></div>
          </div>
          
          {/* Clean title without floating elements */}
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              <span className="text-white">YOUR FUTURE </span>
              <span className="text-[#38B6FF]">NABSTERPLAN.</span>
            </h2>
          </div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We'll take care of you, so you can take care of your business.
          </p>
        </div>

        {/* Process Steps with reduced floating elements */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-0 space-y-12 md:space-y-0 md:space-x-4 lg:space-x-8 relative">
          
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center w-full md:w-1/3 relative">
              {/* Minimal floating elements around each step */}
              {index === 1 && (
                <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-[#38B6FF]/40 rounded-full animate-ping" style={{ animationDelay: '1.6s' }}></div>
              )}
              
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

        {/* Clean CTA Button without floating elements */}
        <div className="text-center mt-16 relative">
          <Button className="bg-[#38B6FF] hover:bg-white hover:text-black text-white px-8 py-3 rounded-md text-lg font-medium" style={{marginTop:"6em"}}>
            START MY MARKETING PLAN
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
