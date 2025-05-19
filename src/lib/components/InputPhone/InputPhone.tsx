import {
    useState,
    useRef,
    useCallback,
    useMemo,
    type ChangeEvent,
    type FC,
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
 * InputPhone component for rendering a phone input with country selector, flag, dial code, search, and validation.
 *
 * @component
 * @extends HTMLInputElement
 * @param {Object} props - InputPhone props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {Ref<HTMLInputElement>} [props.ref] - Ref forwarded to the input element.
 * @param {{ name: string; dial_code: string; code: CountryCode; flag?: string }} props.selectedCountry - Selected country object.
 *  * @param {Dispatch<React.SetStateAction<{ name: string; dial_code: string; code: CountryCode; flag?: string } | undefined>>} props.setSelectedCountry - Setter for the selected country.
 * @param {string} [props.defaultCountry="de"] - Default country code (Alpha-2, e.g. "FR").
 * @param {{ search?: string | JSX.Element; caret?: string | JSX.Element }} [props.icons] - Custom icons for search and caret.
 * @param {{ search?: number; caret?: number }} [props.iconSizes] - Icon sizes for search and caret.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {string} [props.searchPlaceholder="Search country or code"] - Placeholder for the country search input.
 * @param {"up" | "down"} [props.listDirection] - Direction in which the country list appears.
 * @param {string} [props.countryButtonAriaLabel="Select country"] - Aria-label for the country button.
 * @param {string} [props.textNoResult="Your search did not return any result."] - Text to display when no country matches the search.
 * @param {Object} [props.validation] - Validation status and message.
 * @param {string} [props.id] - Input id.
 * @param {string} [props.label] - Label for the input.
 * @param {string} [props.labelComment] - Additional comment for the label.
 * @param {string} [props.helper] - Helper text above the input.
 * @param {string|Object} [props.helperBottom] - Helper text or element below the input.
 * @param {"light" | "dark"} [props.inputBackground] - Input background style.
 * @param {"rounded" | "pill"} [props.inputVariant="rounded"] - Input variant style.
 * @param {string|number} [props.value] - Input value.
 * @param {number} [props.maxLength] - Maximum length for the input value.
 * @param {boolean} [props.disabled] - Disable the input.
 *  * @param {CSSProperties} [props.containerStyle] - Style for the input container.
 *  * @param {CSSProperties} [props.inputAndListContainerStyle] - Style for the input and list container.
 * @param {string} [props.className] - Additional class names.
 * @param {any} [props.rest] - Additional props passed to the input.
 * @returns {JSX.Element} The rendered InputPhone component.
 *
 * @see https://documentation-components-react.vercel.app/components/input-phone
 * @example
 * <InputPhone
 *   selectedCountry={{ name: "France", dial_code: "+33", code: "FR", flag: "/flags/fr.svg" }}
 *   setSelectedCountry={setCountry}
 *   label="Phone number"
 *   value={phone}
 *   onChange={handleChange}
 * />
 */
export const InputPhone: FC<ILibInputPhone> = ({
    "data-testid": testid,
    ref,
    className,
    id,
    label,
    labelComment,
    helper,
    helperBottom,
    validation,
    inputBackground,
    inputVariant = "rounded",
    selectedCountry,
    setSelectedCountry,
    defaultCountry = "de",
    icons,
    iconSizes,
    iconBaseUrl,
    searchPlaceholder = "Search country or code",
    listDirection,
    value,
    maxLength,
    disabled,
    countryButtonAriaLabel = "Select country",
    textNoResult = "Your search did not return any result.",
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

    const country = useMemo(() => {
        if (selectedCountry) return selectedCountry
        else return countries.find(country => country.code === defaultCountry)
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
                    testid && `${testid}.LeftContainer.CountryButton.CaretIcon`
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
        validationStatus: validation?.status,
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
            style={containerStyle}
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
                    <InputLeftContainer
                        data-testid={testid}
                        className={className}
                        disabled={disabled}
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
                                testid && `${testid}.LeftContainer.CountryCode`
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
                        $validationStatus={validation?.status}
                        $inputVariant={inputVariant}
                        {...rest}
                    />

                    {validation && (
                        <InputRightContainer
                            data-testid={testid}
                            className={className}
                            disabled={disabled}
                            withBorder={false}
                            withPadding
                        >
                            <InputValidationIcon
                                data-testid={testid}
                                className={className}
                                validation={validation}
                                inputBackground={inputBackground}
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
                    validationStatus={validation?.status}
                    inputVariant={inputVariant}
                >
                    <ListInputItem readOnly {...listItemProps}>
                        <SearchContainer
                            data-testid={
                                testid && `${testid}.ListInput.SearchContainer`
                            }
                            className={className && "SearchContainer"}
                            $validationStatus={validation?.status}
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
