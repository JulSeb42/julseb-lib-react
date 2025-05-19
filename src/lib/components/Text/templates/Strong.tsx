import type { FC } from "react"
import { StyledStrong } from "../styles"
import type { ILibText } from "../types"

export const Strong: FC<ILibText> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    color,
    linkColor,
    textAlign,
    ...rest
}) => {
    return (
        <StyledStrong
            data-testid={testid}
            ref={ref}
            as={as}
            $color={color}
            $linkColor={linkColor}
            $textAlign={textAlign}
            {...rest}
        >
            {children}
        </StyledStrong>
    )
}
