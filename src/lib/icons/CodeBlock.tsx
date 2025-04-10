import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const CodeBlock = ({
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
            $color={color}
            $size={size}
            {...rest}
        >
            <path
                d="M5.586 13L9.293 9.29303L10.707 10.707L8.414 13L10.707 15.293L9.293 16.707L5.586 13Z"
                fill={color}
            />
            <path
                d="M13.293 10.707L14.707 9.29303L18.414 13L14.707 16.707L13.293 15.293L15.586 13L13.293 10.707Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 3H20C21.103 3 22 3.897 22 5V19C22 20.103 21.103 21 20 21H4C2.897 21 2 20.103 2 19V5C2 3.897 2.897 3 4 3ZM4 7V19H20.002L20 7H4Z"
                fill={color}
            />
        </StyledIcon>
    )
}
