/*=============================================== ChevronUp ===============================================*/

import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const ChevronUp = ({
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
                d="M6.293 14.1465L7.707 15.5605L12 11.2675L16.293 15.5605L17.707 14.1465L12 8.4395L6.293 14.1465Z"
                fill="currentColor"
            />
        </StyledIcon>
    )
}
