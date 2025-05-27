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
 * @param {string} [props.url] - Canonical URL for the page.
 * @param {string} [props.email] - Contact email for the page.
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
 *   url="https://mysite.com"
 *   email="me@mysite.com"
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
	url,
	email,
}) => {
	return (
		<>
			<title>{title}</title>
			<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta name="description" content={description} />
			<link rel="shortcut icon" href={favicon} type="image/x-icon" />
			<link rel="icon" href={favicon} />
			<meta name="author" content={author} />
			<meta name="keywords" content={keywords?.join(",")} />

			<meta name="application-name" content={siteName} />
			<meta name="referrer" content="origin" />
			<meta name="creator" content={author} />
			<meta name="publisher" content={author} />
			<meta name="category" content={type} />

			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content={type} />
			<meta property="og:image" content={cover} />
			<meta property="og:site_name" content={siteName} />
			<meta property="og:locale" content={language} />
			<meta property="og:url" content={url} />
			<meta property="og:site_name" content={siteName} />
			<meta property="og:locale" content={language} />
			<meta property="og:image" content={cover} />
			<meta property="og:email" content={email} />
			<meta property="og:type" content={type} />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content={url} />
			<meta name="twitter:creator" content={author} />
			<meta name="twitter:title" content={siteName} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={cover} />

			{children}
		</>
	)
}
