import { type FC } from "react"
import { clsx, genBgColor, genGap } from "../../utils"
import type { ILibWrapper } from "./types"

/**
 * Wrapper component for providing a responsive layout container.
 *
 * @component
 * @example
 * <Wrapper>
 *   <Main>Content</Main>
 * </Wrapper>
 *
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional class names to apply.
 * @param {ElementType} [props.element="section"] - The HTML element or React component to render as the wrapper container.
 * @param {RefObject<HTMLDivElement>} [props.ref] - Ref for the wrapper container.
 * @param {ReactNode} props.children - Wrapper content.
 * @param {"px"|"full"|"screen"|"dvh"|"dvw"|"lvh"|"lvw"|"svw"|"svh"|"auto"|"min"|"max"|"fit"|"lh"|} [props.minHeight="svh"] - Minimum height class (uses Tailwind min-h-* utilities).
 * @param {string} [props.backgroundColor="background"] - Any color from the library.
 * @param {"2xs"|"xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"0px"} [props.gap="lg"] - Gap between children (uses library spacers).
 * @param {object} [props.rest] - Additional props spread to the container.
 *
 * @returns {JSX.Element} The rendered wrapper container.
 *
 * @see https://documentation-components-react.vercel.app/styles/wrapper
 */
export const Wrapper: FC<ILibWrapper> = ({
	className,
	element = "section",
	children,
	ref,
	minHeight = "svh",
	backgroundColor = "background",
	gap = "lg",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex sm:flex-row flex-col justify-stretch sm:justify-center-safe gap-6 px-4 md:px-6 lg:px-12 w-full",
				(genBgColor as any)[backgroundColor],
				genMinHeight[minHeight],
				genGap[gap],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}

const genMinHeight = {
	px: "min-h-px",
	full: "min-h-full",
	screen: "min-h-screen",
	dvh: "min-h-dvh",
	dvw: "min-h-dvw",
	lvh: "min-h-lvh",
	lvw: "min-h-lvw",
	svw: "min-h-svw",
	svh: "min-h-svh",
	auto: "min-h-auto",
	min: "min-h-min",
	max: "min-h-max",
	fit: "min-h-fit",
	lh: "min-h-lh",
}
