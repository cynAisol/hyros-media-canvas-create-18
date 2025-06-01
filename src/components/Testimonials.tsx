
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "I had no idea where to start with a website, but they provided me an amazing free preview and updated me on every step. The end result was even better than I pictured, and the process was smooth from day one.",
      author: "Warman, SK",
      location: "Salt Lake City, UT",
      avatar: ""
    },
    {
      id: 2,
      rating: 5,
      text: "Most agencies push their own style, but this team really listened to our vision. The site feels like us just better.",
      author: "Kevin W",
      location: "Saskatoon, SK",
      avatar: ""
    },
    {
      id: 3,
      rating: 5,
      text: "The team nailed the look and feel of our brand right from the start. The site looks beautiful, loads fast, and works perfectly on mobile. We've had so many compliments from our customers already!",
      author: "Amanda T.",
      location: "Toronto, ON",
      avatar: ""
    },
    {
      id: 4,
      rating: 5,
      text: "After launching the new site, our online orders and inquiries doubled. They didn’t just build a website they created a real growth tool for our business.Jason M.",
      author: "Jason M.",
      location: "Vancouver, BC",
      avatar: ""
    },
    {
      id: 5,
      rating: 5,
      text: "They delivered our full website faster than we expected, and the process was smooth from start to finish. We felt like we were in great hands the entire time.",
      author: "Sarah L.",
      location: "Calgary, AB",
      avatar: ""
    },
    {
      id: 6,
      rating: 5,
      text: "What I found most impressive was their ability to execute and explain why they made the decisions they did. They were clearly experts, our bounce rate dropped and conversions went up. These guys know what ",
      author: "Jory B.",
      location: "Prince Albert, SK",
      avatar: ""
    },
    {
      id: 7,
      rating: 5,
      text: "We’ve built a strong local reputation — but online, we were invisible. Now our website reflects the quality we deliver, and our bookings have gone up.",
      author: "Mark G",
      location: "Montreal, QC",
      avatar: ""
    },
    {
      id: 8,
      rating: 5,
      text: "We’ve already seen at least a 44% increase in lead generation within the first 2-3 weeks since the redesign. They did a fantastic job on the website and took the time to understand our market and industry.",
      author: "Ryan P",
      location: "Regina, SK",
      avatar: ""
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-[#38B6FF] text-[#38B6FF]' : 'text-black'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Trusted by Professionals
          </h2>
          <p className="text-lg text-black max-w-4xl mx-auto">
            While most of my client reviews are NDA-protected (because, you know, top-secret agency white label stuff), 
            I managed to sneak in a few favorites from my previous partners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-black rounded-xl p-6 shadow-sm border border-black hover:shadow-md transition-shadow">
              {/* Stars */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-white font-semibold mb-3 text-sm leading-relaxed"style={{minHeight:"9.8em"}}>
                {testimonial.text}
              </p>
              
              {/* <p className="text-white text-sm mb-6 leading-relaxed">
                {testimonial.additionalText}
              </p> */}

              {/* Author with Avatar Component */}
              <div className="flex items-center">
                <Avatar className="mr-3 w-10 h-10">
                  <AvatarImage 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-[#38B6FF] text-white font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <div className="font-semibold text-white text-sm truncate">
                    {testimonial.author}
                  </div>
                  <div className="text-white text-xs truncate">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
