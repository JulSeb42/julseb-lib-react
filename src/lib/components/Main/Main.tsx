import { type FC } from "react"
import { clsx, genBgColor, genGap } from "../../utils"
import type { ILibMain } from "./types"

/**
 * Main component for rendering the primary content area.
 *
 * @component
 * @example
 * <Main size="large" gap="xl" backgroundColor="white">
 *   <p>Main content</p>
 * </Main>
 *
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional class names to apply.
 * @param {ElementType} [props.element="main"] - The HTML element or React component to render as the main container.
 * @param {React.RefObject<HTMLDivElement>} [props.ref] - Ref for the main container.
 * @param {React.ReactNode} props.children - Main content.
 * @param {"default"|"large"|"form"|"full"} [props.size="default"] - Main width size.
 * @param {string} [props.backgroundColor="white"] - Background color token.
 * @param {"2xl"|"xl"|"lg"|"md"|"sm"|"xs"|"2xs"} [props.gap="lg"] - Gap between children (uses spacer tokens).
 * @param {object} [props.rest] - Additional props spread to the container.
 *
 * @returns {JSX.Element} The rendered main container.
 *
 * @see https://documentation-components-react.vercel.app/styles/main
 */
export const Main: FC<ILibMain> = ({
	className,
	element = "main",
	ref,
	children,
	gap = "lg",
	backgroundColor = "white",
	size = "default",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex flex-col py-4 sm:py-8 md:py-12 w-full",
				(genBgColor as any)[backgroundColor],
				(genGap as any)[gap],
				(maxWidth as any)[size],
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
	full: "sm:max-w-(--main-full)",
}
