import { type FC } from "react"
import { clsx, genBgColor, genGap } from "../../utils"
import type { ILibMain } from "./types"

/**
 * @description Returns a Main component
 * @link https://documentation-components-react.vercel.app/styles/main
 * @extends HTMLDivElement
 * @prop element?: ElementType
 * @prop ref?: RefObject<HTMLDivElement>
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
