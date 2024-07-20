/*=============================================== Burger tests ===============================================*/

import { LIB_TOKENS } from "../../.."
import { BurgerPreview } from "./Preview"

describe("<Burger />", () => {
    const borderTop = () => cy.dataTest().children().eq(0)
    const borderCenter = () => cy.dataTest().children().eq(1)
    const borderBottom = () => cy.dataTest().children().eq(2)

    it("renders <Burger /> component", () => {
        cy.mount(<BurgerPreview data-testid="testid" className="className" />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should(
                "have.css",
                "color",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should("have.css", "width", "32px")
            .should("have.css", "height", "24px")

        borderTop().should("have.css", "height", "2px")
        borderCenter().should("have.css", "height", "2px")
        borderBottom().should("have.css", "height", "2px")
    })

    it("opens on click", () => {
        cy.mount(<BurgerPreview data-testid="testid" />)
        borderCenter().should("have.css", "width", "32px")
        cy.dataTest().click()
        borderCenter().should("have.css", "width", "0px")

        // TODO => check rotation of borders
    })

    it("renders with set props", () => {
        cy.mount(
            <BurgerPreview
                data-testid="testid"
                width={48}
                height={32}
                color="secondary"
                borderWidth={4}
            />
        )
        cy.dataTest()
            .should("have.css", "width", "48px")
            .should("have.css", "height", "32px")
            .should(
                "have.css",
                "color",
                LIB_TOKENS.colors.light["secondary-500"].rgb
            )

        borderTop().invoke("height").should("equal", 4)
        borderCenter().invoke("height").should("equal", 4)
        borderBottom().invoke("height").should("equal", 4)
    })
})
