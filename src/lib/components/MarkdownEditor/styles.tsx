import styled, { css } from "styled-components"
import Markdown from "markdown-to-jsx"
import {
    setDefaultTheme,
    Flexbox,
    SPACERS,
    MEDIA,
    RADIUSES,
    Mixins,
    FONT_FAMILIES,
    FONT_SIZES,
    ButtonIcon,
    Dropdown,
    DropdownItem,
} from "../../"
import { getFontSizeButton } from "./markdown-buttons"
import type {
    LibInputBackground,
    LibMdEditorTitle,
    LibValidationStatus,
} from "../../types"

const MdEditorContainer = styled.div<{
    $backgroundColor?: LibInputBackground
    $validationStatus: LibValidationStatus
}>`
    border-radius: ${RADIUSES.M};
    height: fit-content;
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    background-color: ${({ theme, $validationStatus }) =>
        $validationStatus === false ? theme.DANGER_50 : theme.BACKGROUND};
    color: ${({ theme }) => theme.FONT};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })}

    &:has(textarea:focus) {
        border-color: ${({ theme, $validationStatus }) =>
            $validationStatus === false ? theme.DANGER_500 : theme.PRIMARY_500};
    }

    ${({ $backgroundColor, $validationStatus, theme }) => {
        switch ($backgroundColor) {
            case "light":
                return css`
                    background-color: ${Mixins.AllColors(
                        $validationStatus === false ? "danger-50" : "white",
                        theme,
                        "light"
                    )};
                    color: ${Mixins.AllColors("font", theme, "light")};
                `
            case "dark":
                return css`
                    background-color: ${Mixins.AllColors(
                        $validationStatus === false
                            ? "danger-50"
                            : "background",
                        theme,
                        "dark"
                    )};
                    color: ${Mixins.AllColors("font", theme, "dark")};
                `
            default:
                return null
        }
    }}
`

const StyledMarkdownEditor = styled.textarea`
    font-family: ${FONT_FAMILIES.BODY};
    font-size: ${FONT_SIZES.BODY};
    width: 100%;
    border: none;
    resize: none;
    border-radius: 0 0 0 ${RADIUSES.M};
    background-color: transparent;
    outline: none;
    height: 100%;
    display: none;
    padding: ${SPACERS.XS};
    height: var(--markdown-input-height, 250px);
    min-height: 250px;
    color: currentColor;

    &.Visible {
        display: block;
    }
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

    @media ${MEDIA.BREAKPOINT_MOBILE} {
        gap: 0;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
    }
`

// @ts-ignore
const IconButton = styled(ButtonIcon).attrs({
    size: 24,
    variant: "transparent",
    type: "button",
})`
    border-radius: ${RADIUSES.S};

    &.Active {
        background-color: ${({ theme }) => theme.GRAY_100};
    }
`

const TitlesDropdown = styled(Dropdown)`
    border-radius: 0 0 ${RADIUSES.M} ${RADIUSES.M};
` as any

const TitleDropdownItem = styled(DropdownItem)<{ $tag: LibMdEditorTitle }>`
    background-color: ${({ theme }) => theme.GRAY_50};
    font-size: ${({ $tag }) => getFontSizeButton($tag)}px;
`

const ContainerGrid = styled.div`
    flex-grow: 1;
    ${Mixins.Grid({
        $gap: "xs",
        $col: "var(--markdown-editor-grid)",
    })}
`

const Separator = styled.span`
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.GRAY_200};
`

const MarkdownContainer = styled(Markdown)`
    height: var(--markdown-input-height, 250px);
    min-height: 250px;
    border-radius: 0 0 ${RADIUSES.M} 0;
    display: none;
    flex-direction: column;
    gap: ${SPACERS.S};
    align-items: stretch;
    padding: ${SPACERS.XS};
    overflow-y: scroll;
    color: currentColor;

    &.Visible {
        display: flex;
    }
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
