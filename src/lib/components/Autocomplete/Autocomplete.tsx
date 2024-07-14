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
import { uuid } from "ts-utils-julseb"
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
            validationIcon,
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
            focusKeys,
            showKeys,
            disabled,
            ...rest
        },
        ref
    ) => {
        const hasContainer: boolean = !!(
            label ||
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
            >
                <InputWrapper
                    data-testid={testid}
                    className={className}
                    hasContainer={hasContainer}
                    hasListOpen={isOpen}
                >
                    <InputIcon
                        data-testid={testid}
                        className={className}
                        icon={icons?.iconLeft}
                        iconSize={iconSizes?.iconLeft || defaultIconSizes.left}
                        validationStatus={validation?.status}
                        disabled={disabled}
                        inputBackground={inputBackground}
                        inputVariant={inputVariant}
                    />

                    <StyledAutocomplete
                        data-testid={testid && `${testid}.Input`}
                        className={className && "Input"}
                        ref={useMergeRefs([ref, inputRef])}
                        id={id}
                        value={value}
                        disabled={disabled}
                        onChange={handleChange}
                        type="search"
                        onFocus={handleOpen}
                        onBlur={handleClose}
                        $hasListOpen={isOpen}
                        $hasIcon={!!icons?.iconLeft}
                        $disabled={disabled}
                        $validation={validation?.status}
                        $inputBackground={inputBackground}
                        $inputVariant={inputVariant}
                        {...rest}
                    />

                    {(value.length || validation || showKeys) && (
                        <InputRightContainer
                            data-testid={testid}
                            className={className}
                            inputVariant={inputVariant}
                            disabled={disabled}
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
                                                    className && "Button__Icon"
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
                                    validationIcon={validationIcon}
                                    inputBackground={inputBackground}
                                />
                            )}
                        </InputRightContainer>
                    )}

                    <ListInput
                        data-testid={testid}
                        className={className}
                        direction={listDirection}
                        inputBackground={inputBackground}
                        inputVariant={inputVariant}
                        validation={validation?.status}
                        isOpen={!!(value && isOpen)}
                        ref={listRef}
                    >
                        {fuzzyResults?.length ? (
                            <>
                                {fuzzyResults.map((result, i) => (
                                    <ListInputItem
                                        data-testid={testid}
                                        className={className}
                                        validation={validation?.status}
                                        inputBackground={inputBackground}
                                        onClick={() =>
                                            handleSelectValue(result)
                                        }
                                        isActive={i === cursor}
                                        key={uuid()}
                                    >
                                        <Highlight highlightedText={value}>
                                            {result}
                                        </Highlight>
                                    </ListInputItem>
                                ))}

                                <ListInputItem
                                    data-testid={testid}
                                    className={className}
                                    validation={validation?.status}
                                    inputBackground={inputBackground}
                                    isActive={cursor === fuzzyResults.length}
                                    onClick={() => handleSelectValue(value)}
                                >
                                    {emptyText}
                                </ListInputItem>
                            </>
                        ) : (
                            <ListInputItem
                                data-testid={testid}
                                className={className}
                                validation={validation?.status}
                                inputBackground={inputBackground}
                                readOnly
                            >
                                {emptyText}
                            </ListInputItem>
                        )}
                    </ListInput>
                </InputWrapper>
            </InputContainer>
        )
    }
)

export const Autocomplete = memo(AutocompleteFn)
