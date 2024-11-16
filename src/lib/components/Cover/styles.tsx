/*=============================================== Cover styles ===============================================*/

import styled, { css } from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { setDefaultTheme, Image, Flexbox, Mixins } from "../../"
import type { LibOverlays, ILibPadding } from "../../types"

const StyledCover = styled.div<{
    $overlay: LibOverlays | undefined
    $height: string | number
}>`
    position: relative;
    width: 100%;
    height: ${({ $height }) => stringifyPx($height)};

    ${({ $overlay }) =>
        $overlay &&
        css`
            &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                width: 100%;
                height: 100%;
                background: ${Mixins.Overlay($overlay)};
            }
        `}
`

const CoverImg = styled(Image).attrs({
    width: "100%",
    height: "100%",
    fit: "cover",
})`
    position: fixed;
    top: 0;
    left: 0;
`

const CoverContent = styled(Flexbox)<{
    $overlay: LibOverlays | undefined
    $padding: ILibPadding | undefined
}>`
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    ${({ $padding }) => $padding && Mixins.Padding($padding)};

    ${({ $overlay, theme }) => {
        switch ($overlay) {
            case "black-80":
            case "black-50":
            case "gradient-black":
                return css`
                    color: ${theme.WHITE};
                `

            case "white-80":
            case "white-50":
            case "gradient-white":
                return css`
                    color: ${theme.BLACK};
                `
        }
    }}

    & > * {
        position: relative;
        top: 0;
    }
`

setDefaultTheme([StyledCover, CoverImg, CoverContent])

export { StyledCover, CoverImg, CoverContent }
