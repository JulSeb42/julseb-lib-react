/*=============================================== MarkdownEditor styles ===============================================*/

import styled, { css } from "styled-components"
import {
    setDefaultTheme,
    Flexbox,
    SPACERS,
    BREAKPOINTS,
    RADIUSES,
    Mixins,
    FONT_FAMILIES,
    FONT_SIZES,
    ButtonIcon,
    Dropdown,
    DropdownItem,
} from "../../"
import { getFontSizeButton } from "./markdown-buttons"
import type { LibInputBackground, LibMdEditorTitle } from "../../types"
import type {} from "./types"

const MdEditorContainer = styled.div<{ $backgroundColor?: LibInputBackground }>`
    border-radius: ${RADIUSES.M};
    height: fit-content;
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    background-color: ${({ theme }) => theme.BACKGROUND};
    color: ${({ theme }) => theme.FONT};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    &:has(textarea:focus) {
        border-color: ${({ theme }) => theme.PRIMARY_500};
    }

    ${({ $backgroundColor, theme }) =>
        $backgroundColor === "light"
            ? css`
                  background-color: ${Mixins.AllColors(
                      "background",
                      theme,
                      "light"
                  )};
                  color: ${Mixins.AllColors("font", theme, "light")};
              `
            : $backgroundColor === "dark" &&
              css`
                  background-color: ${Mixins.AllColors(
                      "background",
                      theme,
                      "dark"
                  )};
                  color: ${Mixins.AllColors("font", theme, "dark")};
              `}
`

const StyledMarkdownEditor = styled.textarea<{
    $isVisible: boolean
    $inputHeight: number
}>`
    font-family: ${FONT_FAMILIES.BODY};
    font-size: ${FONT_SIZES.BODY};
    width: 100%;
    border: none;
    resize: none;
    border-radius: 0 0 0 ${RADIUSES.M};
    background-color: transparent;
    outline: none;
    height: 100%;
    display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
    padding: ${SPACERS.XS};
    height: ${({ $inputHeight }) => $inputHeight}px;
    min-height: 250px;
    color: currentColor;
`

const ButtonsContainer = styled(Flexbox).attrs({
    gap: "xs",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
})`
    background-color: ${({ theme }) => theme.GRAY_50};
    border-radius: ${RADIUSES.M} ${RADIUSES.M} 0 0;
    padding: ${SPACERS.XS};

    @media ${BREAKPOINTS.MOBILE} {
        gap: 0;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
    }
`

const IconButton = styled(ButtonIcon).attrs({
    size: 16,
    variant: "transparent",
    type: "button",
})`
    border-radius: ${RADIUSES.S};
`

const TitlesDropdown = styled(Dropdown)`
    border-radius: 0 0 ${RADIUSES.M} ${RADIUSES.M};
` as any

const TitleDropdownItem = styled(DropdownItem)<{ $tag: LibMdEditorTitle }>`
    background-color: ${({ theme }) => theme.GRAY_50};
    font-size: ${({ $tag }) => getFontSizeButton($tag)}px;
`

setDefaultTheme([
    MdEditorContainer,
    StyledMarkdownEditor,
    ButtonsContainer,
    IconButton,
    TitlesDropdown,
    TitleDropdownItem,
])

export {
    MdEditorContainer,
    StyledMarkdownEditor,
    ButtonsContainer,
    IconButton,
    TitlesDropdown,
    TitleDropdownItem,
}
