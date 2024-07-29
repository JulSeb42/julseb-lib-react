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

const StyledModal = styled(Flexbox)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background-color: ${OVERLAYS.BLACK_80};
    transition: ${TRANSITIONS.SHORT};
    opacity: 0;
    visibility: hidden;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}

    &.Open {
        opacity: 1;
        visibility: visible;
    }
`

const ButtonClose = styled(ButtonIcon)`
    position: absolute;
    z-index: 2;
    top: ${SPACERS.S};
    right: ${SPACERS.S};
`

const ModalContent = styled.div<{
    $width?: string | number // TODO: add dynamic width
}>`
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
