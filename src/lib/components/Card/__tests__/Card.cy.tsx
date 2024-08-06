/*=============================================== Card tests ===============================================*/

import { Card, LIB_TOKENS } from "../../.."

describe("<Card />", () => {
    it("renders <Card /> component", () => {
        cy.mount(
            <Card data-testid="testid" className="className">
                Hello
            </Card>
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light.background.rgb
            )
            .should("have.css", "color", LIB_TOKENS.colors.light.font.rgb)
            .should("have.css", "text-align", "left")
    })

    it("renders different props", () => {
        cy.mount(
            <Card
                data-testid="testid"
                border={{ width: 1 }}
                borderRadius="xxl"
                padding="xxl"
                shadow="s"
                backgroundColor="secondary"
                textColor="white"
            >
                Hello
            </Card>
        )
        cy.dataTest()
            .should("have.css", "border-width", "1px")
            .should("have.css", "border-style", "solid")
            .should(
                "have.css",
                "border-color",
                LIB_TOKENS.colors.light["gray-200"].rgb
            )
            .should("have.css", "border-radius", LIB_TOKENS.radiuses.xxl)
            .should("have.css", "padding", LIB_TOKENS.spacers.xxl)
    })

    // TODO
    // ? background img
    // ? as button
})
