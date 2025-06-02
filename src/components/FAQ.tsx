import { Badge } from "@/components/ui/badge";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedBlob from "@/components/AnimatedBlob";
import FloatingElements from "./FloatingElements";

const FAQ = () => {
	// Example FAQ data array for your website agency portfolio section
	const faqs = [
		{
			question: "How long does it take to build a website?",
			answer:
				"Most websites are completed within 4 to 14 days, the timeline depends on the complexity of your project.",
		},
		{
			question: "How much does a website cost?",
			answer:
				"Our pricing depends on the size and complexity of your site. Provide us on what you need and your budget then we will provide your free preview, exactly what we will do and a clear quote.",
		},
		{
			question: "Can I see what my website will look like before I pay?",
			answer:
				"Absolutely! We offer a free custom preview so you can see what your website could look like, no commitment needed.",
		},
		{
			question: "Do you help with content and images?",
			answer:
				"Yes, we can assist with writing content, selecting images, and organizing everything in a way that engages your audience and increases conversions.",
		},
		{
			question: "What if I want to make changes later?",
			answer:
				"We include unlimited revisions during the design process to make sure you're 100% satisfied. After launch, we offer ongoing support or can train you to update your site yourself.",
		},
		{
			question: "Do you offer online ordering or booking features?",
			answer:
				"Yes! We specialize in features like online ordering, bookings, and contact forms, especially for restaurants and service-based businesses.",
		},
		{
			question: "What platforms do you build on?",
			answer:
				"We design your website with figma and build on platforms like WordPress, Shopify, Square, Webflow and more. We'll recommend the best platform based on your specific needs and budget.",
		},
	];

	return (
		<section className="py-20 bg-background relative overflow-hidden">
			<FloatingElements />
			{/* Animated Blobs for FAQ */}
			<AnimatedBlob size="large" color="blue" position="top-left" delay={1} />
			<AnimatedBlob
				size="medium"
				color="white"
				position="bottom-right"
				delay={3}
			/>
			<AnimatedBlob size="small" color="white" position="top-right" delay={0} />

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16 flex flex-col items-center relative">
					<span className="absolute -left-8 top-2 text-3xl"></span>
					{/* <Badge className="mb-4 bg-[#38B6FF] text-white">FAQ</Badge> */}
					<h2 className="text-4xl all-cap md:text-5xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
						<span>Frequently Asked Questions</span>
						<span className="text-3xl">🤔</span>
					</h2>
					{/* <p className="text-xl text-foreground max-w-3xl mx-auto mb-4">
            Get answers to the most common questions about our services and process.
          </p> */}
					<span className="absolute -right-8 top-2 text-3xl"></span>
				</div>

				<div className="max-w-4xl mx-auto">
					<Accordion type="single" collapsible className="space-y-4">
						{faqs.map((faq, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className="bg-card rounded-lg px-6 border border-border"
							>
								<AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline hover:text-[#38B6FF]">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>

				{/* FAQ Support Card */}
				<div className="flex justify-center mt-12">
					<div className="bg-card rounded-xl shadow-lg p-6 max-w-lg text-left border border-border">
						<div className="text-[#38B6FF] font-bold mb-2 flex items-center gap-2">
							<span>🔍</span>
							<span>Still have questions?</span>
						</div>
						<div className="text-foreground">
							Don't hesitate to reach out! Our team is here to help you
							understand exactly how we can bring your vision to life.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
