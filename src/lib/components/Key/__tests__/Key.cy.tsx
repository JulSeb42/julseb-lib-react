import { Key, LIB_TOKENS } from "../../.."
import { designTokens, type LibColorsHover } from "../../../types"

const colors = Object.keys(designTokens.colorsHover) as Array<LibColorsHover>

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
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["primary-50"].rgb
            )
    })

    {
        colors.map(c =>
            it(`renders ${c} color`, () => {
                cy.mount(
                    <Key
                        data-testid="testid"
                        keys={keys}
                        accentColor={c as any}
                    />
                )

                cy.dataTest().should(
                    "have.css",
                    "border-color",
                    (LIB_TOKENS as any).colors.light[
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
            .should("have.css", "border-radius", LIB_TOKENS.radiuses.xs)
            .should("have.css", "font-size", LIB_TOKENS["font-sizes"].small.px)
            .should("have.css", "padding", `0px ${LIB_TOKENS.spacers.xxs}`)
    })

    it("renders as large", () => {
        cy.mount(<Key keys={keys} data-testid="testid" size="large" />)
        cy.dataTest()
            .should("have.css", "border-radius", LIB_TOKENS.radiuses.s)
            .should("have.css", "font-size", LIB_TOKENS["font-sizes"].body.px)
            .should(
                "have.css",
                "padding",
                `${LIB_TOKENS.spacers.xxs} ${LIB_TOKENS.spacers.xs}`
            )
    })

    it("renders a separator", () => {
        cy.mount(<Key keys={keys} data-testid="testid" withSeparator />)
        cy.dataTest().should("contain.text", "+")
    })
})
