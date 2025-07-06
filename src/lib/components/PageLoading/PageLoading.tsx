import { useEffect, type FC } from "react"
import { disableScroll } from "@julseb-lib/utils"
import { Loader } from "../Loader"
import { clsx, genBgAllColors } from "../../utils"
import type { ILibPageLoading } from "./types"

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
export const PageLoading: FC<ILibPageLoading> = ({
	className,
	element = "div",
	ref,
	backgroundColor = "primary-500",
	loaderColor = "white",
	loaderVariant = 1,
	stopScrolling,
	...rest
}) => {
	const Element = element

	useEffect(() => {
		if (stopScrolling) disableScroll()
	}, [stopScrolling])

	return (
		<Element
			ref={ref}
			className={clsx(
				"top-0 left-0 z-999 fixed flex justify-center items-center w-full h-svh",
				genBgAllColors[backgroundColor],
				"page-loading",
				className,
			)}
			{...rest}
		>
			<Loader variant={loaderVariant} color={loaderColor} />
		</Element>
	)
}
