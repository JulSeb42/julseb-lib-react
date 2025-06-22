import { type FC } from "react"
import { clsx, genGap } from "../../utils"
import type { ILibSection } from "./types"

/**
 * Section component for grouping related content in a flexible layout.
 *
 * @component
 * @example
 * <Section gap="lg">
 *   <h2>Section title</h2>
 *   <p>Section content</p>
 * </Section>
 *
 * @prop {object} props - Component props.
 * @prop {string} [props.className] - Additional class names to apply.
 * @prop {ElementType} [props.element="section"] - The HTML element or React component to render as the section container.
 * @prop {RefObject<HTMLDivElement>} [props.ref] - Ref for the section container.
 * @prop {ReactNode} props.children - Section content.
 * @prop {"2xl"|"xl"|"lg"|"md"|"sm"|"xs"|"2xs"|"0px"} [props.gap="md"] - Gap between children (uses spacer tokens).
 * @prop {object} [props.rest] - Additional props spread to the container.
 *
 * @returns {JSX.Element} The rendered section container.
 *
 * @see https://doc-julseb-lib-react.vercel.app/layouts/section
 */
export const Section: FC<ILibSection> = ({
	className,
	element = "section",
	ref,
	children,
	gap = "md",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex flex-col items-stretch",
				genGap[gap],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
