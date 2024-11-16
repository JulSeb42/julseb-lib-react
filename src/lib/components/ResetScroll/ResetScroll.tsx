/*=============================================== ResetScroll component ===============================================*/

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * @description Scrolls to the top of the page every time the path changes, add it in your PageLayout
 * @link https://documentation-components-react.vercel.app/helpers/reset-scroll
 */
export const ResetScroll = () => {
    const { pathname, search } = useLocation()

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
    }, [pathname, search])

    return null
}
