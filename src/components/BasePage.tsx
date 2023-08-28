/*=============================================== BasePage ===============================================*/

import { type ReactNode } from "react"
import { Helmet } from "react-helmet"

import { ResetScroll } from "./ResetScroll"
import { SITE_DATA } from "../data"

export interface BasePageProps {
    title: string
    children?: ReactNode | ReactNode[]
}

export function BasePage({ title, children }: BasePageProps) {
    return (
        <>
            <Helmet>
                <title>
                    {title} | {SITE_DATA.TITLE}
                </title>
                <link rel="icon" href={SITE_DATA.FAVICON} />
            </Helmet>

            <ResetScroll />

            {children}
        </>
    )
}
