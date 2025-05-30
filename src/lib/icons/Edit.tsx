import type { FC } from "react"
import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Edit: FC<ILibIcon> = ({
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.413 16.998L7 17.013V12.583L16.634 3.041C17.384 2.292 18.703 2.288 19.459 3.044L21.045 4.63C21.423 5.008 21.631 5.51 21.631 6.044C21.631 6.578 21.423 7.08 21.045 7.458L11.413 16.998ZM19.634 6.041L18.045 4.458L16.451 6.038L18.037 7.623L19.634 6.041ZM15.03 7.444L9 13.417V15.006L10.587 15.001L16.616 9.03L15.03 7.444Z"
                fill="currentColor"
            />
            <path
                d="M19 21H5C3.897 21 3 20.103 3 19V5C3 3.897 3.897 3 5 3H13.847L11.847 5H5V19H7.979C7.99515 19.0005 8.01108 19.0028 8.02688 19.005C8.04435 19.0075 8.06168 19.01 8.079 19.01C8.092 19.01 8.10525 19.0075 8.1185 19.005C8.13175 19.0025 8.145 19 8.158 19H19V12.332L21 10.332V19C21 20.103 20.103 21 19 21Z"
                fill="currentColor"
            />
        </StyledIcon>
    )
}
