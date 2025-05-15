import { type FC } from "react"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"
import {} from "@julseb-lib/utils"
import { genBgColor } from "../../utils"
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
				twMerge(
					"flex flex-col py-4 sm:py-8 md:py-12 w-full",
					(genBgColor as any)[backgroundColor],
					(rowGaps as any)[gap],
					(maxWidth as any)[size],
					className,
				),
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

const rowGaps = {
	"2xl": "gap-(--spacer-2xl)",
	xl: "gap-(--spacer-xl)",
	lg: "gap-(--spacer-lg)",
	md: "gap-(--spacer-md)",
	sm: "gap-(--spacer-sm)",
	xs: "gap-(--spacer-xs)",
	"2xs": "gap-(--spacer-2xs)",
}
