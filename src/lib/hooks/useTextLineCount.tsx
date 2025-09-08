import { useState, useRef, useCallback, useEffect } from "react"

/**
 * Hook for calculating the number of visual lines text will occupy in a textarea or input element based on actual rendered dimensions and styling.
 *
 * @hook
 *
 * @example
 * const { visualLines, elementRef } = useTextLineCount("Long text content", 16)
 *
 * return (
 *   <textarea
 *     ref={elementRef}
 *     value={text}
 *     style={{ height: `${visualLines * 1.5}rem` }}
 *   />
 * )
 *
 * @param {string} text - The text content to measure for line count.
 * @param {number} [fontSize=16] - The font size in pixels for fallback calculations. Default: 16.
 *
 * @returns {{ visualLines: number; elementRef: React.RefObject<HTMLTextAreaElement | HTMLInputElement> }} Object containing the calculated visual line count and element ref to attach to the target element.
 *
 * @see https://doc-julseb-lib-react.vercel.app/hooks/use-text-line-count
 */
export const useTextLineCount = (text: string, fontSize = 16) => {
	const [visualLines, setVisualLines] = useState(1)
	const elementRef = useRef<HTMLTextAreaElement | HTMLInputElement | null>(
		null,
	)

	const measureLines = useCallback(() => {
		const element = elementRef.current
		if (!element || !text) {
			setVisualLines(1)
			return
		}

		// Get the actual computed width of the element
		const computedStyle = getComputedStyle(element)
		const paddingLeft = parseInt(computedStyle.paddingLeft) || 0
		const paddingRight = parseInt(computedStyle.paddingRight) || 0
		const borderLeft = parseInt(computedStyle.borderLeftWidth) || 0
		const borderRight = parseInt(computedStyle.borderRightWidth) || 0

		const actualWidth =
			element.offsetWidth -
			paddingLeft -
			paddingRight -
			borderLeft -
			borderRight

		if (actualWidth <= 0) {
			setVisualLines(1)
			return
		}

		try {
			// Create a hidden div that mimics the textarea styling
			const hiddenDiv = document.createElement("div")
			hiddenDiv.style.position = "absolute"
			hiddenDiv.style.visibility = "hidden"
			hiddenDiv.style.height = "auto"
			hiddenDiv.style.width = `${actualWidth}px`
			hiddenDiv.style.fontSize = computedStyle.fontSize || `${fontSize}px`
			hiddenDiv.style.fontFamily = computedStyle.fontFamily || "system-ui"
			hiddenDiv.style.lineHeight = computedStyle.lineHeight || "1.2"
			hiddenDiv.style.wordWrap = "break-word"
			hiddenDiv.style.whiteSpace = "pre-wrap"
			hiddenDiv.style.padding = "0"
			hiddenDiv.style.margin = "0"
			hiddenDiv.style.border = "none"

			document.body.appendChild(hiddenDiv)

			// Set the text content
			hiddenDiv.textContent = text

			// Calculate line count
			const elementHeight = hiddenDiv.offsetHeight
			const lineHeight =
				parseInt(getComputedStyle(hiddenDiv).lineHeight) ||
				fontSize * 1.2
			const calculatedLines = Math.max(
				1,
				Math.round(elementHeight / lineHeight),
			)

			// Cleanup
			document.body.removeChild(hiddenDiv)

			setVisualLines(calculatedLines)
		} catch (error) {
			console.warn("Element line count measurement failed:", error)
			setVisualLines(text.split("\n").length) // Fallback to simple newline count
		}
	}, [text, fontSize])

	useEffect(() => {
		// Small delay to ensure element is rendered and styles are applied
		const timer = setTimeout(measureLines, 50)
		return () => clearTimeout(timer)
	}, [measureLines])

	// Re-measure when element size might have changed
	useEffect(() => {
		const element = elementRef.current
		if (!element) return

		const resizeObserver = new ResizeObserver(() => {
			measureLines()
		})

		resizeObserver.observe(element)

		return () => {
			resizeObserver.disconnect()
		}
	}, [measureLines])

	return {
		visualLines,
		elementRef,
	}
}
