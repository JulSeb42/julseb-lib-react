import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Hide = ({
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
                d="M12 19C12.946 19 13.81 18.897 14.598 18.719L12.841 16.962C12.568 16.983 12.291 17 12 17C6.64898 17 4.57598 13.154 4.07398 12C4.45093 11.1588 4.96003 10.3833 5.58198 9.70297L4.18398 8.30497C2.64598 9.97197 2.06298 11.651 2.05198 11.684C1.983 11.8893 1.983 12.1116 2.05198 12.317C2.07298 12.383 4.36698 19 12 19ZM12 4.99997C10.163 4.99997 8.65398 5.39597 7.39598 5.98097L3.70698 2.29297L2.29298 3.70697L20.293 21.707L21.707 20.293L18.388 16.974C21.002 15.023 21.935 12.359 21.949 12.317C22.018 12.1116 22.018 11.8893 21.949 11.684C21.927 11.617 19.633 4.99997 12 4.99997ZM16.972 15.558L14.692 13.278C14.882 12.888 15 12.459 15 12C15 10.359 13.641 8.99997 12 8.99997C11.541 8.99997 11.112 9.11797 10.723 9.30897L8.91498 7.50097C9.9075 7.16038 10.9507 6.99097 12 6.99997C17.351 6.99997 19.424 10.846 19.926 12C19.624 12.692 18.76 14.342 16.972 15.558Z"
                fill={color}
            />
        </StyledIcon>
    )
}
