/*=============================================== Helmet types ===============================================*/

import type { HelmetProps } from "react-helmet-async"
import type { ReactChildren } from "../../types"

export interface ILibHelmet extends HelmetProps {
    title: string
    favicon?: string
    description?: string
    keywords?: string | Array<string>
    author?: string
    type?: string
    cover?: string
    siteName?: string
    language?: string
    children?: ReactChildren
}
