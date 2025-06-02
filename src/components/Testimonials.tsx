
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "I had no idea where to start with a website, but they provided me an amazing free preview and updated me on every step. The end result was even better than I pictured, and the process was smooth from day one.",
      author: "Sarah M.",
      company: "Marketing Manager at B Corp USA",
      avatar: ""
    },
    {
      id: 2,
      rating: 5,
      text: "Most agencies push their own style, but this team really listened to our vision. The site feels like us just better.",
      author: "Kevin W",
      company: "CEO at Tech Solutions",
      avatar: ""
    },
    {
      id: 3,
      rating: 5,
      text: "The team nailed the look and feel of our brand right from the start. The site looks beautiful, loads fast, and works perfectly on mobile. We've had so many compliments from our customers already!",
      author: "Amanda T.",
      company: "Founder at Creative Studio",
      avatar: ""
    },
    {
      id: 4,
      rating: 5,
      text: "After launching the new site, our online orders and inquiries doubled. They didn't just build a website they created a real growth tool for our business.",
      author: "Jason M.",
      company: "Owner at Local Business",
      avatar: ""
    },
    {
      id: 5,
      rating: 5,
      text: "They delivered our full website faster than we expected, and the process was smooth from start to finish. We felt like we were in great hands the entire time.",
      author: "Sarah L.",
      company: "Director at Marketing Firm",
      avatar: ""
    },
    {
      id: 6,
      rating: 5,
      text: "What I found most impressive was their ability to execute and explain why they made the decisions they did. They were clearly experts, our bounce rate dropped and conversions went up.",
      author: "Jory B.",
      company: "Manager at Digital Agency",
      avatar: ""
    },
    {
      id: 7,
      rating: 5,
      text: "We've built a strong local reputation — but online, we were invisible. Now our website reflects the quality we deliver, and our bookings have gone up.",
      author: "Mark G",
      company: "Owner at Service Company",
      avatar: ""
    },
    {
      id: 8,
      rating: 5,
      text: "We've already seen at least a 44% increase in lead generation within the first 2-3 weeks since the redesign. They did a fantastic job on the website and took the time to understand our market and industry.",
      author: "Ryan P",
      company: "CEO at Growth Company",
      avatar: ""
    },
  ];

  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-[#38B6FF] text-[#38B6FF]' : 'text-white/30'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            TRUSTED BY <span style={{ color: '#38B6FF' }}>PROFESSIONALS</span>
          </h2>
          <p className="text-lg text-white/80 max-w-4xl mx-auto">
            While most of my client reviews are NDA-protected (because, you know, top-secret agency white label stuff), 
            I managed to sneak in a few favorites from my previous partners.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          <div className="flex animate-scroll space-x-6" style={{ animationDuration: '40s' }}>
            {allTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`} 
                className="flex-shrink-0 w-96 bg-white rounded-xl p-6 shadow-lg border border-white/10"
              >
                {/* Header with Avatar and Info */}
                <div className="flex items-center mb-4">
                  <Avatar className="mr-3 w-12 h-12">
                    <AvatarImage 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="object-cover"
                    />
                    <AvatarFallback style={{ backgroundColor: '#38B6FF' }} className="text-white font-semibold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <div className="font-semibold text-black text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-black/60 text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-black/70 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
