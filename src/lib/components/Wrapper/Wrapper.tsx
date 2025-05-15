import { type FC } from "react"
import clsx from "clsx"
import {} from "@julseb-lib/utils"
import type { ILibWrapper } from "./types"

/**
 * @description Returns a Wrapper component
 * @link https://documentation-components-react.vercel.app/styles/wrapper
 * @extends HTMLDivElement
 * @prop element?: ElementType
 * @prop ref?: RefObject<HTMLDivElement>
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
