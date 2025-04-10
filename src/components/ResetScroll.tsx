import { useEffect } from "react"
import { useLocation } from "react-router-dom"

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
