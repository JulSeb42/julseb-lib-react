/*=============================================== LibIcon component ===============================================*/

import { Icon } from "../../"
import type { LibAllColors, LibIcon as LibIconType } from "../../types"

export interface LibIconProps {
    "data-testid"?: string
    icon: LibIconType
    size?: number
    color?: LibAllColors
    className?: string
}

/**
 * @description Icon used to build components from library, use Icon component to build your app.
 */

export function LibIcon({
    "data-testid": testid,
    icon,
    size,
    color,
    className,
}: LibIconProps) {
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
