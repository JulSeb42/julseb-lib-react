/*=============================================== EditorButtons component ===============================================*/

import classNames from "classnames"
import { uuid, toSentenceCase } from "ts-utils-julseb"
import { Flexbox } from "../../../"
import type { LibMdEditorEditor, DispatchState } from "../../../types"
import { mdEditorButtons } from "../markdown-buttons"
import { IconButton } from "../styles"
import type { ILibMarkdownEditor } from "../types"

export function EditorButtons({
    "data-testid": testid,
    className,
    showButtons,
    icons,
    iconsSizes,
    editor,
    setEditor,
}: Pick<
    Partial<ILibMarkdownEditor>,
    "showButtons" | "className" | "data-testid" | "icons" | "iconsSizes"
> & {
    editor: LibMdEditorEditor
    setEditor: DispatchState<LibMdEditorEditor>
}) {
    return (
        <Flexbox
            data-testid={
                testid &&
                `${testid}.EditorContainer.ButtonsContainer.EditorButtonsContainer`
            }
            className={className && "EditorButtonsContainer"}
            gap="xs"
            alignItems="center"
        >
            {mdEditorButtons.map(button => {
                if (
                    showButtons &&
                    showButtons[button.name as keyof typeof showButtons] ===
                        false
                )
                    return null

                const icon =
                    icons && icons[button.name as keyof typeof icons]
                        ? icons[button.name as keyof typeof icons]
                        : button.defaultIcon
                const iconSize =
                    iconsSizes &&
                    iconsSizes[button.name as keyof typeof iconsSizes]
                        ? iconsSizes[button.name as keyof typeof iconsSizes]
                        : 24

                return (
                    // @ts-ignore
                    <IconButton
                        key={uuid()}
                        data-testid={
                            testid &&
                            `${testid}.EditorContainer.ButtonsContainer.EditorButtonsContainer.EditorButton`
                        }
                        className={classNames(
                            { EditorButton: className },
                            { Active: editor === button.name }
                        )}
                        icon={icon}
                        iconSize={iconSize}
                        onClick={() => {
                            setEditor(button.name as LibMdEditorEditor)
                        }}
                        tooltip={
                            button.displayName || toSentenceCase(button.name)
                        }
                        showTooltip
                    />
                )
            })}
        </Flexbox>
    )
}
