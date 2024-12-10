export default function About() {
	return (
		<div className="w-full">
			{/* Hero Section - Our Story */}
			<div className="w-full bg-gradient-to-br from-blue-900 to-blue-800 py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl">
						<h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
							Our Story
						</h1>
						<div className="space-y-6 text-lg text-gray-100">
							<p>
								TicketHub's success is rooted in strong partnerships, constant innovation, and industry leadership. 
								We work with clients worldwide to connect them with their fans, helping to make more live memories every day.
							</p>
							<p>
								Our platform is designed to streamline the ticket purchasing process, ensuring a seamless and user-friendly experience 
								for both event organizers and attendees. With our advanced technology, we provide secure and efficient ticket sales, 
								dynamic pricing options, and comprehensive event management tools.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Our Values Section */}
			<div className="w-full bg-blue-800 py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-5xl md:text-7xl font-bold text-white mb-16 leading-tight">
						Our Values
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								title: "Innovation",
								description: "Pushing boundaries with cutting-edge solutions and creative approaches to revolutionize the ticketing industry."
							},
							{
								title: "Integrity",
								description: "Maintaining the highest standards of honesty, transparency, and ethical business practices in all our operations."
							},
							{
								title: "Customer-Centric",
								description: "Putting our users first, ensuring every decision enhances their experience and satisfaction."
							},
							{
								title: "Transparency",
								description: "Building trust through clear communication and open business practices with all stakeholders."
							}
						].map((value, index) => (
							<div 
								key={index}
								className="bg-blue-700/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
							>
								<h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
								<p className="text-gray-100">{value.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Why TicketHub Section */}
			<div className="w-full bg-gradient-to-br from-blue-800 to-blue-900 py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl">
						<h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
							Why TicketHub?
						</h2>
						<div className="bg-blue-700/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
							<p className="text-xl text-gray-100">
								Choose TicketHub as your ticketing partner to ensure secure and seamless ticketing experiences through our 
								globally recognized platform and advanced technology. With TicketHub's extensive marketing tools and detailed 
								analytics, we can optimize sales and enhance the visibility of our events, providing the best possible service 
								to our audience.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* FAQ Section */}
			<div className="w-full bg-blue-800 py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-5xl md:text-7xl font-bold text-white mb-16 text-center">
						Frequently Asked Questions
					</h2>
					<div className="max-w-3xl mx-auto space-y-6">
						<div className="bg-blue-700/50 rounded-2xl overflow-hidden backdrop-blur-sm">
							<details className="group">
								<summary className="flex justify-between items-center p-6 cursor-pointer text-white">
									<h3 className="text-xl font-semibold">What is TicketHub?</h3>
									<span className="transform group-open:rotate-180 transition-transform duration-200">
										<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
										</svg>
									</span>
								</summary>
								<div className="px-6 pb-6 text-gray-100">
									<p>TicketHub is a leading global platform for live event ticketing, connecting millions of fans with their favorite events.</p>
								</div>
							</details>
						</div>

						<div className="bg-blue-700/50 rounded-2xl overflow-hidden backdrop-blur-sm">
							<details className="group">
								<summary className="flex justify-between items-center p-6 cursor-pointer text-white">
									<h3 className="text-xl font-semibold">What payment methods are accepted?</h3>
									<span className="transform group-open:rotate-180 transition-transform duration-200">
										<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
										</svg>
									</span>
								</summary>
								<div className="px-6 pb-6 text-gray-100">
									<p>TicketHub accepts all major credit cards and debit cards, as well as digital payment methods such as PayPal. Specific payment options may vary by region.</p>
								</div>
							</details>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
