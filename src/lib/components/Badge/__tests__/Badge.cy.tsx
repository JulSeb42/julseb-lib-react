/*=============================================== Badge tests ===============================================*/

import { Badge, cssVariables, roundIconSize } from "../../.."
import { Plus } from "../../../icons"

describe("<Badge />", () => {
    it("renders <Badge /> component", () => {
        cy.mount(<Badge data-testid="testid" className="className" />)

        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should(
                "have.css",
                "background-color",
                cssVariables.colors.light["primary-500"].rgb
            )
    })

    it("renders with a default width of 16px", () => {
        cy.mount(<Badge data-testid="testid" />)

        cy.dataTest().invoke("width").should("equal", 16)
    })

    it("renders with a default height of 16px", () => {
        cy.mount(<Badge data-testid="testid" />)

        cy.dataTest().invoke("height").should("equal", 16)
    })

    it("renders different props", () => {
        cy.mount(
            <Badge
                data-testid="testid"
                size={120}
                backgroundColor="secondary-300"
                contentColor="success-300"
                borderRadius={{
                    topLeft: "xs",
                    topRight: "s",
                    bottomLeft: "m",
                    bottomRight: "l",
                }}
                padding={{
                    topBottom: "xxl",
                    leftRight: "xl",
                }}
                number={421}
            />
        )

        cy.dataTest()
            .should("have.css", "min-width", "120px")
            .should("have.css", "height", "120px")
            .should(
                "have.css",
                "background-color",
                cssVariables.colors.light["secondary-300"].rgb
            )
            .should(
                "have.css",
                "color",
                cssVariables.colors.light["success-300"].rgb
            )
            .should(
                "have.css",
                "border-top-left-radius",
                cssVariables.radiuses.xs
            )
            .should(
                "have.css",
                "border-top-right-radius",
                cssVariables.radiuses.s
            )
            .should(
                "have.css",
                "border-bottom-left-radius",
                cssVariables.radiuses.m
            )
            .should(
                "have.css",
                "border-bottom-right-radius",
                cssVariables.radiuses.l
            )
            .should("have.css", "padding-left", cssVariables.spacers.xl)
            .should("have.css", "padding-top", cssVariables.spacers.xxl)
            .should("have.css", "padding-right", cssVariables.spacers.xl)
            .should("have.css", "padding-bottom", cssVariables.spacers.xxl)

        cy.dataTest().should("contain.text", "421")
    })

    it("renders an icon", () => {
        cy.mount(
            <Badge data-testid="testid" icon="star" className="className" />
        )
        cy.dataTest()
            .children()
            .should("have.prop", "tagName", "svg")
            .should("have.attr", "data-testid", "testid.Icon")
            .should("have.class", "Icon")
    })

    it("renders a SVG icon", () => {
        const size = 120

        cy.mount(
            <Badge
                data-testid="testid"
                size={size}
                icon={
                    <Plus
                        size={roundIconSize(size)}
                        data-testid=""
                        className=""
                    />
                }
            />
        )
        cy.dataTest().children().should("have.prop", "tagName", "svg")
    })
})
