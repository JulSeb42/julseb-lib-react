import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * ResetScroll component for automatically scrolling to the top of the page whenever the route path or search changes.
 *
 * @component
 * @description Scrolls to the top of the page every time the path changes. Add it in your PageLayout.
 * @see https://documentation-components-react.vercel.app/helpers/reset-scroll
 * @returns {null} This component does not render anything.
 *
 * @example
 * <ResetScroll />
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
