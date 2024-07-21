/*=============================================== Generate ===============================================*/

import { Page } from "../components"
import { typeValues } from "../lib/types"

export function Generate() {
    const propsDoc = replaceTypes([
        "img: string",
        "alt?: string",
        "overlay?: LibOverlays",
        "height?: number | string",
        "padding?: ILibPadding",
    ])

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

    return (
        <Page title="Generate">
            <ul>
                {propsDoc.map(p => (
                    <li key={p}>{` * @prop ${p}`}</li>
                ))}
            </ul>

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
    })
}
