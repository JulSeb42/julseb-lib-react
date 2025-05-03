import { useState, useEffect } from "react"

/**
 * @description Hook to detect if an element is larger than a set width
 * @link https://documentation-components-react.vercel.app/helpers/hooks#useMinWidth
 * @argument width: number
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
