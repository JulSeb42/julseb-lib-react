import { type FC } from "react"
import { AvatarFn } from "./AvatarFn"
import { Badge } from "../Badge"
import { clsx } from "../../utils"
import type { ILibAvatar } from "./types"

/**
 * Avatar component for displaying a user image, initials, or icon, with optional badge and custom styles.
 *
 * @component
 *
 * @example
 * <Avatar backgroundColor="primary" contentColor="white" borderRadius="full" badge="New">JS</Avatar>
 *
 * @extends HTMLSpanElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the avatar.
 * @prop {keyof JSX.IntrinsicElements} [props.element="span"] - The HTML element to render as the avatar.
 * @prop {React.Ref<HTMLSpanElement>} [props.ref] - Ref to the avatar element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the avatar (image, initials, or icon).
 * @prop {string | { content?: React.ReactNode; backgroundColor?: string; contentColor?: string; className?: string }} [props.badge] - Badge to display on the avatar, can be a string or an object with content and colors.
 * @prop {React.CSSProperties} [props.containerStyle] - Inline styles for the avatar container.
 * @prop {string} [props.containerClassName] - Additional CSS classes for the avatar container.
 * @prop {string} [props.borderRadius] - Border radius of the avatar.
 * @prop {string} [props.borderColor] - Border color of the avatar.
 * @prop {string} [props.backgroundColor] - Background color of the avatar.
 * @prop {string} [props.contentColor] - Text color of the avatar.
 * @prop {any} [props.rest] - Additional props spread to the avatar element.
 *
 * @returns {JSX.Element} The rendered Avatar component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/avatar
 */
export const Avatar: FC<ILibAvatar> = ({
	className,
	element = "span",
	ref,
	children,
	badge,
	containerStyle,
	containerClassName,
	borderRadius,
	borderColor,
	backgroundColor,
	contentColor,
	...rest
}) => {
	const Element = element

	const avatarProps = {
		element,
		className,
		ref,
		children,
		borderRadius,
		borderColor,
		backgroundColor,
		contentColor,
		...rest,
	}

	if (badge) {
		return (
			<Element
				className={clsx(
					"inline-block relative w-fit h-fit",
					"avatar-container",
					containerClassName,
				)}
				style={containerStyle}
			>
				<Badge
					contentColor={
						typeof badge === "object" ? badge.contentColor : "white"
					}
					color={typeof badge === "object" ? badge.color : "primary"}
					className={clsx(
						"top-0 right-0 absolute -translate-y-1 translate-x-1",
						typeof badge === "object"
							? badge.className
							: (undefined as any),
						"avatar-badge",
					)}
				>
					{typeof badge === "object" ? badge.content : badge}
				</Badge>

				<AvatarFn {...avatarProps} />
			</Element>
		)
	}

	return <AvatarFn {...avatarProps} />
}
