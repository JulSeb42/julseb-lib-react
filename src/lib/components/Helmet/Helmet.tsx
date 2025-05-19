import type { FC } from "react"
import { Helmet as Meta, HelmetData } from "react-helmet-async"
import type { ILibHelmet } from "./types"

const helmetData = new HelmetData({})

/**
 * Helmet component for managing changes to the document head, such as title, meta tags, and favicon.
 *
 * @component
 * @extends HelmetProps (from react-helmet-async)
 * @param {Object} props - Helmet props.
 * @param {string} props.title - Page title.
 * @param {string} [props.favicon] - URL for the favicon.
 * @param {string} [props.description] - Meta description for the page.
 * @param {string | Array<string>} [props.keywords] - Meta keywords for the page.
 * @param {string} [props.author] - Author of the page.
 * @param {string} [props.type] - Open Graph type.
 * @param {string} [props.cover] - Open Graph image URL.
 * @param {string} [props.siteName] - Open Graph site name.
 * @param {string} [props.language="en"] - Language of the document.
 * @param {ReactNode} [props.children] - Additional elements to include in the head.
 * @returns {JSX.Element} The rendered Helmet component.
 *
 * @example
 * <Helmet
 *   title="My Page"
 *   favicon="/favicon.ico"
 *   description="This is my page"
 *   keywords={["react", "seo"]}
 *   author="Julien Sebag"
 *   type="website"
 *   cover="/cover.jpg"
 *   siteName="MySite"
 *   language="en"
 * />
 */
export const Helmet: FC<ILibHelmet> = ({
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
}) => {
    return (
        <Meta helmetData={helmetData} {...rest}>
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
                <meta name="keywords" content={keywords?.join(", ")} />
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
