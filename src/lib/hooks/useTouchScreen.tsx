import { useState, useLayoutEffect } from "react"

/**
 * useTouchScreen is a hook to detect if the device is a touch screen.
 *
 * @function
 * @returns {boolean} Returns true if the device supports touch events, otherwise false.
 * @see https://documentation-components-react.vercel.app/helpers/hooks#useTouchScreen
 *
 * @example
 * const isTouch = useTouchScreen()
 */
export const useTouchScreen = (): boolean => {
    const [isTouchScreen, setIsTouchScreen] = useState<boolean>(false)

    useLayoutEffect(() => {
        const isTouchDevice = () => {
            return "ontouchstart" in window || navigator.maxTouchPoints > 0
        }

        setIsTouchScreen(isTouchDevice())
    }, [])

    return isTouchScreen
}
