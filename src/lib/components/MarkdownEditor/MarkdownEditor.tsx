/*=============================================== MarkdownEditor component ===============================================*/

import {
    forwardRef,
    useState,
    useRef,
    useCallback,
    type ChangeEvent,
} from "react"
import { uuid } from "ts-utils-julseb"
import {
    Flexbox,
    useClickOutside,
    Button,
    Dropdown,
    DropdownContainer,
    DropdownItem,
    useMergeRefs,
    filterObject,
} from "../../"
import type { LibMdEditorEditor } from "../../types"
import { InputContainer } from "../InputComponents"
import {
    mdButtons,
    mdEditorButtons,
    mdTitlesButtons,
    getFontSizeButton,
    titleNames,
} from "./markdown-buttons"
import {
    MdEditorContainer,
    StyledMarkdownEditor,
    ButtonsContainer,
    IconButton,
    TitlesDropdown,
    TitleDropdownItem,
} from "./styles"
import type { ILibMarkdownEditor } from "./types"

/** 
 * @description Returns a MarkdownEditor component
 * @link https://documentation-components-react.vercel.app/components/markdown-editor
 * @extends HTMLTextAreaElement
 * @prop data-testid?: string

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
            showButtons = {
                bold: true,
                italic: true,
                strikethrough: true,
                ul: true,
                ol: true,
                link: true,
                quote: true,
                hr: true,
                code: true,
                codeBlock: true,
                comment: true,
                image: true,
                editorCode: true,
                editorLive: true,
                editorPreview: true,
                titles: true,
            },
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
            // ...rest
        },
        ref
    ) => {
        const [editor, setEditor] = useState<LibMdEditorEditor>(defaultEditor)
        const [height, setHeight] = useState(250)
        const [isFocused, setIsFocused] = useState(false)
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

        // const actionsButtons = mdEditorButtons

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
                <MdEditorContainer $backgroundColor={inputBackground}>
                    <ButtonsContainer>
                        <Flexbox gap="xs" alignItems="center">
                            {showButtons?.titles !== false && (
                                <DropdownContainer isOpen={isTextOpen}>
                                    <Button
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
                                    >
                                        {mdTitlesButtons.map(tag => (
                                            <TitleDropdownItem
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

                            {mdButtons
                                .filter(
                                    button =>
                                        showButtons[
                                            button.name as keyof typeof showButtons
                                        ] !== false
                                )
                                .map(button => {
                                    const icon =
                                        icons &&
                                        // @ts-expect-error
                                        icons[button.name as any]
                                            ? // @ts-expect-error
                                              icons[button.name]
                                            : button.defaultIcon

                                    return (
                                        <IconButton
                                            key={uuid()}
                                            icon={icon}
                                            label={
                                                button.displayName ||
                                                button.name
                                            }
                                            showLabel
                                        />
                                    )
                                })}
                        </Flexbox>

                        <Flexbox gap="xs" alignItems="center">
                            
                        </Flexbox>
                    </ButtonsContainer>

                    <StyledMarkdownEditor
                        data-testid={testid}
                        ref={useMergeRefs([ref, inputRef])}
                        id={id}
                        value={value}
                        onChange={handleChange}
                        maxLength={maxLength}
                        $isVisible={
                            editor === "editorCode" || editor === "editorLive"
                        }
                        $inputHeight={height}
                        // {...rest}
                    />
                </MdEditorContainer>
            </InputContainer>
        )
    }
)
