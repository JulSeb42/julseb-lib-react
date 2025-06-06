import type { FC } from "react"
import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Code: FC<ILibIcon> = ({
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
                d="M7.375 16.781L8.625 15.219L4.601 12L8.625 8.78098L7.375 7.21898L2.375 11.219C2.25785 11.3127 2.16327 11.4315 2.09828 11.5667C2.03328 11.7019 1.99953 11.85 1.99953 12C1.99953 12.15 2.03328 12.2981 2.09828 12.4333C2.16327 12.5685 2.25785 12.6873 2.375 12.781L7.375 16.781ZM16.625 7.21898L15.375 8.78098L19.399 12L15.375 15.219L16.625 16.781L21.625 12.781C21.7422 12.6873 21.8367 12.5685 21.9017 12.4333C21.9667 12.2981 22.0005 12.15 22.0005 12C22.0005 11.85 21.9667 11.7019 21.9017 11.5667C21.8367 11.4315 21.7422 11.3127 21.625 11.219L16.625 7.21898ZM14.976 3.21598L10.976 21.216L9.023 20.782L13.023 2.78198L14.976 3.21598Z"
                fill={color}
            />
        </StyledIcon>
    )
}
