/*=============================================== ChevronLeft ===============================================*/

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"

export function ChevronLeft({
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
                d="M14.1465 6.293L8.4395 12L14.1465 17.707L15.5605 16.293L11.2675 12L15.5605 7.707L14.1465 6.293Z"
                fill="currentColor"
            />
        </StyledIcon>
    )
}
