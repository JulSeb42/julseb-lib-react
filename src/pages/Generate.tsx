import { toCamelCase, toPascalCase, uuid } from "@julseb-lib/utils"
import { Page } from "../components"
import { previews } from "../data/components"
import { LIB_TOKENS } from "../lib"
import { generateColorTokens } from "../lib/lib-utils/generate-lib-tokens"
import { designTokens } from "../lib/types"

export const Generate = () => {
    const tokens = [
        "--color-dark-primary-50: rgb(0, 0, 0)",
        "--color-dark-primary-100: rgb(4, 5, 6)",
        "--color-dark-primary-200: rgb(13, 14, 18)",
        "--color-dark-primary-300: rgb(21, 24, 30)",
        "--color-dark-primary-400: rgb(29, 34, 42)",
        "--color-dark-primary-500: rgb(38, 44, 54)",
        "--color-dark-primary-600: rgb(46, 54, 66)",
        "--color-dark-primary-700: rgb(54, 64, 78)",
        "--color-dark-primary-800: rgb(63, 74, 90)",
        "--color-dark-primary-900: rgb(71, 84, 102)",
        "--color-dark-secondary-50: rgb(16, 17, 19)",
        "--color-dark-secondary-100: rgb(21, 22, 25)",
        "--color-dark-secondary-200: rgb(30, 32, 37)",
        "--color-dark-secondary-300: rgb(39, 42, 48)",
        "--color-dark-secondary-400: rgb(48, 52, 59)",
        "--color-dark-secondary-500: rgb(57, 62, 70)",
        "--color-dark-secondary-600: rgb(66, 72, 82)",
        "--color-dark-secondary-700: rgb(75, 82, 93)",
        "--color-dark-secondary-800: rgb(84, 92, 104)",
        "--color-dark-secondary-900: rgb(93, 102, 116)",
        "--color-dark-success-50: rgb(1, 45, 34)",
        "--color-dark-success-100: rgb(2, 69, 52)",
        "--color-dark-success-200: rgb(3, 94, 70)",
        "--color-dark-success-300: rgb(4, 118, 88)",
        "--color-dark-success-400: rgb(5, 143, 107)",
        "--color-dark-success-500: rgb(6, 167, 125)",
        "--color-dark-success-600: rgb(7, 192, 144)",
        "--color-dark-success-700: rgb(8, 217, 162)",
        "--color-dark-success-800: rgb(9, 241, 181)",
        "--color-dark-success-900: rgb(29, 247, 190)",
        "--color-dark-danger-50: rgb(95, 33, 33)",
        "--color-dark-danger-100: rgb(114, 39, 39)",
        "--color-dark-danger-200: rgb(133, 46, 45)",
        "--color-dark-danger-300: rgb(152, 53, 52)",
        "--color-dark-danger-400: rgb(171, 59, 58)",
        "--color-dark-danger-500: rgb(191, 67, 66)",
        "--color-dark-danger-600: rgb(197, 84, 84)",
        "--color-dark-danger-700: rgb(203, 103, 103)",
        "--color-dark-danger-800: rgb(209, 122, 122)",
        "--color-dark-danger-900: rgb(216, 141, 141)",
        "--color-dark-warning-50: rgb(64, 47, 2)",
        "--color-dark-warning-100: rgb(114, 84, 4)",
        "--color-dark-warning-200: rgb(163, 120, 5)",
        "--color-dark-warning-300: rgb(212, 156, 7)",
        "--color-dark-warning-400: rgb(247, 186, 23)",
        "--color-dark-warning-500: rgb(249, 200, 70)",
        "--color-dark-warning-600: rgb(250, 208, 97)",
        "--color-dark-warning-700: rgb(251, 215, 122)",
        "--color-dark-warning-800: rgb(252, 222, 146)",
        "--color-dark-warning-900: rgb(253, 229, 171)",
        "--color-dark-gray-50: rgb(24, 24, 24)",
        "--color-dark-gray-100: rgb(47, 47, 47)",
        "--color-dark-gray-200: rgb(71, 71, 71)",
        "--color-dark-gray-300: rgb(94, 94, 94)",
        "--color-dark-gray-400: rgb(118, 118, 118)",
        "--color-dark-gray-500: rgb(145, 145, 145)",
        "--color-dark-gray-600: rgb(173, 173, 173)",
        "--color-dark-gray-700: rgb(200, 200, 200)",
        "--color-dark-gray-800: rgb(228, 228, 228)",
        "--color-dark-gray-900: rgb(248, 248, 248)",
        "--color-dark-background: rgb(18, 18, 18)",
        "--color-dark-font: var(--color-white)",
    ]

    return (
        <Page title="Generate">
            <ul>
                {generateColorTokens(tokens).map(token => (
                    <li key={uuid()}>
                        {`${JSON.stringify(token)
                            .replaceAll('\\"', "")
                            .replaceAll(`{"primary`, `"primary`)
                            .replaceAll(`{"secondary`, `"secondary`)
                            .replaceAll(`{"success`, `"success`)
                            .replaceAll(`{"danger`, `"danger`)
                            .replaceAll(`{"warning`, `"warning`)
                            .replaceAll(`{"gray`, `"gray`)
                            .replaceAll(`{"background`, `"background`)
                            .replaceAll("}}", "}")},`}
                    </li>
                ))}
                {/* {generateColorTokens(tokens).map(token => (
                    <li key={uuid()}>{JSON.parse(token as any)}</li>
                ))} */}
            </ul>
        </Page>
    )
}

function replaceTypes(arr: Array<string>) {
    const mapValues = (obj: object) =>
        Object.keys(obj)
            .map(v => `"${v}"`)
            .join(" | ")

    const mappedRadiuses = `${mapValues(designTokens.radiuses)} | number`
    const mappedSpacers = `${mapValues(designTokens.spacers)} | number | "0px"`
    const mappedColorsShort = mapValues(designTokens.colorsShort)
    const mappedAccordionIcons = mapValues(designTokens.accordionIcons)
    const mappedAccordionVariants = mapValues(designTokens.accordionVariants)
    const mappedAsideSizes = `${mapValues(designTokens.asideSizes)} | number`
    const mappedListDirection = mapValues(designTokens.listInputDirections)
    const mappedBreadcrumbsSeparators = `${mapValues(
        designTokens.breadcrumbSeparators
    )} | JSX.Element`
    const allColorsDesc = "Any color from the library"
    const allColorsAndOverlaysDesc = "Any color or overlay from the library"
    const mappedColorsHover = mapValues(designTokens.colorsHover)
    const mappedColorsHoverAndCurrent = mapValues(designTokens.colorsHover)
    const mappedShadows = mapValues(designTokens.shadows)
    const mappedButtonSizes = mapValues(designTokens.buttonSizes)
    const mappedButtonVariants = mapValues(designTokens.buttonVariants)
    const mappedLoaderVariants = mapValues(designTokens.loaderVariants)
    const mappedButtonIconVariants = '"plain" | "transparent" | "ghost"'
    const mappedInterfaceMargin = `${mappedSpacers} | "auto" | "0 auto" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }`
    const mappedInputCheckVariants = mapValues(designTokens.checkInputVariants)
    const mappedInputBackgrounds = mapValues(designTokens.inputBackgrounds)
    const mappedInputVariants = mapValues(designTokens.inputVariants)
    const mappedKeySizes = mapValues(designTokens.keySizes)
    const mappedMainSizes = `${mapValues(designTokens.mainSizes)} | number`
    const mappedSkeletonAnimations = mapValues(designTokens.skeletonAnimations)
    const mappedStepperDirections = mapValues(designTokens.stepperDirections)
    const mappedLibFontSizes = mapValues(designTokens.fontSizes)
    const mappedTextTag = mapValues(designTokens.textTags)
    const mappedTextDisplayTags = mapValues(designTokens.textDisplayTags)
    const mappedToastStatus = mapValues(designTokens.toastStatus)

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

        //

        return (
            str
                .replaceAll("LibSpacers", mappedSpacers)
                .replaceAll(
                    "LibIconMenuDirection",
                    mapValues(designTokens.iconMenuDirections)
                )
                .replaceAll("ILibPosition", '"relative" | "absolute" | "fixed"')
                .replaceAll(
                    "LibButtonIconVariant",
                    '"plain" | "transparent" | "ghost"'
                )
                .replaceAll(
                    "LibIconMenuIcon",
                    mapValues(designTokens.iconMenuIcon)
                )
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
                // .replaceAll(
                //     "LibAccordionItem",
                //     '{ "data-testid"?: string; className?: string; title: string; content?: string | ReactChildren; defaultOpen?: boolean; ref?: ForwardedRef<HTMLDivElement> }'
                // )
                .replaceAll("LibInputListDirection", mappedListDirection)
                .replaceAll(
                    "LibBreadcrumbSeparator",
                    mappedBreadcrumbsSeparators
                )
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
                // .replaceAll(
                //     "LibBreadcrumbItem",
                //     "LibButtonLinkBlank & { text: string | JSX.Element }"
                // )
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
                    "LibValidationHelper",
                    "{ status: LibValidationStatus; message?: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number; iconBaseUrl?: string }"
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
                    [
                        "h1",
                        "h2",
                        "h3",
                        "h4",
                        "h5",
                        "h6",
                        "p",
                        "small",
                        "blockquote",
                    ]
                        .map(v => `"${v}"`)
                        .join(" | ")
                )
                .replaceAll("LibToastStatus", mappedToastStatus)
                .replaceAll(
                    "LibToasterPosition",
                    mapValues(designTokens.toasterPositions)
                )
                .replaceAll(
                    "LibTooltipTrigger",
                    mapValues(designTokens.tooltipTriggers)
                )
                .replaceAll(
                    "LibTooltipPosition",
                    mapValues(designTokens.tooltipPositions)
                )
                .replaceAll("LibShadows", mapValues(designTokens.shadows))
                .replaceAll("LibOverlays", mapValues(designTokens.overlays))
                .replaceAll(
                    "LibTransitions",
                    mapValues(designTokens.transitions)
                )
                .replaceAll(
                    "LibFontWeights",
                    mapValues(designTokens.fontWeights)
                )
                .replaceAll(
                    "LibTabJustify",
                    mapValues(designTokens.tabsJustify)
                )
                .replaceAll(
                    "LibTabVariant",
                    mapValues(designTokens.tabsVariants)
                )
                .replaceAll(
                    "LibSlideshowPaginationPosition",
                    mapValues(designTokens.slideshowPaginationPosition)
                )
                .replaceAll(
                    "LibSlideshowPagination",
                    mapValues(designTokens.slideshowPagination)
                )
                .replaceAll(
                    "LibMessageType",
                    mapValues(designTokens.messageType)
                )
                .replaceAll(
                    "LibMdEditorEditor",
                    mapValues(designTokens.markdownEditorEditor)
                )
                .replaceAll(
                    "LibPositionExtract",
                    '"relative" | "absolute" | "fixed"'
                )
                .replaceAll(
                    "LibFooterLinksSeparator",
                    mapValues(designTokens.footerSeparators)
                )
                .replaceAll(
                    "LibFooterDirection",
                    mapValues(designTokens.footerDirections)
                )
                .replaceAll(`"data-testid"`, "data-testid")
                .replaceAll("string | JSX.ElementMenuItem", "LibIconMenuItem")
                .replaceAll("LibInputPrefixAndSuffix", "string | JSX.Element")
                .replaceAll(
                    "LibDrawerPosition",
                    mapValues(designTokens.drawerPositions)
                )
                .replaceAll(
                    "LibValueInputPin",
                    '{ [n: number]: number | "" | undefined }'
                )
                .replaceAll(
                    "LibHeaderVariant",
                    mapValues(designTokens.headerVariants)
                )
        )
    })
}
