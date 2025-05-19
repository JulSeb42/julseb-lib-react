import { useState, useEffect } from "react"
import { detectLanguage } from "@julseb-lib/utils"
import type { TranslateLang } from "../types"

let currentLanguage = detectLanguage() || "en"

/**
 * useTranslation is a hook to detect the language and return translated content.
 *
 * @function
 * @param {TranslateLang} translations - An object containing translations for each language, structured as { [language: string]: { [key: string]: string } }.
 * @returns {{
 *   translate: (key: string) => string | undefined,
 *   setLanguage: (lang: string) => void,
 *   language: string,
 *   languages: string[]
 * }} An object with a translate function, language setter, current language, and available languages.
 * @see https://documentation-components-react.vercel.app/helpers/hooks#useTranslation
 *
 * @example
 * const { translate, setLanguage, language, languages } = useTranslation({
 *   en: { hello: "Hello" },
 *   fr: { hello: "Bonjour" }
 * })
 * translate("hello") // "Hello" or "Bonjour" depending on language
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
