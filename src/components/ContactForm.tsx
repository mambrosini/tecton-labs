import { useState, type FormEvent } from 'react';
import type { Dictionary } from '../i18n/es';

interface Props {
	email: string;
	labels: Dictionary['contact']['form'];
}

// Mientras no haya un endpoint de envío, el formulario arma el mail y abre el cliente de correo del usuario.
export default function ContactForm({ email, labels }: Props) {
	const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);

		const name = String(data.get('name') ?? '').trim();
		const replyTo = String(data.get('email') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();

		if (!name || !replyTo || !message) {
			setStatus('error');
			return;
		}

		// TODO: reemplazar por un endpoint real (Astro action / Cloudflare + servicio de mail).
		const subject = `${labels.subject} ${name}`;
		const body = `${message}

—
${name}
${replyTo}`;
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setStatus('sent');
		form.reset();
	}

	if (status === 'sent') {
		return (
			<p className="rounded-lg border border-brand-500/40 bg-brand-500/10 p-4 text-brand-200">
				{labels.sentBefore}{' '}
				<a href={`mailto:${email}`} className="font-semibold underline">
					{email}
				</a>
				.
			</p>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="grid gap-4">
			<div className="grid gap-4 sm:grid-cols-2">
				<input
					type="text"
					name="name"
					placeholder={labels.name}
					className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-500 focus:outline-none"
				/>
				<input
					type="email"
					name="email"
					placeholder={labels.email}
					className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-500 focus:outline-none"
				/>
			</div>
			<textarea
				name="message"
				rows={4}
				placeholder={labels.message}
				className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-500 focus:outline-none"
			/>
			{status === 'error' && (
				<p className="text-sm text-red-400">{labels.error}</p>
			)}
			<button
				type="submit"
				className="justify-self-start rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-500"
			>
				{labels.submit}
			</button>
		</form>
	);
}
