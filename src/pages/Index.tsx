
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
	Monitor,
	Smartphone,
	Globe,
	Code,
	Users,
	Award,
	ArrowRight,
	Mail,
	Phone,
	MapPin,
	Sun,
	Moon,
	Rocket,
	Star,
	Zap,
	Search,
	Palette,
	Laptop,
	Play,
	CheckCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import WorkingProcess from "@/components/WorkingProcess";
import StrategicPartners from "@/components/StrategicPartners";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import TypingAnimation from "@/components/TypingAnimation";
import Testimonials from "@/components/Testimonials";
import AnimatedBlob from "@/components/AnimatedBlob";
import FloatingElements from "@/components/FloatingElements";
import ReviewCard from "@/components/ReviewCard";

const Index = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	// Counter animation hook
	const useCountAnimation = (
		end: number,
		duration: number = 2000,
		suffix: string = "",
	) => {
		const [count, setCount] = useState(0);
		const [hasAnimated, setHasAnimated] = useState(false);
		const countRef = useRef<HTMLDivElement>(null);

		useEffect(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting && !hasAnimated) {
							setHasAnimated(true);
							let startTime: number;
							const animate = (currentTime: number) => {
								if (!startTime) startTime = currentTime;
								const progress = Math.min(
									(currentTime - startTime) / duration,
									1,
								);

								// Easing function for smooth animation
								const easeOutQuart = 1 - Math.pow(1 - progress, 4);
								setCount(Math.floor(easeOutQuart * end));

								if (progress < 1) {
									requestAnimationFrame(animate);
								} else {
									setCount(end);
								}
							};
							requestAnimationFrame(animate);
						}
					});
				},
				{ threshold: 0.3 },
			);

			if (countRef.current) {
				observer.observe(countRef.current);
			}

			return () => observer.disconnect();
		}, [end, duration, hasAnimated]);

		return { count, countRef, displayValue: `${count}${suffix}` };
	};

	// Improved scroll trigger animation hook
	useEffect(() => {
		const observerOptions = {
			threshold: 0.2,
			rootMargin: "0px 0px -50px 0px",
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (!entry.target.classList.contains("animated")) {
						entry.target.classList.add("animate-fade-in");
						entry.target.classList.remove("opacity-0");
						entry.target.classList.add("animated");
					}
				}
			});
		}, observerOptions);

		// Observe all elements with scroll-trigger class
		const elements = document.querySelectorAll(".scroll-trigger");
		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Handle form submission here
	};

	const services = [
		{
			icon: <Monitor className="w-8 h-8" />,
			title: "Web Development",
			description:
				"Custom websites built with cutting-edge technologies for optimal performance and user experience.",
		},
		{
			icon: <Smartphone className="w-8 h-8" />,
			title: "Mobile-First Design",
			description:
				"Responsive designs that look perfect on every device, from smartphones to desktops.",
		},
		{
			icon: <Globe className="w-8 h-8" />,
			title: "SEO Optimization",
			description:
				"Boost your online visibility with our comprehensive SEO strategies and technical optimization.",
		},
		{
			icon: <Code className="w-8 h-8" />,
			title: "E-commerce Solutions",
			description:
				"Powerful online stores that drive sales and provide seamless shopping experiences.",
		},
	];

	const portfolioImages = [
		"/lovable-uploads/6407fda7-fe65-47e6-80d5-e30ec548cdc5.png",
		"/lovable-uploads/ac342496-ab53-443d-a8ae-b34eb5e19f4f.png",
		"/lovable-uploads/999a0170-625b-4c70-bc2d-051f29df4df3.png",
		"/lovable-uploads/d9a5f0be-df63-44b7-a6e5-d62f8ee37e09.png",
		"/lovable-uploads/25d3ec96-6fac-4c49-9391-e7dde7500659.png",
	];

	const typingTexts = ["ORDERS", "BOOKING", "SALES"];

	// Counter hooks for stats
	const projectsCount = useCountAnimation(49, 2000, "+");
	const satisfactionCount = useCountAnimation(98, 2000, "%");
	const experienceCount = useCountAnimation(5, 2000, "+");

	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-[#38B6FF] rounded-lg"></div>
							<span className="text-2xl font-bold text-foreground">
								HACHI AGENCY
							</span>
						</div>
						<div className="hidden md:flex items-center space-x-8">
							{["Home", "Portfolio", "About", "Contact"].map(
								(item) => (
									<a
										key={item}
										href={`#${item.toLowerCase()}`}
										className="text-foreground hover:text-[#38B6FF] transition-all duration-300 transform hover:scale-110"
									>
										{item}
									</a>
								),
							)}
						</div>
					</div>
				</div>
			</nav>

			{/* Enhanced Hero Section - NO SCROLL TRIGGERS */}
			<section
				id="home"
				className="pt-20 min-h-screen relative overflow-hidden bg-background"
			>
				{/* Animated Blobs for Hero */}
				<AnimatedBlob size="large" color="blue" position="top-left" delay={0} />
				<AnimatedBlob
					size="medium"
					color="white"
					position="top-right"
					delay={2}
				/>
				<AnimatedBlob
					size="small"
					color="blue"
					position="bottom-left"
					delay={4}
				/>
				<AnimatedBlob
					size="medium"
					color="white"
					position="bottom-right"
					delay={1}
				/>
				<FloatingElements />

				<div className="relative z-10 container mx-auto px-4 py-20">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8">
							{/* Badge with enhanced styling - NO SCROLL TRIGGER */}
							<div>
								<Badge className="bg-[#38B6FF] text-white border-0 px-4 py-2 text-sm font-medium">
									✨ #1 Premium Web Agency
								</Badge>
							</div>

							{/* Main Headline - NO SCROLL TRIGGER */}
							<div className="space-y-4">
								<h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
									INCREASE YOUR
									<br />
									<TypingAnimation
										texts={typingTexts}
										speed={150}
										pauseDuration={1500}
									/>
								</h1>
							</div>

							{/* Enhanced Description - NO SCROLL TRIGGER */}
							<div className="space-y-6">
								<p className="text-xl md:text-2xl text-foreground max-w-2xl leading-relaxed">
									We create{" "}
									<span className="font-semibold text-foreground">
										stunning, high-performance websites
									</span>{" "}
									that drive real results for your business. From concept to
									launch, we're your digital transformation partners.
								</p>

								{/* Updated Key Benefits with new colors */}
								<div className="flex flex-wrap gap-4">
									<div className="flex items-center gap-2 bg-card border border-[#38B6FF] px-3 py-2 rounded-full">
										<CheckCircle className="w-4 h-4 text-[#38B6FF]" />
										<span className="text-sm font-medium text-foreground">
											Fast Delivery
										</span>
									</div>
									<div className="flex items-center gap-2 bg-card border border-white px-3 py-2 rounded-full">
										<CheckCircle className="w-4 h-4 text-white" />
										<span className="text-sm font-medium text-foreground">
											24/7 Support
										</span>
									</div>
									<div className="flex items-center gap-2 bg-card border border-[#38B6FF] px-3 py-2 rounded-full">
										<CheckCircle className="w-4 h-4 text-[#38B6FF]" />
										<span className="text-sm font-medium text-foreground">
											100% Satisfaction
										</span>
									</div>
								</div>
							</div>

							{/* Enhanced CTAs - NO SCROLL TRIGGER */}
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									size="lg"
									className="bg-[#38B6FF] hover:bg-white hover:text-black text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
								>
									Start Your Project
									<ArrowRight className="ml-2 w-5 h-5" />
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-2 border-white hover:border-[#38B6FF] text-white hover:text-[#38B6FF] text-lg px-8 py-6 transition-all duration-300 group"
								>
									<Play className="mr-2 w-5 h-5 group-hover:text-[#38B6FF]" />
									Watch Demo
								</Button>
							</div>

							{/* Social Proof - NO SCROLL TRIGGER */}

							<div className="mt-10">
								<div className="max-w-md">
									<ReviewCard />
								</div>
							</div>
						</div>

						{/* Enhanced Visual Section - NO SCROLL TRIGGER */}
						<div className="relative">
							<div className="relative">
								{/* Main Image with enhanced styling */}
								<div className="relative overflow-hidden rounded-3xl shadow-2xl bg-card border-2 border-border p-8">
									<img
										src="https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2024/02/29110639/Web-Design-and-Development-agency-Digital-Transformation.webp"
										alt="Digital Transformation"
										className="w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500"
										style={{ maxWidth: "34em" }}
									/>

									{/* Floating elements */}
									<div className="absolute -top-4 -left-4 w-20 h-20 bg-[#38B6FF] rounded-2xl opacity-80"></div>
									<div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-xl opacity-60"></div>
								</div>

								{/* Stats Cards */}
								<div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-lg border border-border">
									<div className="flex items-center space-x-4">
										<div className="w-12 h-12 bg-[#38B6FF] rounded-xl flex items-center justify-center">
											<Zap className="w-6 h-6 text-white" />
										</div>
										<div>
											<div className="font-bold text-foreground text-lg">
												Lightning Fast
											</div>
											<div className="text-foreground">99.9% Uptime</div>
										</div>
									</div>
								</div>

								<div className="absolute -top-6 -right-6 bg-card p-6 rounded-2xl shadow-lg border border-border">
									<div className="flex items-center space-x-4">
										<div className="w-12 h-12 bg-[#38B6FF] rounded-xl flex items-center justify-center">
											<Award className="w-6 h-6 text-white" />
										</div>
										<div>
											<div className="font-bold text-foreground text-lg">
												Award Winning
											</div>
											<div className="text-foreground">Design Agency</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Strategic Partners Section - Icons/logos of websites we made */}
			<StrategicPartners />

			{/* Benefits/Why US Section */}
			<WhyUs />

			{/* Portfolio Section - Auto Scrolling Images */}
			<section
				id="portfolio"
				className="py-20 bg-background relative overflow-hidden"
			>
				{/* Animated Blobs for Portfolio */}
				<AnimatedBlob
					size="large"
					color="white"
					position="top-right"
					delay={1}
				/>
				<AnimatedBlob
					size="medium"
					color="blue"
					position="bottom-left"
					delay={3}
				/>
				<AnimatedBlob size="small" color="white" position="center" delay={5} />
				<FloatingElements />

				<div className="container mx-auto px-4 relative z-10">
					{/* Header Section */}
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
							Our Creative Portfolio
						</h2>
						<p className="text-lg text-foreground max-w-4xl mx-auto">
							Discover our latest work showcasing innovative designs and cutting-edge web solutions.
						</p>
					</div>

					{/* Auto Scrolling Portfolio Images */}
					<div className="relative overflow-hidden">
						<div className="flex animate-scroll gap-8" style={{ width: 'calc(400px * 10)' }}>
							{[...portfolioImages, ...portfolioImages].map((image, index) => (
								<div 
									key={index} 
									className="min-w-[400px] h-[500px] flex-shrink-0 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
								>
									<img
										src={image}
										alt={`Portfolio item ${index + 1}`}
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Working Process Section */}
			<WorkingProcess />

			{/* Enhanced About Section with Animated Counters */}
			<section
				id="about"
				className="py-20 bg-background relative overflow-hidden"
			>
				{/* Animated Blobs for About */}
				<AnimatedBlob
					size="medium"
					color="blue"
					position="top-left"
					delay={0}
				/>
				<AnimatedBlob
					size="large"
					color="white"
					position="bottom-right"
					delay={2}
				/>
				<AnimatedBlob
					size="small"
					color="white"
					position="top-right"
					delay={4}
				/>
				<FloatingElements />

				<div className="container mx-auto px-4 relative z-10">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="scroll-trigger opacity-0">
							<Badge className="mb-4 bg-[#38B6FF] text-white">About Us</Badge>
							{/* <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
								Crafting Digital Excellence Since Day One
							</h2> */}
							<p className="text-lg text-foreground mb-8">
								We're a results-driven website agency built for businesses that
								want more than just "a beautiful website." Our mission is
								simple: create stunning, high-converting websites that drive
								real growth so you can focus on your business.
							</p>
							<p className="text-lg text-foreground mb-8">
								Whether you're a local business, web 3 service or startup, we
								combine top-tier design with smart strategy so your website
								doesn't just look great, it works. With custom UX/UI and a deep
								focus on conversions, we help you turn visitors into loyal
								customers.
							</p>
							<div className="grid grid-cols-3 gap-8 mb-8">
								<div
									ref={projectsCount.countRef}
									className="text-center transform hover:scale-110 transition-transform duration-300"
								>
									<div className="text-3xl font-bold text-[#38B6FF] mb-2">
										{projectsCount.displayValue}
									</div>
									<div className="text-foreground">Projects Completed</div>
								</div>
								<div
									ref={satisfactionCount.countRef}
									className="text-center transform hover:scale-110 transition-transform duration-300"
								>
									<div className="text-3xl font-bold text-[#38B6FF] mb-2">
										{satisfactionCount.displayValue}
									</div>
									<div className="text-foreground">Client Satisfaction</div>
								</div>
								<div
									ref={experienceCount.countRef}
									className="text-center transform hover:scale-110 transition-transform duration-300"
								>
									<div className="text-3xl font-bold text-[#38B6FF] mb-2">
										{experienceCount.displayValue}
									</div>
									<div className="text-foreground">Years Experience</div>
								</div>
							</div>
							{/* <Button className="bg-[#38B6FF] hover:bg-white hover:text-black text-white transform hover:scale-105 transition-all duration-300">
								Learn More About Us
							</Button> */}
						</div>
						<div className="relative scroll-trigger opacity-0">
							<img
								src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
								alt="Team working"
								className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
								<div className="flex items-center space-x-4">
									<Award className="w-8 h-8 text-[#38B6FF]" />
									<div>
										<div className="font-bold text-foreground">
											Award Winning
										</div>
										<div className="text-foreground">Design Agency</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<Testimonials />

			{/* FAQ Section */}
			<FAQ />

			{/* Enhanced Contact Section */}
			<section
				id="contact"
				className="py-20 bg-background relative overflow-hidden"
			>
				<FloatingElements />
				<div className="container mx-auto px-4 relative z-10">
					{/* Header */}
					<div className="text-center mb-16">
						<Badge className="mb-6 bg-[#38B6FF] text-white border-0 scroll-trigger opacity-0">
							Get In Touch
						</Badge>
						<h2 className="text-4xl all-cap md:text-5xl font-bold text-foreground mb-6 scroll-trigger opacity-0">
							Ready to Start Your Project?
						</h2>
						<p className="text-xl text-foreground max-w-3xl mx-auto mb-8 scroll-trigger opacity-0">
							Let's transform your vision into reality with cutting-edge
							technology and creative excellence!
						</p>

						{/* Enhanced Process Icons */}
						<div className="flex justify-center gap-12 mb-8">
							{[
								{ icon: Search, label: "Discover" },
								{ icon: Palette, label: "Design" },
								{ icon: Laptop, label: "Develop" },
								{ icon: Rocket, label: "Deliver" },
							].map((item, index) => (
								<div
									key={index}
									className="flex flex-col items-center scroll-trigger opacity-0 transform hover:scale-110 transition-all duration-300"
								>
									<div className="w-12 h-12 bg-card border-2 border-border rounded-full flex items-center justify-center mb-2 hover:border-[#38B6FF] transition-colors duration-300">
										<item.icon className="w-6 h-6 text-[#38B6FF]" />
									</div>
									<span className="text-sm text-foreground font-medium">
										{item.label}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="grid lg:grid-cols-2 gap-16 items-start">
						{/* Enhanced Contact Information */}
						<div className="space-y-8 scroll-trigger opacity-0">
							<div>
								<h3 className="text-2xl font-bold text-foreground mb-8">
									Contact Information
								</h3>
								<div className="space-y-6">
									{[
										{
											icon: Mail,
											title: "Email",
											content: ["contact@hachiagency.com"],
										},
										{
											icon: Phone,
											title: "Phone",
											content: ["306-491-5910"],
										},
									].map((item, index) => (
										<div
											key={index}
											className="flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300 scroll-trigger opacity-0"
										>
											<div className="w-12 h-12 bg-[#38B6FF] rounded-lg flex items-center justify-center">
												<item.icon className="w-6 h-6 text-white" />
											</div>
											<div>
												<div className="font-semibold text-foreground">
													{item.title}
												</div>
												{item.content.map((text, i) => (
													<div key={i} className="text-foreground">
														{text}
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Enhanced Contact Form */}
						<div className="scroll-trigger opacity-0">
							<form onSubmit={handleSubmit} className="space-y-8">
								{[
									{
										id: "name",
										label: "Your Name",
										type: "text",
										value: formData.name,
									},
									{
										id: "email",
										label: "Your Email",
										type: "email",
										value: formData.email,
									},
								].map((field, index) => (
									<div
										key={field.id}
										className="relative scroll-trigger opacity-0"
									>
										<input
											type={field.type}
											placeholder=" "
											value={field.value}
											onChange={(e) =>
												setFormData({ ...formData, [field.id]: e.target.value })
											}
											className="peer w-full bg-transparent border-0 border-b-2 border-border focus:border-[#38B6FF] focus:outline-none py-3 px-0 text-foreground placeholder-transparent transition-all duration-300 hover:border-[#38B6FF]/50"
											id={field.id}
										/>
										<label
											htmlFor={field.id}
											className="absolute left-0 -top-6 text-foreground text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[#38B6FF] peer-focus:text-sm"
										>
											{field.label}
										</label>
									</div>
								))}

								<div className="relative scroll-trigger opacity-0">
									<textarea
										placeholder=" "
										value={formData.message}
										onChange={(e) =>
											setFormData({ ...formData, message: e.target.value })
										}
										className="peer w-full bg-transparent border-0 border-b-2 border-border focus:border-[#38B6FF] focus:outline-none py-3 px-0 text-foreground placeholder-transparent transition-all duration-300 resize-none min-h-[100px] hover:border-[#38B6FF]/50"
										id="message"
									/>
									<label
										htmlFor="message"
										className="absolute left-0 -top-6 text-foreground text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[#38B6FF] peer-focus:text-sm"
									>
										Tell us about your project...
									</label>
								</div>

								<Button
									type="submit"
									className="w-full h-14 bg-[#38B6FF] hover:bg-white hover:text-black text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg transform hover:scale-105 scroll-trigger opacity-0"
								>
									Send Message
									<ArrowRight className="ml-2 w-5 h-5" />
								</Button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Enhanced Footer */}
			<footer className="bg-black text-white py-16">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div className="scroll-trigger opacity-0">
							<div className="flex items-center space-x-2 mb-6">
								<div className="w-8 h-8 bg-[#38B6FF] rounded-lg"></div>
								<span className="text-2xl font-bold">HACHI AGENCY</span>
							</div>
							<p className="text-white mb-6">Your Success Is Our Success</p>
						</div>
						{[
							{
								title: "Company",
								links: ["About Us", "Blog", "Privacy Policy"],
							},
						].map((section, index) => (
							<div key={section.title} className="scroll-trigger opacity-0">
								<h4 className="text-lg font-semibold mb-6">{section.title}</h4>
								<ul className="space-y-2 text-white">
									{section.links.map((link, linkIndex) => (
										<li key={link}>
											<a
												href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
												className="hover:text-[#38B6FF] transition-all duration-300 transform hover:translate-x-1 inline-block scroll-trigger opacity-0"
											>
												{link}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="border-t border-white mt-12 pt-8 text-center text-white scroll-trigger opacity-0">
						<p>&copy; 2024 HACHI AGENCY. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Index;
