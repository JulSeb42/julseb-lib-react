/*=============================================== LibIcon component ===============================================*/

import { Icon } from "../../"
import type { ILibLibIcon } from "./types"

/**
 * @description Icon used to build components from library, use Icon component to build your app.
 * @access Only for building library, do not export
 * @prop icon: string | JSX.Element
 * @prop baseUrl: string | undefined
 * @prop size?: number
 * @prop color?: Any color from the library
 * @prop className?: string
 */
export const LibIcon = ({
    "data-testid": testid,
    icon,
    size,
    color,
    className,
    baseUrl,
}: ILibLibIcon) => {
    if (typeof icon !== "string") return icon

    return (
        <Icon
            data-testid={testid}
            className={className}
            src={icon}
            size={size}
            color={color}
            baseURL={baseUrl}
        />
    )
}
