import type { FC } from "react"
import classNames from "classnames"
import { capitalize } from "@julseb-lib/utils"
import { roundIconSize } from "../../lib-utils"
import { AvatarFunction } from "./AvatarFunction"
import { StyledAvatarContainer, StyledBadge } from "./styles"
import type { ILibAvatar } from "./types"

/**
 * Avatar component for displaying user profile images, initials, or icons, with optional badge.
 *
 * @component
 * @param {Object} props - Avatar props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLSpanElement>} [props.ref] - Ref forwarded to the root element.
 * @param {number} [props.size=32] - Size of the avatar.
 * @param {Object} [props.border] - Border style, width, and color.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | Object} [props.borderRadius="circle"] - Border radius for the avatar.
 * @param {string|Object} [props.img] - Image source or object with src and alt.
 * @param {string} [props.letter] - Letter to display (if img and icon are not defined).
 * @param {string|JSX.Element} [props.icon] - Icon to display (if img and letter are not defined).
 * @param {number} [props.iconSize] - Size of the icon (if icon is defined).
 * @param {string} [props.iconBaseUrl] - Base URL for the icon (if icon is defined).
 * @param {string} [props.backgroundColor="primary"] - Background color (if icon or letter are defined).
 * @param {string} [props.contentColor] - Content color (if icon or letter are defined).
 * @param {boolean|number|Object} [props.badge] - Badge content, color, position, and style.
 * @param {CSSProperties} [props.containerStyle] - Style for the outer container.
 * @param {string} [props.className] - Additional class names.
 * @returns {JSX.Element} The rendered Avatar component.
 *
 * @example
 * <Avatar img="avatar.jpg" size={40} badge={3} />
 * <Avatar letter="A" backgroundColor="secondary" />
 * <Avatar icon={<UserIcon />} badge={{ content: 1, backgroundColor: "danger" }} />
 */
export const Avatar: FC<ILibAvatar> = ({
	"data-testid": testid,
	as,
	ref,
	size = 32,
	border,
	borderRadius = "circle",
	badge,
	img,
	letter,
	icon,
	iconSize = roundIconSize(size),
	backgroundColor = "primary",
	contentColor = backgroundColor === "white"
		? "primary"
		: backgroundColor === "black"
		? "white"
		: "background",
	className,
	containerStyle,
	role = "img",
	...rest
}) => {
	const isBadgeObject = typeof badge === "object"
	const badgeSize = isBadgeObject && badge.size ? badge.size : 8

	const avatarProps = {
		"data-testid": testid,
		as,
		className,
		hasBadge: !!badge,
		backgroundColor,
		border,
		borderRadius,
		size,
		contentColor,
		img,
		letter,
		icon,
		iconSize,
		ref,
		role,
		...rest,
	}

	if (badge)
		return (
			<StyledAvatarContainer
				data-testid={testid}
				ref={ref}
				as={as}
				className={className}
				style={containerStyle}
				$backgroundColor={backgroundColor}
				$border={border}
				$borderRadius={borderRadius}
				$size={size}
				$contentColor={contentColor}
			>
				<AvatarFunction {...avatarProps} />

				<StyledBadge
					data-testid={testid && `${testid}.Badge`}
					className={classNames(
						{ Badge: className },
						`Position${capitalize(
							isBadgeObject && badge.position
								? badge.position
								: "top"
						)}`
					)}
					size={badgeSize}
					number={
						isBadgeObject && badge.content
							? badge.content
							: undefined
					}
					backgroundColor={
						isBadgeObject && badge.backgroundColor
							? badge.backgroundColor
							: undefined
					}
					contentColor={
						isBadgeObject && badge.contentColor
							? badge.contentColor
							: undefined
					}
					padding={
						isBadgeObject && badge.padding
							? badge.padding
							: undefined
					}
					$width={badgeSize}
					$paddingLeftRight={
						isBadgeObject &&
						typeof badge.padding === "object" &&
						badge.padding?.leftRight
							? badge.padding?.leftRight
							: "0px"
					}
					$outline={
						isBadgeObject && badge.outline
							? badge.outline
							: undefined
					}
				/>
			</StyledAvatarContainer>
		)

	return <AvatarFunction {...avatarProps} />
}
