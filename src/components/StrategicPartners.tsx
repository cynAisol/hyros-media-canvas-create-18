import { Badge } from "@/components/ui/badge";
import ReviewCard from "./ReviewCard";

const StrategicPartners = () => {
	const partners = [
		{
			name: "Spotify",
			logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
		},
		{
			name: "Airbnb",
			logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
		},
		{
			name: "Notion",
			logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
		},
		{
			name: "Slack",
			logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
		},
		{
			name: "Figma",
			logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
		},
	];

	return (
		<section className="py-12 bg-white relative overflow-hidden">
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-8 flex flex-col items-center relative">
					<Badge className="mb-2 bg-[#38B6FF] text-white border-0">
						Partners
					</Badge>
					<h2 className="text-3xl md:text-4xl font-bold text-black mb-2 flex items-center justify-center gap-2">
						<span className="all-cap">OUR PORTFOLIO</span>
					</h2>
					<div className="text-gray-600 text-lg mb-4">
						Trusted by leading brands worldwide
					</div>
				</div>

				{/* Auto-scrolling Container */}
				<div className="relative">
					<div className="overflow-hidden">
						<div className="flex gap-6 animate-scroll">
							{/* Triple the partners for seamless loop */}
							{[...partners, ...partners, ...partners].map((partner, index) => (
								<div
									key={index}
									className="flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200 min-h-[80px] min-w-[150px] p-4 hover:shadow-md transition-shadow duration-300 flex-shrink-0"
								>
									<img
										src={partner.logo}
										alt={partner.name}
										className="max-h-12 max-w-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
										onError={(e) => {
											e.currentTarget.src = `https://via.placeholder.com/150x60/6b7280/ffffff?text=${partner.name}`;
										}}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex justify-center mt-12">
					<div className="bg-card rounded-xl shadow-lg p-6 max-w-lg text-left border border-border hover:shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
						{/* Animated background */}
						<div className="absolute inset-0 bg-gradient-to-r from-[#38B6FF]/5 to-white/5"></div>
						<div className="relative z-10">
              <div className="text-[#38B6FF] font-bold mb-2 flex items-center gap-2">
                <span>🚀</span>
                <span>Partner Spotlight</span>
              </div>
              <div className="text-foreground">
                We collaborate with industry leaders to deliver outstanding results. Discover how our expertise can elevate your brand to new heights.
              </div>
						</div>
					</div>
				</div>
				{/* Review Card - Replacing the old testimonial card */}
				{/* <div className="mt-10 flex justify-center">
          <div className="max-w-md">
            <ReviewCard />
          </div>
        </div> */}
			</div>
		</section>
	);
};

export default StrategicPartners;
