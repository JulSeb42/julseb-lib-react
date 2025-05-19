import type { FC } from "react"
import { StyledMessagesContainer } from "./styles"
import type { ILibMessagesContainer } from "./types"

/**
 * MessagesContainer component for wrapping chat messages in a styled scrollable container.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - MessagesContainer props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {ReactNode} [props.children] - Messages or content to display inside the container.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered MessagesContainer component.
 *
 * @see https://documentation-components-react.vercel.app/components/messaging
 * @example
 * <MessagesContainer>
 *   <Message type="sent" text="Hello!" />
 *   <Message type="received" text="Hi!" />
 * </MessagesContainer>
 */
export const MessagesContainer: FC<ILibMessagesContainer> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    ...rest
}) => {
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
}
