import { uuid, toSentenceCase } from "@julseb-lib/utils"
import { roundIconSize } from "../../../lib-utils"
import { mdButtons } from "../markdown-buttons"
import { IconButton } from "../styles"
import type { ILibMarkdownEditorMdButtons } from "../subtypes"

const DEFAULT_ICON_SIZE = roundIconSize(24)

export function MarkdownButtons({
    "data-testid": testid,
    className,
    showButtons,
    icons,
    iconsSizes,
    iconsBaseUrl,
    addCode,
}: ILibMarkdownEditorMdButtons) {
    return mdButtons.map(button => {
        if (
            showButtons &&
            showButtons[button.name as keyof typeof showButtons] === false
        )
            return null

        const icon =
            icons && icons[button.name as keyof typeof icons]
                ? icons[button.name as keyof typeof icons]
                : button.defaultIcon

        const iconSize =
            iconsSizes && iconsSizes[button.name as keyof typeof iconsSizes]
                ? iconsSizes[button.name as keyof typeof iconsSizes]
                : DEFAULT_ICON_SIZE

        return (
            <IconButton
                key={uuid()}
                data-testid={
                    testid &&
                    `${testid}.EditorContainer.ButtonsContainer.ActionButtonsContainer.ActionButton`
                }
                className={className && "ActionButton"}
                icon={icon}
                iconSize={iconSize}
                onClick={() => addCode(button.code)}
                tooltip={button.displayName || toSentenceCase(button.name)}
                iconBaseUrl={iconsBaseUrl}
                showTooltip
            />
        )
    })
}
