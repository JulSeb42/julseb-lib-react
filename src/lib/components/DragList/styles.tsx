/*=============================================== DragList styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "@julseb-lib/utils"
import { Mixins, setDefaultTheme } from "../../"
import type {
    ILibBorder,
    ILibPadding,
    ILibRadius,
    LibSpacers,
} from "../../types"

const StyledDragList = styled.div<{
    $gap: LibSpacers
    $border: ILibBorder
    $padding: ILibPadding
    $borderRadius: ILibRadius
}>`
    ${({ $gap }) =>
        Mixins.Flexbox({
            $flexDirection: "column",
            $alignItems: "stretch",
            $gap,
        })}
    ${({ $border }) => Mixins.Border($border)};
    ${({ $padding }) => Mixins.Padding($padding)};
    ${({ $borderRadius }) => Mixins.BorderRadius($borderRadius)};
`

const StyledItem = styled.div`
    ${Mixins.Flexbox({
        $gap: "xs",
        $alignItems: "flex-start",
    })}
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
`

const DragIconContainer = styled.span<{ $size: number }>`
    width: ${({ $size }) => stringifyPx($size)};
    height: ${({ $size }) => stringifyPx($size)};
    color: ${({ theme }) => theme.GRAY_500};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    margin-top: 2px;
`

const Content = styled.div`
    flex-grow: 1;
`

const RightContainer = styled.span`
    margin-top: 2px;
`

setDefaultTheme([
    StyledDragList,
    StyledItem,
    DragIconContainer,
    Content,
    RightContainer,
])

export {
    StyledDragList,
    StyledItem,
    DragIconContainer,
    Content,
    RightContainer,
}
