import { type FC } from "react"
import { clsx, genBgColor50, genBorderColorShort } from "../../utils"
import type { ILibKey } from "./types"

/**
 * @description Returns a Key component
 * @link https://documentation-components-react.vercel.app/components/key
 * @extends HTMLSpanElement
 * @prop element?: ElementType
 * @prop ref?: RefObject<HTMLSpanElement>
 */
export const Key: FC<ILibKey> = ({
	className,
	element = "span",
	ref,
	keys,
	withSeparator,
	size = "small",
	accentColor = "blue",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"justify-self-start self-start border-1 border-solid text-font",
				genBorderRadius[size],
				genFontSize[size],
				genPadding[size],
				genBgColor50[accentColor],
				genBorderColorShort[accentColor],
				genBorderBottom[size],
				className,
			)}
			{...rest}
		>
			{withSeparator ? keys.join(" + ") : keys.join("")}
		</Element>
	)
}

type Gen = Record<"small" | "large", string>

const genBorderRadius: Gen = {
	small: "rounded-xs",
	large: "rounded-sm",
}

const genFontSize: Gen = {
	small: "text-sm",
	large: "text-base",
}

const genPadding: Gen = {
	small: "py-0 px-(--spacer-2xs)",
	large: "py-(--spacer-2xs) px-(--spacer-xs)",
}

const genBorderBottom: Gen = {
	small: "border-b-3",
	large: "border-b-4",
}
