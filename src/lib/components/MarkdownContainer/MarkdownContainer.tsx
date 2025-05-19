import type { FC } from "react"
import { optionsMarkdown } from "../../"
import { StyledMarkdownContainer } from "./styles"
import type { ILibMarkdownContainer } from "./types"

/**
 * MarkdownContainer component for rendering Markdown content with custom options and styling.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - MarkdownContainer props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {MarkdownToJSX.Options} [props.options] - Options for markdown-to-jsx rendering.
 *  * @param {ReactNode} [props.children] - Markdown content to render.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered MarkdownContainer component.
 *
 * @see https://documentation-components-react.vercel.app/components/markdown-container
 * @example
 * <MarkdownContainer>
 *   {`# Hello World\nThis is **Markdown**!`}
 * </MarkdownContainer>
 */
export const MarkdownContainer: FC<ILibMarkdownContainer> = ({
    "data-testid": testid,
    ref,
    children,
    options = optionsMarkdown,
    ...rest
}) => {
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
