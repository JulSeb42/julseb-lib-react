import { Children, Fragment, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { Text } from "../Text"
import { clsx } from "../../utils"
import type { ILibBreadcrumbs } from "./types"

/**
 * Breadcrumbs component for displaying navigational breadcrumb trails with customizable separators and flexible content.
 *
 * @component
 *
 * @example
 * <Breadcrumbs separator=">">
 *   <Link to="/">Home</Link>
 *   <Link to="/products">Products</Link>
 *   <Text>Current Page</Text>
 * </Breadcrumbs>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the breadcrumbs container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<any>} [props.ref] - Ref to the breadcrumbs container element.
 * @prop {React.ReactNode} [props.children] - Navigation items to display in the breadcrumb trail.
 * @prop {string | React.ReactNode} [props.separator="/"] - Separator to display between breadcrumb items.
 * @prop {any} [props.rest] - Additional props spread to the container element.
 *
 * @returns {JSX.Element} The rendered Breadcrumbs component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/breadcrumbs
 */
export const Breadcrumbs: FC<ILibBreadcrumbs> = ({
	className,
	element = "div",
	ref,
	children,
	separator = "/",
	...rest
}) => {
	const Element = element
	const childrenArray = Children.toArray(children)

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex flex-wrap items-center gap-2",
				"breadcrumbs",
				className,
			)}
			{...rest}
		>
			{childrenArray.map((child, i) => {
				console.log({ i })
				return (
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
				)
			})}
		</Element>
	)
}
