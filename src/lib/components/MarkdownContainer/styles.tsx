import styled from "styled-components"
import Markdown from "markdown-to-jsx"
import { setDefaultTheme, Mixins } from "../../"

const StyledMarkdownContainer = styled(Markdown)`
    ${Mixins.Flexbox({
        $gap: "s",
        $alignItems: "stretch",
        $flexDirection: "column",
    })};
`

setDefaultTheme([StyledMarkdownContainer])

export { StyledMarkdownContainer }
