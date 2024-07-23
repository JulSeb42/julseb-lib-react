/*=============================================== Messaging styles ===============================================*/

import styled from "styled-components"
import {
    setDefaultTheme,
    Mixins,
    FONT_SIZES,
    FONT_FAMILIES,
    LINE_HEIGHTS,
    SPACERS,
    RADIUSES,
    ButtonIcon,
    TRANSITIONS,
    BREAKPOINTS,
    Flexbox,
} from "../../"
import type { LibMessageType } from "../../types"

const StyledMessagesContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    overflow-y: scroll;
    scroll-behavior: smooth;
    position: relative;
    border-radius: ${RADIUSES.L};
    min-height: 400px;
    max-height: 60vh;
    padding: ${SPACERS.S};
    ${Mixins.HideScrollbar}
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $gap: "s",
    })}
`

const StyledMessagesList = styled(Flexbox)`
    flex-grow: 1;
    overflow-y: scroll;
`

const MessageListBottom = styled.div`
    width: 100%;
    height: 0;
`

const ScrollButton = styled(ButtonIcon)<{
    $isVisible: boolean
    $bottom: number
}>`
    position: absolute;
    bottom: calc(
        ${({ $bottom }) => $bottom}px + ${SPACERS.XXS} + ${SPACERS.S} +
            (${SPACERS.XS} * 2)
    );
    right: ${SPACERS.XXS};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`

const StyledMessageForm = styled.form`
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })}
`

const StyledMessageInput = styled.textarea<{ $height: number }>`
    flex-grow: 1;
    font-size: ${FONT_SIZES.BODY};
    font-family: ${FONT_FAMILIES.BODY};
    line-height: ${LINE_HEIGHTS.BODY};
    resize: none;
    border: none;
    color: ${({ theme }) => theme.FONT};
    background-color: transparent;
    height: ${({ $height }) => $height}px;
    max-height: calc(24px * 3);
    padding: ${SPACERS.XXS} ${SPACERS.XS};
    outline: none;
    border-radius: ${RADIUSES.S};
    justify-self: flex-end;

    &::placeholder {
        color: ${({ theme }) => theme.GRAY_200};
    }

    &:focus {
        background-color: ${({ theme }) => theme.PRIMARY_50};
    }
`

const StyledMessage = styled.p<{ $messageType: LibMessageType }>`
    padding: ${SPACERS.XS};
    border-radius: ${RADIUSES.S};
    width: fit-content;
    max-width: 70%;
    background-color: ${({ theme, $messageType }) =>
        $messageType === "sent" ? theme.PRIMARY_500 : theme.GRAY_100};
    color: ${({ theme, $messageType }) =>
        $messageType === "sent" ? theme.BACKGROUND : theme.FONT};

    & > * {
        color: ${({ theme, $messageType }) =>
            $messageType === "sent" ? theme.BACKGROUND : theme.FONT};
    }

    a {
        color: ${({ theme, $messageType }) =>
            Mixins.ColorsHoverDefault(
                $messageType === "sent" ? "background" : "font",
                theme
            )};
        transition: ${TRANSITIONS.SHORT};
        text-decoration: none;

        @media ${BREAKPOINTS.HOVER} {
            &:hover {
                color: ${({ theme, $messageType }) =>
                    Mixins.ColorsHoverHover(
                        $messageType === "sent" ? "background" : "font",
                        theme
                    )};
            }

            &:active {
                color: ${({ theme, $messageType }) =>
                    Mixins.ColorsHoverActive(
                        $messageType === "sent" ? "background" : "font",
                        theme
                    )};
            }
        }
    }
`

setDefaultTheme([
    StyledMessagesContainer,
    StyledMessagesList,
    MessageListBottom,
    ScrollButton,
    StyledMessageForm,
    StyledMessageInput,
    StyledMessage,
])

export {
    StyledMessagesContainer,
    StyledMessagesList,
    MessageListBottom,
    ScrollButton,
    StyledMessageForm,
    StyledMessageInput,
    StyledMessage,
}
