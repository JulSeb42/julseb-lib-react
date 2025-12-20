import { type FC } from "react"
import Markdown from "react-markdown"
import { libMarkdownComponents } from "../../utils"
import type { ILibMarkdownContainer } from "./types"

/**
 * MarkdownContainer component for rendering markdown content with customizable parsing options and styling.
 *
 * Renders Markdown using the `react-markdown` library, allowing you to override default Markdown elements
 * with custom React components via the `components` prop. Supports additional configuration such as
 * filtering elements and transforming URLs.
 *
 * @component
 *
 * @example
 * <MarkdownContainer>
 *   # Hello World
 *   This is **bold** and *italic* text.
 * </MarkdownContainer>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [children] - Markdown content to parse and render.
 * @prop {object} [components=markdownComponents] - Custom React components to override default Markdown rendering.
 * @prop {(element: React.ElementType, props: any) => boolean} [allowElement] - Function to filter which elements are allowed.
 * @prop {(url: string, key: string, node: any) => string} [urlTransform] - Function to transform URLs in Markdown.
 * @prop {object} [rest] - Additional props spread to the underlying Markdown component.
 *
 * @returns {JSX.Element} The rendered MarkdownContainer component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/markdown-container
 */
export const MarkdownContainer: FC<ILibMarkdownContainer> = ({
	children,
	components = libMarkdownComponents,
	allowElement,
	urlTransform,
	...rest
}) => {
	return (
		<Markdown
			components={components}
			allowElement={allowElement}
			urlTransform={urlTransform}
			{...rest}
		>
			{children as any}
		</Markdown>
	)
}
