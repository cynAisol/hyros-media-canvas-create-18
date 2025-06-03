
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

      {/* Distributed floating shapes across the component */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Circle className="w-6 h-6 text-[#38B6FF] fill-[#38B6FF]/20" />
      </div>
      
      <div className="absolute top-20 right-16 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <Square className="w-5 h-5 text-white fill-white/25" />
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
      
      <div className="absolute bottom-20 right-20 animate-pulse" style={{ animationDelay: '2.3s' }}>
        <Diamond className="w-4 h-4 text-white fill-white/30" />
      </div>

      {/* Floating dots scattered around */}
      <div className="absolute top-24 left-1/4 w-3 h-3 bg-[#38B6FF] rounded-full animate-ping" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#38B6FF]/40 rounded-full animate-pulse" style={{ animationDelay: '2.8s' }}></div>
      <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '1.1s' }}></div>

      {/* Decorative lines across the component */}
      <div className="absolute top-1/4 left-0 w-20 h-px bg-gradient-to-r from-transparent to-[#38B6FF] animate-pulse" style={{ animationDelay: '1.7s' }}></div>
      <div className="absolute top-1/2 right-0 w-16 h-px bg-gradient-to-l from-transparent to-white animate-pulse" style={{ animationDelay: '0.9s' }}></div>
      <div className="absolute bottom-1/3 left-0 w-12 h-px bg-gradient-to-r from-transparent via-[#38B6FF] to-transparent animate-pulse" style={{ animationDelay: '2.1s' }}></div>

      {/* Floating rings distributed */}
      <div className="absolute top-16 left-1/2 w-16 h-16 border-2 border-[#38B6FF]/20 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
      <div className="absolute bottom-24 left-1/4 w-12 h-12 border border-white/15 rounded-full animate-ping" style={{ animationDelay: '1.4s' }}></div>
      <div className="absolute top-2/3 right-1/5 w-8 h-8 border-2 border-[#38B6FF]/25 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>

      {/* Additional gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-[#38B6FF]/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-1/4 left-1/5 w-20 h-20 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.6s' }}></div>

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

        {/* Process Steps with floating elements around them */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-0 space-y-12 md:space-y-0 md:space-x-4 lg:space-x-8 relative">
          {/* Floating elements around process steps */}
          <div className="absolute -top-8 left-1/4 animate-bounce" style={{ animationDelay: '1.3s' }}>
            <Circle className="w-4 h-4 text-[#38B6FF] fill-[#38B6FF]/30" />
          </div>
          <div className="absolute -bottom-6 right-1/4 animate-pulse" style={{ animationDelay: '2.7s' }}>
            <Square className="w-3 h-3 text-white fill-white/40" />
          </div>
          
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center w-full md:w-1/3 relative">
              {/* Floating elements around each step */}
              {index === 0 && (
                <>
                  <div className="absolute -top-4 -left-6 animate-pulse" style={{ animationDelay: '0.7s' }}>
                    <Triangle className="w-5 h-5 text-[#38B6FF] fill-[#38B6FF]/25" />
                  </div>
                  <div className="absolute -bottom-8 right-2 w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1.9s' }}></div>
                </>
              )}
              {index === 1 && (
                <>
                  <div className="absolute -top-6 left-1/2 animate-bounce" style={{ animationDelay: '2.4s' }}>
                    <Hexagon className="w-4 h-4 text-white fill-white/30" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-[#38B6FF]/40 rounded-full animate-ping" style={{ animationDelay: '1.6s' }}></div>
                </>
              )}
              {index === 2 && (
                <>
                  <div className="absolute -top-4 -right-6 animate-pulse" style={{ animationDelay: '0.4s' }}>
                    <Star className="w-5 h-5 text-[#38B6FF] fill-[#38B6FF]/35" />
                  </div>
                  <div className="absolute -bottom-6 left-2 w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '2.2s' }}></div>
                </>
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

        {/* CTA Button with floating elements */}
        <div className="text-center mt-16 relative">
          {/* Floating elements around CTA */}
          <div className="absolute -top-12 left-1/3 animate-bounce" style={{ animationDelay: '1.1s' }}>
            <Circle className="w-6 h-6 text-[#38B6FF] fill-[#38B6FF]/20" />
          </div>
          <div className="absolute -bottom-8 right-1/3 animate-pulse" style={{ animationDelay: '2.6s' }}>
            <Diamond className="w-5 h-5 text-white fill-white/25" />
          </div>
          <div className="absolute top-4 -left-8 w-3 h-3 bg-[#38B6FF]/50 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute top-4 -right-8 w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '1.7s' }}></div>
          
          <Button className="bg-[#38B6FF] hover:bg-white hover:text-black text-white px-8 py-3 rounded-md text-lg font-medium" style={{marginTop:"6em"}}>
            START MY MARKETING PLAN
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
