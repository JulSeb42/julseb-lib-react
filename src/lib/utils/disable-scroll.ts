/**
 * @description Disable page scrolling by setting body overflow to hidden.
 * This function prevents users from scrolling the page, useful for modal overlays.
 * Note: Only works in browser environments with document.body available.
 *
 * @returns {void}
 *
 * @example
 * // Disable scrolling when opening a modal
 * disableScroll()
 *
 * @example
 * // Use with modal state
 * if (isModalOpen) {
 *   disableScroll()
 * }
 */
export function disableScroll(): void {
	if (typeof window !== "undefined") {
		document.body.setAttribute(
			"data-scroll-position",
			window.scrollY.toString(),
		)
		document.body.style.overflow = "hidden"
		document.body.style.height = "100vh"
		const scrollPosition = window.scrollY
		document.body.style.top = `-${scrollPosition}px`
	}
}
