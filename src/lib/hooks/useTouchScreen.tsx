import { useState, useLayoutEffect } from "react"

/**
 * Hook to detect if the current device supports touch screen interaction.
 *
 * @hook
 *
 * @example
 * const isTouchScreen = useTouchScreen()
 *
 * if (isTouchScreen) {
 *   // Render touch-optimized UI
 *   return <TouchOptimizedComponent />
 * }
 *
 * return <DesktopComponent />
 *
 * @returns {boolean} Whether the current device supports touch screen interaction
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useTouchScreen
 */
export const useTouchScreen = (): boolean => {
	const [isTouchScreen, setIsTouchScreen] = useState<boolean>(false)

	useLayoutEffect(() => {
		const isTouchDevice = () => {
			return "ontouchstart" in window || navigator.maxTouchPoints > 0
		}

		setIsTouchScreen(isTouchDevice())
	}, [])

	return isTouchScreen
}
