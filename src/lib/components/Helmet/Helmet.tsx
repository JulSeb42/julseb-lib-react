import { Helmet as Meta } from "react-helmet"
import type { ILibHelmet } from "./types"

/**
 * @description Returns a Helmet component
 * @link https://documentation-components-react.vercel.app/components/helmet
 * @extends HelmetProps => imported from react-helmet
 * @prop title: string
 * @prop favicon?: string
 * @prop description?: string
 * @prop keywords?: string | Array<string>
 * @prop author?: string
 * @prop type?: string
 * @prop cover?: string
 * @prop siteName?: string
 * @prop language?: string
 * @prop children?: ReactChildren
 */
export const Helmet = ({
    title,
    favicon,
    description,
    keywords,
    author,
    type,
    cover,
    siteName,
    language = "en",
    children,
    ...rest
}: ILibHelmet) => {
    return (
        <Meta {...rest}>
            <title>{title}</title>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            {children && children}
            {favicon && <link rel="icon" href={favicon} />}
            {description && <meta name="description" content={description} />}
            {keywords && (
                <meta
                    name="keywords"
                    content={
                        typeof keywords === "string"
                            ? keywords
                            : keywords?.join(", ")
                    }
                />
            )}
            {author && <meta name="author" content={author} />}
            <meta property="og:title" content={title} />
            {type && <meta property="og:type" content={type} />}
            {cover && <meta property="og:image" content={cover} />}
            {siteName && <meta property="og:site_name" content={siteName} />}

            <meta property="og:locale" content={language} />
            <html lang={language} />
        </Meta>
    )
}
