import { type FC } from "react"
import Markdown from "markdown-to-jsx"
import { clsx, libOptionsMarkdown } from "../../utils"
import type { ILibMarkdownContainer } from "./types"

/**
 * MarkdownContainer component for rendering markdown content with customizable parsing options and styling.
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
 * @prop {string} [props.className] - Additional CSS classes to apply to the markdown container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the markdown container element.
 * @prop {string} [props.children] - Markdown content to parse and render.
 * @prop {object} [props.options=libOptionsMarkdown] - Markdown parsing options and configurations.
 *
 * @returns {JSX.Element} The rendered MarkdownContainer component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/markdown-container
 */
export const MarkdownContainer: FC<ILibMarkdownContainer> = ({
	className,
	ref,
	children,
	options = libOptionsMarkdown,
	...rest
}) => {
	return (
		<Markdown
			// @ts-ignore
			ref={ref as any}
			className={clsx(
				"flex flex-col items-stretch gap-3",
				"markdown-container",
				className,
			)}
			options={options}
			{...rest}
		>
			{children as any}
		</Markdown>
	)
}
