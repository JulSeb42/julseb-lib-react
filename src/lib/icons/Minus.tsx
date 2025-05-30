import type { FC } from "react"
import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Minus: FC<ILibIcon> = ({
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
            $size={size}
            $color={color}
            {...rest}
        >
            <path d="M5 11H19V13H5V11Z" fill="currentColor" />
        </StyledIcon>
    )
}
