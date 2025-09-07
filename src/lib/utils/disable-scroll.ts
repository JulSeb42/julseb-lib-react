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
    const body = document.body

    body.style.height = "100vh"
    body.style.overflow = "hidden"

    return
}
