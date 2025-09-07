/**
 * @description Scroll to the top of the page smoothly.
 * This function scrolls the window to the top position (0, 0).
 * Note: Only works in browser environments where window is available.
 *
 * @returns {void}
 *
 * @example
 * // Scroll to top when button is clicked
 * scrollToTop()
 *
 * @example
 * // Use in event handler
 * button.addEventListener('click', scrollToTop)
 *
 * @example
 * // Conditional scroll to top
 * if (shouldScrollToTop) {
 *   scrollToTop()
 * }
 */
export function scrollToTop(): void {
    if (typeof window !== "undefined") {
        return window.scrollTo(0, 0)
    }
}
