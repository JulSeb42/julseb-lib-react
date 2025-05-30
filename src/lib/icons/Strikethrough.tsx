import type { FC } from "react"
import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Strikethrough: FC<ILibIcon> = ({
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
                d="M20 11H12C8 11 8 9.184 8 8.5C8 7.882 8 6 12 6C14.8 6 14.99 7.678 15 8.014L16 8H17C17 6.616 15.955 4 12 4C6.584 4 6 7.147 6 8.5C6 9.228 6.148 10.167 6.736 11H4V13H20V11ZM12 18C8.207 18 8.01 16.185 8 16H6C6 16.04 6.069 20 12 20C17.221 20 18 17.181 18 15.5C18 15.354 17.991 15.183 17.972 15H15.966C15.998 15.2 16 15.376 16 15.5C16 16.184 16 18 12 18Z"
                fill={color}
            />
        </StyledIcon>
    )
}
