/*=============================================== useMinWidth ===============================================*/

import { useState, useEffect } from "react"

/**
 * @description Hook to detect if an element is larger than a set width
 * @link https://documentation-components-react.vercel.app/helpers/hooks#useMinWidth
 * @prop width: number
 */

export function useMinWidth(width: number): Partial<boolean | undefined> {
    const [isMin, setIsMin] = useState<undefined | boolean>(undefined)

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
