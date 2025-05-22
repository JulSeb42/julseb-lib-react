import type { FC } from "react"
import { Text } from "../../"
import { LibIcon } from "../LibIcon"
import { getIconHeight } from "./utils"
import { StyledTextIcon, IconContainer } from "./styles"
import type { ILibTextIcon } from "./types"

/**
 * TextIcon component for rendering text with an icon, supporting customizable tag, icon, color, gap, and layout.
 *
 * @component
 * @extends ILibText
 * @param {Object} props - TextIcon props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLHeadingElement & HTMLParagraphElement & HTMLQuoteElement & HTMLUListElement & HTMLOListElement & HTMLDListElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string | JSX.Element} props.icon - Icon to display.
 * @param {string} [props.iconColor] - Icon color (any color from the library).
 * @param {number} [props.iconSize] - Icon size.
 * @param {ElementType} [props.textAs] - Custom element type for the text.
 * @param {"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "blockquote"} [props.tag="p"] - Tag for the text element.
 * @param {string} [props.iconBaseUrl] - Base URL for the icon.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap] - Gap between icon and text.
 * @param {CSSProperties} [props.containerStyle] - Style for the container.
 * @param {string} [props.color] - Text color (any color from the library).
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.linkColor] - Link color.
 * @param {CssTextAlign} [props.textAlign] - Text alignment.
 * @param {boolean} [props.display] - Display property (only if tag is set to h1 to h5).
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.children] - Text content.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered TextIcon component.
 *
 * @see https://documentation-components-react.vercel.app/components/text-icon
 * @example
 * <TextIcon icon="star" tag="h2" color="primary">Featured</TextIcon>
 */
export const TextIcon: FC<ILibTextIcon> = ({
	"data-testid": testid,
	as,
	ref,
	textAs,
	className,
	children,
	icon,
	iconColor,
	iconSize,
	iconBaseUrl,
	tag = "p",
	display,
	gap = "xs",
	containerStyle,
	...rest
}) => {
	const textProps: Partial<Omit<ILibTextIcon, "tag" | "display">> = {
		"data-testid": testid && `${testid}.Text`,
		as: textAs,
		className: "Text",
		children,
		...rest,
	}

	return (
		<StyledTextIcon
			data-testid={testid}
			ref={ref}
			as={as}
			className={className}
			style={containerStyle}
			$gap={gap}
		>
			<IconContainer
				data-testid={testid && `${testid}.IconContainer`}
				className={className && "IconContainer"}
				$tag={tag}
				$display={display}
				$iconSize={iconSize}
			>
				<LibIcon
					data-testid={testid && `${testid}.IconContainer.Icon`}
					className={className && "Icon"}
					icon={icon}
					size={iconSize || getIconHeight(tag, display)}
					color={iconColor}
					baseUrl={iconBaseUrl}
				/>
			</IconContainer>

			{tag === "h1" ||
			tag === "h2" ||
			tag === "h3" ||
			tag === "h4" ||
			tag === "h5" ? (
				<Text display={display} tag={tag} {...textProps} />
			) : (
				<Text tag={tag} {...textProps} />
			)}
		</StyledTextIcon>
	)
}
