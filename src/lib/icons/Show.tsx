import type { FC } from "react"
import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Show: FC<ILibIcon> = ({
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
                d="M12 10C12 11.095 12.905 12 14 12C14.354 12 14.683 11.897 14.973 11.732C14.9758 11.7675 14.9805 11.8023 14.9853 11.8372C14.9927 11.8907 15 11.9443 15 12C15 13.642 13.641 15 12 15C10.358 15 9 13.642 9 12C9.00524 11.206 9.323 10.4459 9.88447 9.88447C10.4459 9.323 11.206 9.00524 12 9C12.0557 9 12.1093 9.00734 12.1628 9.01468C12.1977 9.01946 12.2325 9.02424 12.268 9.027C12.103 9.317 12 9.646 12 10Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.05204 11.684C2.07305 11.617 4.36704 5 12 5C19.633 5 21.927 11.617 21.949 11.684L22.054 12L21.948 12.316C21.927 12.383 19.633 19 12 19C4.36704 19 2.07305 12.383 2.05104 12.316L1.94604 12L2.05204 11.684ZM4.07404 12C4.57604 13.154 6.64904 17 12 17C17.348 17 19.422 13.158 19.926 12C19.424 10.846 17.351 7 12 7C6.65204 7 4.57804 10.842 4.07404 12Z"
                fill={color}
            />
        </StyledIcon>
    )
}
