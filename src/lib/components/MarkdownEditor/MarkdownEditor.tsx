import { useState, useRef, useCallback, type FC } from "react"
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
 * MarkdownEditor component for editing Markdown content with live preview, formatting buttons, and flexible configuration.
 *
 * @component
 * @extends HTMLTextAreaElement
 * @param {Object} props - MarkdownEditor props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {Ref<HTMLTextAreaElement>} [props.ref] - Ref forwarded to the textarea element.
 * @param {string} props.value - Current Markdown value.
 *  * @param {Dispatch<React.SetStateAction<string>>} props.setValue - Setter for the Markdown value.
 * @param {"editorCode" | "editorLive" | "editorPreview"} [props.defaultEditor="editorLive"] - Default editor mode.
 * @param {string} [props.textButtonTitles="Titles"] - Text for the titles button.
 * @param {LibMarkdownEditorOptions} [props.showButtons] - Show/hide formatting buttons.
 * @param {Object} [props.icons] - Custom icons for formatting and editor buttons.
 * @param {Object} [props.iconsSizes] - Icon sizes for formatting and editor buttons.
 * @param {string} [props.id] - Input id.
 * @param {string} [props.label] - Label for the editor.
 * @param {string} [props.labelComment] - Additional comment for the label.
 * @param {string} [props.helper] - Helper text above the editor.
 * @param {string|Object} [props.helperBottom] - Helper text or element below the editor.
 * @param {Object} [props.validation] - Validation status and message.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {"light" | "dark"} [props.inputBackground] - Input background style.
 *  * @param {CSSProperties} [props.containerStyle] - Style for the input container.
 * @param {boolean} [props.counter] - Show character counter.
 * @param {number} [props.maxLength] - Maximum length for the input value.
 * @param {string} [props.className] - Additional class names.
 * @param {any} [props.rest] - Additional props passed to the editor.
 * @returns {JSX.Element} The rendered MarkdownEditor component.
 *
 * @see https://documentation-components-react.vercel.app/components/markdown-editor
 * @example
 * <MarkdownEditor
 *   value={markdown}
 *   setValue={setMarkdown}
 *   label="Description"
 *   helper="Supports Markdown formatting"
 * />
 */
export const MarkdownEditor: FC<ILibMarkdownEditor> = ({
    "data-testid": testid,
    ref,
    value,
    setValue,
    id,
    inputBackground,
    showButtons = markdownEditorOptions,
    icons,
    iconsSizes,
    iconBaseUrl,
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
}) => {
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
            hasListOpen={undefined}
            iconBaseUrl={undefined}
        >
            <MdEditorContainer
                data-testid={
                    testid && hasContainer
                        ? `${testid}.EditorContainer`
                        : testid
                }
                className={
                    className && hasContainer ? "EditorContainer" : className
                }
                $backgroundColor={inputBackground}
                $validationStatus={validation?.status}
            >
                <ButtonsContainer
                    data-testid={
                        testid && `${testid}.EditorContainer.ButtonsContainer`
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
                            iconsBaseUrl={iconBaseUrl}
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
                        iconsBaseUrl={iconBaseUrl}
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
