
import React from 'react';
import Hero from "@/components/Hero";
import StrategicPartners from "@/components/StrategicPartners";
import WorkingProcess from "@/components/WorkingProcess";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { ModeToggle } from "@/components/ModeToggle";

const Index = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">
            Logo
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
            <ModeToggle />
          </nav>
          <div className="md:hidden">
            {/* Mobile Menu Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 cursor-pointer">
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative overflow-hidden">
        <Hero />
      </section>

      {/* Strategic Partners Section */}
      <StrategicPartners />

      {/* Working Process Section */}
      <WorkingProcess />

      {/* Why Us Section */}
      <WhyUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-8">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: "Services", url: "#services" },
              { title: "About", url: "#about" },
              { title: "Contact", url: "#contact" },
              { title: "Privacy", url: "#privacy" }
            ].map((link, index) => (
              <div key={index}>
                <h4 className="font-semibold text-foreground mb-4">{link.title}</h4>
                <ul className="space-y-2">
                  <li><a href={link.url} className="text-muted-foreground hover:text-primary transition-colors">Link 1</a></li>
                  <li><a href={link.url} className="text-muted-foreground hover:text-primary transition-colors">Link 2</a></li>
                  <li><a href={link.url} className="text-muted-foreground hover:text-primary transition-colors">Link 3</a></li>
                </ul>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
