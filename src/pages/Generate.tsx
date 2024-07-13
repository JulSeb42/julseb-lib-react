/*=============================================== Generate ===============================================*/

// import { deleteDuplicates } from "ts-utils-julseb"
import { Page } from "../components"
import {} from "../lib"
import { typeValues } from "../lib/types"

export function Generate() {
    const propsDoc = replaceTypes([
        "size?: LibAsideSize",
        "minHeight?: string | number",
    ])
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

function replaceTypes(arr: Array<string>) {
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
