import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Star = ({
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
            $size={size}
            $color={color}
            {...rest}
        >
            <path
                d="M6.51603 14.323L5.02603 20.775C4.97989 20.9704 4.99374 21.1751 5.06577 21.3625C5.1378 21.5499 5.26467 21.7112 5.4298 21.8253C5.59492 21.9395 5.79064 22.0012 5.99138 22.0024C6.19212 22.0036 6.38855 21.9442 6.55503 21.832L12 18.202L17.445 21.832C17.6154 21.9451 17.8162 22.0033 18.0207 21.9988C18.2251 21.9944 18.4232 21.9274 18.5884 21.8069C18.7536 21.6865 18.878 21.5183 18.9448 21.3251C19.0116 21.1318 19.0176 20.9228 18.962 20.726L17.133 14.326L21.669 10.244C21.8143 10.1132 21.9181 9.94266 21.9674 9.75351C22.0168 9.56436 22.0097 9.36488 21.9469 9.17974C21.8841 8.9946 21.7685 8.83193 21.6142 8.71183C21.46 8.59173 21.2739 8.51947 21.079 8.504L15.378 8.05L12.911 2.589C12.8324 2.41316 12.7045 2.26384 12.5428 2.15906C12.3812 2.05429 12.1927 1.99854 12 1.99854C11.8074 1.99854 11.6189 2.05429 11.4572 2.15906C11.2956 2.26384 11.1677 2.41316 11.089 2.589L8.62203 8.05L2.92103 8.503C2.72948 8.51818 2.54636 8.58821 2.39358 8.70473C2.2408 8.82125 2.12482 8.97932 2.05952 9.16003C1.99422 9.34074 1.98236 9.53644 2.02537 9.72371C2.06838 9.91098 2.16443 10.0819 2.30203 10.216L6.51603 14.323V14.323ZM9.36903 9.997C9.54752 9.98294 9.71895 9.92112 9.86533 9.81802C10.0117 9.71491 10.1277 9.57433 10.201 9.411L12 5.43L13.799 9.411C13.8724 9.57433 13.9883 9.71491 14.1347 9.81802C14.2811 9.92112 14.4525 9.98294 14.631 9.997L18.603 10.312L15.332 13.256C15.048 13.512 14.935 13.906 15.039 14.274L16.292 18.659L12.556 16.168C12.392 16.0579 12.199 15.9992 12.0015 15.9992C11.804 15.9992 11.611 16.0579 11.447 16.168L7.54303 18.771L8.59303 14.225C8.63153 14.0578 8.62636 13.8835 8.57802 13.7189C8.52969 13.5543 8.43981 13.4048 8.31703 13.285L5.27903 10.323L9.36903 9.997V9.997Z"
                fill="currentColor"
            />
        </StyledIcon>
    )
}
