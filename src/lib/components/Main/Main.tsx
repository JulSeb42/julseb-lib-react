import { type FC } from "react"
import { clsx, genBgAllColors, genGap } from "../../utils"
import type { ILibMain } from "./types"

/**
 * Main component for rendering the primary content area.
 *
 * @component
 *
 * @example
 * <Main size="large" gap="xl" backgroundColor="white">
 *   <p>Main content</p>
 * </Main>
 *
 * @prop {object} props - Component props.
 * @prop {string} [props.className] - Additional class names to apply.
 * @prop {ElementType} [props.element="main"] - The HTML element or React component to render as the main container.
 * @prop {RefObject<HTMLDivElement>} [props.ref] - Ref for the main container.
 * @prop {ReactNode} props.children - Main content.
 * @prop {"default"|"large"|"form"} [props.size="default"] - Main width size.
 * @prop {string} [props.backgroundColor="white"] - Any color from the library.
 * @prop {"2xl"|"xl"|"lg"|"md"|"sm"|"xs"|"2xs"} [props.gap="lg"] - Gap between children (uses spacer tokens).
 * @prop {object} [props.rest] - Additional props spread to the container.
 *
 * @returns {JSX.Element} The rendered main container.
 *
 * @see https://doc-julseb-lib-react.vercel.app/styles/main
 */
export const Main: FC<ILibMain> = ({
	className,
	element = "main",
	ref,
	children,
	gap = "lg",
	backgroundColor = "background",
	size = "default",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex flex-col items-stretch w-full",
				(genBgAllColors as any)[backgroundColor],
				genGap[gap],
				maxWidth[size],
				"main",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}

const maxWidth = {
	default: "sm:max-w-(--main-default)",
	large: "sm:max-w-(--main-large)",
	form: "sm:max-w-(--main-form)",
}
