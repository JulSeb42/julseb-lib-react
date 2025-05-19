import { useState, type FC } from "react"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { roundIconSize } from "../../lib-utils"
import { Clipboard, Check } from "../../icons"
import {
    StyledCodeContainer,
    StyledSyntaxHighlighter,
    StyledButtonIcon,
} from "./styles"
import type { ILibCodeContainer } from "./types"

const DEFAULT_ICON_SIZE = 24

/**
 * CodeContainer component for displaying formatted code blocks with syntax highlighting and optional copy-to-clipboard functionality.
 *
 * @component
 * @param {Object} props - CodeContainer props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.language] - Language name for syntax highlighting.
 * @param {SyntaxHighlighterProps} [props.highlighterProps] - Additional props for the syntax highlighter (from react-syntax-highlighter).
 * @param {string} [props.color] - Any color from the library for the code block.
 * @param {CSSProperties} [props.highlighterStyle] - Style for the syntax highlighter.
 * @param {boolean} [props.hideCopyButton] - Hide the copy-to-clipboard button.
 * @param {{ copy?: string; copied?: string }} [props.tooltipTexts] - Tooltip texts for copy and copied states (only if hideCopyButton is false).
 * @param {{ copy?: string | JSX.Element; copied?: string | JSX.Element }} [props.icons] - Icons for copy and copied states.
 * @param {{ copy?: number; copied?: number }} [props.iconsSizes] - Icon sizes for copy and copied states.
 * @param {string} [props.iconsBaseUrl] - Base URL for icons.
 * @param {ReactNode} [props.children] - Code content to display.
 * @returns {JSX.Element} The rendered CodeContainer component.
 *
 * @example
 * <CodeContainer language="tsx" tooltipTexts={{ copy: "Copy code", copied: "Copied!" }}>
 *   {`const x = 42;`}
 * </CodeContainer>
 */
export const CodeContainer: FC<ILibCodeContainer> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    children,
    highlighterProps,
    highlighterStyle = atomOneDark,
    color,
    hideCopyButton,
    tooltipTexts,
    icons,
    iconsSizes,
    iconsBaseUrl,
    ...rest
}) => {
    const [hasCopied, setHasCopied] = useState(false)

    const copyToClipboard = () => {
        if (children) {
            let copyString = children.toString()

            if (copyString[0] === "$") {
                copyString = copyString.replace("$ ", "")
            }

            navigator.clipboard.writeText(copyString)
            setHasCopied(true)
        }

        setTimeout(() => setHasCopied(false), 1000)
    }

    const copyButtonCopy = {
        icon: icons?.copy ?? (
            <Clipboard
                data-testid={testid && `${testid}.CopyButton.IconCopy`}
                className={className && "IconCopy"}
                size={iconsSizes?.copy ?? roundIconSize(DEFAULT_ICON_SIZE)}
            />
        ),
        tooltip: tooltipTexts?.copy ?? "Copy",
    }

    const copyButtonCopied = {
        icon: icons?.copied ?? (
            <Check
                data-testid={testid && `${testid}.CopyButton.IconCopied`}
                className={className && "IconCopied"}
                size={iconsSizes?.copied ?? roundIconSize(DEFAULT_ICON_SIZE)}
            />
        ),
        tooltip: tooltipTexts?.copy ?? "Copied!",
    }

    return (
        <StyledCodeContainer
            data-testid={testid}
            ref={ref}
            className={className}
            as={as || color ? "pre" : "div"}
            {...rest}
        >
            <StyledSyntaxHighlighter
                data-testid={testid && `${testid}.SyntaxHighlighter`}
                className={className && "SyntaxHighlighter"}
                style={highlighterStyle}
                $color={color}
                {...highlighterProps}
            >
                {children}
            </StyledSyntaxHighlighter>

            {!hideCopyButton && (
                <StyledButtonIcon
                    data-testid={testid && `${testid}.CopyButton`}
                    className={className && "CopyButton"}
                    onClick={copyToClipboard}
                    icon={
                        hasCopied ? copyButtonCopied.icon : copyButtonCopy.icon
                    }
                    size={32}
                    color={hasCopied ? "success" : "white"}
                    tooltip={
                        hasCopied
                            ? copyButtonCopied.tooltip
                            : copyButtonCopy.tooltip
                    }
                    iconBaseUrl={iconsBaseUrl}
                    showTooltip
                />
            )}
        </StyledCodeContainer>
    )
}
