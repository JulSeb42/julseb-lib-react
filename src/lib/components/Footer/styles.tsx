/*=============================================== Footer styles ===============================================*/

import styled, { css } from "styled-components"
import {
    setDefaultTheme,
    Mixins,
    SPACERS,
    MEDIA,
    Image,
    Text,
    Flexbox,
} from "../../"
import type { LibFooterDirection } from "../../types"

const StyledFooter = styled.footer<{
    $withSeparator?: boolean
    $direction: LibFooterDirection
}>`
    width: 100%;
    position: relative;
    z-index: 10;
    background-color: ${({ theme }) => theme.Background};
    padding: ${SPACERS.L} 5%;
    width: 100%;
    ${({ $direction }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent:
                $direction === "horizontal"
                    ? "space-between"
                    : $direction === "vertical"
                    ? "center"
                    : undefined,
            $gap: $direction === "horizontal" ? "l" : "xs",
            $flexDirection: $direction === "horizontal" ? "row" : "column",
        })}

    a,
    button {
        color: ${({ theme }) => Mixins.ColorsHoverDefault("primary", theme)};
        text-decoration: none;
        border: none;
        padding: 0;
        background-color: transparent;

        @media ${MEDIA.HOVER} {
            &:hover {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverHover("primary", theme)};
            }

            &:active {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverActive("primary", theme)};
            }
        }
    }

    @media ${MEDIA.BREAKPOINT_MOBILE} {
        flex-direction: column;
        gap: ${SPACERS.XS};
    }

    ${({ $withSeparator }) =>
        $withSeparator &&
        css`
            padding-top: ${SPACERS.XXL};

            &:before {
                content: "";
                width: calc(100% - 10%);
                height: 1px;
                position: absolute;
                top: ${SPACERS.L};
                left: 5%;
                background-color: ${({ theme }) => theme.GRAY_200};
            }
        `}
`

const LogoImg = styled(Image).attrs({ fit: "contain" })`
    object-position: left center;
`

const LogoText = styled(Text).attrs({ tag: "strong" })`
    color: ${({ theme }) => theme.Primary500};
` as any

const FooterLinksContainer = styled(Flexbox).attrs({
    alignItems: "center",
    justifyContent: "center",
    gap: "xs",
    flexWrap: "wrap",
})`
    @media ${MEDIA.BREAKPOINT_MOBILE} {
        justify-content: center;
        align-items: center;
    }
`

const FooterLinkSeparatorContainer = styled.span`
    height: 24px;
    font-size: 12px;
    line-height: 24px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })};
    color: ${({ theme }) => theme.GRAY_500};
`

setDefaultTheme([
    StyledFooter,
    LogoImg,
    LogoText,
    FooterLinksContainer,
    FooterLinkSeparatorContainer,
])

export {
    StyledFooter,
    LogoImg,
    LogoText,
    FooterLinksContainer,
    FooterLinkSeparatorContainer,
}
