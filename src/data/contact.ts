const whatsappNumber = '5492613847779';

export const contact = {
	email: 'hola@tectonlabs.net',
	location: 'Mendoza, Argentina',
	whatsapp: {
		display: '+54 9 261 384-7779',
		url: (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
	},
};
