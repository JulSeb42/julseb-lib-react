import type { FC } from "react"
import { Link } from "react-router-dom"
import { StyledCard } from "./styles"
import type { ILibCard } from "./types"

/**
 * Card component for displaying content in a flexible, styled container.
 *
 * @component
 * @param {Object} props - Card props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {() => void} [props.onClick] - Click handler (only if `to` or `href` are not defined).
 * @param {boolean} [props.disabled] - Disables the card (only if `onClick` is defined).
 * @param {string} [props.to] - React Router link target (only if `onClick` and `href` are not defined).
 * @param {string} [props.href] - Anchor link target (only if `onClick` and `to` are not defined).
 * @param {boolean} [props.blank] - Open link in new tab (only if `to` or `href` are defined).
 * @param {boolean} [props.inline] - Display card as inline-flex.
 * @param {CssFlexDirection} [props.flexDirection] - Flex direction.
 * @param {CssFlexWrap} [props.flexWrap] - Flex wrap.
 * @param {CssJustifyContent} [props.justifyContent] - Justify content.
 * @param {CssAlignItems} [props.alignItems] - Align items.
 * @param {CssJustifyItems} [props.justifyItems] - Justify items.
 * @param {CssAlignContent} [props.alignContent] - Align content.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap] - Gap between children.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.columnGap] - Column gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.rowGap] - Row gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | Object} [props.padding] - Padding for the card.
 * @param {Object} [props.border] - Border style, width, and color.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | Object} [props.borderRadius] - Border radius for the card.
 * @param {CssCursor} [props.cursor] - Cursor style.
 * @param {string|number} [props.width="100%"] - Width of the card.
 * @param {string|number} [props.maxWidth="100%"] - Max width of the card.
 * @param {string|number} [props.height] - Height of the card.
 * @param {string|number} [props.maxHeight] - Max height of the card.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | Object} [props.shadow] - Shadow style.
 * @param {string} [props.backgroundColor="background"] - Background color.
 * @param {string} [props.textColor="font"] - Text color.
 * @param {Object} [props.backgroundImg] - Background image options.
 * @param {CssTextAlign} [props.textAlign="left"] - Text alignment.
 * @param {ReactNode} [props.children] - Card content.
 * @returns {JSX.Element} The rendered Card component.
 *
 * @example
 * <Card padding="l" backgroundColor="white" shadow="m">
 *   <h3>Card title</h3>
 *   <p>Card content goes here.</p>
 * </Card>
 */
export const Card: FC<ILibCard> = ({
	"data-testid": testid,
	as,
	ref,
	children,
	border,
	borderRadius,
	padding,
	cursor,
	width = "100%",
	maxWidth = "100%",
	height,
	maxHeight,
	shadow,
	backgroundColor = "background",
	textColor = "font",
	backgroundImg,
	textAlign = "left",
	href,
	to,
	blank,
	onClick,
	inline,
	flexDirection,
	flexWrap,
	justifyContent,
	alignItems,
	justifyItems,
	alignContent,
	gap,
	columnGap,
	rowGap,
	...rest
}) => {
	return (
		<StyledCard
			data-testid={testid}
			ref={ref}
			as={as ? as : to ? Link : href ? "a" : onClick ? "button" : "div"}
			to={to}
			href={href}
			target={blank ? "_blank" : undefined}
			rel={blank ? "noreferrer noopener" : undefined}
			onClick={onClick}
			$border={border}
			$borderRadius={borderRadius}
			$padding={padding}
			$cursor={cursor}
			$width={width}
			$maxWidth={maxWidth}
			$height={height}
			$maxHeight={maxHeight}
			$shadow={shadow}
			$backgroundColor={backgroundColor}
			$textColor={textColor}
			$backgroundImg={
				backgroundImg && {
					$img: backgroundImg.img,
					$clip: backgroundImg.clip,
					$origin: backgroundImg.origin,
					$position: backgroundImg.position,
					$repeat: backgroundImg.repeat,
					$size: backgroundImg.size,
				}
			}
			$textAlign={textAlign}
			$inline={inline}
			$flexDirection={flexDirection}
			$flexWrap={flexWrap}
			$justifyContent={justifyContent}
			$alignItems={alignItems}
			$justifyItems={justifyItems}
			$alignContent={alignContent}
			$gap={gap}
			$columnGap={columnGap}
			$rowGap={rowGap}
			{...rest}
		>
			{children}
		</StyledCard>
	)
}
