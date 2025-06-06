import styled, { css } from "styled-components"
import { MEDIA, Mixins, setDefaultTheme } from "../../"
import type { LibValidationStatus } from "../../types"

export const BUTTON_SIZE = 32

const RatingButton = styled.button<{
    $isReadOnly: boolean
    $validationStatus: LibValidationStatus
}>`
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    border: none;
    padding: 0;
    background-color: transparent;
    color: ${({ theme, $validationStatus }) =>
        Mixins.ColorsHoverDefault(
            $validationStatus === false ? "danger" : "primary",
            theme
        )};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}

    ${({ $isReadOnly, theme, $validationStatus }) =>
        !$isReadOnly &&
        css`
            @media ${MEDIA.HOVER} {
                &:hover {
                    color: ${Mixins.ColorsHoverHover(
                        $validationStatus === false ? "danger" : "primary",
                        theme
                    )};
                }

                &:active {
                    color: ${Mixins.ColorsHoverActive(
                        $validationStatus === false ? "danger" : "primary",
                        theme
                    )};
                }
            }
        `}
`

setDefaultTheme([RatingButton])

export { RatingButton }
