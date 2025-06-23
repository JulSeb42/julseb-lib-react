import { type FC } from "react"
import { clsx, genBgColor50, genBorderColorShort } from "../../utils"
import type { ILibKey } from "./types"

/**
 * Key component for displaying keyboard keys or shortcuts.
 *
 * @component
 *
 * @example
 * <Key keys={["Ctrl", "C"]} size="large" accentColor="blue" />
 *
 * @prop {Array<string>} keys - The list of keys to display.
 * @prop {boolean} [withSeparator] - If true, displays a separator between keys.
 * @prop {"default" | "large" | "form"} [size] - The size of the key component.
 * @prop {"primary" | "secondary" | "success" | "danger" | "warning" | "gray"} [accentColor] - Accent color for the key, excluding black, white, transparent, background, and current.
 *
 * @returns {JSX.Element} The rendered Key component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/layouts/key
 */
export const Key: FC<ILibKey> = ({
	className,
	element = "span",
	ref,
	keys,
	withSeparator,
	size = "small",
	accentColor = "primary",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"justify-self-start self-start border-1 border-solid text-black",
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
