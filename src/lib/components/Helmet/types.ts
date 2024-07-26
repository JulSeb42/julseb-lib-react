/*=============================================== Helmet types ===============================================*/

import type { ReactNode } from "react"
import type { HelmetProps } from "react-helmet-async"

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
    children?: ReactNode
}
