/*=============================================== ButtonGroup tests ===============================================*/

import { ButtonGroup, LIB_TOKENS } from "../../.."
import { buttons } from "./data"
import { SITE_DATA } from "../../../../data"

describe("<ButtonGroup />", () => {
    const firstButton = () => cy.dataTest().children().eq(0)
    const secondButton = () => cy.dataTest().children().eq(1)
    const thirdButton = () => cy.dataTest().children().eq(2)
    const fourthButton = () => cy.dataTest().children().eq(3)

    it("renders <ButtonGroup /> component", () => {
        cy.mount(
            <ButtonGroup
                data-testid="testid"
                className="className"
                buttons={buttons}
            />
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .children()
            .should("have.attr", "data-testid")

        firstButton()
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should("have.css", "height", "34px")
        secondButton()
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should("have.css", "height", "34px")
        thirdButton()
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should("have.css", "height", "34px")
        fourthButton()
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should("have.css", "height", "34px")
    })

    it("renders first button as <ButtonIcon />", () => {
        cy.mount(
            <ButtonGroup
                data-testid="testid"
                className="className"
                buttons={buttons}
                size="small"
                iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
            />
        )
        cy.dataTest().should("have.css", "height", "24px")
        firstButton()
            .should("have.attr", "data-testid", "testid.Button.0")
            .should("have.class", "Button")
        firstButton().children().should("have.prop", "tagName", "svg")

        firstButton().click()
        cy.on("window:alert", t => expect(t).to.equal("Clicked"))
    })

    it("renders second button as <Button />", () => {
        cy.mount(
            <ButtonGroup
                data-testid="testid"
                className="className"
                buttons={buttons}
                color="secondary"
            />
        )

        secondButton()
            .should("have.attr", "data-testid", "testid.Button.1")
            .should("have.class", "Button")
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["secondary-500"].rgb
            )
            .should("have.text", "Button")

        secondButton().click()
        cy.on("window:alert", t => expect(t).to.equal("Clicked second"))
    })

    it("renders third button as <a />", () => {
        cy.mount(
            <ButtonGroup
                data-testid="testid"
                className="className"
                buttons={buttons}
                variant="transparent"
            />
        )

        cy.dataTest()
            .should(
                "have.css",
                "border-color",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should("have.css", "border-width", "1px")
            .children()
            .eq(1)
            .should("have.prop", "tagName", "HR")
            .should("have.attr", "data-testid", "testid.Separator.0")
            .should("have.class", "Separator")

        cy.dataTest("testid.Button.2")
            .should("have.prop", "tagName", "A")
            .should("have.attr", "href", "http://google.com")
            .should("have.attr", "target", "_blank")
    })

    it("renders third button as <Link />", () => {
        cy.mount(
            <ButtonGroup
                data-testid="testid"
                className="className"
                buttons={buttons}
                borderRadius="xl"
            />
        )

        cy.dataTest().should(
            "have.css",
            "border-radius",
            LIB_TOKENS.radiuses.xl
        )
        fourthButton()
            .should("have.attr", "data-testid", "testid.Button.3")
            .should("have.class", "Button")
            .should("have.attr", "href", "/")
    })

    // TODO: add with toggles
})
