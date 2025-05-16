import { type FC } from "react"
import {} from "@julseb-lib/utils"
import { clsx, genGap } from "../../utils"
import type { ILibSection } from "./types"

/**
 * @description Returns a Section component
 * @link https://documentation-components-react.vercel.app/layouts/section
 * @extends HTMLDivElement
 * @prop element?: ElementType
 * @prop ref?: RefObject<HTMLDivElement>
 */
export const Section: FC<ILibSection> = ({
	className,
	element = "section",
	ref,
	children,
	gap = "md",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex flex-col items-stretch",
				(genGap as any)[gap],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
