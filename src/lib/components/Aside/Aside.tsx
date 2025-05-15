import { type FC } from "react"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"
import {} from "@julseb-lib/utils"
import { genBgColor } from "../../utils"
import type { ILibAside } from "./types"

/**
 * @description Returns a Aside component
 * @link https://documentation-components-react.vercel.app/styles/aside
 * @extends HTMLDivElement
 * @prop element?: ElementType
 * @prop ref?: RefObject<HTMLDivElement>
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
				twMerge(
					"py-4 sm:py-8 md:py-12 w-full",
					(genBgColor as any)[backgroundColor],
					(asideSize as any)[size],
					className,
				),
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
