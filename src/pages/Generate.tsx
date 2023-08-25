/*=============================================== Generate ===============================================*/

import { Page } from "../components"
import { cssVariables, toSentenceCase, toConstantCase, uuid } from "../lib"

// {
//     name: "Black",
//     variable: "COLORS_LIGHT.BLACK",
//     css: COLORS_LIGHT.BLACK,
//     hex: cssVariables.colors.light.black.hex,
//     rgb: cssVariables.colors.light.black.rgb,
// },

export function Generate() {
    // const abc = [
    //     "inline: boolean",
    //     "flexDirection: FlexDirection",
    //     "flexWrap: FlexWrap",
    //     "justifyContent: JustifyContent",
    //     "alignItems: AlignItems",
    //     "justifyItems: JustifyItems",
    //     "alignContent: AlignContent",
    //     "gap: LibSpacers",
    //     "columnGap: LibSpacers",
    //     "rowGap: LibSpacers",
    // ]
    const colorsLight = Object.entries(cssVariables.shadows)

    const propsDoc = [
        "$width: string | number",
        "$maxWidth: string | number",
        "$height: string | number",
        "$backgroundColor: LibAllColors",
        "$aspectRatio: string",
        "$border: LibBorderProps",
        "$borderRadius: LibRadiusProps",
        "$flex: string | number",
        "$flexGrow: string | number",
        "$padding: LibPaddingProps",
    ]

    return (
        <Page title="Generate">
            <ul>
                {propsDoc.map(p => {
                    const prop = p.split(":")[0]

                    return (
                        <li key={p}>{`${prop.split(":")[0]}={${prop.replace(
                            "$",
                            ""
                        )}}`}</li>
                    )
                })}
            </ul>
            {/* <ul>
                {propsDoc.map(p => (
                    <li key={p}>
                        {" "}
                        * @prop{" "}
                        {p
                            .replace("ElementType", "HTML Tag")
                            .replace("LibAllColors", "Any color of the library")}
                    </li>
                ))}
            </ul> */}
            {/* <ul>
                {colorsLight.map(color => {
                    const name = color[0]

                    const type = "shadow"

                    const nameValue = toSentenceCase(name)?.replaceAll("-", " ")
                    const variable = `${type.toUpperCase()}S.${toConstantCase(name)}`

                    return (
                        <li
                            key={uuid()}
                        >{`{ name: "${nameValue?.toUpperCase()}", variable: "${variable}", css: ${variable}, value: cssVariables.${type}s.${name.toLowerCase()}, },`}</li>
                    )
                })}
            </ul> */}

            {/* <ul>
                {abc.map(a => (
                    <li key={a}>{a}</li>
                ))}
            </ul>

            <ul>
                {abc.map(a => (
                    <li key={a}>{a.split(":")[0]},</li>
                ))}
            </ul>

            <ul>
                {abc.map(a => {
                    const v = a.split(":")[0]

                    return <li key={a}>{`$${v}={${v}}`}</li>
                })}
            </ul> */}
        </Page>
    )
}
