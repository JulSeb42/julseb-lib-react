import { Children, Fragment, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { Text } from "../Text"
import { clsx, genLinkColor, genTextAllColor } from "../../utils"
import type { ILibBreadcrumbs } from "./types"

/**
 * Breadcrumbs component for displaying navigational breadcrumb trails.
 *
 * Renders a customizable container (default: div) with children as breadcrumb items,
 * separated by a customizable separator (string or React node).
 * Supports accent and text color theming, and additional class names.
 *
 * @component
 * @param {ILibBreadcrumbs} props - Breadcrumbs props.
 * @param {string} [props.className] - Additional CSS classes for the container.
 * @param {React.ElementType} [props.element="div"] - Container element type.
 * @param {React.Ref<HTMLDivElement>} [props.ref] - Ref to the container element.
 * @param {React.ReactNode} [props.children] - Breadcrumb items.
 * @param {string|React.ReactNode} [props.separator="/"] - Separator between items.
 * @param {"primary"|"secondary"|"success"|"danger"|"warning"|"gray"|"white"} [props.accentColor="primary"] - Accent color.
 * @param {Any color from the library} [props.textColor="font"] - Text color.
 * @param {any} [props.rest] - Additional props for the container.
 * @returns {JSX.Element} Breadcrumbs component.
 *
 * @example
 * <Breadcrumbs separator=">">
 *   <Link to="/">Home</Link>
 *   <Link to="/products">Products</Link>
 *   <Text>Current Page</Text>
 * </Breadcrumbs>
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/breadcrumbs
 */
const Breadcrumbs: FC<ILibBreadcrumbs> = ({
	className,
	element = "div",
	ref,
	children,
	separator = "/",
	accentColor = "primary",
	textColor = "font",
	...rest
}) => {
	const Element = element
	const childrenArray = Children.toArray(children)

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex flex-wrap items-center gap-2",
				genLinkColor[accentColor],
				genTextAllColor[textColor],
				"breadcrumbs",
				className,
			)}
			{...rest}
		>
			{childrenArray.map((child, i) => (
				<Fragment key={uuid()}>
					{child}

					{i !== childrenArray.length - 1 &&
						(typeof separator === "string" ? (
							<Text
								element="span"
								className="breadcrumbs-separator"
							>
								{separator}
							</Text>
						) : (
							separator
						))}
				</Fragment>
			))}
		</Element>
	)
}
export default Breadcrumbs
