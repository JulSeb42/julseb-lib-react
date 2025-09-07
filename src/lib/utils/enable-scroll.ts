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
    const body = document.body

    body.style.height = ""
    body.style.overflow = ""

    return
}
