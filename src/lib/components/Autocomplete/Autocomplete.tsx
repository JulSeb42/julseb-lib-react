/*=============================================== Autocomplete component ===============================================*/

import {
    forwardRef,
    useCallback,
    useMemo,
    useRef,
    type ChangeEvent,
    memo,
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
 * @description Returns a Autocomplete component
 * @link https://documentation-components-react.vercel.app/components/autocomplete
 * @extends HTMLInputElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLInputElement>
 * @prop value: string
 * @prop setValue: Dispatch<SetStateAction<string>>
 * @prop listResults: Array<string>
 * @prop emptyText?: string
 * @prop listDirection?: "up" | "down"
 * @prop fuzzyOptions?: IFuseOptions<string> => imported from fuse.js
 * @prop icons?: { left?: string | JSX.Element; clear?: string | JSX.Element }
 * @prop iconSizes?: { left?: number; clear?: number }
 * @prop id?: string
 * @prop label?: string
 * @prop labelComment?: string
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string => only if element is not defined; element: ReactChildren => only if text is not defined; textColor?: Any color from the library; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: Any color from the library; iconSize?: number }
 * @prop validation?: { status: LibValidationStatus; message?: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number; iconBaseUrl?: string }
 * @prop iconBaseUrl?: string
 * @prop inputBackground?: "light" | "dark"
 * @prop inputVariant?: "rounded" | "pill"
 * @prop containerStyle?: CSSProperties
 * @prop inputAndListContainerStyle?: CSSProperties
 */

const AutocompleteFn = forwardRef<HTMLInputElement, ILibAutocomplete>(
    (
        {
            "data-testid": testid,
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
        },
        ref
    ) => {
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
                                            data-testid={
                                                testid && `${testid}.Keys`
                                            }
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
                                        onClick={() =>
                                            handleSelectValue(result)
                                        }
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
)

export const Autocomplete = memo(AutocompleteFn)
