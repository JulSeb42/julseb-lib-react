/*=============================================== Accordion tests ===============================================*/

import { Accordion, LIB_TOKENS } from "../../.."
import { items } from "./data"

describe("<Accordion />", () => {
    it("renders <Accordion /> component", () => {
        cy.mount(
            <Accordion
                data-testid="testid"
                className="className"
                items={items}
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest("testid.AccordionItem")
            .should("exist")
            .should("have.class", "AccordionItem")
            .should("have.length", 3)

        cy.dataTest("testid.AccordionItem.AccordionButton")
            .should("exist")
            .should(
                "have.css",
                "border-bottom-color",
                LIB_TOKENS.colors.light["gray-200"].rgb
            )
            .should(
                "have.css",
                "color",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )

        cy.dataTest(
            "testid.AccordionItem.AccordionButton.IconContainer.Icon.Plus"
        ).should("exist")

        cy.dataTest(
            "testid.AccordionItem.AccordionButton.IconContainer.Icon.Chevron"
        ).should("not.exist")
    })

    it("renders rounded variant", () => {
        cy.mount(
            <Accordion data-testid="testid" items={items} variant="rounded" />
        )

        cy.dataTest()
            .should(
                "have.css",
                "border-color",
                LIB_TOKENS.colors.light["gray-200"].rgb
            )
            .should("have.css", "border-radius", LIB_TOKENS.radiuses.m)
    })

    it("opens and closes an item on click", () => {
        cy.mount(<Accordion data-testid="testid" items={items} />)

        cy.dataTest("testid.AccordionItem.AccordionContent")
            .first()
            .should("be.visible")

        cy.dataTest("testid.AccordionItem.AccordionContent")
            .last()
            .should("not.be.visible")

        cy.dataTest("testid.AccordionItem.AccordionButton").first().click()
        cy.dataTest("testid.AccordionItem.AccordionButton").last().click()

        cy.dataTest("testid.AccordionItem.AccordionContent")
            .first()
            .should("not.be.visible")

        cy.dataTest("testid.AccordionItem.AccordionContent")
            .last()
            .should("be.visible")
    })

    it("renders a different icon", () => {
        cy.mount(
            <Accordion data-testid="testid" items={items} icon="chevron" />
        )

        cy.dataTest(
            "testid.AccordionItem.AccordionButton.IconContainer.Icon.Plus"
        ).should("not.exist")

        cy.dataTest(
            "testid.AccordionItem.AccordionButton.IconContainer.Icon.Chevron"
        ).should("exist")
    })
})
