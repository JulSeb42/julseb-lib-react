import { useState, useEffect } from "react"

/**
 * Hook to detect if the viewport width is smaller than or equal to a specified width breakpoint.
 *
 * @hook
 *
 * @example
 * const isMobile = useMaxWidth(768)
 * const isTablet = useMaxWidth(1024)
 *
 * if (isMobile) {
 *   // Render mobile layout
 * }
 *
 * @param {number} width - The maximum width breakpoint to check against
 *
 * @returns {boolean} Whether the current viewport width is smaller than or equal to the specified width
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useMaxWidth
 */
export const useMaxWidth = (width: number): boolean => {
	const [isMax, setIsMax] = useState<boolean>(false)

	useEffect(() => {
		const detectSize = () => {
			if (window.innerWidth <= width) {
				setIsMax(true)
			} else {
				setIsMax(false)
			}
		}

		detectSize()

		window.addEventListener("resize", () => detectSize())
	}, [width])

	return isMax
}
