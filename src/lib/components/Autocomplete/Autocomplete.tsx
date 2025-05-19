import {
    useCallback,
    useMemo,
    useRef,
    memo,
    type ChangeEvent,
    type FC,
} from "react"
import Fuse from "fuse.js"
import classNames from "classnames"
import { uuid } from "@julseb-lib/utils"
import {
    Key,
    useKeyPress,
    useTouchScreen,
    useMergeRefs,
    Highlight,
} from "../../"
import {
    InputContainer,
    InputIcon,
    InputRightContainer,
    InputValidationIcon,
    InputWrapper,
    ListInput,
    ListInputItem,
    InputButton,
    InputLeftContainer,
    InputAndListContainer,
} from "../InputComponents"
import { Close } from "../../icons"
import { transformSearchKeys } from "../../lib-utils"
import { useKeyboardNavigation } from "../ComponentsMixins"
import { StyledAutocomplete } from "./styles"
import type { ILibAutocomplete } from "./types"

/**
 * Autocomplete input component with fuzzy search and keyboard navigation.
 *
 * @component
 * @param {Object} props - Autocomplete props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {Ref<HTMLInputElement>} [props.ref] - Ref forwarded to the input element.
 * @param {string} props.value - Current value of the input.
 * @param {Dispatch<SetStateAction<string>>} props.setValue - Setter for the input value.
 * @param {Array<string>} props.listResults - List of possible results to display.
 * @param {string} [props.emptyText="No result."] - Text to display when there are no results.
 * @param {"up" | "down"} [props.listDirection] - Direction in which the result list appears.
 * @param {IFuseOptions<string>} [props.fuzzyOptions] - Options for fuzzy search (from fuse.js).
 * @param {Object} [props.icons] - Icons for the input ({ left, clear }).
 * @param {Object} [props.iconSizes] - Sizes for the icons ({ left, clear }).
 * @param {string} [props.id] - HTML id attribute.
 * @param {string} [props.label] - Label for the input.
 * @param {string} [props.labelComment] - Comment for the label.
 * @param {string} [props.helper] - Helper text above the input.
 * @param {string|Object} [props.helperBottom] - Helper text or element below the input.
 * @param {Object} [props.validation] - Validation status and message.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {"light" | "dark"} [props.inputBackground] - Input background style.
 * @param {"rounded" | "pill"} [props.inputVariant="rounded"] - Input variant style.
 * @param {Array<string>} [props.focusKeys] - Keyboard shortcuts to focus the input.
 * @param {boolean} [props.showKeys] - Show keyboard shortcut hints.
 * @param {boolean} [props.disabled] - Disable the input.
 * @param {CSSProperties} [props.containerStyle] - Style for the outer container.
 * @param {CSSProperties} [props.inputAndListContainerStyle] - Style for the input and list container.
 * @returns {JSX.Element} The rendered Autocomplete component.
 *
 * @example
 * <Autocomplete
 *   value={value}
 *   setValue={setValue}
 *   listResults={["Apple", "Banana", "Orange"]}
 *   label="Fruits"
 *   icons={{ left: <FruitIcon /> }}
 * />
 */

