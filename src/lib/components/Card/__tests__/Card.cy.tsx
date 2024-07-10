/*=============================================== Card tests ===============================================*/

import { Card, libTokens } from "../../.."

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
                libTokens.colors.light.background.rgb
            )
            .should("have.css", "color", libTokens.colors.light.font.rgb)
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
                libTokens.colors.light["gray-200"].rgb
            )
            .should("have.css", "border-radius", libTokens.radiuses.xxl)
            .should("have.css", "padding", libTokens.spacers.xxl)
    })

    // TODO
    // ? border + border radius + padding + shadow + background color + font
    // ? background img
    // ? as button
})
