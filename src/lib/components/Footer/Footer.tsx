import { Children, Fragment, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { Text } from "../Text"
import {
	clsx,
	genButtonColor,
	genLinkColor,
	genTextAllColor,
} from "../../utils"
import type { ILibFooter } from "./types"

/**
 * Footer component for displaying a page footer with logo, links, and customizable layout options.
 *
 * @component
 *
 * @example
 * <Footer
 *   logo={<img src="/logo.png" alt="Logo" />}
 *   direction="horizontal"
 *   linksSeparator="dot"
 *   items={[
 *     <a href="/privacy">Privacy</a>,
 *     <a href="/terms">Terms</a>,
 *     <a href="/contact">Contact</a>
 *   ]}
 * />
 *
 * @extends ILibFooter
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the footer container.
 * @prop {React.ElementType} [props.element="footer"] - HTML element type to render as the container.
 * @prop {React.Ref<any>} [props.ref] - Ref to the footer element.
 * @prop {React.ReactNode} [props.children] - Child elements to display in the footer links section.
 * @prop {boolean} [props.hideSeparator] - Whether to hide the top border separator line.
 * @prop {boolean} [props.hideLinksSeparator] - Whether to hide separators between footer links.
 * @prop {"dot" | "dash"} [props.linksSeparator="dot"] - Type of separator to display between links. Possible values: "dot", "dash". Default: "dot".
 * @prop {Array<React.ReactNode>} [props.items] - Array of footer link items to display.
 * @prop {React.ReactNode} [props.logo] - Logo element to display in the footer.
 * @prop {"horizontal" | "vertical"} [props.direction="horizontal"] - Layout direction for footer content. Possible values: "horizontal", "vertical". Default: "horizontal".
 * @prop {LibAllColors} [props.linksSeparatorColor="gray-500"] - Color for the separator between links. Default: "gray-500".
 * @prop {LibColorsHover} [props.linksColor="primary"] - Color for the footer links. Default: "primary".
 *
 * @returns {JSX.Element} The rendered Footer component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/footer
 */
const Footer: FC<ILibFooter> = ({
	className,
	element = "footer",
	ref,
	children,
	hideSeparator,
	hideLinksSeparator,
	linksSeparator = "dot",
	items,
	logo,
	direction = "horizontal",
	linksSeparatorColor = "gray-500",
	linksColor = "primary",
	...rest
}) => {
	const Element = element
	const childrenArray = Children.toArray(children)

	return (
		<Element
			ref={ref}
			className={clsx(
				"relative flex px-[5%] pb-4",
				direction === "horizontal"
					? "flex-row justify-between"
					: "flex-col items-center gap-2",
				!hideSeparator &&
					"before:w-[90%] before:h-px before:absolute before:top-0 before:left-[5%] before:bg-gray-200 pt-4",
				genLinkColor[linksColor],
				genButtonColor[linksColor],
				"footer",
				className,
			)}
			{...rest}
		>
			{typeof logo === "string" ? <Text>{logo}</Text> : logo}

			<div className="flex items-container gap-2">
				{items?.map((item, i) => (
					<Fragment key={uuid()}>
						{item}

						{i !== items.length - 1 && !hideLinksSeparator && (
							<span
								className={clsx(
									genTextAllColor[linksSeparatorColor],
								)}
							>
								{linksSeparator === "dot" ? "•" : "-"}
							</span>
						)}
					</Fragment>
				)) ??
					childrenArray.map((child, i) => (
						<Fragment key={uuid()}>
							{child}

							{i !== childrenArray.length - 1 &&
								!hideLinksSeparator &&
								(linksSeparator === "dot" ? "•" : "-")}
						</Fragment>
					))}
			</div>
		</Element>
	)
}

export default Footer
