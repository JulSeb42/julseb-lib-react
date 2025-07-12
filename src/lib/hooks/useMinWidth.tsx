import { useState, useEffect } from "react"

/**
 * Hook to detect if the viewport width is greater than or equal to a specified width breakpoint.
 *
 * @hook
 *
 * @example
 * const isDesktop = useMinWidth(1024)
 * const isTablet = useMinWidth(768)
 *
 * if (isDesktop) {
 *   // Render desktop layout
 * }
 *
 * @param {number} width - The minimum width breakpoint to check against
 *
 * @returns {boolean} Whether the current viewport width is greater than or equal to the specified width
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useMinWidth
 */
export const useMinWidth = (width: number): boolean => {
	const [isMin, setIsMin] = useState<boolean>(false)

	useEffect(() => {
		const detectSize = () => {
			if (window.innerWidth >= width) {
				setIsMin(true)
			} else {
				setIsMin(false)
			}
		}

		detectSize()

		window.addEventListener("resize", () => detectSize())
	}, [width])

	return isMin
}
