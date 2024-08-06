/*=============================================== Breadcrumbs tests ===============================================*/

import { Breadcrumbs, LIB_TOKENS } from "../../.."
import { breadcrumbsItems } from "./data"

describe("<Breadcrumbs />", () => {
    it("renders <Breadcrumbs /> component", () => {
        cy.mount(
            <Breadcrumbs
                data-testid="testid"
                className="className"
                breadcrumbsItems={breadcrumbsItems}
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")

        cy.dataTest("testid.SeparatorContainer")
            .should("exist")
            .should("have.length", 3)

        cy.dataTest("testid.SeparatorContainer").eq(0).should("have.text", "/")
    })

    it("renders an icon as separator", () => {
        cy.mount(
            <Breadcrumbs
                data-testid="testid"
                separator="chevron"
                breadcrumbsItems={breadcrumbsItems}
            />
        )

        cy.dataTest("testid.SeparatorContainer")
            .eq(0)
            .children()
            .should("have.prop", "tagName", "svg")
    })

    it("renders different styles", () => {
        cy.mount(
            <Breadcrumbs
                data-testid="testid"
                linksColor="secondary"
                activeColor="success"
                separatorColor="warning"
                gap="xl"
                breadcrumbsItems={breadcrumbsItems}
            />
        )
        cy.dataTest("testid.Link.0").should(
            "have.css",
            "color",
            LIB_TOKENS.colors.light["secondary-500"].rgb
        )

        cy.dataTest("testid.SeparatorContainer").should(
            "have.css",
            "color",
            LIB_TOKENS.colors.light["warning-500"].rgb
        )

        cy.dataTest().should(
            "have.css",
            "color",
            LIB_TOKENS.colors.light["success-500"].rgb
        )

        cy.dataTest().should("have.css", "gap", LIB_TOKENS.spacers.xl)
    })
})
