/*=============================================== Table styles ===============================================*/

import styled, { css } from "styled-components"
import {
    setDefaultTheme,
    SPACERS,
    Mixins,
    FONT_SIZES,
    BREAKPOINTS,
} from "../../"
import { TextBaseMixin } from "../ComponentsMixins"
import type { CssVerticalAlign, LibTableVariant } from "../../types"

const StyledTable = styled.table<{
    $vAlign: CssVerticalAlign
    $variant: LibTableVariant
}>`
    ${TextBaseMixin({
        $fontSize: "small",
        $fontWeight: "regular",
        $linkColor: "primary",
    })};
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;
    vertical-align: ${({ $vAlign }) => $vAlign};
    height: 1px;

    td {
        vertical-align: ${({ $vAlign }) => $vAlign};

        & > * {
            height: 100%;
        }
    }

    td,
    th {
        padding: ${SPACERS.XXS} ${SPACERS.XS};
        display: table-cell;
        overflow-x: scroll;
        ${Mixins.HideScrollbar};

        & > * {
            font-size: ${FONT_SIZES.SMALL};
        }

        @media ${BREAKPOINTS.MOBILE} {
            display: block;
        }
    }

    thead {
        background-color: ${({ theme }) => theme.PRIMARY_500};
        text-align: left;
        color: ${({ theme }) => theme.BACKGROUND};

        && {
            a {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverDefault("background", theme)};

                &:hover {
                    color: ${({ theme }) =>
                        Mixins.ColorsHoverHover("background", theme)};
                }

                &:active {
                    color: ${({ theme }) =>
                        Mixins.ColorsHoverActive("background", theme)};
                }
            }
        }
    }

    ${({ $variant, theme }) => {
        switch ($variant) {
            case "border-bottom":
                return css`
                    tbody tr {
                        border-bottom: 1px solid ${theme.GRAY_200};
                    }
                `
            case "bordered":
                return css`
                    border: 1px solid ${theme.GRAY_200};

                    thead th:not(:last-child) {
                        border-right: 1px solid ${theme.BACKGROUND};
                    }

                    td {
                        border: 1px solid ${theme.GRAY_200};
                    }
                `
            case "stripped":
                return css`
                    tbody tr:nth-child(odd) {
                        background-color: ${theme.BACKGROUND};
                    }

                    tbody tr:nth-child(even) {
                        background-color: ${theme.GRAY_50};
                    }
                `
        }
    }}
`

const StyledTd = styled.td<{ $noPadding: boolean }>`
    && {
        padding: ${({ $noPadding }) => $noPadding && 0};
    }
`

setDefaultTheme([StyledTable, StyledTd])

export { StyledTable, StyledTd }
