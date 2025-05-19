import { useState, useEffect } from "react"

/**
 * useMaxWidth is a hook to detect if the window width is smaller than or equal to a specified value.
 *
 * @function
 * @param {number} width - The maximum width to check against (in pixels).
 * @returns {boolean} Returns true if the window width is less than or equal to the specified width, otherwise false.
 * @see https://documentation-components-react.vercel.app/helpers/hooks#useMaxWidth
 *
 * @example
 * const isMobile = useMaxWidth(768)
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
