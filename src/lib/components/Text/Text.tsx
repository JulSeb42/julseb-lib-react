import { forwardRef } from "react"
import clsx from "clsx"
import { H1 } from "./templates/H1"
import { H2 } from "./templates/H2"
import { H3 } from "./templates/H3"
import { H4 } from "./templates/H4"
import { H5 } from "./templates/H5"
import { H6 } from "./templates/H6"
import { P } from "./templates/P"
import { Small } from "./templates/Small"
import { Strong } from "./templates/Strong"
import { Em } from "./templates/Em"
import { Blockquote } from "./templates/Blockquote"
import { Ul } from "./templates/Ul"
import { Ol } from "./templates/Ol"
import { Dl } from "./templates/Dl"
import type { ILibText } from "./types"

export const BASE_CLASSES = clsx(
	"font-family-body",
	"[&>code]:font-family-code [&>code]:leading-8 [&>code]:p-1 [&>code]:text-blue-500 [&>code]:bg-gray-50 [&>code]:rounded-xl",
)

/**
 * @description Returns a Text component
 * @link https://documentation-components-react.vercel.app/styles/text
 * @extends HTMLHeadingElement & HTMLParagraphElement & HTMLQuoteElement & HTMLDListElement & HTMLOListElement & HTMLUListElement,
 * @prop element?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 */
export const Text = forwardRef<
	HTMLHeadingElement &
		HTMLParagraphElement &
		HTMLQuoteElement &
		HTMLDListElement &
		HTMLOListElement &
		HTMLUListElement,
	ILibText
>(({ tag = "p", ...rest }, ref) => {
	if (tag === "h1") return <H1 ref={ref} {...rest} />
	if (tag === "h2") return <H2 ref={ref} {...rest} />
	if (tag === "h3") return <H3 ref={ref} {...rest} />
	if (tag === "h4") return <H4 ref={ref} {...rest} />
	if (tag === "h5") return <H5 ref={ref} {...rest} />
	if (tag === "h6") return <H6 ref={ref} {...rest} />
	if (tag === "small") return <Small ref={ref} {...rest} />
	if (tag === "strong") return <Strong ref={ref} {...rest} />
	if (tag === "em") return <Em ref={ref} {...rest} />
	if (tag === "blockquote") return <Blockquote ref={ref} {...rest} />
	if (tag === "ul") return <Ul ref={ref} {...rest} />
	if (tag === "ol") return <Ol ref={ref} {...rest} />
	if (tag === "dl") return <Dl ref={ref} {...rest} />
	return <P ref={ref} {...rest} />
})
