import { type FC } from "react"
import {
	clsx,
	genBgAllColors,
	genTextAllColor,
	genBorderRadius,
	genBorderAllColors,
} from "../../utils"
import type { ILibTag } from "./types"

/*
	Generate JSDoc with:
	* <short description of the component>
	*
	* @component
	*
	* @example
	* <an example of the component>
	* 
	* @extends <type the component is extending (check in ./types.ts)>
	*
	for each prop, generate:
	* @prop {type} [props.<prop name>] <prop with the possible values, and default values> - <short description of the prop>
	* 
	* @returns <what the component returns>
	*
	* @see https://doc-julseb-lib-react.vercel.app/components/<name of the component>
*/
export const Tag: FC<ILibTag> = ({
	className,
	element = "span",
	ref,
	children,
	color = "primary",
	contentColor,
	borderRadius = "full",
	variant = "plain",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-flex items-center self-start gap-2 px-4 py-1",
				genBorderRadius[borderRadius],
				variant === "plain" && [
					genBgAllColors[color],
					color === "white"
						? "text-primary"
						: genTextAllColor[contentColor ?? "white"],
				],
				variant === "outline" && [
					"border",
					genBorderAllColors[color],
					genTextAllColor[contentColor || color],
				],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
