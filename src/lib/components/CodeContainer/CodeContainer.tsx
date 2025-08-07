import { useState, type FC } from "react"
import { Highlight, themes } from "prism-react-renderer"
import { BiClipboard, BiCheck } from "react-icons/bi"
import { ButtonIcon } from "../ButtonIcon"
import { clsx } from "../../utils"
import type { ILibCodeContainer } from "./types"

/**
 * A container component for displaying syntax-highlighted code blocks with copy-to-clipboard functionality.
 *
 * @component
 *
 * @example
 * <CodeContainer language="tsx" theme={themes.oneDark}>
 *   {`const foo = "bar"`}
 * </CodeContainer>
 *
 * @extends {Omit<HighlightProps, "children" | "code" | "language">}
 *
 * @prop {string} [props.children] - The code string to be highlighted and displayed. If starting with "$ ", it will be removed before copying. Default: undefined.
 * @prop {boolean} [props.showNumbers] Possible values: true, false. Default: false. - If true, shows the line numbers in the code block.
 * @prop {string} [props.language] Possible values: any valid Prism language string (e.g., "tsx", "js", "shell"). Default: "tsx". - The language for syntax highlighting.
 * @prop {string} [props.className] - Additional CSS classes to apply to the container.
 * @prop {...HighlightProps} [props.<other>] - All other props from HighlightProps except "children" and "code".
 *
 * @returns {JSX.Element} The rendered code block with syntax highlighting and a copy button.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/code-container
 */
export const CodeContainer: FC<ILibCodeContainer> = ({
	children,
	code,
	showNumbers,
	language = "tsx",
	className,
	...rest
}) => {
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
		<div
			className={clsx(
				"relative bg-[#282c34] p-6 no-scrollbar [&_*]:no-scrollbar",
				className,
			)}
		>
			<Highlight
				theme={themes.oneDark}
				language={language}
				code={children as any}
				{...rest}
			>
				{({ style, tokens, getLineProps, getTokenProps }) => (
					<pre
						style={style}
						className="relative max-w-full overflow-x-scroll no-scrollbar"
					>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line })}>
								{showNumbers && (
									<span className="mr-6">{i + 1}</span>
								)}

								{line.map((token, key) => (
									<span
										key={key}
										{...getTokenProps({ token })}
									/>
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>

			<ButtonIcon
				icon={
					hasCopied ? (
						<BiCheck size={16} />
					) : (
						<BiClipboard size={16} />
					)
				}
				className="top-2 right-2 absolute size-8"
				color={hasCopied ? "success" : "primary"}
				onClick={copyToClipboard}
			/>
		</div>
	)
}
