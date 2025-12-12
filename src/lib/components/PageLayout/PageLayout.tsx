import { isValidElement, type FC } from "react"
import { Meta } from "../Meta"
import { Header } from "../Header"
import { Wrapper } from "../Wrapper"
import { Main } from "../Main"
import { Footer } from "../Footer"
import type { ILibPageLayout } from "./types"
import type { ILibHeader } from "../Header/types"
import type { ILibFooter } from "../Footer/types"

/**
 * PageLayout component for creating a complete page structure with optional header, footer, wrapper, and meta tags.
 *
 * @component
 *
 * @example
 * <PageLayout
 *   meta={{ title: "My Page", description: "Page description" }}
 *   header={{ logo: <Logo />, nav: <Nav /> }}
 *   footer={{ logo: <Logo />, items: [<Link href="/privacy">Privacy</Link>] }}
 *   wrapperProps={{ maxWidth: "px" }}
 *   mainProps={{ className: "large" }}
 * >
 *   <h1>Page Content</h1>
 * </PageLayout>
 *
 * @prop {React.ReactNode} [props.children] - The main content to be rendered inside the page layout.
 * @prop {ILibMeta} [props.meta] - Meta component props for HTML head metadata including SEO and social media tags.
 * @prop {ILibHeader} [props.header] - Header component props for displaying the page header with logo and navigation.
 * @prop {ILibWrapper} [props.wrapperProps] - Wrapper component props for controlling the page container styling and layout.
 * @prop {ILibMain} [props.mainProps] - Main component props for styling the main content area.
 * @prop {ILibFooter} [props.footer] - Footer component props for displaying the page footer with links and logo.
 * @prop {boolean} [props.noWrapper] - Whether to skip rendering the Wrapper component around the main content.
 * @prop {boolean} [props.noMain] - Whether to skip rendering the Main component wrapper around children.
 *
 * @returns {JSX.Element} The rendered PageLayout component with complete page structure.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/page-layout
 */
const PageLayout: FC<ILibPageLayout> = ({
	children,
	meta,
	header,
	wrapperProps,
	mainProps,
	footer,
	noWrapper,
	noMain,
}) => {
	return (
		<>
			{meta && <Meta {...meta} />}

			{header &&
				(isValidElement(header) ? (
					header
				) : (
					<Header {...(header as ILibHeader)} />
				))}

			{!noWrapper ? (
				<Wrapper {...wrapperProps}>
					{!noMain ? (
						<Main {...mainProps}>{children}</Main>
					) : (
						children
					)}
				</Wrapper>
			) : (
				children
			)}

			{footer &&
				(isValidElement(footer) ? (
					footer
				) : (
					<Footer {...(footer as ILibFooter)} />
				))}
		</>
	)
}
export default PageLayout
