/*=============================================== Generate ===============================================*/

import type { FC } from "react"
import { Page } from "../components"
import {} from "../lib"
import { typeValues } from "../lib/types"

export const Generate: FC = () => {
    const propsDoc = replaceTypes([
        "title: string",
        "icon?: LibAccordionIcon",
        "variant?: LibAccordionVariant",
        "defaultOpen?: boolean",
    ])

    const props = [
        "variant?: LibHeaderVariant",
        "backgroundColor?: LibAllColors => only if variant is set to primary",
        "textColor?: LibAllColors => only if variant is set to primary",
        "linkColor?: LibColorsHover => only if variant is set to primary",
    ]

    const renames = [
        "clone-folder.ts",
        "constants.ts",
        "copy-env.ts",
        "remove-cypress.ts",
        "replace-in-file.ts",
        "replace-project-name-fullstack.ts",
        "replace-repo-name.ts",
        "types.ts",
    ]

    const generators = [
        "component.js",
        "index.js ",
        "model.js ",
        "page.js ",
        "route.js ",
        "single-component.js",
    ]

    // const pickProps = [
    //     "showTooltip",
    //     "to",
    //     "href",
    //     "isLoading",
    //     "disabled",
    //     "aria-disabled",
    //     "aria-label",
    //     "blank",
    //     "variant",
    //     "showBackgroundHover",
    //     "borderRadius",
    //     "color",
    //     "shadow",
    //     "size",
    //     "loaderVariant",
    //     "icon",
    //     "iconSize",
    //     "loaderBorderWidth",
    // ]

    // const propsInput = [
    //     "id",
    //     "label",
    //     "helper",
    //     "helperBottom",
    //     "validation",
    //     "counter",
    //     "maxLength",
    //     "value",
    //     "className",
    //     "ref",
    //     "type",
    //     "inputBackground",
    //     "inputVariant",
    // ]

    // const allPreviews = previews.map(p => p.name)

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

    // const typeValuesArr = Object.keys(typeValues.spacers)

    // const tests = [
    //     "testid.Button.Minus",
    //     "testid.Button.Minus.Icon",
    //     "testid.Input",
    //     "testid.Button.Plus",
    //     "testid.Button.Plus.Icon",
    // ]

    // const inputSliderShowValues = {
    //     never: "never",
    //     hover: "hover",
    //     always: "always",
    // }

    return (
        <Page title="Generate">
            <ul>
                {propsDoc.map(p => (
                    <li key={p}>{` * @prop ${p}`}</li>
                ))}
            </ul>

            {/* <ul>
                {tests.map(t => (
                    <li key={t}>
                        cy.dataTest("{t}").should("exist").should("have.class",
                        "{t.replaceAll("testid.", "").replaceAll(".", "__")}")
                    </li>
                ))}
            </ul>

            

            <p>{Object.keys(inputSliderShowValues).map(i => `"${i}" | `)}</p> */}

            {/* <p>
                {Object.keys(inputTypes).map(i => (
                    <>"{i}" | </>
                ))}
            </p>

            <ul>
                {itemProps.map(p => (
                    <li key={p}>{p.split("=")[0]},</li>
                ))}
            </ul> */}

            {/* <ul>
                {fontSizes.map(size => (
                    <li key={size}>{`["${size}", getSize("${size}")],`}</li>
                ))}
            </ul> */}

            {/* <ul>
                {inputTypes.map(i => (
                    <li key={i}>{`${i}: "${i}",`}</li>
                ))}
            </ul> */}

            {/* <ul>
                {inputs.map(i => {
                    const type = i.replaceAll("Input", "").toLowerCase()

                    return (
                        <li
                            key={i}
                        >{`if (type === "${type}") return <${i} ref={ref} {...rest} />`}</li>
                    )
                })}
            </ul>

            <ul>
                {propsDoc.map(prop => {
                    return <li key={prop}>${prop}</li>
                })}
            </ul>

            <ul>
                {propsDoc.map(p => {
                    const prop = p.split(":")[0].replace("?", "")

                    return (
                        <li key={p}>{`$${prop.split(":")[0]}={${prop.replace(
                            "$",
                            ""
                        )}}`}</li>
                    )
                })}
            </ul>
            <ul>
                {propsDoc.map(a => (
                    <li key={a}>
                        {a.split(":")[0].replace("$", "").replace("?", "")},
                    </li>
                ))}
            </ul>

            <ul>
                {propsDoc.map(p => (
                    <li key={p}>
                        {" "}
                        * @prop{" "}
                        {p.replaceAll("LibIcon", "string | JSX.Element")}
                    </li>
                ))}
            </ul> */}

            {/* <p>{typeValuesArr.map(t => `"${t}" | `)}</p> */}
        </Page>
    )
}

const replaceTypes = (arr: Array<string>) => {
    const mappedRadiuses = Object.keys(typeValues.radiuses)
        .map(r => `"${r}"`)
        .join(" | ")
    const mappedSpacers = Object.keys(typeValues.spacers)
        .map(s => `"${s}"`)
        .join(" | ")
    const mappedColorsShort = Object.keys(typeValues.colorsShort)
        .map(c => `"${c}"`)
        .join(" | ")
    const mappedAccordionIcons = Object.keys(typeValues.accordionIcons)
        .map(i => `"${i}"`)
        .join(" | ")
    const mappedAccordionVariants = Object.keys(typeValues.accordionVariants)
        .map(v => `"${v}"`)
        .join(" | ")
    const mappedAsideSizes = Object.keys(typeValues.asideSizes)
        .map(s => `"${s}"`)
        .join(" | ")
    const allColorsDesc = "Any color from the library"

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
            .replaceAll("LibAllColors", allColorsDesc)
            .replaceAll(
                "ILibPadding",
                `${mappedSpacers} | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }`
            )
            .replaceAll(
                "ILibRadius",
                `${mappedRadiuses} | number | null | { topLeft?: LibRadiuses | number | null; topRight?: LibRadiuses | number | null; bottomLeft?: LibRadiuses | number | null; bottomRight?: LibRadiuses | number | null }`
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
            .replaceAll("LibAsideSize", `${mappedAsideSizes} | number`)
            .replaceAll(
                "LibAccordionItem",
                '{ "data-testid"?: string; className?: string; title: string; content?: string | ReactChildren; defaultOpen?: boolean; ref?: ForwardedRef<HTMLDivElement> }'
            )
    })
}

// function getTypeDispatch(str: string): string {
//     if (str.includes("DispatchState")) {
//         const prop = str.split(":")[0]

//         const type = str
//             .split(":")[1]
//             .replace("DispatchState<", "")
//             .replace(">", "")

//         return `${prop}: Dispatch<SetStateAction<${type}>>`
//     }

//     return str
// }
