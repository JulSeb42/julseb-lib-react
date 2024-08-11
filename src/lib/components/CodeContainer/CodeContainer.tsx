/*=============================================== CodeContainer component ===============================================*/

import { forwardRef, useState } from "react"
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
 * @description Returns a CodeContainer component
 * @link https://documentation-components-react.vercel.app/components/code-container
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop copyButton?: boolean | { conCopy?: string | JSX.Element; iconCopied?: string | JSX.Element; iconSizeCopy?: number; iconSizeCopied?: number; tooltipCopy?: string; tooltipCopied?: string }
 * @prop color?: Any color from the library
 * @prop highlighterStyle?: CSSProperties
 * @prop highlighterProps?: SyntaxHighlighterProps => imported from react-syntax-highlighter
 */
export const CodeContainer = forwardRef<HTMLDivElement, ILibCodeContainer>(
    (
        {
            "data-testid": testid,
            as,
            className,
            children,
            highlighterProps,
            highlighterStyle = atomOneDark,
            color,
            hideCopyButton,
            copyButton,
            ...rest
        },
        ref
    ) => {
        const [hasCopied, setHasCopied] = useState(false)

        const copyToClipboard = () => {
            if (children) {
                navigator.clipboard.writeText(children.toString())
                setHasCopied(true)
            }

            setTimeout(() => setHasCopied(false), 1000)
        }

        const copyButtonCopy = {
            icon:
                copyButton &&
                typeof copyButton === "object" &&
                copyButton.iconCopied ? (
                    copyButton.iconCopied
                ) : (
                    <Clipboard
                        data-testid={testid && `${testid}.CopyButton.IconCopy`}
                        className={className && "IconCopy"}
                        size={
                            typeof copyButton === "object" &&
                            copyButton.iconSizeCopy
                                ? copyButton.iconSizeCopy
                                : roundIconSize(DEFAULT_ICON_SIZE)
                        }
                    />
                ),
            tooltip:
                copyButton &&
                typeof copyButton === "object" &&
                copyButton.tooltipCopy
                    ? copyButton.tooltipCopy
                    : "Copy",
        }

        const copyButtonCopied = {
            icon:
                copyButton &&
                typeof copyButton === "object" &&
                copyButton.iconCopied ? (
                    copyButton.iconCopied
                ) : (
                    <Check
                        data-testid={
                            testid && `${testid}.CopyButton.IconCopied`
                        }
                        className={className && "IconCopied"}
                        size={
                            typeof copyButton === "object" &&
                            copyButton.iconSizeCopy
                                ? copyButton.iconSizeCopy
                                : roundIconSize(DEFAULT_ICON_SIZE)
                        }
                    />
                ),
            tooltip:
                copyButton &&
                typeof copyButton === "object" &&
                copyButton.tooltipCopied
                    ? copyButton.tooltipCopied
                    : "Copied!",
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
                        icon={
                            hasCopied
                                ? copyButtonCopied.icon
                                : copyButtonCopy.icon
                        }
                        size={32}
                        color={hasCopied ? "success" : "white"}
                        tooltip={
                            hasCopied
                                ? copyButtonCopied.tooltip
                                : copyButtonCopy.tooltip
                        }
                        showTooltip
                        onClick={copyToClipboard}
                    />
                )}
            </StyledCodeContainer>
        )
    }
)
