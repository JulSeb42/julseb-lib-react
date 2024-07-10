/*=============================================== StylesCard styles ===============================================*/

import styled, { css } from "styled-components"
import { Mixins, SPACERS, setDefaultTheme } from "../../lib"
import { BaseCard } from "../BaseCard"
import type { CardType } from "./types"

const StyledStylesCard = styled(BaseCard)`
    flex-direction: column;
    gap: ${SPACERS.XS};
`

const SQUARE_SIZE = 150

const Square = styled.span<{ $css: string; $type: CardType }>`
    width: ${SQUARE_SIZE}px;
    height: ${SQUARE_SIZE}px;
    display: block;

    ${({ $type, $css }) =>
        $type === "shadow" &&
        css`
            background-color: ${({ theme }) => theme.BACKGROUND};
            box-shadow: ${$css};
        `}

    ${({ $type, $css }) =>
        $type === "radius" &&
        css`
            background-color: ${({ theme }) => theme.DANGER_100};
            border-radius: ${$css};
            width: ${$css === "var(--radius-round)" && "100%"};
        `}

    ${({ $type, $css }) =>
        $type === "spacer" &&
        css`
            width: ${$css};
            height: ${$css};
            background-color: ${({ theme }) => theme.DANGER_100};
        `}
`

const Content = styled.div`
    width: 100%;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}
`

setDefaultTheme([StyledStylesCard, Square, Content])

export { StyledStylesCard, Square, Content }
