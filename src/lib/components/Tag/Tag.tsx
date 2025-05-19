import type { FC } from "react"
import { getIconSizeFromFont } from "../../lib-utils"
import { LibIcon } from "../LibIcon"
import { StyledTag } from "./styles"
import type { ILibTag } from "./types"

/**
 * Tag component for rendering a customizable tag with optional icons, colors, border, padding, and font size.
 *
 * @component
 * @extends HTMLSpanElement
 * @param {Object} props - Tag props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLSpanElement>} [props.ref] - Ref forwarded to the span element.
 * @param {string} [props.backgroundColor="primary"] - Background color (any color from the library).
 * @param {string} [props.textColor] - Text color (any color from the library).
 * @param {{ style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: string }} [props.border] - Border style.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }} [props.padding] - Padding for the tag.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }} [props.borderRadius="round"] - Border radius.
 * @param {"display-h1" | "display-h2" | "display-h3" | "display-h4" | "display-h5" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "small"} [props.fontSize="small"] - Font size.
 * @param {{ left?: string | JSX.Element; right?: string | JSX.Element }} [props.icons] - Icons to display on the left and/or right.
 * @param {{ left?: number; right?: number }} [props.iconSizes] - Icon sizes for left and right icons.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="xs"] - Gap between icon and text.
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.children] - Tag content.
 * @param {any} [props.rest] - Additional props passed to the span element.
 * @returns {JSX.Element} The rendered Tag component.
 *
 * @see https://documentation-components-react.vercel.app/components/tag
 * @example
 * <Tag backgroundColor="success" icons={{ left: "check" }}>Success</Tag>
 */
export const Tag: FC<ILibTag> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    className,
    backgroundColor = "primary",
    textColor = backgroundColor === "white"
        ? "primary"
        : backgroundColor === "black"
        ? "white"
        : "background",
    border,
    padding = {
        topBottom: "xxs",
        leftRight: "s",
    },
    borderRadius = "round",
    fontSize = "small",
    icons,
    iconSizes = {
        left: getIconSizeFromFont(fontSize),
        right: getIconSizeFromFont(fontSize),
    },
    iconBaseUrl,
    gap = "xs",
    ...rest
}) => {
    return (
        <StyledTag
            data-testid={testid}
            ref={ref}
            as={as}
            className={className}
            $backgroundColor={backgroundColor}
            $textColor={textColor}
            $border={border}
            $padding={padding}
            $borderRadius={borderRadius}
            $gap={gap}
            $fontSize={fontSize}
            {...rest}
        >
            {icons?.left && (
                <LibIcon
                    data-testid={testid && `${testid}.Icon.Left`}
                    className={className && "IconLeft"}
                    icon={icons.left}
                    size={iconSizes?.left}
                    baseUrl={iconBaseUrl}
                />
            )}

            {children}

            {icons?.right && (
                <LibIcon
                    data-testid={testid && `${testid}.Icon.Right`}
                    className={className && "IconRight"}
                    icon={icons.right}
                    size={iconSizes?.right}
                    baseUrl={iconBaseUrl}
                />
            )}
        </StyledTag>
    )
}
