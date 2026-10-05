import type { Dictionary } from './es';

// Borrador: todavía no se publica /en/ (ver docs/plan-mejoras-contenido.md).
export const en: Dictionary = {
	meta: {
		title: 'Tecton Labs — Software engineering from Mendoza, Argentina',
		description:
			'We build, modernize and operate software for businesses: custom applications, integrations, and cloud and on-premises infrastructure. Team based in Mendoza, Argentina.',
		ogLocale: 'en_US',
	},
	nav: {
		services: 'Services',
		process: 'Process',
		experience: 'Experience',
		about: 'About',
		contact: 'Contact',
		cta: "Let's talk",
		openMenu: 'Open menu',
	},
	hero: {
		title: 'We build the software behind your business.',
		subtitle:
			'From application architecture to infrastructure, in the cloud or on your own servers, we help companies build, modernize and operate reliable software.',
		primaryCta: 'Start a project',
		secondaryCta: 'See services',
		stack: ['.NET', 'React', 'Angular', 'TypeScript', 'Azure', 'AWS', 'SQL Server', 'PostgreSQL', 'Docker', 'RabbitMQ', 'CI/CD'],
	},
	pillars: ['Build', 'Modernize', 'Run'],
	services: {
		eyebrow: 'Services',
		title: 'Engineering, layer by layer.',
		subtitle: 'We build and evolve software from infrastructure to product experience.',
		closing: 'Strong products are built on strong foundations.',
		layers: [
			{
				label: 'Foundation',
				title: 'Infrastructure',
				description: 'Cloud, on-premises or hybrid infrastructure: servers, CI/CD, containers, infrastructure as code and automation.',
				tags: ['AWS', 'Azure', 'On-premises', 'Docker', 'Terraform', 'CI/CD'],
			},
			{
				label: 'Systems',
				title: 'Data & Integrations',
				description: 'APIs, integrations, databases, messaging and distributed systems.',
				tags: ['.NET', 'SQL', 'RabbitMQ', 'REST'],
			},
			{
				label: 'Software',
				title: 'Applications',
				description: 'Web and mobile products designed around real business workflows.',
				tags: ['React', 'Angular', 'TypeScript', '.NET'],
			},
			{
				label: 'Product',
				title: 'Strategy & Engineering',
				description: 'From technical discovery to architecture, delivery and continuous improvement.',
				tags: ['Discovery', 'Architecture', 'MVP', 'Evolution'],
			},
		],
	},
	problems: {
		eyebrow: 'Solutions',
		title: 'Problems we solve',
		items: [
			{
				problem: "Your system works. But it's becoming difficult to change.",
				service: 'Legacy modernization',
				description: 'We help teams evolve existing .NET and enterprise systems without throwing away years of business logic.',
			},
			{
				problem: 'Your application works. Production is another story.',
				service: 'Cloud & On-premises Infrastructure',
				description: 'In the cloud, on your servers or hybrid: architecture, CI/CD, containers, infrastructure as code, monitoring and reliability.',
			},
			{
				problem: 'Your systems need to talk to each other.',
				service: 'Integrations & APIs',
				description: 'Payments, ERPs, third-party platforms, internal services and event-driven architectures.',
			},
			{
				problem: 'You need to build something new.',
				service: 'Product Engineering',
				description: 'From MVP to production-ready applications, with the architecture needed to grow beyond the first release.',
			},
		],
	},
	process: {
		eyebrow: 'Process',
		title: 'How we work',
		steps: [
			{
				title: 'Understand',
				description: 'We map the business problem, existing architecture and constraints.',
			},
			{
				title: 'Design',
				description: 'We define an architecture and implementation plan before creating unnecessary complexity.',
			},
			{
				title: 'Build',
				description: 'Small iterations, direct communication and production-quality engineering.',
			},
			{
				title: 'Operate',
				description: "We don't disappear after deployment: we help keep the system reliable and evolving.",
			},
		],
	},
	about: {
		eyebrow: 'About',
		title: 'Engineering, not outsourcing.',
		paragraphs: [
			'We work alongside your team to design, build and operate the systems your business depends on.',
			'You talk directly to the people who design and write the code: frequent deliveries, technical decisions explained, and tailored solutions instead of generic products.',
		],
		teamTitle: 'Who leads each project',
		teamNote: 'Depending on what each project needs, we bring in trusted collaborators from our network of specialists.',
		roles: {
			maximiliano: 'Software engineering',
			jorge: 'DevOps & infrastructure',
		},
		stats: [
			{ value: '10+ years', label: 'Of team experience' },
			{ value: 'Weeks', label: 'To first delivery, not months' },
			{ value: 'GMT-3', label: 'Overlapping hours with the US & Europe' },
			{ value: 'End to end', label: 'From infrastructure to product' },
		],
	},
	experience: {
		eyebrow: 'Experience',
		title: 'Team experience',
		moreTitle: 'More projects',
		scrollHint: 'Swipe to see more',
		scrollPrev: 'Previous',
		scrollNext: 'Next',
		// Los destacados (featured) se muestran en grilla; el resto en una fila deslizable.
		projects: [
			{
				featured: true,
				title: 'Payment platform',
				meta: ['Fintech', '.NET', 'RabbitMQ', 'SQL Server', 'Azure DevOps'],
				description: 'Architecture, technical leadership and development of a payment platform for banks, fintechs and merchants, with AI-assisted development.',
			},
			{
				featured: true,
				title: 'Port scheduling',
				meta: ['Logistics', 'Angular', '.NET', 'Azure Service Bus', 'SQL Server'],
				description: 'Scheduling system between port terminals and trucking companies, with messaging-based integrations.',
			},
			{
				featured: true,
				title: 'Gated community security',
				meta: ['Security', 'AWS', 'Kubernetes', 'Angular', '.NET'],
				description: 'Access, visitor and speed control for gated communities, running on AWS and Kubernetes.',
			},
			{
				featured: false,
				title: 'Pharmacy CRM',
				meta: ['Healthcare', 'Angular', '.NET', 'C# / F#', 'AWS'],
				description: 'Product-order and prescription management for pharmacies.',
			},
			{
				featured: false,
				title: 'Toll management',
				meta: ['Transportation', 'Angular', '.NET', 'SQL Server', 'Bitbucket Pipelines'],
				description: 'Web application for toll management in the United States.',
			},
			{
				featured: false,
				title: 'Telecom infrastructure',
				meta: ['Telecom', 'Ionic', 'React', '.NET', 'Azure Service Bus'],
				description: 'Mobile and web apps to manage the setup of telecommunication structures.',
			},
			{
				featured: false,
				title: 'Fueling app for BP',
				meta: ['Energy', 'Android', 'Java', 'Jenkins'],
				description: 'Public app to pay for fuel and services, such as car wash, at gas stations.',
			},
			{
				featured: false,
				title: 'Mobile banking',
				meta: ['Banking', 'Android', 'Java', '.NET Web API'],
				description: "Apps that let a bank's customers manage their accounts from their phones.",
			},
			{
				featured: false,
				title: 'Hospital–supplier communication',
				meta: ['Healthcare', 'Java', 'MySQL', 'MongoDB'],
				description: 'Modernization of an existing communication system between hospitals and their suppliers.',
			},
			{
				featured: false,
				title: 'Published consumer apps',
				meta: ['Product', 'Android', 'Ionic', 'Node.js', 'Firebase'],
				description: 'End-to-end design and development of Google Play apps: expense splitting and surveys with results dashboards.',
			},
			{
				featured: false,
				title: 'Inventory system',
				meta: ['Retail', 'Java', 'MySQL'],
				description: 'Inventory management with restocking estimates for a store.',
			},
		],
		companiesIntro: 'Our team has worked on projects for companies such as:',
	},
	contact: {
		title: 'Ready to build?',
		subtitle:
			"Tell us what you need. We'll review your case and schedule a call to define the best technical approach for your product.",
		emailLabel: 'Email',
		whatsappLabel: 'WhatsApp',
		whatsappMessage: "Hi Tecton Labs, I'd like to ask about a project",
		locationLabel: 'Location',
		locationNote: 'Remote or on-site meetings',
		form: {
			name: 'Name',
			email: 'Email',
			message: 'Tell us about your project',
			submit: 'Send by email',
			error: 'Please fill in all fields before sending.',
			subject: 'Inquiry from',
			sentBefore: "We opened your email app with the message ready to send. If it didn't open, write to us at",
		},
	},
	footer: {
		services: 'Services',
		contact: 'Contact',
		whatsappButton: 'Message us on WhatsApp',
	},
};
