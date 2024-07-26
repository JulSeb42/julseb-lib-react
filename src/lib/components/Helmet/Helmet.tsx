/*=============================================== Helmet component ===============================================*/

import { Helmet as Meta, HelmetData } from "react-helmet-async"
import {} from "ts-utils-julseb"
import {} from "../../"
import type { ILibHelmet } from "./types"

const helmetData = new HelmetData({})

/**
 * @description Returns a Helmet component
 * @link https://documentation-components-react.vercel.app/components/helmet
 * @extends HelmetProps => imported from react-helmet-async
 * @prop data-testid?: string
 */

export function Helmet({
    title,
    favicon,
    description,
    keywords,
    author,
    type,
    cover,
    siteName,
    language,
    children,
    ...rest
}: ILibHelmet) {
    return (
        <Meta helmetData={helmetData} {...rest}>
            <title>{title}</title>
            <link rel="icon" href={favicon} />
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta name="description" content={description} />
            <meta
                name="keywords"
                content={
                    typeof keywords === "string"
                        ? keywords
                        : keywords?.join(", ")
                }
            />
            <meta name="author" content={author} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={cover} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content={language} />

            <html lang={language} />

            {children}
        </Meta>
    )
}
