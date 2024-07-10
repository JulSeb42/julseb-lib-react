/*=============================================== EditorPreview ===============================================*/

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"

export function EditorPreview({
    "data-testid": testid,
    className,
    size = 64,
    color = "currentColor",
    ...rest
}: IconProps) {
    return (
        <StyledIcon
            data-testid={testid}
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            $size={size}
            $color={color}
            {...rest}
        >
            <path
                d="M3 5V3H5C5.26522 3 5.51957 3.10536 5.70711 3.29289C5.89464 3.48043 6 3.73478 6 4V20C6 20.2652 5.89464 20.5196 5.70711 20.7071C5.51957 20.8946 5.26522 21 5 21H3V19H4V5H3Z"
                fill={color}
            />
            <path
                d="M21 21H9C8.73478 21 8.48043 20.8946 8.29289 20.7071C8.10536 20.5196 8 20.2652 8 20V4C8 3.73478 8.10536 3.48043 8.29289 3.29289C8.48043 3.10536 8.73478 3 9 3H21V5H10V19H21V21Z"
                fill={color}
            />
        </StyledIcon>
    )
}