const AutocompleteFn: FC<ILibAutocomplete> = ({
    "data-testid": testid,
    ref,
    id,
    className,
    label,
    labelComment,
    helper,
    helperBottom,
    validation,
    inputBackground,
    inputVariant = "rounded",
    value,
    setValue,
    listResults,
    emptyText = "No result.",
    listDirection,
    fuzzyOptions = {},
    icons,
    iconSizes,
    iconBaseUrl,
    focusKeys,
    showKeys,
    disabled,
    containerStyle,
    inputAndListContainerStyle,
    ...rest
}) => {
    const hasContainer: boolean = !!(
        label ||
        labelComment ||
        helper ||
        helperBottom ||
        validation
    )

    const defaultIconSizes = { left: 16, clear: 16 }

    const isTouchScreen = useTouchScreen()

    const inputRef = useRef<HTMLDivElement>(null)
    const keys = focusKeys || [""]
    useKeyPress(
        keys,
        useCallback(() => inputRef?.current?.focus(), [])
    )

    const fuzzyResults = useMemo(() => {
        const fuse = new Fuse(listResults, fuzzyOptions)

        return fuse
            .search(value)
            ?.slice(0, 20)
            ?.map(res => res.item)
    }, [fuzzyOptions, listResults, value])

    const { isOpen, setIsOpen, cursor, listRef } = useKeyboardNavigation<
        typeof fuzzyResults
    >({
        data: fuzzyResults,
        value,
        setValue,
    })

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
        },
        [setValue]
    )
    const handleClear = useCallback(() => {
        setValue("")
    }, [setValue])
    const handleSelectValue = useCallback(
        (value: string) => {
            setValue(value)
        },
        [setValue]
    )

    const handleOpen = useCallback(() => {
        setIsOpen(true)
    }, [setIsOpen])
    const handleClose = useCallback(
        () =>
            setTimeout(() => {
                setIsOpen(false)
            }, 100),
        [setIsOpen]
    )

    return (
        <InputContainer
            data-testid={testid}
            className={className}
            id={id}
            label={label}
            labelComment={labelComment}
            helper={helper}
            helperBottom={helperBottom}
            validation={validation}
            value={value}
            counter={false}
            maxLength={undefined}
            style={containerStyle}
            hasListOpen={isOpen}
            iconBaseUrl={iconBaseUrl}
        >
            <InputAndListContainer
                data-testid={testid}
                className={className}
                hasListOpen={isOpen}
                inputAndListContainerStyle={inputAndListContainerStyle}
                isParent={!hasContainer}
            >
                <InputWrapper
                    data-testid={testid}
                    className={className}
                    hasContainer={hasContainer}
                    hasListOpen={isOpen}
                    isTextArea={false}
                    inputVariant={inputVariant}
                    inputBackground={inputBackground}
                    validationStatus={validation?.status}
                >
                    {icons?.left && (
                        <InputLeftContainer
                            data-testid={testid}
                            className={className}
                            disabled={disabled}
                        >
                            <InputIcon
                                data-testid={testid}
                                className={className}
                                icon={icons.left}
                                iconSize={
                                    iconSizes?.left || defaultIconSizes.left
                                }
                                validationStatus={validation?.status}
                                disabled={disabled}
                                inputBackground={inputBackground}
                                inputVariant={inputVariant}
                                iconBaseUrl={iconBaseUrl}
                            />
                        </InputLeftContainer>
                    )}

                    <StyledAutocomplete
                        data-testid={testid && `${testid}.Input`}
                        className={classNames(
                            { Input: className },
                            { WithListOpen: isOpen }
                        )}
                        ref={useMergeRefs([ref, inputRef])}
                        id={id}
                        value={value}
                        disabled={disabled}
                        onChange={handleChange}
                        type="search"
                        onFocus={handleOpen}
                        onBlur={handleClose}
                        $disabled={disabled}
                        $validationStatus={validation?.status}
                        $inputBackground={inputBackground}
                        $inputVariant={inputVariant}
                        {...rest}
                    />

                    {(value.length || validation || showKeys) && (
                        <InputRightContainer
                            data-testid={testid}
                            className={className}
                            disabled={disabled}
                            withPadding
                            withBorder={false}
                        >
                            {value.length ? (
                                <InputButton
                                    data-testid={testid}
                                    className={className}
                                    onClick={handleClear}
                                    icon={
                                        icons?.clear || (
                                            <Close
                                                data-testid={
                                                    testid &&
                                                    `${testid}.Button.Icon`
                                                }
                                                className={
                                                    className && "ClearIcon"
                                                }
                                                size={
                                                    iconSizes?.clear ||
                                                    defaultIconSizes.clear
                                                }
                                            />
                                        )
                                    }
                                    iconSize={
                                        iconSizes?.clear ||
                                        defaultIconSizes.clear
                                    }
                                    inputBackground={inputBackground}
                                    disabled={disabled}
                                    aria-label="Clear"
                                    validationStatus={validation?.status}
                                />
                            ) : null}

                            {showKeys &&
                                focusKeys &&
                                !isTouchScreen &&
                                !disabled && (
                                    <Key
                                        data-testid={testid && `${testid}.Keys`}
                                        className={className && "Keys"}
                                        keys={transformSearchKeys(keys)}
                                    />
                                )}

                            {validation && (
                                <InputValidationIcon
                                    data-testid={testid}
                                    className={className}
                                    validation={validation}
                                    inputBackground={inputBackground}
                                />
                            )}
                        </InputRightContainer>
                    )}
                </InputWrapper>

                <ListInput
                    data-testid={testid}
                    className={className}
                    direction={listDirection}
                    inputBackground={inputBackground}
                    inputVariant={inputVariant}
                    validationStatus={validation?.status}
                    isOpen={!!(value && isOpen)}
                    ref={listRef}
                >
                    {fuzzyResults?.length ? (
                        <>
                            {fuzzyResults.map((result, i) => (
                                <ListInputItem
                                    data-testid={testid}
                                    className={className}
                                    validationStatus={validation?.status}
                                    inputBackground={inputBackground}
                                    onClick={() => handleSelectValue(result)}
                                    isActive={i === cursor}
                                    isHovered={value === result}
                                    key={uuid()}
                                >
                                    <Highlight highlightedText={value}>
                                        {result}
                                    </Highlight>
                                </ListInputItem>
                            ))}
                        </>
                    ) : (
                        <ListInputItem
                            data-testid={testid}
                            className={className}
                            validationStatus={validation?.status}
                            inputBackground={inputBackground}
                            readOnly
                        >
                            {emptyText}
                        </ListInputItem>
                    )}
                </ListInput>
            </InputAndListContainer>
        </InputContainer>
    )
}

export const Autocomplete = memo(AutocompleteFn)
