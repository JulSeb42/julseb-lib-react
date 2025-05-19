import { useState, useEffect } from "react"

/**
 * useMinWidth is a hook to detect if the window width is greater than or equal to a specified value.
 *
 * @function
 * @param {number} width - The minimum width to check against (in pixels).
 * @returns {boolean} Returns true if the window width is greater than or equal to the specified width, otherwise false.
 * @see https://documentation-components-react.vercel.app/helpers/hooks#useMinWidth
 *
 * @example
 * const isDesktop = useMinWidth(1024)
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
