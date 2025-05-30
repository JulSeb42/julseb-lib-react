import type { FC } from "react"
import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Bold: FC<ILibIcon> = ({
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
                d="M17.061 11.22C17.6659 10.442 17.9961 9.48551 18 8.5C18 6.019 15.981 4 13.5 4H6V19H14C16.481 19 18.5 16.981 18.5 14.5C18.4987 13.8837 18.3702 13.2743 18.1226 12.7099C17.875 12.1456 17.5136 11.6383 17.061 11.22ZM13.5 7C14.327 7 15 7.673 15 8.5C15 9.327 14.327 10 13.5 10H9V7H13.5ZM14 16H9V13H14C14.827 13 15.5 13.673 15.5 14.5C15.5 15.327 14.827 16 14 16Z"
                fill={color}
            />
        </StyledIcon>
    )
}
