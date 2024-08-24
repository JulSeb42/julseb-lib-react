/*=============================================== MarkdownEditor component ===============================================*/

import { forwardRef, useState, useRef, useCallback } from "react"
import { Flexbox, markdownEditorOptions } from "../../"
import { appendStyles } from "../../lib-utils"
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
            iconsBaseUrl,
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
            containerStyle,
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

        appendStyles(`
            :root {
                --markdown-editor-grid: ${
                    editor === "editorLive" ? "1fr 2px 1fr" : 1
                };
                --markdown-input-height: ${height}px;
            }
        `)

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
                style={containerStyle}
            >
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
                    $validationStatus={validation?.status}
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
                                iconsBaseUrl={iconsBaseUrl}
                                addCode={addCode}
                            />
                        </Flexbox>

                        <EditorButtons
                            data-testid={testid}
                            className={className}
                            showButtons={showButtons}
                            editor={editor}
                            setEditor={setEditor}
                            icons={icons}
                            iconsSizes={iconsSizes}
                            iconsBaseUrl={iconsBaseUrl}
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
