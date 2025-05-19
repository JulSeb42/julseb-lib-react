import { useCallback, type ChangeEvent, type FC } from "react"
import classNames from "classnames"
import { useMergeRefs, optionsMarkdown } from "../../"
import {
    StyledMarkdownEditor,
    ContainerGrid,
    Separator,
    MarkdownContainer,
} from "./styles"
import type { ILibMdEditorInput } from "./subtypes"

export const MdEditorInput: FC<ILibMdEditorInput> = ({
    "data-testid": testid,
    ref,
    className,
    editor,
    setValue,
    setHeight,
    inputRef,
    id,
    value,
    maxLength,
    ...rest
}) => {
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
            data-testid={testid && `${testid}.EditorContainer.ContainerGrid`}
            className={className && "ContainerGrid"}
        >
            <StyledMarkdownEditor
                data-testid={
                    testid && `${testid}.EditorContainer.ContainerGrid.Textarea`
                }
                className={classNames(
                    { Textarea: className },
                    {
                        Visible:
                            editor === "editorCode" || editor === "editorLive",
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
