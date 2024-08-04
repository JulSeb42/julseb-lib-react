/*=============================================== Generate ===============================================*/

import { toCamelCase, toPascalCase } from "ts-utils-julseb"
import { Page } from "../components"
import { typeValues } from "../lib/types"

export function Generate() {
    const propsDoc = replaceTypes([
        '"data-testid": string | undefined',
        "className: string | undefined",
        "children?: ReactChildren",
        "disabled: boolean | undefined",
        "withPadding?: boolean",
    ])

    const propsInput = [
        "id",
        "label",
        "helper",
        "helperBottom",
        "validation",
        "counter",
        "maxLength",
        "value",
        "className",
        "ref",
        "type",
        "inputBackground",
        "inputVariant",
    ]

    // const utils = [
    //     "calculate-average",
    //     "calculate-total-sum",
    //     "capitalize",
    //     "convert-date-short",
    //     "convert-date",
    //     "convert-price",
    //     "convert-youtube",
    //     "delete-duplicates",
    //     "detect-language",
    //     "disable-scroll",
    //     "enable-scroll",
    //     "filter-object",
    //     "format-date",
    //     "format-hour",
    //     "generate-numbers",
    //     "get-first-name",
    //     "get-last-name",
    //     "get-percentage",
    //     "get-random-avatar",
    //     "get-random-date",
    //     "get-random-number",
    //     "get-random-string",
    //     "get-random-time",
    //     "get-random",
    //     "get-time-now",
    //     "get-today",
    //     "get-tomorrow",
    //     "get-yesterday",
    //     "hex-to-rgb",
    //     "regex",
    //     "rgb-to-hex",
    //     "scroll-to-top",
    //     "slugify",
    //     "sort-by-frequency",
    //     "stringify-px",
    //     "to-camel-case",
    //     "to-constant-case",
    //     "to-dot-case",
    //     "to-kebab-case",
    //     "to-pascal-case",
    //     "to-path-case",
    //     "to-sentence-case",
    //     "to-snake-case",
    //     "to-title-case",
    //     "uuid",
    //     "convert-to-email",
    //     "unslugify",
    // ]

    // const buttons = [
    //     "bold",
    //     "italic",
    //     "strikethrough",
    //     "ul",
    //     "ol",
    //     "link",
    //     "quote",
    //     "hr",
    //     "code",
    //     "codeBlock",
    //     "comment",
    //     "image",
    // ]

    // const propsInputs = replaceTypes([
    //     "label?: string",
    //     "labelComment?: string",
    //     "helper?: string",
    //     "helperBottom?: string | { text: string; textColor?: Any color from the library; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: Any color from the library; iconSize?: number }",
    //     "validation?: ValidationHelper",
    //     'inputBackground?: "light" | "dark"',
    //     'inputVariant?: "rounded" | "pill"',
    // ])

    // const propValidationIcon =
    //     "validationIcon?: { iconValidationNotPassed?: LibIcon; iconValidationNotPassedSize?: number; iconValidationPassed?: LibIcon; iconValidationPassedSize?: number }"

    const hooks = [
        "useClickOutside",
        "useCopyToClipboard",
        "useDebounce",
        "useExportData",
        "useFetch",
        "useForm",
        "useIsOverflow",
        "useKeyPress",
        "useMaxWidth",
        "useMergeRefs",
        "useMinWidth",
        "usePaginatedData",
        "usePagination",
        "useTouchScreen",
        "useTranslation",
    ]

    return (
        <Page title="Generate">
            <ul>
                {propsInput.map(p => (
                    <li key={p}>{`${p}={${p}}`}</li>
                ))}
            </ul>
            <ul>
                {hooks.map(hook => (
                    <li key={hook}>{`"${hook}",`}</li>
                ))}
            </ul>
            <ul>
                {propsDoc.map(p => (
                    <li key={p}>{` * @prop ${p}`}</li>
                ))}
            </ul>

            {/* <ul>
                {utils.sort().map(u => (
                    <li key={u}>{`// { name: "${toCamelCase(
                        u
                    )}", effect: \`Transforms a string \${${toCamelCase(
                        u
                    )}("${u}")}\`, arguments: ["string: string"], example: '${toCamelCase(
                        u
                    )}("hello world")', result: ${toCamelCase(
                        u
                    )}("hello world"), },`}</li>
                ))}
            </ul> */}

            {/* <ul>
                {buttons.map(b => (
                    <li key={b}>{`${b}: "${b}",`}</li>
                ))}
            </ul> */}

            {/* <ul>
                {Object.keys({
                    ...typeValues.markdownEditorButtons,
                    ...typeValues.markdownEditorEditor,
                    ...typeValues.markdownEditorTitles,
                }).map(b => (
                    <li key={b}>{`${b}: mdButtons.${b}.defaultIcon,`}</li>
                ))}
            </ul>

            <ul>
                {Object.keys(typeValues.markdownEditorTitles).map(t => (
                    <li key={t}>{`case "${t}":\nreturn ${
                        18 - Number(t.replace("h", ""))
                    }`}</li>
                ))}
            </ul> */}

            {/* <ul>
                {propsInputs.map(p => (
                    <li key={p}>{` * @prop ${p}`}</li>
                ))}
            </ul> */}

            {/* <p>{` * @prop ${propValidationIcon}`}</p> */}
        </Page>
    )
}

