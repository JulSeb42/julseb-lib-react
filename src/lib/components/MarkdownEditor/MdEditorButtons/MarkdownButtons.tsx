/*=============================================== MarkdownButtons component ===============================================*/

import { uuid, toSentenceCase } from "ts-utils-julseb"
import { roundIconSize } from "../../../lib-utils"
import { mdButtons } from "../markdown-buttons"
import { IconButton } from "../styles"
import type { ILibMarkdownEditor } from "../types"

const DEFAULT_ICON_SIZE = roundIconSize(24)

export function MarkdownButtons({
    "data-testid": testid,
    className,
    showButtons,
    icons,
    iconsSizes,
    addCode,
}: Pick<
    ILibMarkdownEditor,
    "showButtons" | "icons" | "iconsSizes" | "data-testid" | "className"
> & { addCode: (code: string) => void }) {
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
            // @ts-ignore
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
                showTooltip
            />
        )
    })
}
