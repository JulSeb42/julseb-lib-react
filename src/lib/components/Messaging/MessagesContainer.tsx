/*=============================================== MessagesContainer ===============================================*/

import { forwardRef } from "react"
import { StyledMessagesContainer } from "./styles"
import type { ILibMessagesContainer } from "./types"

/**
 * @description Returns a MessagesContainer component
 * @link https://documentation-components-react.vercel.app/components/messaging
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop children?: ReactChildren
 */

export const MessagesContainer = forwardRef<
    HTMLDivElement,
    ILibMessagesContainer
>(({ "data-testid": testid, as, children, ...rest }, ref) => {
    return (
        <StyledMessagesContainer
            data-testid={testid}
            ref={ref}
            as={as}
            {...rest}
        >
            {children}
        </StyledMessagesContainer>
    )
})
