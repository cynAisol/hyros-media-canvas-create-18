
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <AnimatedBlob size="large" color="blue" position="top-left" delay={2} />
      <AnimatedBlob size="medium" color="white" position="bottom-right" delay={0} />
      <AnimatedBlob size="small" color="blue" position="center" delay={4} />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <div className="mb-2">
            <div className="h-1 w-16 bg-red-600 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">YOUR FUTURE </span>
            <span className="text-red-600">NABSTERPLAN.</span>
          </h2>
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
                <span className="text-red-600">{step.step}. </span>
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
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-medium" style={{marginTop:"6em"}}>
            START MY MARKETING PLAN
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
