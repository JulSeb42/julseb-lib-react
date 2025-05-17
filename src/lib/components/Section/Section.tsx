import { type FC } from "react"
import {} from "@julseb-lib/utils"
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
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional class names to apply.
 * @param {ElementType} [props.element="section"] - The HTML element or React component to render as the section container.
 * @param {React.RefObject<HTMLDivElement>} [props.ref] - Ref for the section container.
 * @param {React.ReactNode} props.children - Section content.
 * @param {"2xl"|"xl"|"lg"|"md"|"sm"|"xs"|"2xs"} [props.gap="md"] - Gap between children (uses spacer tokens).
 * @param {object} [props.rest] - Additional props spread to the container.
 *
 * @returns {JSX.Element} The rendered section container.
 *
 * @see https://documentation-components-react.vercel.app/layouts/section
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
				(genGap as any)[gap],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
