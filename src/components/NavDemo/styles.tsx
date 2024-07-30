/*=============================================== NavDemo styles ===============================================*/

import styled from "styled-components"
import {
    Mixins,
    SPACERS,
    TRANSITIONS,
    BREAKPOINTS,
    setDefaultTheme,
} from "../../lib"

export const NAV_WIDTH = 200 as const

const StyledNavDemo = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: ${NAV_WIDTH}px;
    height: 100vh;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.PRIMARY_500};
    padding: ${SPACERS.S};
    ${Mixins.Grid({
        $col: 1,
        $gap: "xs",
        $alignItems: "start",
        $alignContent: "start",
    })}

    a {
        color: ${({ theme }) => Mixins.ColorsHoverDefault("background", theme)};
        text-decoration: none;
        transition: ${TRANSITIONS.SHORT};

        @media ${BREAKPOINTS.HOVER} {
            &:hover {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverHover("background", theme)};
            }

            &:active {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverActive("background", theme)};
            }
        }

        &.active {
            text-decoration: underline;
        }
    }
`

setDefaultTheme([StyledNavDemo])

export { StyledNavDemo }
