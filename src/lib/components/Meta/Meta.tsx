import { type FC } from "react"
import type { ILibMeta } from "./types"

/**
 * Meta component for managing HTML head metadata including SEO, Open Graph, and Twitter Card properties.
 *
 * @component
 *
 * @example
 * <Meta
 *   title="My Website"
 *   description="A description of my website"
 *   favicon="/favicon.ico"
 *   cover="/og-image.jpg"
 *   siteName="My Site"
 *   author="John Doe"
 *   url="https://mywebsite.com"
 * />
 *
 * @extends ILibMeta
 *
 * @prop {React.ReactNode} [props.children] - Additional meta tags or head elements to include.
 * @prop {string} [props.title] - Page title for the document and social media.
 * @prop {string} [props.favicon] - URL path to the favicon icon file.
 * @prop {string} [props.description] - Page description for SEO and social media.
 * @prop {string} [props.generator] - Name of the generator used to create the page.
 * @prop {string[]} [props.keywords] - Array of keywords for SEO purposes.
 * @prop {string} [props.author] - Author name for the page content.
 * @prop {string} [props.authorUrl] - URL to the author's profile or website.
 * @prop {string} [props.publisher] - Publisher name for the content.
 * @prop {string} [props.type="website"] - Open Graph type. Possible values: "website", "article". Default: "website".
 * @prop {string} [props.cover] - URL to the cover image for social media sharing.
 * @prop {string} [props.siteName] - Name of the website or application.
 * @prop {string} [props.language] - Language locale code (e.g., "en-US").
 * @prop {string} [props.url] - Canonical URL of the page.
 * @prop {string} [props.email] - Contact email address.
 * @prop {string} [props.creator] - Creator name for the content.
 * @prop {string} [props.manifest] - URL path to the web app manifest file.
 * @prop {string} [props.category] - Category classification for the content.
 * @prop {string} [props.twitterCard="summary"] - Twitter Card type. Possible values: "summary", "summary_large_image". Default: "summary".
 * @prop {string} [props.appleTouchIcon] - URL path to the Apple touch icon file.
 * @prop {string} [props.themeColor] - Theme color for the browser interface.
 *
 * @returns {JSX.Element} The rendered Meta component with HTML head elements.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/meta
 */
const Meta: FC<ILibMeta> = ({
	children,
	title,
	favicon,
	description,
	generator,
	keywords,
	author,
	authorUrl,
	publisher,
	type = "website",
	cover,
	siteName,
	language,
	url,
	email,
	creator,
	manifest,
	category,
	twitterCard = "summary",
	appleTouchIcon,
	themeColor,
	appName,
}) => {
	return (
		<>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			{title && (
				<>
					<title>{title}</title>
					<meta property="og:title" content={title} />
					<meta name="twitter:title" content={title} />
				</>
			)}
			{description && (
				<>
					<meta name="description" content={description} />
					<meta property="og:description" content={description} />
					<meta name="twitter:description" content={description} />
				</>
			)}
			{siteName && (
				<>
					<meta name="application-name" content={siteName} />
					<meta property="og:site_name" content={siteName} />
				</>
			)}
			{author && (
				<>
					<meta name="author" content={author} />
					<meta name="twitter:creator" content={author} />
				</>
			)}
			{url && (
				<>
					<meta property="og:url" content={url} />
					<meta name="twitter:site" content={url} />
				</>
			)}
			{cover && (
				<>
					<meta property="og:image" content={cover} />
					<meta name="twitter:image" content={cover} />
				</>
			)}
			{appName && <meta name="application-name" content={appName} />}
			{authorUrl && <link rel="author" href={authorUrl} />}
			{manifest && <link rel="manifest" href={manifest} />}
			{generator && <meta name="generator" content={generator} />}
			{keywords && <meta name="keywords" content={keywords?.join(",")} />}
			{creator && <meta name="creator" content={creator} />}
			{publisher && <meta name="publisher" content={publisher} />}
			{category && <meta name="category" content={category} />}
			{language && <meta property="og:locale" content={language} />}
			{email && <meta property="og:email" content={email} />}
			{type && <meta property="og:type" content={type} />}
			{twitterCard && <meta name="twitter:card" content={twitterCard} />}
			{favicon && <link rel="icon" href={favicon} />}
			{appleTouchIcon && (
				<link rel="apple-touch-icon" href={appleTouchIcon} />
			)}
			{themeColor && <meta name="theme-color" content={themeColor} />}
			{children}
		</>
	)
}

export default Meta
