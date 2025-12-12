import { type FC } from "react"
import { clsx } from "../../../utils"
import { genBorderBottomColor } from "../utils/gen-border-bottom"
import type { ILibLoader } from "../types"

const SPAN_COMMON =
	"block absolute w-full h-full border-8 border-transparent rounded-full animate-[spin_1200ms_var(--animate-cubic-bezier)_infinite_var(--spinner-delay)]"

const LoaderTwo: FC<Omit<ILibLoader, "variant">> = ({
	className,
	element = "span",
	ref,
	color = "primary",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-block relative rounded-full size-12 animate-[spin_1200ms_linear_infinite]",
				"loader loader-2",
				className,
			)}
			{...rest}
		>
			<span
				className={clsx(
					SPAN_COMMON,
					genBorderBottomColor[color],
					"[--spinner-delay:-450ms]",
					"loader-2-border",
				)}
			/>
			<span
				className={clsx(
					SPAN_COMMON,
					genBorderBottomColor[color],
					"[--spinner-delay:-300ms]",
					"loader-2-border",
				)}
			/>
			<span
				className={clsx(
					SPAN_COMMON,
					genBorderBottomColor[color],
					"loader-2-border",
				)}
			/>
			<span
				className={clsx(
					SPAN_COMMON,
					genBorderBottomColor[color],
					"[--spinner-delay:-150ms]",
					"loader-2-border",
				)}
			/>
		</Element>
	)
}

export default LoaderTwo
