import { useState, useRef, useCallback, useEffect } from "react"

/**
 * Hook for calculating the number of lines text will occupy in a container with given dimensions and font properties.
 *
 * @hook
 *
 * @example
 * const lineCount = useTextLineCount(
 *   "This is a long text that will wrap across multiple lines",
 *   300,
 *   16,
 *   "Arial"
 * )
 *
 * @param {string} text - The text content to measure for line count.
 * @param {number} containerWidth - The width of the container in pixels.
 * @param {number} [fontSize=16] - The font size in pixels. Default: 16.
 * @param {string} [fontFamily="lato"] - The font family to use for measurement. Default: "system-ui".
 *
 * @returns {number} The number of lines the text will occupy.
 *
 * @see https://doc-julseb-lib-react.vercel.app/hooks/use-text-line-count
 */
export const useTextLineCount = (
	text: string,
	containerWidth: number,
	fontSize = 16,
	fontFamily = "lato",
) => {
	const [lineCount, setLineCount] = useState(1)
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	const measureLines = useCallback(() => {
		if (!canvasRef.current) {
			canvasRef.current = document.createElement("canvas")
		}

		const canvas = canvasRef.current
		const context = canvas.getContext("2d")
		if (!context || !text || containerWidth <= 0) {
			setLineCount(1)
			return
		}

		context.font = `${fontSize}px ${fontFamily}`

		const lines = text.split("\n")
		let totalLines = 0

		lines.forEach(line => {
			if (line.length === 0) {
				totalLines += 1
				return
			}

			const words = line.split(" ")
			let currentLine = ""
			let linesForThisSegment = 1

			for (const word of words) {
				const testLine = currentLine ? `${currentLine} ${word}` : word
				const testWidth = context.measureText(testLine).width

				if (testWidth > containerWidth && currentLine) {
					linesForThisSegment++
					currentLine = word
				} else {
					currentLine = testLine
				}
			}

			totalLines += linesForThisSegment
		})

		setLineCount(Math.max(1, totalLines))
	}, [text, containerWidth, fontSize, fontFamily])

	useEffect(() => {
		measureLines()
	}, [measureLines])

	return lineCount
}
