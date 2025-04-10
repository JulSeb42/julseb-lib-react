import styled from "styled-components"
import { setDefaultTheme, Mixins, Text, TRANSITIONS } from "../../"
import type { LibAllColors } from "../../types"

export const PROGRESS_CIRCLE_SIZE = 64

const ProgressCircleContainer = styled.span`
    position: relative;
`

const StyledProgressCircle = styled.svg``

const StyledCircle = styled.circle<{
    $color: LibAllColors
}>`
    stroke: ${({ $color, theme }) => Mixins.AllColors($color, theme)};

    &.Animated {
        transition: ${TRANSITIONS.PROGRESS_CIRCLE};
    }
`

const Content = styled.span`
    width: ${PROGRESS_CIRCLE_SIZE}px;
    height: ${PROGRESS_CIRCLE_SIZE}px;
    position: absolute;
    top: 0;
    left: 0;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
`

const Value = styled(Text).attrs({ tag: "small" })`
    color: ${({ theme }) => theme.Gray500};
` as any

setDefaultTheme([
    ProgressCircleContainer,
    StyledProgressCircle,
    StyledCircle,
    Content,
    Value,
])

export {
    ProgressCircleContainer,
    StyledProgressCircle,
    StyledCircle,
    Content,
    Value,
}
