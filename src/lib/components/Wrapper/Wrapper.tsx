import { type FC } from "react"
import { clsx } from "../../utils"
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
 * @param {React.RefObject<HTMLDivElement>} [props.ref] - Ref for the wrapper container.
 * @param {React.ReactNode} props.children - Wrapper content.
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
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex sm:flex-row flex-col justify-stretch sm:justify-center-safe gap-6 px-4 md:px-6 lg:px-12 w-full min-h-[100svh]",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
