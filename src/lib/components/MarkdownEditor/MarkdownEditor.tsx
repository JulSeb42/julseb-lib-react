/*=============================================== MarkdownEditor component ===============================================*/

import {
    forwardRef,
    useState,
    useRef,
    useCallback,
    type ChangeEvent,
} from "react"
import classNames from "classnames"
import { uuid, toSentenceCase } from "ts-utils-julseb"
import {
    Flexbox,
    useClickOutside,
    Button,
    DropdownContainer,
    useMergeRefs,
    optionsMarkdown,
    markdownEditorOptions,
} from "../../"
import { roundIconSize, HelmetStyles } from "../../lib-utils"
import type { LibMdEditorEditor } from "../../types"
import { InputContainer } from "../InputComponents"
import { mdButtons, mdEditorButtons, mdTitlesButtons } from "./markdown-buttons"
import {
    MdEditorContainer,
    StyledMarkdownEditor,
    ButtonsContainer,
    IconButton,
    TitlesDropdown,
    TitleDropdownItem,
    ContainerGrid,
    Separator,
    MarkdownContainer,
} from "./styles"
import type { ILibMarkdownEditor } from "./types"

const DEFAULT_ICON_SIZE = roundIconSize(24)

/**
 * @description Returns a MarkdownEditor component
 * @link https://documentation-components-react.vercel.app/components/markdown-editor
 * @extends HTMLTextAreaElement
 * @prop data-testid?: string
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
            // style,
            ...rest
        },
        ref
    ) => {
        const [editor, setEditor] = useState<LibMdEditorEditor>(defaultEditor)
        const [height, setHeight] = useState(250)
        const [isTextOpen, setIsTextOpen] = useState(false)

        const titlesDropdownRef = useRef<HTMLDivElement>(null)
        useClickOutside(titlesDropdownRef, () => setIsTextOpen(false))

        const inputRef = useRef<HTMLTextAreaElement>(null)
        const handleChange = useCallback(
            (e: ChangeEvent<HTMLTextAreaElement>) => {
                setValue(e.target.value)
                setHeight(e.target.scrollHeight)

                if (!e.target.value.length) setHeight(250)
            },
            [setValue, setHeight]
        )

        const addCode = useCallback(
            (code: string) => {
                setValue(`${value}${code}`)
                inputRef?.current?.focus()
            },
            [setValue, inputRef]
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
                <HelmetStyles>
                    {`
                        :root {
                            --markdown-editor-grid: ${
                                editor === "editorLive" ? "1fr 2px 1fr" : 1
                            };
                            --markdown-input-height: ${height}px;

                        }
                    `}
                </HelmetStyles>

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
                            {showButtons?.titles !== false && (
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
                                        className={
                                            className && "ButtonDropdown"
                                        }
                                        variant="transparent"
                                        noPadding
                                        onClick={() =>
                                            setIsTextOpen(!isTextOpen)
                                        }
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
                                                className={
                                                    className && "DropdownItem"
                                                }
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
                            )}

                            {mdButtons.map(button => {
                                if (
                                    showButtons[
                                        button.name as keyof typeof showButtons
                                    ] === false
                                )
                                    return null

                                const icon =
                                    icons &&
                                    icons[button.name as keyof typeof icons]
                                        ? icons[
                                              button.name as keyof typeof icons
                                          ]
                                        : button.defaultIcon

                                const iconSize =
                                    iconsSizes &&
                                    iconsSizes[
                                        button.name as keyof typeof iconsSizes
                                    ]
                                        ? iconsSizes[
                                              button.name as keyof typeof iconsSizes
                                          ]
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
                                        tooltip={
                                            button.displayName ||
                                            toSentenceCase(button.name)
                                        }
                                        showTooltip
                                    />
                                )
                            })}
                        </Flexbox>

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
                                    showButtons[
                                        button.name as keyof typeof showButtons
                                    ] === false
                                )
                                    return null

                                const icon =
                                    icons &&
                                    icons[button.name as keyof typeof icons]
                                        ? icons[
                                              button.name as keyof typeof icons
                                          ]
                                        : button.defaultIcon
                                const iconSize =
                                    iconsSizes &&
                                    iconsSizes[
                                        button.name as keyof typeof iconsSizes
                                    ]
                                        ? iconsSizes[
                                              button.name as keyof typeof iconsSizes
                                          ]
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
                                        onClick={() =>
                                            setEditor(
                                                button.name as LibMdEditorEditor
                                            )
                                        }
                                        tooltip={
                                            button.displayName ||
                                            toSentenceCase(button.name)
                                        }
                                        showTooltip
                                    />
                                )
                            })}
                        </Flexbox>
                    </ButtonsContainer>

                    <ContainerGrid
                        data-testid={
                            testid && `${testid}.EditorContainer.ContainerGrid`
                        }
                        className={className && "ContainerGrid"}
                        // style={{
                        //     // TODO: Remove and change to class from css module
                        //     ["--markdown-editor-grid" as any]:
                        //         editor === "editorLive" ? "1fr 2px 1fr" : 1,
                        // }}
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
                            // style={{
                            //     // TODO: Remove and change to class from css module
                            //     ...style,
                            //     ["--markdown-input-height" as any]: `${height}px`,
                            // }}
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
                            // style={{
                            //     // TODO: Remove and change to class from css module
                            //     ["--markdown-input-height" as any]: `${height}px`,
                            // }}
                            options={optionsMarkdown as any}
                        >
                            {value}
                        </MarkdownContainer>
                    </ContainerGrid>
                </MdEditorContainer>
            </InputContainer>
        )
    }
)
