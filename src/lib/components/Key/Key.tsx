import { Children, Fragment, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { useLibTheme } from "../../context"
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
	children,
	withSeparator,
	size = "small",
	accentColor = "primary",
	...rest
}) => {
	const { theme } = useLibTheme()

	const Element = element
	const childrenArray = Children.toArray(
		children?.toString().replaceAll(",", "").split(""),
	)

	return (
		<Element
			ref={ref}
			className={clsx(
				"justify-self-start self-start border text-font",
				genBorderRadius[size],
				genFontSize[size],
				genPadding[size],
				genBgColor50(theme)[accentColor],
				genBorderColorShort[accentColor],
				genBorderBottom[size],
				"key",
				className,
			)}
			{...rest}
		>
			{childrenArray.map((child, i) => (
				<Fragment key={uuid()}>
					{child}
					{withSeparator && i !== childrenArray.length - 1 && " + "}
				</Fragment>
			))}
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
	small: "py-0 px-1",
	large: "py-1 px-2",
}

const genBorderBottom: Gen = {
	small: "border-b-3",
	large: "border-b-4",
}
