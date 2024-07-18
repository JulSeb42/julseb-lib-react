/*=============================================== LibIcon component ===============================================*/

import { Icon } from "../../"
import type { LibAllColors, LibIcon as LibIconType } from "../../types"

export interface ILibLibIcon {
    "data-testid"?: string
    icon: LibIconType
    size?: number
    color?: LibAllColors
    className?: string
}

/**
 * @description Icon used to build components from library, use Icon component to build your app.
 * @access Only for building library, do not export
 * @prop icon: string | JSX.Element
 * @prop size?: number
 * @prop color?: Any color from the library
 * @prop className?: string
 */

export function LibIcon({
    "data-testid": testid,
    icon,
    size,
    color,
    className,
}: ILibLibIcon) {
    if (typeof icon !== "string") return icon

    return (
        <Icon
            data-testid={testid}
            className={className}
            src={icon}
            size={size}
            color={color}
        />
    )
}
