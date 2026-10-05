export const es = {
	meta: {
		title: 'Tecton Labs — Desarrollo de software en Mendoza',
		description:
			'Construimos, modernizamos y operamos software para empresas: aplicaciones a medida, integraciones e infraestructura cloud y on-premise. Equipo en Mendoza, Argentina.',
		ogLocale: 'es_AR',
	},
	nav: {
		services: 'Servicios',
		process: 'Proceso',
		experience: 'Experiencia',
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
	process: {
		eyebrow: 'Proceso',
		title: 'Cómo trabajamos',
		steps: [
			{
				title: 'Entender',
				description: 'Mapeamos el problema de negocio, la arquitectura existente y las restricciones.',
			},
			{
				title: 'Diseñar',
				description: 'Definimos la arquitectura y el plan de implementación antes de sumar complejidad innecesaria.',
			},
			{
				title: 'Construir',
				description: 'Iteraciones cortas, comunicación directa e ingeniería con calidad de producción.',
			},
			{
				title: 'Operar',
				description: 'No desaparecemos después del deploy: te ayudamos a mantener el sistema confiable y en evolución.',
			},
		],
	},
	about: {
		eyebrow: 'Nosotros',
		title: 'Ingeniería, no outsourcing.',
		paragraphs: [
			'Trabajamos junto a tu equipo para diseñar, construir y operar los sistemas de los que depende tu negocio.',
			'Hablás directamente con quienes diseñan y escriben el código: entregas frecuentes, decisiones técnicas explicadas y soluciones pensadas a medida, no productos genéricos.',
		],
		stats: [
			{ value: '+10 años', label: 'De experiencia del equipo' },
			{ value: 'Semanas', label: 'Hasta la primera entrega, no meses' },
			{ value: 'Mendoza', label: 'Reuniones presenciales o remotas' },
			{ value: 'End to end', label: 'De la infraestructura al producto' },
		],
	},
	experience: {
		eyebrow: 'Experiencia',
		title: 'Experiencia del equipo',
		moreTitle: 'Otros proyectos',
		scrollHint: 'Deslizá para ver más',
		scrollPrev: 'Anterior',
		scrollNext: 'Siguiente',
		// Los destacados (featured) se muestran en grilla; el resto en una fila deslizable.
		projects: [
			{
				featured: true,
				title: 'Plataforma de pagos',
				meta: ['Fintech', '.NET', 'RabbitMQ', 'SQL Server', 'Azure DevOps'],
				description: 'Arquitectura, liderazgo técnico y desarrollo de una plataforma de pagos para bancos, fintechs y comercios, con desarrollo asistido por IA.',
			},
			{
				featured: true,
				title: 'Turnos portuarios',
				meta: ['Logística', 'Angular', '.NET', 'Azure Service Bus', 'SQL Server'],
				description: 'Sistema de turnos entre terminales portuarias y empresas de transporte, con integraciones basadas en mensajería.',
			},
			{
				featured: true,
				title: 'Seguridad para barrios cerrados',
				meta: ['Seguridad', 'AWS', 'Kubernetes', 'Angular', '.NET'],
				description: 'Control de accesos, visitas y velocidad para barrios cerrados, desplegado sobre AWS y Kubernetes.',
			},
			{
				featured: false,
				title: 'CRM para farmacias',
				meta: ['Salud', 'Angular', '.NET', 'C# / F#', 'AWS'],
				description: 'Gestión de pedidos de productos y recetas de clientes para farmacias.',
			},
			{
				featured: false,
				title: 'Gestión de peajes',
				meta: ['Transporte', 'Angular', '.NET', 'SQL Server', 'Bitbucket Pipelines'],
				description: 'Aplicación web para la gestión de peajes en Estados Unidos.',
			},
			{
				featured: false,
				title: 'Infraestructura de telecomunicaciones',
				meta: ['Telecom', 'Ionic', 'React', '.NET', 'Azure Service Bus'],
				description: 'Apps mobile y web para gestionar la instalación de estructuras de telecomunicaciones.',
			},
			{
				featured: false,
				title: 'App de combustible para BP',
				meta: ['Energía', 'Android', 'Java', 'Jenkins'],
				description: 'App pública para pagar combustible y servicios, como lavado, en estaciones de servicio.',
			},
			{
				featured: false,
				title: 'Banca mobile',
				meta: ['Banca', 'Android', 'Java', '.NET Web API'],
				description: 'Apps para que los clientes de un banco gestionen sus cuentas desde el celular.',
			},
			{
				featured: false,
				title: 'Comunicación hospitales–proveedores',
				meta: ['Salud', 'Java', 'MySQL', 'MongoDB'],
				description: 'Modernización de un sistema existente de comunicación entre hospitales y sus proveedores.',
			},
			{
				featured: false,
				title: 'Apps de consumo publicadas',
				meta: ['Producto', 'Android', 'Ionic', 'Node.js', 'Firebase'],
				description: 'Diseño y desarrollo completo de apps en Google Play: división de gastos y encuestas con dashboards de resultados.',
			},
			{
				featured: false,
				title: 'Sistema de stock',
				meta: ['Retail', 'Java', 'MySQL'],
				description: 'Gestión de inventario con estimación de reposición para un comercio.',
			},
		],
		companiesIntro: 'Nuestro equipo trabajó en proyectos para empresas como:',
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
		whatsappButton: 'Escribinos por WhatsApp',
	},
};

export type Dictionary = typeof es;
