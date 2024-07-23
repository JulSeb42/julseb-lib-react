/*=============================================== MarkdownEditor styles ===============================================*/

import styled, { css } from "styled-components"
import Markdown from "markdown-to-jsx"
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
    COLORS_LIGHT,
} from "../../"
import { getFontSizeButton } from "./markdown-buttons"
import type {
    LibInputBackground,
    LibMdEditorTitle,
    LibValidationStatus,
} from "../../types"
import type {} from "./types"

const MdEditorContainer = styled.div<{
    $backgroundColor?: LibInputBackground
    $validation: LibValidationStatus
}>`
    border-radius: ${RADIUSES.M};
    height: fit-content;
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    background-color: ${({ theme, $validation }) =>
        $validation === false ? theme.DANGER_50 : theme.BACKGROUND};
    color: ${({ theme }) => theme.FONT};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    &:has(textarea:focus) {
        border-color: ${({ theme, $validation }) =>
            $validation === false ? theme.DANGER_500 : theme.PRIMARY_500};
    }

    ${({ $backgroundColor, $validation, theme }) =>
        $backgroundColor === "light"
            ? css`
                  /* background-color: ${$validation === false
                      ? COLORS_LIGHT.DANGER_50
                      : COLORS_LIGHT.BACKGROUND}; */
                  background-color: ${Mixins.AllColors(
                      $validation === false ? "danger-50" : "white",
                      theme,
                      "light"
                  )};
                  color: ${Mixins.AllColors("font", theme, "light")};
              `
            : $backgroundColor === "dark" &&
              css`
                  background-color: ${Mixins.AllColors(
                      $validation === false ? "danger-50" : "background",
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
    size: 24,
    variant: "transparent",
    type: "button",
})<{ $isActive?: boolean }>`
    border-radius: ${RADIUSES.S};
    background-color: ${({ $isActive, theme }) => $isActive && theme.GRAY_100};
`

const TitlesDropdown = styled(Dropdown)`
    border-radius: 0 0 ${RADIUSES.M} ${RADIUSES.M};
` as any

const TitleDropdownItem = styled(DropdownItem)<{ $tag: LibMdEditorTitle }>`
    background-color: ${({ theme }) => theme.GRAY_50};
    font-size: ${({ $tag }) => getFontSizeButton($tag)}px;
`

const ContainerGrid = styled.div<{ $col: number }>`
    flex-grow: 1;
    ${({ $col }) =>
        Mixins.Grid({
            $gap: "xs",
            $col: $col === 3 ? "1fr 2px 1fr" : 1,
        })}
`

const Separator = styled.span`
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.GRAY_200};
`

const MarkdownContainer = styled(Markdown)<{
    $height: number
    $isVisible: boolean
}>`
    height: ${({ $height }) => $height}px;
    min-height: 250px;
    border-radius: 0 0 ${RADIUSES.M} 0;
    display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
    flex-direction: column;
    gap: ${SPACERS.S};
    align-items: stretch;
    padding: ${SPACERS.XS};
    overflow-y: scroll;
    color: currentColor;
`

setDefaultTheme([
    MdEditorContainer,
    StyledMarkdownEditor,
    ButtonsContainer,
    IconButton,
    TitlesDropdown,
    TitleDropdownItem,
    ContainerGrid,
    Separator,
    MarkdownContainer,
])

export {
    MdEditorContainer,
    StyledMarkdownEditor,
    ButtonsContainer,
    IconButton,
    TitlesDropdown,
    TitleDropdownItem,
    ContainerGrid,
    Separator,
    MarkdownContainer,
}
