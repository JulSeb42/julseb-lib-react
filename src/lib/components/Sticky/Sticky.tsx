import { type FC } from "react"
import { clsx } from "../../utils"
import type { LibSpacers } from "../../types"
import type { ILibSticky } from "./types"

/**
 * Sticky component for creating elements that stick to a specified position during scroll.
 *
 * @component
 *
 * @example
 * <Sticky top="md">
 *   <nav>Navigation content</nav>
 * </Sticky>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the sticky container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the sticky element.
 * @prop {React.ReactNode} [props.children] - Content to be positioned sticky.
 * @prop {"0px" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"} [props.top="sm"] - Distance from top when sticky positioning is active.
 *
 * @returns {JSX.Element} The rendered Sticky component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/sticky
 */
const Sticky: FC<ILibSticky> = ({
	className,
	element = "div",
	ref,
	children,
	top = "sm",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx("sticky", genTop[top], className)}
			{...rest}
		>
			{children}
		</Element>
	)
}

export default Sticky

const genTop: Record<LibSpacers, string> = {
	"0px": "top-0",
	"2xs": "top-1",
	xs: "top-2",
	sm: "top-3",
	md: "top-4",
	lg: "top-5",
	xl: "top-8",
	"2xl": "top-12",
}
