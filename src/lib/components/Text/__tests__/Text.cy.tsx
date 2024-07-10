/*=============================================== Text tests ===============================================*/

import { Text, cssVariables } from "../../.."
import { tags } from "./utils"

describe("<Text />", () => {
    it("renders <Text /> component with a default tag p", () => {
        cy.mount(
            <Text data-testid="testid" className="className">
                Hello
            </Text>
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "P")
    })

    {
        tags.map(tag =>
            it(`renders a "${tag}" tag`, () => {
                cy.mount(
                    <Text tag={tag} data-testid="testid">
                        Text {tag}
                    </Text>
                )
                cy.dataTest().should("have.prop", "tagName", tag.toUpperCase())
            })
        )
    }

    it("renders text with the primary color", () => {
        cy.mount(
            <Text data-testid="testid" color="primary">
                Hello
            </Text>
        )

        cy.dataTest().should(
            "have.css",
            "color",
            cssVariables.colors.light["primary-500"].rgb
        )
    })

    it("renders a link inside the text with a secondary color", () => {
        cy.mount(
            <Text data-testid="testid" linkColor="secondary">
                Hello <a href="#">link</a>
            </Text>
        )

        const link = cy.dataTest().get("a")

        link.should(
            "have.css",
            "color",
            cssVariables.colors.light["secondary-500"].rgb
        )
    })

    it("centers the text", () => {
        cy.mount(
            <Text data-testid="testid" textAlign="center">
                Hello
            </Text>
        )
        cy.dataTest().should("have.css", "text-align", "center")
    })

    it("renders a bigger font size with the `display` prop", () => {
        cy.mount(
            <Text data-testid="testid" tag="h1" display>
                Hello
            </Text>
        )
        cy.dataTest().should(
            "have.css",
            "font-size",
            cssVariables["font-sizes"]["display-h1"].px
        )
    })
})
