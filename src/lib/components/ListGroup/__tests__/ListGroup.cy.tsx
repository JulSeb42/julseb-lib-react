/*=============================================== ListGroup tests ===============================================*/

import { ListGroup, libTokens } from "../../.."
import { listGroupData } from "./data"

describe("<ListGroup />", () => {
    it("renders <ListGroup /> component", () => {
        cy.mount(
            <ListGroup
                data-testid="testid"
                className="className"
                items={listGroupData}
            />
        )

        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.css", "border-width", "1px")
            .should("have.css", "border-style", "solid")
            .should(
                "have.css",
                "border-color",
                libTokens.colors.light["gray-200"].rgb
            )

        cy.dataTest("testid.ListGroupItem").should(
            "have.length",
            listGroupData.length
        )

        cy.dataTest("testid.Content.LeftContainer").should("not.exist")

        cy.dataTest("testid.ListGroupItem")
            .eq(0)
            .should("have.prop", "tagName", "DIV")

        cy.dataTest("testid.ListGroupItem")
            .eq(5)
            .should("have.prop", "tagName", "A")

        cy.dataTest("testid.ListGroupItem")
            .eq(6)
            .should("have.prop", "tagName", "A")

        cy.dataTest("testid.ListGroupItem")
            .eq(7)
            .should("have.prop", "tagName", "BUTTON")

        cy.dataTest("testid.ListGroupItem")
            .eq(8)
            .should("have.prop", "tagName", "BUTTON")
            .should("be.disabled")
    })

    it("renders numbers", () => {
        cy.mount(
            <ListGroup
                data-testid="testid"
                className="className"
                items={listGroupData}
                showNumbers
            />
        )

        cy.dataTest("testid.Content.LeftContainer").should("exist")

        cy.dataTest("testid.Content.LeftContainer")
            .eq(2)
            .should("have.text", "3.")
    })

    it("renders a maxHeight", () => {
        cy.mount(
            <ListGroup
                data-testid="testid"
                className="className"
                items={listGroupData}
                maxHeight={300}
            />
        )

        cy.dataTest().should("have.css", "max-height", "300px")
    })
})
