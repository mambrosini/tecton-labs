const whatsappNumber = '5492613847779';
const whatsappMessage = 'Hola Tecton Labs, quiero consultar por un proyecto';

export const contact = {
	email: 'hola@tectonlabs.net',
	location: 'Mendoza, Argentina',
	whatsapp: {
		display: '+54 9 261 384-7779',
		url: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
	},
};
