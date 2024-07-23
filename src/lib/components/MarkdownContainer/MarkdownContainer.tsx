/*=============================================== MarkdownContainer component ===============================================*/

import { forwardRef } from "react"
import { optionsMarkdown } from "../../"
import { StyledMarkdownContainer } from "./styles"
import type { ILibMarkdownContainer } from "./types"

/**
 * @description Returns a MarkdownContainer component
 * @link https://documentation-components-react.vercel.app/components/markdown-container
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop options?: MarkdownToJSX.Options => imported from package markdown-to-jsx
 */

export const MarkdownContainer = forwardRef<
    HTMLDivElement,
    ILibMarkdownContainer
>(
    (
        { "data-testid": testid, children, options = optionsMarkdown, ...rest },
        ref
    ) => {
        return (
            <StyledMarkdownContainer
                data-testid={testid}
                ref={ref}
                options={options}
                {...rest}
            >
                {children}
            </StyledMarkdownContainer>
        )
    }
)
