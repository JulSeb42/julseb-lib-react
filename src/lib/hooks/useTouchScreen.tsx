/*=============================================== useTouchScreen ===============================================*/

import { useState, useLayoutEffect } from "react"

/**
 * @description Hook to detect if the device is a touch screen
 * @link https://documentation-components-react.vercel.app/helpers/hooks#useTouchScreen
 */

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
