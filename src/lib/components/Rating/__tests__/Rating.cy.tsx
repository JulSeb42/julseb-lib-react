/*=============================================== Rating tests ===============================================*/

import { Preview, PreviewReadOnly } from "./Preview"

describe("<Rating />", () => {
    it("renders <Rating /> component", () => {
        cy.mount(<Preview />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "DIV")
        cy.dataTest("testid.RatingContainer").should("not.exist")
        cy.dataTest("testid.RatingContainer.Button")
            .should("exist")
            .should("have.length", 5)
        cy.dataTest("testid.RatingContainer.Button.Icon.Checked")
            .should("exist")
            .should("have.length", 1)
        cy.dataTest("testid.RatingContainer.Button.Icon.Default")
            .should("exist")
            .should("have.length", 4)
    })

    it("changes value on click", () => {
        cy.mount(<Preview />)
        cy.dataTest("testid.RatingContainer.Button.Icon.Checked").should(
            "have.length",
            1
        )
        cy.dataTest("testid.RatingContainer.Button.Icon.Default").should(
            "have.length",
            4
        )

        cy.dataTest("testid.RatingContainer.Button").eq(2).click()

        cy.dataTest("testid.RatingContainer.Button.Icon.Checked").should(
            "have.length",
            3
        )
        cy.dataTest("testid.RatingContainer.Button.Icon.Default").should(
            "have.length",
            2
        )
    })

    it("renders a span when `readOnly` is set to `true`", () => {
        cy.mount(<PreviewReadOnly />)
        cy.dataTest("testid.RatingContainer.Button").should(
            "have.prop",
            "tagName",
            "SPAN"
        )
    })
})
