/*=============================================== InputImage tests ===============================================*/

import { InputImage, LIB_TOKENS } from "../../.."

describe("<InputImage />", () => {
    it("renders <InputImage /> component", () => {
        cy.mount(
            <InputImage
                data-testid="testid"
                className="className"
                value=""
                id="img"
            />
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.attr", "for", "img")
            .should("have.css", "width", "64px")
            .should("have.css", "height", "64px")
            .should("have.css", "border-radius", LIB_TOKENS.radiuses.m)

        cy.dataTest("testid.Input")
            .should("exist")
            .should("have.attr", "id", "img")

        cy.dataTest("testid.EmptyContainer").should("exist")
        cy.dataTest("testid.HoverContainer")
            .should("exist")
            .should("not.be.visible")
        cy.dataTest("testid.Image").should("not.exist")
    })

    it("renders an image", () => {
        cy.mount(
            <InputImage
                data-testid="testid"
                className="className"
                value="/images/image-card.jpg"
                id="img"
            />
        )

        cy.dataTest("testid.EmptyContainer").should("not.exist")
        cy.dataTest("testid.Image")
            .should("exist")
            .should("have.attr", "src", "/images/image-card.jpg")
    })

    it("shows an icon on hover", () => {
        cy.mount(
            <InputImage
                data-testid="testid"
                className="className"
                value=""
                label="Label"
                id="img"
            />
        )

        cy.dataTest("testid.HoverContainer").should("not.be.visible")
        cy.dataTest("testid.InputLabel").trigger("mouseover")
        cy.dataTest("testid.HoverContainer").should("be.visible")
    })

    it("renders different props", () => {
        cy.mount(
            <InputImage
                data-testid="testid"
                value=""
                id="img"
                width="100%"
                height={120}
                borderRadius="l"
                label="Label"
            />
        )

        cy.dataTest("testid.Label").should("exist")
        cy.dataTest("testid.InputLabel")
            .should("exist")
            .should("have.css", "height", "120px")
            .should("have.css", "border-radius", LIB_TOKENS.radiuses.l)
    })
})
