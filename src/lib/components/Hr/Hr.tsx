import type { FC } from "react"
import classNames from "classnames"
import { StyledHr } from "./styles"
import type { ILibHr } from "./types"

/**
 * Hr component for rendering a horizontal rule with customizable color, width, margin, and rounded corners.
 *
 * @component
 * @extends HTMLHRElement
 * @param {Object} props - Hr props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLHRElement>} [props.ref] - Ref forwarded to the root element.
 * @param {number} [props.height=1] - Height of the horizontal rule.
 * @param {string|number} [props.maxWidth="100%"] - Maximum width of the horizontal rule.
 * @param {string} [props.color="gray-200"] - Any color from the library.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | "auto" | "0 auto" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }} [props.margin="0 auto"] - Margin for the horizontal rule.
 * @param {boolean} [props.isRounded] - Whether the horizontal rule has rounded corners.
 * @param {string} [props.className] - Additional class names.
 * @returns {JSX.Element} The rendered Hr component.
 *
 * @see https://documentation-components-react.vercel.app/components/hr
 * @example
 * <Hr color="primary" height={2} maxWidth={200} margin="l" isRounded />
 */
export const Hr: FC<ILibHr> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    height = 1,
    maxWidth = "100%",
    color = "gray-200",
    margin = "0 auto",
    isRounded,
    ...rest
}) => {
    return (
        <StyledHr
            data-testid={testid}
            ref={ref}
            as={as}
            className={classNames(className, { Rounded: isRounded })}
            $height={height}
            $maxWidth={maxWidth}
            $color={color}
            $margin={margin}
            {...rest}
        />
    )
}
