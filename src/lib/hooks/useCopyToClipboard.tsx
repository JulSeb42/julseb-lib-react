import { useState } from "react"

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean>

/**
 * Hook to copy text to clipboard and track the copied value state.
 *
 * @hook
 *
 * @example
 * const [copiedText, copy] = useCopyToClipboard()
 *
 * const handleCopy = async () => {
 *   const success = await copy('Hello, World!')
 *   if (success) {
 *     console.log('Copied:', copiedText)
 *   }
 * }
 *
 * @returns {[CopiedValue, CopyFn]} Array containing the last copied text and copy function
 * @returns {string | null} returns[0] - The last successfully copied text, or null if no text copied or copy failed
 * @returns {function} returns[1] - Async function to copy text to clipboard
 * @returns {string} returns[1].text - Text to copy to clipboard
 * @returns {Promise<boolean>} returns[1].Promise - Promise that resolves to true if copy succeeded, false otherwise
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useCopyToClipboard
 */
export const useCopyToClipboard = (): [CopiedValue, CopyFn] => {
	const [copiedText, setCopiedText] = useState<CopiedValue>(null)

	const copy: CopyFn = async text => {
		if (!navigator?.clipboard) {
			console.warn("Clipboard not supported")
			return false
		}

		try {
			await navigator.clipboard.writeText(text)
			setCopiedText(text)
			return true
		} catch (error) {
			console.warn("Copy failed", error)
			setCopiedText(null)
			return false
		}
	}

	return [copiedText, copy]
}
