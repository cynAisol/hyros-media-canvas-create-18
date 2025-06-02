
import React from 'react';
import { Button } from "@/components/ui/button";
import AnimatedBlob from "@/components/AnimatedBlob";

const Hero = () => {
  return (
    <div className="container mx-auto text-center relative">
      {/* Background elements */}
      <AnimatedBlob size="large" color="blue" position="top-left" delay={0} />
      <AnimatedBlob size="medium" color="white" position="bottom-right" delay={2} />
      
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Welcome to Our <span className="text-primary">Amazing</span> Platform
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We create exceptional digital experiences that drive results and help your business grow.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Get Started Today
        </Button>
      </div>
    </div>
  );
};

export default Hero;
