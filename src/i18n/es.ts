export const es = {
	meta: {
		title: 'Tecton Labs — Desarrollo de software en Mendoza',
		description:
			'Construimos, modernizamos y operamos software para empresas: aplicaciones a medida, integraciones e infraestructura cloud y on-premise. Equipo en Mendoza, Argentina.',
		ogLocale: 'es_AR',
	},
	nav: {
		services: 'Servicios',
		about: 'Nosotros',
		contact: 'Contacto',
		cta: 'Hablemos',
		openMenu: 'Abrir menú',
	},
	hero: {
		title: 'Construimos el software detrás de tu negocio.',
		subtitle:
			'Desde la arquitectura de aplicaciones hasta la infraestructura, en la nube o en tus servidores, te ayudamos a construir, modernizar y operar software confiable.',
		primaryCta: 'Empecemos un proyecto',
		secondaryCta: 'Ver servicios',
		stack: ['.NET', 'React', 'Angular', 'TypeScript', 'Azure', 'AWS', 'SQL Server', 'PostgreSQL', 'Docker', 'RabbitMQ', 'CI/CD'],
	},
	pillars: [
		{ title: 'Construir', description: 'Aplicaciones a medida, APIs e integraciones.' },
		{ title: 'Modernizar', description: 'Sistemas legacy, arquitectura y migraciones.' },
		{ title: 'Operar', description: 'Infraestructura cloud y on-premise, CI/CD, observabilidad y confiabilidad.' },
	],
	services: {
		eyebrow: 'Servicios',
		title: 'Ingeniería, capa por capa.',
		subtitle: 'Construimos y evolucionamos software desde la infraestructura hasta la experiencia de producto.',
		closing: 'Los productos sólidos se construyen sobre cimientos sólidos.',
		// Ordenadas de abajo (cimientos) hacia arriba (producto).
		layers: [
			{
				label: 'Cimientos',
				title: 'Infraestructura',
				description: 'Infraestructura cloud, on-premise o híbrida: servidores, CI/CD, contenedores, infraestructura como código y automatización.',
				tags: ['AWS', 'Azure', 'On-premise', 'Docker', 'Terraform', 'CI/CD'],
			},
			{
				label: 'Sistemas',
				title: 'Datos e integraciones',
				description: 'APIs, integraciones, bases de datos, mensajería y sistemas distribuidos.',
				tags: ['.NET', 'SQL', 'RabbitMQ', 'REST'],
			},
			{
				label: 'Software',
				title: 'Aplicaciones',
				description: 'Productos web y mobile diseñados alrededor de flujos de negocio reales.',
				tags: ['React', 'Angular', 'TypeScript', '.NET'],
			},
			{
				label: 'Producto',
				title: 'Estrategia e ingeniería',
				description: 'Del discovery técnico a la arquitectura, la entrega y la mejora continua.',
				tags: ['Discovery', 'Arquitectura', 'MVP', 'Evolución'],
			},
		],
	},
	problems: {
		eyebrow: 'Soluciones',
		title: 'Problemas que resolvemos',
		items: [
			{
				problem: 'Tu sistema funciona, pero cada cambio cuesta más.',
				service: 'Modernización de sistemas legacy',
				description: 'Evolucionamos sistemas .NET y enterprise sin tirar a la basura años de lógica de negocio.',
			},
			{
				problem: 'Tu aplicación funciona. Producción es otra historia.',
				service: 'Infraestructura cloud y on-premise',
				description: 'En la nube, en tus servidores o híbrida: arquitectura, CI/CD, contenedores, infraestructura como código, monitoreo y confiabilidad.',
			},
			{
				problem: 'Tus sistemas necesitan hablar entre sí.',
				service: 'Integraciones y APIs',
				description: 'Pagos, ERPs, plataformas de terceros, servicios internos y arquitecturas orientadas a eventos.',
			},
			{
				problem: 'Necesitás construir algo nuevo.',
				service: 'Ingeniería de producto',
				description: 'Del MVP a una aplicación lista para producción, con la arquitectura para crecer más allá de la primera versión.',
			},
		],
	},
	about: {
		title: 'Nosotros',
		paragraphs: [
			'Tecton Labs nació para ayudar a empresas de todos los tamaños a resolver sus desafíos tecnológicos con soluciones pensadas a medida, no con productos genéricos.',
			'Trabajamos como una extensión de tu equipo: comunicación directa, entregas frecuentes y compromiso con resultados medibles.',
		],
		stats: [
			{ value: '+10 años', label: 'De experiencia del equipo' },
			{ value: 'Semanas', label: 'Hasta la primera entrega, no meses' },
			{ value: 'Mendoza', label: 'Reuniones presenciales o remotas' },
			{ value: 'End to end', label: 'De la infraestructura al producto' },
		],
	},
	experience: {
		title: 'Experiencia del equipo',
		subtitle: 'Nuestro equipo trabajó en proyectos para empresas como:',
	},
	contact: {
		title: '¿Listo para construir?',
		subtitle:
			'Contanos qué necesitás. Analizamos tu caso y coordinamos una reunión, presencial o por videollamada, para definir el mejor enfoque técnico para tu producto.',
		emailLabel: 'Email directo',
		whatsappLabel: 'WhatsApp',
		whatsappMessage: 'Hola Tecton Labs, quiero consultar por un proyecto',
		locationLabel: 'Ubicación',
		locationNote: 'Reuniones presenciales o remotas',
		form: {
			name: 'Nombre',
			email: 'Email',
			message: 'Contanos sobre tu proyecto',
			submit: 'Enviar por email',
			error: 'Completá todos los campos antes de enviar.',
			subject: 'Consulta de',
			sentBefore: 'Abrimos tu aplicación de correo con el mensaje listo: solo falta enviarlo. Si no se abrió, escribinos a',
		},
	},
	footer: {
		services: 'Servicios',
		contact: 'Contacto',
	},
};

export type Dictionary = typeof es;
