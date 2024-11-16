/*=============================================== BasePage ===============================================*/

import { Helmet } from "../lib"
import { ResetScroll } from "./ResetScroll"
import { SITE_DATA } from "../data"
import type { ReactChildren } from "../lib/types"

export interface BasePageProps {
    title: string
    children?: ReactChildren
}

export const BasePage = ({ title, children }: BasePageProps) => {
    return (
        <>
            <Helmet
                title={`${title} | ${SITE_DATA.TITLE}`}
                favicon={SITE_DATA.FAVICON}
            />

            <ResetScroll />

            {children}
        </>
    )
}
