import { useState, type FC } from "react"
import { Text } from "../Text"
import { Button } from "../Button"
import { clsx } from "../../utils"
import type { ILibCollapsedText } from "./types"

/**
 * CollapsedText is a component that displays text content with the ability to expand or collapse it, showing a limited number of lines by default and a button to toggle visibility.
 *
 * @component
 *
 * @example
 * <CollapsedText collapsedMaxLines={2} texts={{ read: "Show", more: "more", less: "less" }}>
 *   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * </CollapsedText>
 *
 * @extends ILibCollapsedText
 *
 * @prop {string} [props.className] - Additional class names to apply to the root element.
 * @prop {keyof JSX.IntrinsicElements} [props.element="div"] - The HTML element to render as the root. Default is "div".
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the root element.
 * @prop {React.ReactNode} [props.children] - The text or elements to display inside the component.
 * @prop {boolean} [props.defaultOpen] - If true, the text is expanded by default.
 * @prop {{ read?: string; more?: string; less?: string }} [props.texts] - Customizable button texts for "read", "more", and "less".
 * @prop {ILibText} [props.textProps] - Additional props to pass to the inner Text component.
 * @prop {number} [props.collapsedMaxLines=3] - Number of lines to show when collapsed. Default is 3.
 *
 * @returns {JSX.Element} The rendered CollapsedText component with expand/collapse functionality.
 *
 * @see https://julseb-lib.vercel.app/components/CollapsedText
 */
export const CollapsedText: FC<ILibCollapsedText> = ({
	className,
	element = "div",
	ref,
	children,
	defaultOpen,
	texts,
	textProps,
	collapsedMaxLines = 3,
	...rest
}) => {
	const Element = element

	const [isOpen, setIsOpen] = useState(defaultOpen)

	return (
		<Element
			ref={ref}
			className={clsx("relative", "collapsed-text", className)}
			{...rest}
		>
			<Text
				className={clsx(
					!isOpen && `line-clamp-(--collapsed-max-lines)`,
					textProps?.className,
				)}
				style={{
					...textProps?.style,
					["--collapsed-max-lines" as any]: collapsedMaxLines,
				}}
				{...textProps}
			>
				{children}
			</Text>

			{!isOpen && (
				<div className="bottom-6 left-0 absolute bg-overlay-gradient-theme-bg w-full h-12" />
			)}

			<Button
				onClick={() => setIsOpen(!isOpen)}
				variant="transparent"
				className="p-0 focus:ring-0"
			>
				{texts?.read ?? "Read"}{" "}
				{isOpen ? (texts?.more ?? "less") : (texts?.less ?? "more")}
			</Button>
		</Element>
	)
}
