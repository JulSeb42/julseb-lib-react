/*=============================================== FullBleed styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import { Mixins, setDefaultTheme } from "../../"
import type { ILibPadding } from "../../types"

const StyledFullBleed = styled.div<{
    $height?: number | string
    $aspectRatio?: string
    $padding?: ILibPadding
}>`
    width: 100%;
    grid-column: 1/4;
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    ${({ $padding }) => Mixins.Padding($padding)}

    ${({ $height }) =>
        $height &&
        css`
            height: ${stringifyPx($height)};

            & > img,
            & > figure {
                height: 100%;
            }
        `}
`

setDefaultTheme([StyledFullBleed])

export { StyledFullBleed }
