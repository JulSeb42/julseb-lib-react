import { useState } from "react"

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean>

/**
 * @description Hook to trigger a function to copy content
 * @link https://doc-julseb-lib-react.vercel.app/helpers/hooks#useCopyToClipboard
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
