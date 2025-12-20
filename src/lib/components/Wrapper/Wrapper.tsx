import { type FC } from "react"
import { clsx, genBgAllColors, genGap } from "../../utils"
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
 * @extends HTMLDivElement
 *
 * @prop {object} props - Component props.
 * @prop {string} [props.className] - Additional class names to apply.
 * @prop {ElementType} [props.element="section"] - The HTML element or React component to render as the wrapper container.
 * @prop {RefObject<HTMLDivElement>} [props.ref] - Ref for the wrapper container.
 * @prop {ReactNode} props.children - Wrapper content.
 * @prop {"px"|"full"|"screen"|"dvh"|"dvw"|"lvh"|"lvw"|"svw"|"svh"|"auto"|"min"|"max"|"fit"|"lh"|} [props.minHeight="svh"] - Minimum height class (uses Tailwind min-h-* utilities).
 * @prop {string} [props.backgroundColor="background"] - Any color from the library.
 * @prop {"2xs"|"xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"0px"} [props.gap="lg"] - Gap between children (uses library spacers).
 * @prop {object} [props.rest] - Additional props spread to the container.
 *
 * @returns {JSX.Element} The rendered wrapper container.
 *
 * @see https://doc-julseb-lib-react.vercel.app/styles/wrapper
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
				"z-10 relative flex sm:flex-row flex-col justify-stretch sm:justify-center-safe px-[5%] py-12 w-full h-fit",
				(genBgAllColors as any)[backgroundColor],
				genMinHeight[minHeight],
				genGap[gap],
				"wrapper",
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
