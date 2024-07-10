/*=============================================== Modal styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import {
    Flexbox,
    Mixins,
    OVERLAYS,
    SPACERS,
    setDefaultTheme,
    ButtonIcon,
    TRANSITIONS,
} from "../../"

const StyledModal = styled(Flexbox)<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background-color: ${OVERLAYS.BLACK_80};
    transition: ${TRANSITIONS.SHORT};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}
`

const ButtonClose = styled(ButtonIcon)`
    position: absolute;
    z-index: 2;
    top: ${SPACERS.S};
    right: ${SPACERS.S};
`

const ModalContent = styled.div<{ $width?: string | number }>`
    width: ${({ $width }) => $width && stringifyPx($width)};
    max-width: 90%;
    max-height: 90%;
    position: relative;
    z-index: 1;
    padding: ${SPACERS.XXL};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}
`

setDefaultTheme([StyledModal, ButtonClose, ModalContent])

export { StyledModal, ButtonClose, ModalContent }
