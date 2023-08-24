/*=============================================== BasePage ===============================================*/

import { useEffect, type ReactNode } from "react"
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"

import { SITE_DATA } from "../data"

export interface BasePageProps {
    title: string
    children?: ReactNode | ReactNode[]
}

export function BasePage({ title, children }: BasePageProps) {
    const { pathname, search } = useLocation()

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
    }, [pathname, search])

    return (
        <>
            <Helmet>
                <title>
                    {title} | {SITE_DATA.TITLE}
                </title>
                <link rel="icon" href={SITE_DATA.FAVICON} />
            </Helmet>

            {children}
        </>
    )
}
