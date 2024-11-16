/*=============================================== Slideshow tests ===============================================*/

import { generateNumbers } from "@julseb-lib/utils"
import { Slideshow } from "../../.."

const images = generateNumbers(1, 4).map(n => `images/slideshow-${n}.avif`)

describe("<Slideshow />", () => {
    it("renders <Slideshow /> component", () => {
        cy.mount(
            <Slideshow
                data-testid="testid"
                className="className"
                images={images}
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest("testid.SlideshowWrapper.SlideshowButton.Prev").should(
            "not.exist"
        )
        cy.dataTest("testid.SlideshowWrapper.SlideshowButton.Next").should(
            "not.exist"
        )
        cy.dataTest("testid.SlideshowPagination").should("not.exist")
    })

    it("renders controls and pagination", () => {
        cy.mount(
            <Slideshow
                data-testid="testid"
                className="className"
                images={images}
                pagination
                controls
            />
        )
        cy.dataTest("testid.SlideshowButton.Prev").should("exist")
        cy.dataTest("testid.SlideshowButton.Next").should("exist")
        cy.dataTest("testid.SlideshowPagination").should("exist")
    })

    it("renders a set height", () => {
        cy.mount(
            <Slideshow
                data-testid="testid"
                className="className"
                images={images}
                height={150}
            />
        )
        cy.dataTest("testid.SlideshowWrapper").should(
            "have.css",
            "height",
            "150px"
        )
    })

    it("renders different sizes for controls, and another position for pagination", () => {
        cy.mount(
            <Slideshow
                data-testid="testid"
                className="className"
                images={images}
                pagination={{ position: "inside" }}
                controls={{ size: "large" }}
            />
        )

        cy.dataTest("testid.SlideshowButton.Prev")
            .should("have.css", "width", "48px")
            .should("have.css", "height", "48px")
        cy.dataTest("testid.SlideshowButton.Next")
            .should("have.css", "width", "48px")
            .should("have.css", "height", "48px")
        cy.dataTest("testid.SlideshowPagination").should(
            "have.css",
            "position",
            "absolute"
        )
    })
})
