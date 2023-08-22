/*=============================================== useTouchScreen ===============================================*/

import { useState, useLayoutEffect } from "react"

export function useTouchScreen(): boolean {
    const [isTouchScreen, setIsTouchScreen] = useState(false)

    useLayoutEffect(() => {
        const isTouchDevice = () => {
            return "ontouchstart" in window || navigator.maxTouchPoints > 0
        }

        setIsTouchScreen(isTouchDevice())
    }, [])

    return isTouchScreen
}
