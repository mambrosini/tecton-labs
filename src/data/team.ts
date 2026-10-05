import type { Dictionary } from '../i18n/es';

type MemberId = keyof Dictionary['about']['roles'];

// Fotos cuadradas en public/. Sin foto se muestran las iniciales.
export const team: { id: MemberId; name: string; photo?: string }[] = [
	{ id: 'maximiliano', name: 'Maximiliano Ambrosini', photo: '/mambrosini.jpeg' },
	{ id: 'jorge', name: 'Jorge Garay', photo: '/jgaray.jpg' },
];
