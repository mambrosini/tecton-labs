import type { Dictionary } from '../i18n/es';

type MemberId = keyof Dictionary['about']['members'];

// Rol y bio (traducibles) en src/i18n/*.ts → about.members. Fotos cuadradas en public/; sin foto se muestran las iniciales.
export const team: { id: MemberId; name: string; photo?: string; tags: string[]; linkedin?: string }[] = [
	{
		id: 'maximiliano',
		name: 'Maximiliano Ambrosini',
		photo: '/mambrosini.jpeg',
		tags: ['.NET', 'Angular', 'React', 'SQL Server', 'Azure'],
	},
	{
		id: 'jorge',
		name: 'Jorge Garay',
		photo: '/jgaray.jpg',
		tags: ['ISO/IEC 27001', 'Seguridad', 'Alta disponibilidad', 'On-premise', 'Cloud'],
	},
];
