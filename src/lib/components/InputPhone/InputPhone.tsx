/*=============================================== InputPhone component ===============================================*/

import {
    forwardRef,
    useState,
    useRef,
    useCallback,
    useMemo,
    type ChangeEvent,
} from "react"
import classNames from "classnames"
import { useClickOutside } from "../../"
import {
    InputWrapper,
    ListInput,
    ListInputItem,
    InputContainer,
    InputRightContainer,
    InputValidationIcon,
    InputLeftContainer,
    InputAndListContainer,
} from "../InputComponents"
import { LibIcon } from "../LibIcon"
import { Search, CaretDown } from "../../icons"
import { countries } from "./utils/countries"
import type { LibCountry } from "../../types"
import {
    StyledInputPhone,
    CountryButton,
    SearchContainer,
    SearchInput,
    Flag,
    CountryCode,
} from "./styles"
import type { ILibInputPhone } from "./types"
import type { ILibListInputItem } from "../InputComponents/types"

const DEFAULT_ICONS_SIZES = {
    SEARCH: 16,
    CARET: 12,
}

/**
 * @description Returns a InputPhone component
 * @link https://documentation-components-react.vercel.app/components/input-phone
 * @extends HTMLInputElement
 * @prop data-testid?: string
 * @prop selectedCountry: name: string; dial_code: string; code: CountryCode; flag: string | undefined
 * @prop setSelectedCountry: Dispatch<SetStateAction<LibCountry | undefined>>
 * @prop defaultCountry?: Any Alpha-2 Code from https://www.iban.com/country-codes
 * @prop icons?: { search?: string | JSX.Element; caret?: string | JSX.Element }
 * @prop iconSizes?: { search?: number; caret?: number }
 * @prop searchPlaceholder?: string
 * @prop listDirection?: "up" | "down"
 * @prop countryButtonAriaLabel?: string
 * @prop textNoResult?: string
 * @prop label?: string
 * @prop labelComment?: string
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string; textColor?: Any color from the library; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: Any color from the library; iconSize?: number }
 * @prop validation?: { status: boolean | undefined; message: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number }
 * @prop inputBackground?: "light" | "dark"
 * @prop inputVariant?: "rounded" | "pill"
 * @prop validationIcon?: { iconValidationNotPassed?: LibIcon; iconValidationNotPassedSize?: number; iconValidationPassed?: LibIcon; iconValidationPassedSize?: number }
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
            iconBaseUrl,
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
            labelComment ||
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
                    size={iconSizes?.search || DEFAULT_ICONS_SIZES.SEARCH}
                    data-testid={
                        testid && `${testid}.ListInput.SearchContainer.Icon`
                    }
                    className={className && "SearchIcon"}
                />
            ),
            caret: (
                <CaretDown
                    size={iconSizes?.search || DEFAULT_ICONS_SIZES.CARET}
                    data-testid={
                        testid &&
                        `${testid}.LeftContainer.CountryButton.CaretIcon`
                    }
                    className={className && "CaretIcon"}
                />
            ),
        }

        const listItemProps: Omit<
            ILibListInputItem,
            "onClick" | "isActive" | "readOnly" | "isHovered"
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
                iconBaseUrl={iconBaseUrl}
            >
                <InputAndListContainer
                    data-testid={testid}
                    className={className}
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
                        <InputLeftContainer
                            data-testid={testid}
                            className={className}
                            disabled={disabled}
                            withPadding
                            noBorder
                        >
                            <CountryButton
                                data-testid={
                                    testid &&
                                    `${testid}.LeftContainer.CountryButton`
                                }
                                className={className && "CountryButton"}
                                type="button"
                                disabled={disabled}
                                aria-disabled={disabled}
                                aria-label={countryButtonAriaLabel}
                                onClick={handleClickCountry}
                                $validation={validation?.status}
                                $inputBackground={inputBackground}
                            >
                                <Flag
                                    data-testid={
                                        testid &&
                                        `${testid}.LeftContainer.CountryButton.Flag`
                                    }
                                    className={className && "Flag"}
                                    src={country?.flag}
                                    alt={`Flag ${country?.name}`}
                                />

                                <LibIcon
                                    icon={icons?.caret || defaultIcons.caret}
                                    size={
                                        iconSizes?.caret ||
                                        DEFAULT_ICONS_SIZES.CARET
                                    }
                                    data-testid={
                                        testid &&
                                        `${testid}.LeftContainer.CountryButton.CaretIcon`
                                    }
                                    className={className && "CaretIcon"}
                                    baseUrl={iconBaseUrl}
                                />
                            </CountryButton>

                            <CountryCode
                                data-testid={
                                    testid &&
                                    `${testid}.LeftContainer.CountryCode`
                                }
                                className={className && "CountryCode"}
                                $inputBackground={inputBackground}
                                $disabled={disabled}
                            >
                                {country?.dial_code}
                            </CountryCode>
                        </InputLeftContainer>

                        <StyledInputPhone
                            data-testid={testid && `${testid}.Input`}
                            ref={ref}
                            className={classNames(
                                { Input: className },
                                { WithListOpen: isOpen }
                            )}
                            id={id}
                            type="tel"
                            disabled={disabled}
                            $disabled={disabled}
                            $inputBackground={inputBackground}
                            $validation={validation?.status}
                            $inputVariant={inputVariant}
                            {...rest}
                        />

                        {validation && (
                            <InputRightContainer
                                data-testid={testid}
                                className={className}
                                disabled={disabled}
                                withBorder={false}
                            >
                                <InputValidationIcon
                                    data-testid={testid}
                                    className={className}
                                    validation={validation}
                                    validationIcon={validationIcon}
                                    inputBackground={inputBackground}
                                    iconBaseUrl={iconBaseUrl}
                                />
                            </InputRightContainer>
                        )}
                    </InputWrapper>

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
                                className={className && "SearchContainer"}
                                $validation={validation?.status}
                                $inputBackground={inputBackground}
                            >
                                <LibIcon
                                    icon={icons?.search || defaultIcons.search}
                                    size={
                                        iconSizes?.search ||
                                        DEFAULT_ICONS_SIZES.SEARCH
                                    }
                                    data-testid={
                                        testid &&
                                        `${testid}.ListInput.SearchContainer.Icon`
                                    }
                                    className={className && "IconSearch"}
                                    baseUrl={iconBaseUrl}
                                />

                                <SearchInput
                                    data-testid={
                                        testid &&
                                        `${testid}.ListInput.SearchContainer.Input`
                                    }
                                    className={className && "InputSearch"}
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
                </InputAndListContainer>
            </InputContainer>
        )
    }
)
