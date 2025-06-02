
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ReviewCard = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-[#38B6FF]/20 hover:shadow-xl transition-all duration-300 max-w-sm backdrop-blur-sm">
      {/* Header with Avatar and Stars */}
      <div className="flex items-start gap-3 mb-4">
        <Avatar className="w-12 h-12 flex-shrink-0">
          <AvatarImage 
            src="/img/man-face.png" 
            alt="Customer"
            className="object-cover rounded-full"
          />
          <AvatarFallback className="bg-[#38B6FF] text-white font-semibold">
            JM
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-grow">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                className="w-4 h-4 fill-[#FFD700] text-[#FFD700]"
              />
            ))}
            <span className="text-[#38B6FF] font-bold text-sm ml-1">5/5</span>
          </div>
        </div>
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-200 leading-relaxed italic text-sm">
        "We hired Hachi Agency to build our barber shop website, and the results were beyond what we expected. From the design to the user experience, everything looks stunning, modern, and easy to use. Bookings from website drastically increase as well."
      </blockquote>
    </div>
  );
};

export default ReviewCard;
