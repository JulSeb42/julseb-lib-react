import type { FC } from "react"
import type { ILibMeta } from "./types"

/**
 * Meta component for setting document metadata such as title, description, favicon, keywords, author, and Open Graph tags.
 *
 * @component
 * @param {Object} props - Meta props.
 * @param {React.ReactNode} [props.children] - Additional meta or link tags to include.
 * @param {string} [props.title] - Document title.
 * @param {string} [props.favicon] - URL to the favicon.
 * @param {string} [props.description] - Meta description for SEO.
 * @param {string[]} [props.keywords] - Array of keywords for SEO.
 * @param {string} [props.author] - Author of the document.
 * @param {string} [props.type] - Open Graph type (e.g., "website", "article").
 * @param {string} [props.cover] - Open Graph image URL.
 * @param {string} [props.siteName] - Open Graph site name.
 * @param {string} [props.language] - Document language (used for <html lang=""> and og:locale).
 * @returns {JSX.Element} The rendered meta tags.
 *
 * @see https://documentation-components-react.vercel.app/components/meta
 * @example
 * <Meta
 *   title="My Page"
 *   description="This is my page"
 *   keywords={["react", "meta", "seo"]}
 *   author="Julien Sebag"
 *   favicon="/favicon.ico"
 *   type="website"
 *   cover="/cover.png"
 *   siteName="My Site"
 *   language="en"
 * />
 */
export const Meta: FC<ILibMeta> = ({
	children,
	title,
	favicon,
	description,
	keywords,
	author,
	type,
	cover,
	siteName,
	language,
}) => {
	return (
		<>
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
			{language && <meta property="og:locale" content={language} />}
		</>
	)
}
