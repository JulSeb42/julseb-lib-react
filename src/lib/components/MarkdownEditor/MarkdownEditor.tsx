/*=============================================== MarkdownEditor component ===============================================*/

import { forwardRef, useState, useRef, useCallback } from "react"
import { Flexbox, markdownEditorOptions } from "../../"
import { MdEditorHelmet } from "./MdEditorHelmet"
import { EditorButtons } from "./MdEditorButtons/EditorButtons"
import { EditorButtonTitles } from "./MdEditorButtons/EditorButtonTitles"
import { MarkdownButtons } from "./MdEditorButtons/MarkdownButtons"
import { MdEditorInput } from "./MdEditorInput"
import type { LibMdEditorEditor } from "../../types"
import { InputContainer } from "../InputComponents"
import { MdEditorContainer, ButtonsContainer } from "./styles"
import type { ILibMarkdownEditor } from "./types"

/**
 * @description Returns a MarkdownEditor component
 * @link https://documentation-components-react.vercel.app/components/markdown-editor
 * @extends HTMLTextAreaElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLTextAreaElement>
 * @prop value: string
 * @prop setValue: Dispatch<SetStateAction<string>>
 * @prop defaultEditor?: "editorCode" | "editorLive" | "editorPreview"
 * @prop textButtonTitles?: string
 * @prop showButtons?: { bold?: boolean; italic?: boolean; strikethrough?: boolean; ul?: boolean; ol?: boolean; link?: boolean; quote?: boolean; hr?: boolean; code?: boolean; codeBlock?: boolean; comment?: boolean; image?: boolean; editorCode?: boolean; editorLive?: boolean; editorPreview?: boolean; titles?: boolean }
 * @prop icons?: { bold?: string | JSX.Element; italic?: string | JSX.Element; strikethrough?: string | JSX.Element; ul?: string | JSX.Element; ol?: string | JSX.Element; link?: string | JSX.Element; quote?: string | JSX.Element; hr?: string | JSX.Element; code?: string | JSX.Element; codeBlock?: string | JSX.Element; comment?: string | JSX.Element; image?: string | JSX.Element; editorCode?: string | JSX.Element; editorLive?: string | JSX.Element; editorPreview?: string | JSX.Element }
 * @prop iconsSizes?: { bold?: number; italic?: number; strikethrough?: number; ul?: number; ol?: number; link?: number; quote?: number; hr?: number; code?: number; codeBlock?: number; comment?: number; image?: number; editorCode?: number; editorLive?: number; editorPreview?: number }
 */
export const MarkdownEditor = forwardRef<
    HTMLTextAreaElement,
    ILibMarkdownEditor
>(
    (
        {
            "data-testid": testid,
            value,
            setValue,
            id,
            inputBackground,
            showButtons = markdownEditorOptions,
            icons,
            iconsSizes,
            defaultEditor = "editorLive",
            className,
            label,
            labelComment,
            helper,
            helperBottom,
            validation,
            counter,
            maxLength,
            textButtonTitles = "Titles",
            ...rest
        },
        ref
    ) => {
        const [editor, setEditor] = useState<LibMdEditorEditor>(defaultEditor)
        const [height, setHeight] = useState(250)

        const inputRef = useRef<HTMLTextAreaElement>(null)

        const addCode = useCallback(
            (code: string) => {
                const newValue = `${value}${code}`
                setValue(newValue)
                inputRef?.current?.focus()
            },
            [value, setValue, inputRef]
        )

        const hasContainer: boolean = !!(
            label ||
            labelComment ||
            helper ||
            helperBottom ||
            validation ||
            counter
        )

        return (
            <InputContainer
                data-testid={testid}
                className={className}
                label={label}
                labelComment={labelComment}
                helper={helper}
                helperBottom={helperBottom}
                validation={validation}
                counter={counter}
                maxLength={maxLength}
                id={id}
                value={value}
            >
                <MdEditorHelmet height={height} editor={editor} />

                <MdEditorContainer
                    data-testid={
                        testid && hasContainer
                            ? `${testid}.EditorContainer`
                            : testid
                    }
                    className={
                        className && hasContainer
                            ? "EditorContainer"
                            : className
                    }
                    $backgroundColor={inputBackground}
                    $validation={validation?.status}
                >
                    <ButtonsContainer
                        data-testid={
                            testid &&
                            `${testid}.EditorContainer.ButtonsContainer`
                        }
                        className={className && "ButtonsContainer"}
                    >
                        <Flexbox
                            data-testid={
                                testid &&
                                `${testid}.EditorContainer.ButtonsContainer.ActionButtonsContainer`
                            }
                            className={className && "ActionButtonsContainer"}
                            gap="xs"
                            alignItems="center"
                        >
                            <EditorButtonTitles
                                data-testid={testid}
                                showButtons={showButtons}
                                className={className}
                                textButtonTitles={textButtonTitles}
                                inputRef={inputRef}
                                addCode={addCode}
                            />

                            <MarkdownButtons
                                data-testid={testid}
                                className={className}
                                showButtons={showButtons}
                                icons={icons}
                                iconsSizes={iconsSizes}
                                addCode={addCode}
                            />
                        </Flexbox>

                        <EditorButtons
                            showButtons={showButtons}
                            editor={editor}
                            setEditor={setEditor}
                        />
                    </ButtonsContainer>

                    <MdEditorInput
                        data-testid={testid}
                        ref={ref}
                        className={className}
                        editor={editor}
                        setHeight={setHeight}
                        inputRef={inputRef}
                        setValue={setValue}
                        id={id}
                        value={value}
                        maxLength={maxLength}
                        {...rest}
                    />
                </MdEditorContainer>
            </InputContainer>
        )
    }
)
