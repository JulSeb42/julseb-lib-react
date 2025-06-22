import { useState, useEffect } from "react"
import { detectLanguage } from "@julseb-lib/utils"
import type { TranslateLang } from "../types"

let currentLanguage = detectLanguage() || "en"

/**
 * @description Hook to detect the language, and return translated content
 * @link https://doc-julseb-lib-react.vercel.app/helpers/hooks#useTranslation
 * @argument translations: [language: string]: { [key: string]: string }
 */
export const useTranslation = (translations: TranslateLang) => {
	const [language, setLanguage] = useState<string>(currentLanguage)
	const languages = Object.keys(translations)

	useEffect(() => {
		currentLanguage = language || "en"
	}, [language])

	const translate = (key: string) => translations?.[language]?.[key]

	return {
		translate,
		setLanguage,
		language,
		languages,
	}
}
