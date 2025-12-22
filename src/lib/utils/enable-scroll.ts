/**
 * @description Enable page scrolling by resetting body overflow and height styles.
 * This function restores normal scrolling behavior, typically used after disableScroll().
 * Note: Only works in browser environments with document.body available.
 *
 * @returns {void}
 *
 * @example
 * // Enable scrolling when closing a modal
 * enableScroll()
 *
 * @example
 * // Use with modal state
 * if (!isModalOpen) {
 *   enableScroll()
 * }
 */
export function enableScroll(): void {
	if (typeof window !== "undefined") {
		const scrollPosition = document.body.getAttribute(
			"data-scroll-position",
		)

		document.body.style.overflow = ""
		document.body.removeAttribute("data-scroll-position")

		if (scrollPosition) {
			window.scrollTo(0, parseInt(scrollPosition))
		}
	}
}
