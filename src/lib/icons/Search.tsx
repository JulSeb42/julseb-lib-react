import type { FC } from "react"
import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Search: FC<ILibIcon> = ({
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
            <path
                d="M12 10C12 9.468 11.791 8.966 11.412 8.586C10.656 7.832 9.346 7.83 8.586 8.588L7.174 7.172C8.687 5.66 11.312 5.66 12.826 7.172C13.1988 7.54243 13.4946 7.98308 13.6961 8.46849C13.8976 8.95389 14.0009 9.47443 14 10H12Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.897 16.312C13.4988 17.4054 11.775 17.9996 10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C17.9996 11.7754 17.405 13.4997 16.311 14.898L20.707 19.294L19.293 20.708L14.897 16.312ZM16 10C16 6.691 13.309 4 10 4C6.691 4 4 6.691 4 10C4 13.309 6.691 16 10 16C13.309 16 16 13.309 16 10Z"
                fill="currentColor"
            />
        </StyledIcon>
    )
}
