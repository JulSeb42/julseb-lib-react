/*=============================================== useMaxWidth ===============================================*/

import { useState, useEffect } from "react"

export function useMaxWidth(width: number): Partial<undefined | boolean> {
    const [isMax, setIsMax] = useState<undefined | boolean>(undefined)

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
