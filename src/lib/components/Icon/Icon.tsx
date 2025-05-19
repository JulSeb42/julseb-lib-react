import type { FC } from "react"
import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

/**
 * Icon component for rendering SVG icons from the `/public/icons` folder.
 *
 * @component
 * @extends Props from react-inlinesvg
 * @param {Object} props - Icon props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ForwardedRef<SVGElement>} [props.ref] - Ref forwarded to the SVG element.
 * @param {string} props.src - Icon name (SVG file name without extension).
 * @param {number} [props.size=32] - Size of the icon.
 * @param {string} [props.color="currentColor"] - Any color from the library.
 * @param {string} [props.baseURL="/icons"] - Base URL for the icon files.
 * @returns {JSX.Element} The rendered Icon component.
 *
 * @see https://documentation-components-react.vercel.app/components/icon
 * @example
 * <Icon src="star" size={24} color="primary" />
 */
export const Icon: FC<ILibIcon> = ({
    "data-testid": testid,
    ref,
    src,
    size = 32,
    color = "currentColor",
    baseURL = "/icons",
    ...rest
}) => {
    return (
        <StyledIcon
            data-testid={testid}
            innerRef={ref}
            src={`${baseURL}/${src}.svg`}
            $size={size}
            $color={color}
            {...rest}
        />
    )
}
