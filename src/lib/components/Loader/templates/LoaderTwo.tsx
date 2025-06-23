import { type FC } from "react"
import {} from "@julseb-lib/utils"
import { clsx } from "../../../utils"
import { genBorderBottomColor } from "../utils/gen-border-bottom"
import type { ILibLoader } from "../types"

const SPAN_COMMON =
	"block absolute w-full h-full border-8 border-solid border-transparent rounded-full animate-bezier"

export const LoaderTwo: FC<Omit<ILibLoader, "variant">> = ({
	className,
	element = "span",
	ref,
	color = "primary",
	...rest
}) => {
	const Element = element

	// width: ${$size && stringifyPx($size)};
	// height: ${$size && stringifyPx($size)};
	// position: relative;
	// display: inline-block;

	// span {
	//     display: block;
	//     position: absolute;
	//     width: 100%;
	//     height: 100%;
	//     border: ${({ $borderWidth }) => $borderWidth}px solid transparent;
	//     border-top-color: ${({ $color, theme }) =>
	//         Mixins.AllColors($color, theme)};
	//     border-radius: ${RADIUSES.CIRCLE};
	//     ${LOADER_SPIN_ANIMATION("cubic-bezier(0.5, 0, 0.5, 1)")}

	//     &:first-child {
	//         animation-delay: -450ms;
	//     }

	//     &:nth-child(2) {
	//         animation-delay: -300ms;
	//     }

	//     &:last-child {
	//         animation-delay: -150ms;
	//     }
	// }

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-block relative rounded-full size-12 animate-spin",
				className,
			)}
			{...rest}
		>
			<span
				className={clsx(
					SPAN_COMMON,
					genBorderBottomColor[color],
					"[--spinner-delay:-450ms]",
				)}
			/>
			<span
				className={clsx(
					SPAN_COMMON,
					genBorderBottomColor[color],
					"[--spinner-delay:-300ms]",
				)}
			/>
			<span className={clsx(SPAN_COMMON, genBorderBottomColor[color])} />
			<span
				className={clsx(
					SPAN_COMMON,
					genBorderBottomColor[color],
					"[--spinner-delay:-150ms]",
				)}
			/>
		</Element>
	)
}
