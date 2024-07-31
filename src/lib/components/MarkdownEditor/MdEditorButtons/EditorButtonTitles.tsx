/*=============================================== EditorButtonTitles component ===============================================*/

import { useState, type RefObject } from "react"
import { Button, DropdownContainer } from "../../../"
import { mdTitlesButtons } from "../markdown-buttons"
import { TitlesDropdown, TitleDropdownItem } from "../styles"
import type { ILibMarkdownEditor } from "../types"

export function EditorButtonTitles({
    "data-testid": testid,
    showButtons,
    className,
    textButtonTitles,
    inputRef,
    addCode,
}: Pick<
    ILibMarkdownEditor,
    "data-testid" | "showButtons" | "className" | "textButtonTitles"
> & {
    inputRef: RefObject<HTMLTextAreaElement>
    addCode: (code: string) => void
}) {
    const [isTextOpen, setIsTextOpen] = useState(false)

    if (showButtons?.titles === false) return null

    return (
        <DropdownContainer
            data-testid={
                testid &&
                `${testid}.EditorContainer.ButtonsContainer.ActionButtonsContainer.DropdownContainer`
            }
            className={className && "DropdownContainer"}
            isOpen={isTextOpen}
        >
            <Button
                data-testid={
                    testid &&
                    `${testid}.EditorContainer.ButtonsContainer.ActionButtonsContainer.DropdownContainer.ButtonDropdown`
                }
                className={className && "ButtonDropdown"}
                variant="transparent"
                noPadding
                onClick={() => setIsTextOpen(!isTextOpen)}
                size="small"
                type="button"
            >
                {textButtonTitles}
            </Button>

            <TitlesDropdown
                isOpen={isTextOpen}
                setIsOpen={setIsTextOpen}
                positionFromButton={20}
                shadow={null}
                data-testid={
                    testid &&
                    `${testid}.EditorContainer.ButtonsContainer.ActionButtonsContainer.DropdownContainer.Dropdown`
                }
                className={className && "Dropdown"}
            >
                {mdTitlesButtons.map(tag => (
                    <TitleDropdownItem
                        data-testid={
                            testid &&
                            `${testid}.EditorContainer.ButtonsContainer.ActionButtonsContainer.DropdownContainer.Dropdown.Item`
                        }
                        className={className && "DropdownItem"}
                        key={tag.name}
                        onClick={() => {
                            addCode(tag!.code)
                            setIsTextOpen(false)
                            inputRef?.current?.focus()
                        }}
                        $tag={tag.name as any}
                    >
                        {tag.displayName || tag.name}
                    </TitleDropdownItem>
                ))}
            </TitlesDropdown>
        </DropdownContainer>
    )
}
