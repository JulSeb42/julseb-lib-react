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
 * @prop language?: string => language name
 * @prop highlighterProps?: SyntaxHighlighterProps => imported from react-syntax-highlighter
 * @prop color?: Any color from the library
 * @prop highlighterStyle?: CSSProperties
 * @prop hideCopyButton?: boolean
 * @prop tooltipTexts?: { copy?: string; copied?: string } => only if hideCopyButton is not set to true
 * @prop icons?: { copy?: string | JSX.Element; copied?: string | JSX.Element }
 * @prop iconsSizes?: { copy?: number; copied?: number }
 * @prop iconsBaseUrl?: string
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
            tooltipTexts,
            icons,
            iconsSizes,
            iconsBaseUrl,
            ...rest
        },
        ref
    ) => {
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
                    size={
                        iconsSizes?.copied ?? roundIconSize(DEFAULT_ICON_SIZE)
                    }
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
                        iconBaseUrl={iconsBaseUrl}
                        showTooltip
                    />
                )}
            </StyledCodeContainer>
        )
    }
)
