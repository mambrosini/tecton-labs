import { en } from './en';
import { es, type Dictionary } from './es';

const dictionaries = { es, en } satisfies Record<string, Dictionary>;

export type Locale = keyof typeof dictionaries;
export const defaultLocale: Locale = 'es';

function isLocale(value: string | undefined): value is Locale {
	return value !== undefined && value in dictionaries;
}

export function useTranslations(locale: string | undefined): Dictionary {
	return dictionaries[isLocale(locale) ? locale : defaultLocale];
}
