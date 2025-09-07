/**
 * @description Detect the user's language preference from localStorage or browser navigator.
 * This function checks for stored language preferences before falling back to browser settings.
 * Note: Only works in browser environments with window and localStorage available.
 *
 * @returns {string | null} The detected language code or null if detection fails
 *
 * @example
 * // With language stored in localStorage
 * detectLanguage() // Returns "fr" (if stored)
 *
 * @example
 * // Fallback to navigator language
 * detectLanguage() // Returns "en-US" (from navigator.language)
 *
 * @example
 * // No language detected
 * detectLanguage() // Returns null (in non-browser environment)
 */
export function detectLanguage() {
    if (window && typeof window !== "undefined") {
        if (localStorage.getItem("language") !== null) {
            return localStorage.getItem("language")
        } else if (localStorage.getItem("lang") !== null) {
            return localStorage.getItem("lang")
        } else {
            if (navigator && typeof navigator !== "undefined") {
                return navigator.language
            }
        }
    }
}
