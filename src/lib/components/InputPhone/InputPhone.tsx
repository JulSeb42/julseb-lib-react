/*=============================================== InputPhone component ===============================================*/

import {
    forwardRef,
    useState,
    useRef,
    useEffect,
    useCallback,
    useMemo,
    type ChangeEvent,
} from "react"
import { useClickOutside } from "../../"
import {
    InputWrapper,
    ListInput,
    ListInputItem,
    InputContainer,
    InputRightContainer,
    InputValidationIcon,
} from "../InputComponents"
import { LibIcon } from "../LibIcon"
import { Search, CaretDown } from "../../icons"
import { countries } from "./utils/countries"
import type { LibCountry } from "../../types"
import {
    StyledInputPhone,
    LeftContainer,
    CountryButton,
    SearchContainer,
    SearchInput,
    Flag,
    CountryCode,
} from "./styles"
import type { ILibInputPhone } from "./types"
import type { ILibListInputItem } from "../InputComponents/types"

const defaultIconsSizes = {
    search: 16,
    caret: 12,
}

/**
 * @description Returns a InputPhone component
 * @link https://documentation-components-react.vercel.app/components/input-phone
 * @extends HTMLInputElement
 * @prop data-testid?: string
 */

export const InputPhone = forwardRef<HTMLInputElement, ILibInputPhone>(
    (
        {
            "data-testid": testid,
            className,
            id,
            label,
            labelComment,
            helper,
            helperBottom,
            validation,
            validationIcon,
            inputBackground,
            inputVariant = "rounded",
            selectedCountry,
            setSelectedCountry,
            defaultCountry = "de",
            iconSizes,
            icons,
            searchPlaceholder = "Search country or code",
            listDirection,
            value,
            maxLength,
            disabled,
            countryButtonAriaLabel = "Select country",
            textNoResult = "Your search did not return any result.",
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

        const country = useMemo(() => {
            if (selectedCountry) return selectedCountry
            else
                return countries.find(
                    country => country.code === defaultCountry
                )
        }, [defaultCountry, selectedCountry])

        const [isOpen, setIsOpen] = useState(false)

        const handleClickCountry = useCallback(() => {
            setIsOpen(!isOpen)
        }, [isOpen])

        const listRef = useRef<HTMLDivElement>(null)
        useClickOutside(
            listRef,
            useCallback(() => {
                if (isOpen) setIsOpen(false)
            }, [isOpen])
        )

        const leftContainerRef = useRef<HTMLSpanElement>(null)
        const [leftContainerWidth, setLeftContainerWidth] = useState(0)

        useEffect(() => {
            if (leftContainerRef && leftContainerRef?.current?.clientWidth) {
                setLeftContainerWidth(leftContainerRef.current.clientWidth)
            }
        }, [leftContainerRef, country])

        const [search, setSearch] = useState("")
        const results = useMemo(() => {
            return countries.filter(
                country =>
                    country.name.toLowerCase().includes(search.toLowerCase()) ||
                    country.dial_code
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    country.code.toLowerCase().includes(search.toLowerCase())
            )
        }, [search])

        const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value)
        }, [])

        const handleClickResult = useCallback(
            (result: LibCountry) => {
                setSelectedCountry(result)
                setIsOpen(false)
            },
            [setSelectedCountry]
        )

        const defaultIcons = {
            search: (
                <Search
                    size={iconSizes?.search || defaultIconsSizes.search}
                    data-testid={
                        testid && `${testid}.ListInput.SearchContainer.Icon`
                    }
                    className={className && "ListInput__SearchContainer__Icon"}
                />
            ),
            caret: (
                <CaretDown
                    size={iconSizes?.search || defaultIconsSizes.caret}
                    data-testid={
                        testid &&
                        `${testid}.LeftContainer.CountryButton.CaretIcon`
                    }
                    className={
                        className && "LeftContainer__CountryButton__CaretIcon"
                    }
                />
            ),
        }

        const listItemProps: Omit<
            ILibListInputItem,
            "onClick" | "isActive" | "readOnly"
        > = {
            "data-testid": testid,
            className,
            validation: validation?.status,
            inputBackground,
        }

        return (
            <InputContainer
                data-testid={testid}
                id={id}
                className={className}
                label={label}
                labelComment={labelComment}
                helper={helper}
                helperBottom={helperBottom}
                validation={validation}
                value={value}
                counter={undefined}
                maxLength={maxLength}
                hasListOpen={isOpen}
            >
                <InputWrapper
                    data-testid={testid}
                    className={className}
                    hasContainer={hasContainer}
                    hasListOpen={isOpen}
                >
                    <LeftContainer
                        data-testid={testid && `${testid}.LeftContainer`}
                        className={className && "LeftContainer"}
                        ref={leftContainerRef}
                        $inputVariant={inputVariant}
                    >
                        <CountryButton
                            data-testid={
                                testid &&
                                `${testid}.LeftContainer.CountryButton`
                            }
                            className={
                                className && "LeftContainer__CountryButton"
                            }
                            type="button"
                            disabled={disabled}
                            aria-disabled={disabled}
                            aria-label={countryButtonAriaLabel}
                            onClick={handleClickCountry}
                            $isOpen={isOpen}
                            $validation={validation?.status}
                            $inputBackground={inputBackground}
                        >
                            <Flag
                                data-testid={
                                    testid &&
                                    `${testid}.LeftContainer.CountryButton.Flag`
                                }
                                className={
                                    className &&
                                    "LeftContainer__CountryButton__Flag"
                                }
                                src={country?.flag}
                                alt={`Flag ${country?.name}`}
                            />

                            <LibIcon
                                icon={icons?.caret || defaultIcons.caret}
                                size={
                                    iconSizes?.caret || defaultIconsSizes.caret
                                }
                                data-testid={
                                    testid &&
                                    `${testid}.LeftContainer.CountryButton.CaretIcon`
                                }
                                className={
                                    className &&
                                    "LeftContainer__CountryButton__CaretIcon"
                                }
                            />
                        </CountryButton>

                        <CountryCode
                            data-testid={
                                testid && `${testid}.LeftContainer.CountryCode`
                            }
                            className={
                                className && "LeftContainer__CountryCode"
                            }
                            $inputBackground={inputBackground}
                            $disabled={disabled}
                        >
                            {country?.dial_code}
                        </CountryCode>
                    </LeftContainer>

                    <StyledInputPhone
                        data-testid={testid && `${testid}.Input`}
                        ref={ref}
                        className={className && "Input"}
                        id={id}
                        type="tel"
                        disabled={disabled}
                        $disabled={disabled}
                        $hasIcon={false}
                        $inputBackground={inputBackground}
                        $validation={validation?.status}
                        $inputVariant={inputVariant}
                        $hasListOpen={isOpen}
                        $leftContainerWidth={leftContainerWidth}
                        {...rest}
                    />

                    {validation && (
                        <InputRightContainer
                            data-testid={testid}
                            className={className}
                            inputVariant={inputVariant}
                            disabled={disabled}
                        >
                            <InputValidationIcon
                                data-testid={testid}
                                className={className}
                                validation={validation}
                                validationIcon={validationIcon}
                                inputBackground={inputBackground}
                            />
                        </InputRightContainer>
                    )}

                    <ListInput
                        data-testid={testid}
                        className={className}
                        ref={listRef}
                        isOpen={isOpen}
                        direction={listDirection}
                        inputBackground={inputBackground}
                        validation={validation?.status}
                        inputVariant={inputVariant}
                    >
                        <ListInputItem readOnly {...listItemProps}>
                            <SearchContainer
                                data-testid={
                                    testid &&
                                    `${testid}.ListInput.SearchContainer`
                                }
                                className={
                                    className && "ListInput__SearchContainer"
                                }
                                $validation={validation?.status}
                                $inputBackground={inputBackground}
                            >
                                <LibIcon
                                    icon={icons?.search || defaultIcons.search}
                                    size={
                                        iconSizes?.search ||
                                        defaultIconsSizes.search
                                    }
                                    data-testid={
                                        testid &&
                                        `${testid}.ListInput.SearchContainer.Icon`
                                    }
                                    className={
                                        className &&
                                        "ListInput__SearchContainer__Icon"
                                    }
                                />

                                <SearchInput
                                    data-testid={
                                        testid &&
                                        `${testid}.ListInput.SearchContainer.Input`
                                    }
                                    className={
                                        className &&
                                        "ListInput__SearchContainer__Input"
                                    }
                                    placeholder={searchPlaceholder}
                                    value={search}
                                    onChange={handleChange}
                                    $inputBackground={inputBackground}
                                    $validation={validation?.status}
                                />
                            </SearchContainer>
                        </ListInputItem>

                        {results.length ? (
                            results.map(result => (
                                <ListInputItem
                                    onClick={() => handleClickResult(result)}
                                    isActive={country === result}
                                    key={result.code}
                                    {...listItemProps}
                                >
                                    <Flag src={result.flag} width={16} />

                                    <span>
                                        ({result.dial_code}) {result.name}
                                    </span>
                                </ListInputItem>
                            ))
                        ) : (
                            <ListInputItem readOnly {...listItemProps}>
                                {textNoResult}
                            </ListInputItem>
                        )}
                    </ListInput>
                </InputWrapper>
            </InputContainer>
        )
    }
)
