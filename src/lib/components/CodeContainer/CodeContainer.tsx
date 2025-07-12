import { useState, type FC } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
// @ts-ignore
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark.js"
import { BiCheck, BiClipboard } from "react-icons/bi"
import { ButtonIcon } from "../ButtonIcon"
import { clsx, genRingColor, genTextAllColor } from "../../utils"
import type { ILibCodeContainer } from "./types"

/**
 * CodeContainer component for displaying syntax-highlighted code with optional copy functionality.
 *
 * @component
 *
 * @example
 * <CodeContainer>
 *   const hello = "world";
 *   console.log(hello);
 * </CodeContainer>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the code container.
 * @prop {React.ElementType} [props.element] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the code container element.
 * @prop {React.ReactNode} [props.children] - Code content to display and highlight.
 * @prop {object} [props.highlighterProps] - Additional props to pass to the syntax highlighter.
 * @prop {LibAllColors} [props.textColor] - Text color for the code content.
 * @prop {LibAllColors} [props.backgroundColor] - Background color for the code content.
 * @prop {object} [props.style=atomOneDark] - Custom styles for the syntax highlighter.
 * @prop {boolean} [props.hideCopyButton] - Whether to hide the copy to clipboard button.
 * @prop {object} [props.tooltipTexts] - Custom tooltip texts for copy button states.
 * @prop {object} [props.icons] - Custom icons for copy button states.
 *
 * @returns {JSX.Element} The rendered CodeContainer component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/code-container
 */
export const CodeContainer: FC<ILibCodeContainer> = ({
	className,
	element,
	ref,
	children,
	highlighterProps,
	textColor,
	backgroundColor,
	style = atomOneDark,
	hideCopyButton,
	tooltipTexts,
	icons,
	...rest
}) => {
	const Element = element ?? (textColor || backgroundColor ? "pre" : "div")

	const [hasCopied, setHasCopied] = useState(false)

	const copyToClipboard = () => {
		if (children) {
			let copyString = children.toString()

			if (copyString[0] === "$") {
				copyString = copyString.replace("$ ", "")
			}

			navigator.clipboard.writeText(copyString)
			setHasCopied(true)
		}

		setTimeout(() => setHasCopied(false), 1000)
	}

	return (
		<Element
			ref={ref}
			className={clsx(
				"relative outline-none",
				"code-container-wrapper",
				"[&>pre]:bg-gray-800! [&>pre]:p-4!",
				textColor && genTextAllColor[textColor],
				genRingColor["primary"],
				className,
			)}
			{...rest}
		>
			<SyntaxHighlighter style={style}>
				{children as any}
			</SyntaxHighlighter>

			{!hideCopyButton && (
				<ButtonIcon
					className={clsx("size-8", "copy-button")}
					onClick={copyToClipboard}
					icon={
						hasCopied
							? (icons?.copied ?? <BiCheck size={16} />)
							: (icons?.copy ?? <BiClipboard size={16} />)
					}
					tooltip={
						hasCopied
							? (tooltipTexts?.copied ?? "Copied!")
							: (tooltipTexts?.copy ?? "Copy")
					}
					color={hasCopied ? "success" : "primary"}
					showTooltip={{ className: "absolute top-4 right-4" }}
				/>
			)}
		</Element>
	)
}
