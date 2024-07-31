/*=============================================== MdEditorInput ===============================================*/

import {
    forwardRef,
    useCallback,
    type ChangeEvent,
    type RefObject,
} from "react"
import classNames from "classnames"
import { useMergeRefs, optionsMarkdown } from "../../"
import type { LibMdEditorEditor, DispatchState } from "../../types"
import {
    StyledMarkdownEditor,
    ContainerGrid,
    Separator,
    MarkdownContainer,
} from "./styles"
import type { ILibMarkdownEditor } from "./types"

interface ILibMdEditorInput extends ILibMarkdownEditor {
    editor: LibMdEditorEditor
    setHeight: DispatchState<number>
    inputRef: RefObject<HTMLTextAreaElement>
}

export const MdEditorInput = forwardRef<HTMLTextAreaElement, ILibMdEditorInput>(
    (
        {
            "data-testid": testid,
            className,
            editor,
            setValue,
            setHeight,
            inputRef,
            id,
            value,
            maxLength,
            ...rest
        },
        ref
    ) => {
        const handleChange = useCallback(
            (e: ChangeEvent<HTMLTextAreaElement>) => {
                setValue(e.target.value)
                setHeight(e.target.scrollHeight)

                if (!e.target.value.length) setHeight(250)
            },
            [setValue, setHeight]
        )

        return (
            <ContainerGrid
                data-testid={
                    testid && `${testid}.EditorContainer.ContainerGrid`
                }
                className={className && "ContainerGrid"}
            >
                <StyledMarkdownEditor
                    data-testid={
                        testid &&
                        `${testid}.EditorContainer.ContainerGrid.Textarea`
                    }
                    className={classNames(
                        { Textarea: className },
                        {
                            Visible:
                                editor === "editorCode" ||
                                editor === "editorLive",
                        }
                    )}
                    ref={useMergeRefs([ref, inputRef])}
                    id={id}
                    value={value}
                    onChange={handleChange}
                    maxLength={maxLength}
                    {...rest}
                />

                {editor === "editorLive" && (
                    <Separator
                        data-testid={
                            testid &&
                            `${testid}.EditorContainer.ContainerGrid.Separator`
                        }
                        className={className && "Separator"}
                    />
                )}

                <MarkdownContainer
                    data-testid={
                        testid &&
                        `${testid}.EditorContainer.ContainerGrid.MarkdownContent`
                    }
                    className={classNames(
                        { MarkdownContent: className },
                        {
                            Visible:
                                editor === "editorPreview" ||
                                editor === "editorLive",
                        }
                    )}
                    options={optionsMarkdown as any}
                >
                    {value}
                </MarkdownContainer>
            </ContainerGrid>
        )
    }
)
