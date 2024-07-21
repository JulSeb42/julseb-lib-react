/*=============================================== Cover tests ===============================================*/

import { Cover, LIB_TOKENS } from "../../.."

describe("<Cover />", () => {
    it("renders <Cover /> component", () => {
        cy.mount(
            <Cover
                data-testid="testid"
                className="className"
                img="images/cover-img.avif"
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest("testid.CoverImage")
            .should("exist")
            .should("have.class", "CoverImage")
        cy.dataTest("testid.CoverContent")
            .should("exist")
            .should("have.class", "CoverContent")
    })

    // ? overlays
    it("renders an overlay", () => {
        cy.mount(
            <Cover
                data-testid="testid"
                className="className"
                img="images/cover-img.avif"
                overlay="black-80"
            />
        )
        cy.dataTest().before(
            cy.dataTest(),
            "background",
            `${LIB_TOKENS.overlays["black-80"]} none repeat scroll 0% 0% / auto padding-box border-box`
        )
    })

    // ? height + padding
    it("renders a different height and padding", () => {
        cy.mount(
            <Cover
                data-testid="testid"
                className="className"
                img="images/cover-img.avif"
                height={150}
                padding="xs"
            />
        )

        cy.dataTest().should("have.css", "height", "150px")

        cy.dataTest("testid.CoverContent").should(
            "have.css",
            "padding",
            LIB_TOKENS.spacers.xs
        )
    })
})
