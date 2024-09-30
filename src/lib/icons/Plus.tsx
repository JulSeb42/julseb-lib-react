/*=============================================== Plus ===============================================*/

import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Plus = ({
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
                d="M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z"
                fill="currentColor"
            />
        </StyledIcon>
    )
}
