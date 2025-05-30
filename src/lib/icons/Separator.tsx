import type { FC } from "react"
import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Separator: FC<ILibIcon> = ({
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
                d="M3 11H6V13H3V11ZM8 11H11V13H8V11ZM13 11H16V13H13V11ZM18 11H21V13H18V11Z"
                fill={color}
            />
        </StyledIcon>
    )
}
