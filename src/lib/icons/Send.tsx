import type { FC } from "react"
import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Send: FC<ILibIcon> = ({
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
                d="M21.426 11.095L4.426 3.095C4.25483 3.01401 4.06417 2.98334 3.87625 3.00656C3.68832 3.02978 3.51086 3.10594 3.36455 3.22615C3.21824 3.34636 3.10912 3.50568 3.04988 3.68553C2.99065 3.86539 2.98376 4.05837 3.03 4.242L4.969 12L3.03 19.758C2.98332 19.9417 2.98992 20.1349 3.04901 20.315C3.10811 20.495 3.21726 20.6546 3.3637 20.7749C3.51014 20.8952 3.68781 20.9713 3.87593 20.9944C4.06406 21.0174 4.25485 20.9864 4.426 20.905L21.426 12.905C21.5978 12.8242 21.7431 12.6963 21.8448 12.536C21.9466 12.3757 22.0006 12.1898 22.0006 12C22.0006 11.8102 21.9466 11.6243 21.8448 11.464C21.7431 11.3037 21.5978 11.1758 21.426 11.095V11.095ZM5.481 18.197L6.32 14.84L12 12L6.32 9.16L5.481 5.803L18.651 12L5.481 18.197Z"
                fill="currentColor"
            />
        </StyledIcon>
    )
}
