import { useState, useEffect } from "react"
import { detectLanguage } from "@julseb-lib/utils"
import type { TranslateLang } from "../types"

/**
 * Hook to detect the language and return translated content with language switching functionality.
 *
 * @hook
 *
 * @example
 * const translations = {
 *   en: { greeting: 'Hello', goodbye: 'Goodbye' },
 *   fr: { greeting: 'Bonjour', goodbye: 'Au revoir' },
 *   es: { greeting: 'Hola', goodbye: 'Adiós' }
 * }
 *
 * const { translate, setLanguage, language, languages } = useTranslation(translations)
 *
 * return (
 *   <div>
 *     <p>{translate('greeting')}</p>
 *     <button onClick={() => setLanguage('fr')}>Switch to French</button>
 *   </div>
 * )
 *
 * @param {TranslateLang} translations - Object containing translations for each language
 * @param {object} translations[language] - Translation object for a specific language
 * @param {string} translations[language][key] - Translated string for a specific key
 *
 * @returns {object} Object containing translation utilities
 * @returns {function} returns.translate - Function to get translated text for a given key
 * @returns {string} returns.translate.key - Translation key to look up
 * @returns {function} returns.setLanguage - Function to change the current language
 * @returns {string} returns.setLanguage.lang - Language code to switch to
 * @returns {string} returns.language - Current active language code
 * @returns {Array<string>} returns.languages - Array of available language codes
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useTranslation
 */
export const useTranslation = (translations: TranslateLang) => {
	const [language, setLanguage] = useState<string>("en")
	const languages = Object.keys(translations)

	useEffect(() => {
		if (window && typeof window !== "undefined") {
			setLanguage(detectLanguage() ?? "en")
		}
	}, [language])

	const translate = (key: string) => translations?.[language!]?.[key]

	return {
		translate,
		setLanguage,
		language,
		languages,
	}
}
