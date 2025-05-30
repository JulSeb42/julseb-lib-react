import type { FC } from "react"
import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Underline: FC<ILibIcon> = ({
    "data-testid": testid,
    className,
    size = 64,
    color = "currentColor",
    ...rest
}) => {
    return (
        <StyledIcon
            data-testid={testid}
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            $color={color}
            $size={size}
            {...rest}
        >
            <path
                d="M5 18H19V20H5V18ZM6 4V10C6 13.309 8.691 16 12 16C15.309 16 18 13.309 18 10V4H16V10C16 12.206 14.206 14 12 14C9.794 14 8 12.206 8 10V4H6Z"
                fill={color}
            />
        </StyledIcon>
    )
}
