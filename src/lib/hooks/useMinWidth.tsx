/*=============================================== useMinWidth ===============================================*/

import { useState, useEffect } from "react"

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
