/*=============================================== Tabs tests ===============================================*/

import { Tabs, LIB_TOKENS } from "../../.."
import { tabsItems } from "./data"

describe("<Tabs />", () => {
    it("renders <Tabs /> component", () => {
        cy.mount(
            <Tabs
                data-testid="testid"
                className="className"
                tabsItems={tabsItems}
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest("testid.TabsButtonsContainer")
            .should("exist")
            .should("have.class", "TabsButtonsContainer")
        cy.dataTest("testid.TabsButtonsContainer.TabButton")
            .should("exist")
            .should("have.class", "TabButton")
            .should("have.length", 3)

        cy.dataTest("testid.TabItem")
            .should("exist")
            .should("have.class", "TabItem")
            .should("have.length", 3)

        cy.dataTest("testid.TabItem").eq(0).should("be.visible")
        cy.dataTest("testid.TabItem").eq(1).should("not.be.visible")
    })

    // ? Variants
    it("renders a rounded variant", () => {
        cy.mount(
            <Tabs
                data-testid="testid"
                className="className"
                tabsItems={tabsItems}
                variant="rounded"
            />
        )

        cy.dataTest("testid.TabsButtonsContainer").should(
            "have.css",
            "background-color",
            LIB_TOKENS.colors.light["gray-50"].rgb
        )
    })

    // ? Click change page
    it("changes page on click", () => {
        cy.mount(
            <Tabs
                data-testid="testid"
                className="className"
                tabsItems={tabsItems}
            />
        )

        cy.dataTest("testid.TabsButtonsContainer.TabButton").eq(2).click()
        cy.dataTest("testid.TabItem").eq(2).should("have.text", "Content tab 3")
    })
})
