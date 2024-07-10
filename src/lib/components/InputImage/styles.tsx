/*=============================================== InputImage styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import {
    BREAKPOINTS,
    Image,
    Mixins,
    setDefaultTheme,
    OVERLAYS,
    TRANSITIONS,
} from "../../"
import type { LibRadiusProps, LibValidationStatus } from "../../types"

const StyledInputImage = styled.label<{
    $width: string | number
    $height: string | number
    $borderRadius: LibRadiusProps
    $disabled: boolean | undefined
    $validation: LibValidationStatus
}>`
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    position: relative;
    overflow: hidden;
    background-color: ${({ theme, $validation }) =>
        $validation === "not-passed" ? theme.DANGER_50 : theme.GRAY_100};
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    color: ${({ $validation, $disabled, theme }) =>
        $disabled
            ? theme.GRAY_500
            : theme.ColorsHoverDefault(
                  $validation === "not-passed" ? "danger" : "primary"
              )};
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)}
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
`

const ContainerCommon = css`
    width: 100%;
    height: 100%;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
`

const StyledHoverContainer = styled.div<{
    $validation: LibValidationStatus
    $isVisible: boolean
    $disabled: boolean
}>`
    ${ContainerCommon}
    background-color: ${OVERLAYS.WHITE_50};
    opacity: 0;
    transition: ${TRANSITIONS.SHORT};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    ${({ $disabled, $isVisible }) =>
        !$disabled &&
        css`
            @media ${BREAKPOINTS.HOVER} {
                opacity: ${$isVisible ? 1 : 0};
            }
        `}
`

const StyledEmptyContainer = styled.div<{ $validation: LibValidationStatus }>`
    ${ContainerCommon}
    position: relative;
    z-index: 0;
`

const StyledImage = styled(Image).attrs({
    width: "100%",
    height: "100%",
    fit: "cover",
})<{ $disabled: boolean | undefined }>`
    position: relative;
    z-index: 0;
    opacity: ${({ $disabled }) => $disabled && 0.5};
`

const StyledInput = styled.input`
    display: none;
`

setDefaultTheme([
    StyledInputImage,
    StyledEmptyContainer,
    StyledHoverContainer,
    StyledImage,
    StyledInput,
])

export {
    StyledInputImage,
    StyledEmptyContainer,
    StyledHoverContainer,
    StyledImage,
    StyledInput,
}
