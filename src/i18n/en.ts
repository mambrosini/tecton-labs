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
	pillars: [
		{ title: 'Build', description: 'Custom applications, APIs and integrations.' },
		{ title: 'Modernize', description: 'Legacy systems, architecture and migrations.' },
		{ title: 'Run', description: 'Cloud and on-premises infrastructure, CI/CD, observability and reliability.' },
	],
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
	about: {
		title: 'About us',
		paragraphs: [
			'Tecton Labs helps companies of every size solve their technology challenges with tailored solutions, not generic products.',
			'We work as an extension of your team: direct communication, frequent deliveries and a commitment to measurable results.',
		],
		stats: [
			{ value: '10+ years', label: 'Of team experience' },
			{ value: 'Weeks', label: 'To first delivery, not months' },
			{ value: 'GMT-3', label: 'Overlapping hours with the US & Europe' },
			{ value: 'End to end', label: 'From infrastructure to product' },
		],
	},
	experience: {
		title: 'Team experience',
		subtitle: 'Our team has worked on projects for companies such as:',
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
	},
};
