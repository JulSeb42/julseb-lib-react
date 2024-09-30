/*=============================================== ChevronRight ===============================================*/

import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const ChevronRight = ({
    "data-testid": testid,
    className,
    size = 64,
    color = "currentColor",
    ...rest
}: ILibIcon) => {
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
                d="M9.8535 17.707L15.5605 12L9.8535 6.293L8.4395 7.707L12.7325 12L8.4395 16.293L9.8535 17.707Z"
                fill="currentColor"
            />
        </StyledIcon>
    )
}
