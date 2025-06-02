import React from 'react';
import AnimatedBlob from "@/components/AnimatedBlob";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Services", id: "services" },
    { title: "Portfolio", id: "portfolio" },
    { title: "Contact", id: "contact" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background Blobs */}
      <AnimatedBlob />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold" style={{ color: '#38B6FF' }}>
              Hachi
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-[#38B6FF] transition-colors"
                >
                  {item.title}
                </button>
              ))}
              <button className="bg-[#38B6FF] text-white px-6 py-2 rounded-lg hover:bg-[#2a9ae6] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center px-4 relative">
        <AnimatedBlob />
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Build Your Dream
            <span className="block" style={{ color: '#38B6FF' }}>Website</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Professional web development services that bring your vision to life with cutting-edge technology and stunning design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#38B6FF] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2a9ae6] transition-colors">
              Start Your Project
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <AnimatedBlob />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span style={{ color: '#38B6FF' }}>Us</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              We are a team of passionate web developers and designers dedicated to creating exceptional digital experiences. 
              With years of experience in the industry, we combine creativity with technical expertise to deliver websites 
              that not only look stunning but also perform flawlessly.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-16 h-16 bg-[#38B6FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">5+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
                <p className="text-white/70">Delivering quality web solutions</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-16 h-16 bg-[#38B6FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">100+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
                <p className="text-white/70">Successful client partnerships</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-16 h-16 bg-[#38B6FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-white/70">Always here when you need us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span style={{ color: '#38B6FF' }}>Services</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We offer comprehensive web development services to help your business succeed online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#38B6FF]/50 transition-colors">
              <div className="w-16 h-16 bg-[#38B6FF] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
              <p className="text-white/70 leading-relaxed">
                Beautiful, responsive designs that capture your brand's essence and engage your audience
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#38B6FF]/50 transition-colors">
              <div className="w-16 h-16 bg-[#38B6FF] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-white/70 leading-relaxed">
                Fast, secure, and scalable websites built with modern technologies and best practices
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#38B6FF]/50 transition-colors">
              <div className="w-16 h-16 bg-[#38B6FF] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Mobile Optimization</h3>
              <p className="text-white/70 leading-relaxed">
                Ensure your website looks and works perfectly on all devices and screen sizes
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#38B6FF]/50 transition-colors">
              <div className="w-16 h-16 bg-[#38B6FF] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">SEO Optimization</h3>
              <p className="text-white/70 leading-relaxed">
                Improve your search engine rankings and drive more organic traffic to your site
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#38B6FF]/50 transition-colors">
              <div className="w-16 h-16 bg-[#38B6FF] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Maintenance</h3>
              <p className="text-white/70 leading-relaxed">
                Keep your website running smoothly with regular updates, backups, and security monitoring
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#38B6FF]/50 transition-colors">
              <div className="w-16 h-16 bg-[#38B6FF] rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Consulting</h3>
              <p className="text-white/70 leading-relaxed">
                Strategic guidance to help you make the best decisions for your digital presence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative">
        <AnimatedBlob />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span style={{ color: '#38B6FF' }}>Portfolio</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Take a look at some of our recent projects and see the quality of work we deliver
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#38B6FF]/50 transition-all">
                <div className="aspect-video bg-gradient-to-br from-[#38B6FF]/20 to-white/10 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#38B6FF]">0{item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                  <p className="text-white/70 mb-4">A brief description of this amazing project we completed for our client.</p>
                  <button className="text-[#38B6FF] hover:text-white transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-20 relative">
        <AnimatedBlob />
        <div className="relative z-10">
          <FAQ />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Start Your <span style={{ color: '#38B6FF' }}>Project?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Let's discuss your ideas and bring them to life with a stunning website
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#38B6FF] rounded-full flex items-center justify-center">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-white/70">hello@hachi.dev</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#38B6FF] rounded-full flex items-center justify-center">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-white/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#38B6FF] rounded-full flex items-center justify-center">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-white/70">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#38B6FF]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#38B6FF]"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#38B6FF] resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#38B6FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a9ae6] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-bold mb-4 md:mb-0" style={{ color: '#38B6FF' }}>
              Hachi
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-white/70 hover:text-white transition-colors">Privacy</button>
              <button className="text-white/70 hover:text-white transition-colors">Terms</button>
              <button className="text-white/70 hover:text-white transition-colors">Contact</button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50">
            <p>&copy; 2024 Hachi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
