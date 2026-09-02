export interface Service {
	title: string;
	description: string;
}

export const services: Service[] = [
	{
		title: 'Desarrollo a medida',
		description:
			'Aplicaciones web y móviles diseñadas y construidas a partir de los procesos reales de tu empresa.',
	},
	{
		title: 'Cloud & DevOps',
		description:
			'Migración, arquitectura y automatización en AWS, Azure y GCP con foco en costos y escalabilidad.',
	},
	{
		title: 'Consultoría IT',
		description:
			'Diagnóstico técnico, planificación tecnológica y acompañamiento en la toma de decisiones.',
	},
	{
		title: 'Integraciones y APIs',
		description:
			'Conectamos tus sistemas, ERPs y servicios de terceros con integraciones robustas y seguras.',
	},
	{
		title: 'Soporte y mantenimiento',
		description:
			'Monitoreo continuo, resolución de incidentes y evolución de tus sistemas en producción.',
	},
];