function replaceTypes(arr: Array<string>) {
    const mapValues = (obj: Object) =>
        Object.keys(obj)
            .map(v => `"${v}"`)
            .join(" | ")

    const mappedRadiuses = `${mapValues(typeValues.radiuses)} | number`
    const mappedSpacers = `${mapValues(typeValues.spacers)} | number | "0px"`
    const mappedColorsShort = mapValues(typeValues.colorsShort)
    const mappedAccordionIcons = mapValues(typeValues.accordionIcons)
    const mappedAccordionVariants = mapValues(typeValues.accordionVariants)
    const mappedAsideSizes = `${mapValues(typeValues.asideSizes)} | number`
    const mappedListDirection = mapValues(typeValues.listInputDirections)
    const mappedBreadcrumbsSeparators = `${mapValues(
        typeValues.breadcrumbSeparators
    )} | JSX.Element`
    const allColorsDesc = "Any color from the library"
    const allColorsAndOverlaysDesc = "Any color or overlay from the library"
    const mappedColorsHover = mapValues(typeValues.colorsHover)
    const mappedColorsHoverAndCurrent = mapValues(typeValues.colorsHover)
    const mappedShadows = mapValues(typeValues.shadows)
    const mappedButtonSizes = mapValues(typeValues.buttonSizes)
    const mappedButtonVariants = mapValues(typeValues.buttonVariants)
    const mappedLoaderVariants = mapValues(typeValues.loaderVariants)
    const mappedButtonIconVariants = '"plain" | "transparent" | "ghost"'
    const mappedInterfaceMargin = `${mappedSpacers} | "auto" | "0 auto" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }`
    const mappedInputCheckVariants = mapValues(typeValues.checkInputVariants)
    const mappedInputBackgrounds = mapValues(typeValues.inputBackgrounds)
    const mappedInputVariants = mapValues(typeValues.inputVariants)
    const mappedKeySizes = mapValues(typeValues.keySizes)
    const mappedMainSizes = `${mapValues(typeValues.mainSizes)} | number`
    const mappedSkeletonAnimations = mapValues(typeValues.skeletonAnimations)
    const mappedStepperDirections = mapValues(typeValues.stepperDirections)
    const mappedLibFontSizes = mapValues(typeValues.fontSizes)
    const mappedTextTag = mapValues(typeValues.textTags)
    const mappedTextDisplayTags = mapValues(typeValues.textDisplayTags)
    const mappedToastStatus = mapValues(typeValues.toastStatus)

    // LibShadows | { default: LibShadows; hover: LibShadows; active: LibShadows }

    return arr.map(str => {
        if (str.includes("DispatchState")) {
            const prop = str.split(":")[0]

            const type = str
                .split(":")[1]
                .replace("DispatchState<", "")
                .replace(">", "")

            return `${prop}: Dispatch<SetStateAction<${type}>>`
        }

        return str
            .replaceAll("LibSpacers", mappedSpacers)
            .replaceAll("LibColorsShort", mappedColorsShort)
            .replaceAll("LibAllColorsAndOverlays", allColorsAndOverlaysDesc)
            .replaceAll("LibAllColors", allColorsDesc)
            .replaceAll("LibIcon", "string | JSX.Element")
            .replaceAll(
                "ILibPadding",
                `${mappedSpacers} | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }`
            )
            .replaceAll(
                "ILibRadius",
                `${mappedRadiuses} | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }`
            )
            .replaceAll(
                "ILibBorder",
                `{ style?: CssBorderStyle; width?: ${mappedSpacers}; color?: ${allColorsDesc} }`
            )
            .replaceAll(
                "LibAccordionIcon",
                `${mappedAccordionIcons} | JSX.Element`
            )
            .replaceAll("LibAccordionVariant", mappedAccordionVariants)
            .replaceAll("LibAsideSize", `${mappedAsideSizes}`)
            .replaceAll(
                "LibAccordionItem",
                '{ "data-testid"?: string; className?: string; title: string; content?: string | ReactChildren; defaultOpen?: boolean; ref?: ForwardedRef<HTMLDivElement> }'
            )
            .replaceAll("LibInputListDirection", mappedListDirection)
            .replaceAll("LibBreadcrumbSeparator", mappedBreadcrumbsSeparators)
            .replaceAll(
                "LibColorsHoverAndCurrent",
                ` ${mappedColorsHoverAndCurrent} | "currentColor"`
            )
            .replaceAll("LibColorsHover", mappedColorsHover)
            .replaceAll(
                "ILibBoxShadow",
                `${mappedShadows} | { default: LibShadows; hover: LibShadows; active: LibShadows }`
            )
            .replaceAll("LibButtonSize", mappedButtonSizes)
            .replaceAll("LibButtonVariant", mappedButtonVariants)
            .replaceAll(
                "LibLoaderVariant",
                mappedLoaderVariants.replaceAll('"', "")
            )
            .replaceAll(
                "LibBreadcrumbItem",
                "LibButtonLinkBlank & { text: string | JSX.Element }"
            )
            .replaceAll("LibButtonIconVariant", mappedButtonIconVariants)
            .replaceAll(
                "ILibBackgroundImage",
                "{ img: string; clip?: CssBackgroundClip; origin?: CssBackgroundOrigin; position?: CssBackgroundPosition; repeat?: CssBackgroundRepeat; size?: CssBackgroundSize }"
            )
            .replaceAll("Property.", "Css")
            .replaceAll("ILibMargin", mappedInterfaceMargin)
            .replaceAll(
                "LibImageBackgroundOverlay",
                'Any color or overlay from the library, except "gradient-black" | "gradient-white"'
            )
            .replaceAll("LibValidationStatus", "boolean | undefined")
            .replaceAll("LibInputCheckVariant", mappedInputCheckVariants)
            .replaceAll("LibInputBackground", mappedInputBackgrounds)
            .replaceAll("LibInputVariant", mappedInputVariants)
            .replaceAll(
                "ValidationHelper",
                "{ status: boolean | undefined; message: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number }"
            )
            .replaceAll(
                "CountryCode",
                "Any Alpha-2 Code from https://www.iban.com/country-codes"
            )
            .replaceAll(
                "LibCountry",
                "name: string; dial_code: string; code: CountryCode; flag: string"
            )
            .replaceAll("LibKeySize", mappedKeySizes)
            .replaceAll("LibMainSize", mappedMainSizes)
            .replaceAll("LibSkeletonAnimation", mappedSkeletonAnimations)
            .replaceAll("LibStepperDirection", mappedStepperDirections)
            .replaceAll("LibFontSizes", mappedLibFontSizes)
            .replaceAll(
                "LibTextTag",
                `${mappedTextDisplayTags} | ${mappedTextTag}`
            )
            .replaceAll(
                "LibTextIconTag",
                ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small", "blockquote"]
                    .map(v => `"${v}"`)
                    .join(" | ")
            )
            .replaceAll("LibToastStatus", mappedToastStatus)
            .replaceAll(
                "LibToasterPosition",
                mapValues(typeValues.toasterPositions)
            )
            .replaceAll(
                "LibTooltipTrigger",
                mapValues(typeValues.tooltipTriggers)
            )
            .replaceAll(
                "LibTooltipPosition",
                mapValues(typeValues.tooltipPositions)
            )
            .replaceAll("LibShadows", mapValues(typeValues.shadows))
            .replaceAll("LibOverlays", mapValues(typeValues.overlays))
            .replaceAll("LibTransitions", mapValues(typeValues.transitions))
            .replaceAll("LibFontWeights", mapValues(typeValues.fontWeights))
            .replaceAll("LibTabJustify", mapValues(typeValues.tabsJustify))
            .replaceAll("LibTabVariant", mapValues(typeValues.tabsVariants))
            .replaceAll(
                "LibSlideshowPaginationPosition",
                mapValues(typeValues.slideshowPaginationPosition)
            )
            .replaceAll(
                "LibSlideshowPagination",
                mapValues(typeValues.slideshowPagination)
            )
            .replaceAll("LibMessageType", mapValues(typeValues.messageType))
            .replaceAll(
                "LibMdEditorEditor",
                mapValues(typeValues.markdownEditorEditor)
            )
            .replaceAll(
                "LibPositionExtract",
                '"relative" | "absolute" | "fixed"'
            )
            .replaceAll(
                "LibFooterLinksSeparator",
                mapValues(typeValues.footerSeparators)
            )
            .replaceAll(
                "LibFooterDirection",
                mapValues(typeValues.footerDirections)
            )
            .replaceAll(`"data-testid"`, "data-testid")
    })
}
