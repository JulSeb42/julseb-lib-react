import { type FC } from "react"
import { clsx, genBgAllColors } from "../../utils"
import type { ILibAside } from "./types"

/**
 * Aside component for rendering a sidebar or secondary content area.
 *
 * @component
 * @example
 * <Aside size="small" backgroundColor="white">
 *   <p>Sidebar content</p>
 * </Aside>
 *
 * @prop {object} props - Component props.
 * @prop {string} [props.className] - Additional class names to apply.
 * @prop {ElementType} [props.element="aside"] - The HTML element or React component to render as the aside container.
 * @prop {RefObject<HTMLDivElement>} [props.ref] - Ref for the aside container.
 * @prop {ReactNode} props.children - Aside content.
 * @prop {"default"|"small"} [props.size="default"] - Aside width size.
 * @prop {string} [props.backgroundColor="white"] - Any color from the library.
 * @prop {object} [props.rest] - Additional props spread to the container.
 *
 * @returns {JSX.Element} The rendered aside container.
 *
 * @see https://doc-julseb-lib-react.vercel.app/styles/aside
 */
export const Aside: FC<ILibAside> = ({
	className,
	element = "aside",
	ref,
	children,
	size = "default",
	backgroundColor = "white",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"py-4 sm:py-8 md:py-12 w-full",
				(genBgAllColors as any)[backgroundColor],
				asideSize[size],
				"aside",
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}

const asideSize = {
	default: "sm:max-w-(--aside-default)",
	small: "sm:max-w-(--aside-small)",
}
