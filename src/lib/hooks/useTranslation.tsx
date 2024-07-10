/*=============================================== useTranslation ===============================================*/

import { useState, useEffect } from "react"
import { detectLanguage } from "ts-utils-julseb"
import type { TranslateLang } from "../types"

let currentLanguage = detectLanguage() || "en"

/**
 * @description Hook to detect the language, and return translated content
 * @link https://documentation-components-react.vercel.app/helpers/hooks#useTranslation
 * @prop translations: [language: string]: { [key: string]: string }
 */

export function useTranslation(translations: TranslateLang) {
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
