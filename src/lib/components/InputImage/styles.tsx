/*=============================================== InputImage styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import {
    MEDIA,
    Image,
    Mixins,
    setDefaultTheme,
    OVERLAYS,
    TRANSITIONS,
} from "../../"
import type { ILibRadius, LibValidationStatus } from "../../types"

const StyledInputImage = styled.label<{
    $width: string | number
    $height: string | number
    $borderRadius: ILibRadius
    $disabled: boolean | undefined
    $validationStatus: LibValidationStatus
}>`
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    position: relative;
    overflow: hidden;
    background-color: ${({ theme, $validationStatus }) =>
        $validationStatus === false ? theme.DANGER_50 : theme.GRAY_100};
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    color: ${({ $validationStatus, $disabled, theme }) => {
        if ($disabled) return theme.GRAY_500

        return Mixins.ColorsHoverDefault(
            $validationStatus === false ? "danger" : "primary",
            theme
        )
    }};
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
    $validationStatus: LibValidationStatus
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

    ${({ $disabled }) =>
        !$disabled &&
        css`
            @media ${MEDIA.HOVER} {
                opacity: 0;

                &.Visible {
                    opacity: 1;
                }
            }
        `}
`

const StyledEmptyContainer = styled.div<{
    $validationStatus: LibValidationStatus
}>`
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
` as any

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
