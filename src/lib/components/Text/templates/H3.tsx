import type { FC } from "react"
import { StyledH3 } from "../styles"
import type { ILibText } from "../types"

export const H3: FC<ILibText> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    color,
    linkColor,
    textAlign,
    display,
    ...rest
}) => {
    return (
        <StyledH3
            data-testid={testid}
            ref={ref}
            as={as}
            $color={color}
            $linkColor={linkColor}
            $textAlign={textAlign}
            $display={display}
            {...rest}
        >
            {children}
        </StyledH3>
    )
}
