/*=============================================== Select component ===============================================*/

import { forwardRef, useCallback } from "react"
import { useClickOutside } from "../../"
import {
    InputContainer,
    InputValidationIcon,
    InputRightContainer,
    InputButton,
    ListInput,
    ListInputItem,
    InputIcon,
} from "../InputComponents"
import { CaretDown } from "../../icons"
import { SelectButton, type ILibSelectButton } from "./SelectButton"
import { useKeyboardNavigation } from "../ComponentsMixins"
import { SelectContainer } from "./styles"
import type { ILibSelect } from "./types"

/**
 * @description Returns a Select component
 * @link https://documentation-components-react.vercel.app/components/select
 * @extends HTMLDivElement
 * @prop data-testid?: string
 */

export const Select = forwardRef<HTMLDivElement, ILibSelect>(
    (
        {
            "data-testid": testid,
            className,
            as,
            id,
            label,
            labelComment,
            helper,
            helperBottom,
            validation,
            validationIcon,
            inputVariant = "rounded",
            inputBackground,
            disabled,
            selected,
            setSelected,
            options,
            listDirection,
            icons,
            iconSizes,
            tabIndex,
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
        const hasOptions: boolean = !!(options && options.length > 1)
        const hasWrapper = !!(hasOptions || validation || icons?.iconLeft)

        const defaultIconSizes = {
            left: 16,
            caret: 16,
        }

        const { isOpen, setIsOpen, cursor, listRef } = useKeyboardNavigation({
            data: options || [],
            value: selected,
            setValue: setSelected,
        })

        useClickOutside(listRef, () => setIsOpen(false))

        const buttonProps: ILibSelectButton = {
            "data-testid": testid,
            className,
            selected,
            onClick: () => {
                if (options && options.length > 1) setIsOpen(!isOpen)
            },
            id,
            tabIndex,
            disabled,
            hasIcon: !!icons?.iconLeft,
            inputBackground,
            inputVariant,
            validationStatus: validation?.status,
            hasOptions,
            isOpen,
            setIsOpen,
            hasContainer,
            hasWrapper,
        }

        const handleFocus = useCallback(() => {
            if (options && options.length > 1) setIsOpen(true)
        }, [options, setIsOpen])
        const handleBlur = useCallback(() => {
            setIsOpen(false)
        }, [setIsOpen])

        const handleClickButton = useCallback(() => {
            setIsOpen(!isOpen)
        }, [isOpen, setIsOpen])

        const handleClickItem = useCallback(
            (option: string) => {
                setSelected(option)
                setIsOpen(false)
            },
            [setIsOpen, setSelected]
        )

        if (!hasContainer && !hasWrapper && !hasOptions)
            return <SelectButton {...buttonProps} />

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
                value={undefined}
                counter={false}
                maxLength={undefined}
            >
                <SelectContainer
                    data-testid={
                        hasContainer ? `${testid}.SelectContainer` : testid
                    }
                    className={hasContainer ? "SelectContainer" : className}
                    ref={ref}
                    as={as}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rest}
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

                    <SelectButton {...buttonProps} />

                    {(hasOptions || validation) && (
                        <InputRightContainer
                            data-testid={testid}
                            className={className}
                            inputVariant={inputVariant}
                            disabled={disabled}
                        >
                            {validation && (
                                <InputValidationIcon
                                    data-testid={testid}
                                    className={className}
                                    validation={validation}
                                    validationIcon={validationIcon}
                                    inputBackground={inputBackground}
                                />
                            )}

                            {hasOptions && (
                                <InputButton
                                    data-testid={testid}
                                    className={className}
                                    inputBackground={inputBackground}
                                    icon={
                                        icons?.caret || (
                                            <CaretDown
                                                data-testid={
                                                    testid &&
                                                    `${testid}.Button.Caret`
                                                }
                                                className={
                                                    className && "Button__Caret"
                                                }
                                                size={
                                                    iconSizes?.caret ||
                                                    defaultIconSizes.caret
                                                }
                                            />
                                        )
                                    }
                                    iconSize={
                                        iconSizes?.caret ||
                                        defaultIconSizes.caret
                                    }
                                    disabled={disabled}
                                    aria-label="Caret down"
                                    onClick={handleClickButton}
                                    validationStatus={validation?.status}
                                />
                            )}
                        </InputRightContainer>
                    )}

                    {options && options?.length > 1 && (
                        <ListInput
                            data-testid={testid}
                            className={className}
                            ref={listRef}
                            direction={listDirection}
                            inputBackground={inputBackground}
                            inputVariant={inputVariant}
                            validation={validation?.status}
                            isOpen={isOpen}
                        >
                            {options.map((option, i) => (
                                <ListInputItem
                                    data-testid={testid}
                                    className={className}
                                    inputBackground={inputBackground}
                                    validation={validation?.status}
                                    onClick={() => handleClickItem(option)}
                                    isActive={cursor === i}
                                    key={option}
                                >
                                    {option}
                                </ListInputItem>
                            ))}
                        </ListInput>
                    )}
                </SelectContainer>
            </InputContainer>
        )
    }
)
