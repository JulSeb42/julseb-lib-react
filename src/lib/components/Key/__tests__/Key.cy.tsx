/*=============================================== Key tests ===============================================*/

import { Key, cssVariables } from "../../.."
import { typeValues, type LibColorsHover } from "../../../types"

const colors = Object.keys(typeValues.colorsHover) as Array<LibColorsHover>

describe("<Key />", () => {
    const keys = ["⌘", "K"]

    it("renders <Key /> component", () => {
        cy.mount(<Key data-testid="testid" className="className" keys={keys} />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should(
                "have.css",
                "border-color",
                cssVariables.colors.light["primary-500"].rgb
            )
            .should(
                "have.css",
                "background-color",
                cssVariables.colors.light["primary-50"].rgb
            )
    })

    {
        colors.map(c =>
            it(`renders ${c} color`, () => {
                cy.mount(
                    <Key data-testid="testid" keys={keys} accentColor={c} />
                )

                cy.dataTest().should(
                    "have.css",
                    "border-color",
                    // @ts-expect-error
                    cssVariables.colors.light[
                        c === "white"
                            ? "white"
                            : c === "font"
                            ? "font"
                            : c === "background"
                            ? "background"
                            : `${c}-500`
                    ].rgb
                )
            })
        )
    }

    it("renders as small", () => {
        cy.mount(<Key keys={keys} data-testid="testid" size="small" />)
        cy.dataTest()
            .should("have.css", "border-radius", cssVariables.radiuses.xs)
            .should(
                "have.css",
                "font-size",
                cssVariables["font-sizes"].small.px
            )
            .should("have.css", "padding", `0px ${cssVariables.spacers.xxs}`)
    })

    it("renders as large", () => {
        cy.mount(<Key keys={keys} data-testid="testid" size="large" />)
        cy.dataTest()
            .should("have.css", "border-radius", cssVariables.radiuses.s)
            .should("have.css", "font-size", cssVariables["font-sizes"].body.px)
            .should(
                "have.css",
                "padding",
                `${cssVariables.spacers.xxs} ${cssVariables.spacers.xs}`
            )
    })

    it("renders a separator", () => {
        cy.mount(<Key keys={keys} data-testid="testid" withSeparator />)
        cy.dataTest().should("contain.text", "+")
    })
})
