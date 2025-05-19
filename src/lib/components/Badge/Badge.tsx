import type { FC } from "react"
import classNames from "classnames"
import { getRandomString } from "@julseb-lib/utils"
import { roundIconSize, appendStyles } from "../../lib-utils"
import { LibIcon } from "../LibIcon"
import { StyledBadge } from "./styles"
import type { ILibBadge } from "./types"

/**
 * Badge component for displaying a small count, icon, or status indicator.
 *
 * @component
 * @param {Object} props - Badge props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLSpanElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.id] - HTML id attribute.
 * @param {number} [props.size=16] - Size of the badge.
 * @param {string|JSX.Element} [props.icon] - Icon to display in the badge.
 * @param {number} [props.iconSize] - Size of the icon (if icon is defined).
 * @param {string} [props.iconBaseUrl] - Base URL for the icon (if icon is defined).
 * @param {number} [props.number] - Number to display (if icon is not defined).
 * @param {string} [props.backgroundColor="primary"] - Background color of the badge.
 * @param {string} [props.contentColor] - Content color of the badge.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | Object} [props.borderRadius="round"] - Border radius for the badge.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | Object} [props.padding] - Padding for the badge.
 * @param {string} [props.className] - Additional class names.
 * @returns {JSX.Element} The rendered Badge component.
 *
 * @example
 * <Badge number={5} />
 * <Badge icon="star" backgroundColor="warning" />
 * <Badge icon={<CustomIcon />} size={24} />
 */
export const Badge: FC<ILibBadge> = ({
    "data-testid": testid,
    className,
    ref,
    id,
    as,
    size = 16,
    icon,
    iconSize = roundIconSize(size),
    iconBaseUrl,
    number,
    backgroundColor = "primary",
    contentColor = backgroundColor === "white"
        ? "primary"
        : backgroundColor === "black"
        ? "white"
        : "background",
    borderRadius = "round",
    padding = {
        leftRight: "xs",
    },
    ...rest
}) => {
    const randomClass = getRandomString(10, true)
    const withClass = className?.split(" ")[0] || randomClass

    appendStyles(`
            ${id ? `#${id}` : `.${withClass}`} {
                --badge-size: ${size}px;
                --badge-font-size: ${roundIconSize(size)}px;
            }
        `)

    return (
        <StyledBadge
            data-testid={testid}
            ref={ref}
            as={as}
            className={classNames(className, randomClass)}
            id={id}
            $backgroundColor={backgroundColor}
            $contentColor={contentColor}
            $borderRadius={borderRadius}
            $padding={padding}
            $hasChildren={!!(icon || number)}
            $childrenLength={number?.toString().length}
            {...rest}
        >
            {icon && (
                <LibIcon
                    data-testid={testid && `${testid}.Icon`}
                    className={className && "Icon"}
                    icon={icon}
                    color={contentColor}
                    size={iconSize}
                    baseUrl={iconBaseUrl}
                />
            )}

            {number}
        </StyledBadge>
    )
}
