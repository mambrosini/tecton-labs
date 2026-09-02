import { useState, type FormEvent } from 'react';

export default function ContactForm() {
	const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);

		if (!data.get('name') || !data.get('email') || !data.get('message')) {
			setStatus('error');
			return;
		}

		// TODO: wire up to a real endpoint (e.g. a Cloudflare Pages Function) when available.
		setStatus('sent');
		form.reset();
	}

	if (status === 'sent') {
		return (
			<p className="rounded-lg border border-brand-500/40 bg-brand-500/10 p-4 text-brand-200">
				¡Gracias! Recibimos tu mensaje y te vamos a responder a la brevedad.
			</p>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="grid gap-4">
			<div className="grid gap-4 sm:grid-cols-2">
				<input
					type="text"
					name="name"
					placeholder="Nombre"
					className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-500 focus:outline-none"
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-500 focus:outline-none"
				/>
			</div>
			<textarea
				name="message"
				rows={4}
				placeholder="Contanos sobre tu proyecto"
				className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-500 focus:outline-none"
			/>
			{status === 'error' && (
				<p className="text-sm text-red-400">Completá todos los campos antes de enviar.</p>
			)}
			<button
				type="submit"
				className="justify-self-start rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-500"
			>
				Enviar mensaje
			</button>
		</form>
	);
}
