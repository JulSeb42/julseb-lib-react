/*=============================================== Icon component ===============================================*/

import { forwardRef } from "react"
import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

/**
 * @description Returns an Icon component
 * @link https://documentation-components-react.vercel.app/components/icon
 * @extends Props from react-inlinesvg
 * @tutorial To use this component, add the SVG file for the icon you want to render in `/public/icons` folder
 * @prop data-testid?: string
 * @prop src: string
 * @prop size?: number
 * @prop color?: Any color from the library
 * @prop baseURL?: string => directory inside "/public" folder where the SVG files are located
 */
export const Icon = forwardRef<SVGElement, ILibIcon>(
    (
        {
            "data-testid": testid,
            src,
            size = 32,
            color = "currentColor",
            baseURL = "/icons",
            ...rest
        },
        ref
    ) => {
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
)
