/*=============================================== Breadcrumbs tests ===============================================*/

import { Link } from "react-router-dom"
import { Breadcrumbs, cssVariables } from "../../.."
import { breadcrumbsItems } from "./data"

describe("<Breadcrumbs />", () => {
    it("renders <Breadcrumbs /> component", () => {
        cy.mount(
            <Breadcrumbs data-testid="testid" className="className">
                {breadcrumbsItems.map(({ text, to }, i) =>
                    to ? (
                        <Link to={to} key={i}>
                            {text}
                        </Link>
                    ) : (
                        <span key={i}>{text}</span>
                    )
                )}
            </Breadcrumbs>
        )
        cy.dataTest().should("exist").should("have.class", "className")

        cy.dataTest("testid.SeparatorContainer")
            .should("exist")
            .should("have.length", 3)

        cy.dataTest("testid.SeparatorContainer").eq(0).should("have.text", "/")
    })

    it("renders an icon as separator", () => {
        cy.mount(
            <Breadcrumbs data-testid="testid" separator="chevron">
                {breadcrumbsItems.map(({ text, to }, i) =>
                    to ? (
                        <Link to={to} key={i}>
                            {text}
                        </Link>
                    ) : (
                        <span key={i}>{text}</span>
                    )
                )}
            </Breadcrumbs>
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
            >
                {breadcrumbsItems.map(({ text, to }, i) =>
                    to ? (
                        <Link to={to} data-testid={`testid.Link.${i}`} key={i}>
                            {text}
                        </Link>
                    ) : (
                        <span data-testid={`testid.Active.${i}`} key={i}>
                            {text}
                        </span>
                    )
                )}
            </Breadcrumbs>
        )
        cy.dataTest("testid.Link.0").should(
            "have.css",
            "color",
            cssVariables.colors.light["secondary-500"].rgb
        )

        cy.dataTest("testid.SeparatorContainer").should(
            "have.css",
            "color",
            cssVariables.colors.light["warning-500"].rgb
        )

        cy.dataTest().should(
            "have.css",
            "color",
            cssVariables.colors.light["success-500"].rgb
        )

        cy.dataTest().should("have.css", "gap", cssVariables.spacers.xl)
    })

    // TODO
    // ? separators
    // ? colors
    // ? gap
})
