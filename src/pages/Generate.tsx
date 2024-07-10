/*=============================================== Generate ===============================================*/

// import { deleteDuplicates } from "ts-utils-julseb"
import { Page } from "../components"

export function Generate() {
    const propsDoc = [
        "to?: string",
        "href?: string",
        "blank?: boolean",
        "onClick?: () => void",
        "setState?: DispatchState<boolean>",
    ]

    const tests = [
        "testid.Button.Minus",
        "testid.Button.Minus.Icon",
        "testid.Input",
        "testid.Button.Plus",
        "testid.Button.Plus.Icon",
    ]

    // const fontSizes = Object.keys(cssVariables["font-sizes"])

    const inputSliderShowValues = {
        never: "never",
        hover: "hover",
        always: "always",
    }

    return (
        <Page title="Generate">
            <ul>
                {tests.map(t => (
                    <li key={t}>
                        cy.dataTest("{t}").should("exist").should("have.class",
                        "{t.replaceAll("testid.", "").replaceAll(".", "__")}")
                    </li>
                ))}
            </ul>

            <p>{Object.keys(inputSliderShowValues).map(i => `"${i}" | `)}</p>

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
            <ul>
                {propsDoc.map(p => (
                    <li key={p}>
                        {" "}
                        * @prop{" "}
                        {getTypeDispatch(p)
                            .replaceAll("LibIcon", "string | JSX.Element")
                            .replaceAll(
                                "DispatchState",
                                "Dispatch<SetStateAction<"
                            )}
                    </li>
                ))}
            </ul>
        </Page>
    )
}

function getTypeDispatch(str: string): string {
    if (str.includes("DispatchState")) {
        const prop = str.split(":")[0]

        const type = str
            .split(":")[1]
            .replace("DispatchState<", "")
            .replace(">", "")

        return `${prop}: Dispatch<SetStateAction<${type}>>`
    }

    return str
}
