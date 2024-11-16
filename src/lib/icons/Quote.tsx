/*=============================================== Quote ===============================================*/

import { StyledIcon } from "./styles"
import type { ILibIcon } from "./types"

export const Quote = ({
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
                d="M6.5 10C6.277 10 6.063 10.034 5.85 10.065C5.919 9.83303 5.99 9.59703 6.104 9.38503C6.218 9.07703 6.396 8.81003 6.573 8.54103C6.721 8.25003 6.982 8.05303 7.174 7.80403C7.375 7.56203 7.649 7.40103 7.866 7.20003C8.079 6.99003 8.358 6.88503 8.58 6.73703C8.812 6.60403 9.014 6.45703 9.23 6.38703L9.769 6.16503L10.243 5.96803L9.758 4.03003L9.161 4.17403C8.97 4.22203 8.737 4.27803 8.472 4.34503C8.201 4.39503 7.912 4.53203 7.59 4.65703C7.272 4.79903 6.904 4.89503 6.562 5.12303C6.218 5.34103 5.821 5.52303 5.471 5.81503C5.132 6.11603 4.723 6.37703 4.421 6.76003C4.091 7.11803 3.765 7.49403 3.512 7.92203C3.219 8.33003 3.02 8.77803 2.81 9.22103C2.62 9.66403 2.467 10.117 2.342 10.557C2.105 11.439 1.999 12.277 1.958 12.994C1.924 13.712 1.944 14.309 1.986 14.741C2.001 14.945 2.029 15.143 2.049 15.28L2.074 15.448L2.1 15.442C2.27786 16.2729 2.6873 17.0364 3.28096 17.6442C3.87462 18.2521 4.62824 18.6794 5.45464 18.8769C6.28104 19.0743 7.14645 19.0337 7.95075 18.7599C8.75506 18.486 9.4654 17.99 9.99961 17.3293C10.5338 16.6686 10.87 15.8701 10.9694 15.0263C11.0688 14.1825 10.9272 13.3278 10.5611 12.5611C10.195 11.7943 9.61934 11.1469 8.90065 10.6937C8.18197 10.2405 7.34966 9.99997 6.5 10ZM17.5 10C17.277 10 17.063 10.034 16.85 10.065C16.919 9.83303 16.99 9.59703 17.104 9.38503C17.218 9.07703 17.396 8.81003 17.573 8.54103C17.721 8.25003 17.982 8.05303 18.174 7.80403C18.375 7.56203 18.649 7.40103 18.866 7.20003C19.079 6.99003 19.358 6.88503 19.58 6.73703C19.812 6.60403 20.014 6.45703 20.23 6.38703L20.769 6.16503L21.243 5.96803L20.758 4.03003L20.161 4.17403C19.97 4.22203 19.737 4.27803 19.472 4.34503C19.201 4.39503 18.912 4.53203 18.59 4.65703C18.273 4.80003 17.904 4.89503 17.562 5.12403C17.218 5.34203 16.821 5.52403 16.471 5.81603C16.132 6.11703 15.723 6.37803 15.421 6.76003C15.091 7.11803 14.765 7.49403 14.512 7.92203C14.219 8.33003 14.02 8.77803 13.81 9.22103C13.62 9.66403 13.467 10.117 13.342 10.557C13.105 11.439 12.999 12.277 12.958 12.994C12.924 13.712 12.944 14.309 12.986 14.741C13.001 14.945 13.029 15.143 13.049 15.28L13.074 15.448L13.1 15.442C13.2779 16.2729 13.6873 17.0364 14.281 17.6442C14.8746 18.2521 15.6282 18.6794 16.4546 18.8769C17.281 19.0743 18.1464 19.0337 18.9508 18.7599C19.7551 18.486 20.4654 17.99 20.9996 17.3293C21.5338 16.6686 21.87 15.8701 21.9694 15.0263C22.0688 14.1825 21.9272 13.3278 21.5611 12.5611C21.195 11.7943 20.6193 11.1469 19.9007 10.6937C19.182 10.2405 18.3497 9.99997 17.5 10Z"
                fill={color}
            />
        </StyledIcon>
    )
}
