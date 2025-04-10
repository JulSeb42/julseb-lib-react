import { ButtonIcon, LIB_TOKENS } from "../../.."
import { SITE_DATA } from "../../../../data"

describe("<ButtonIcon />", () => {
    it("renders <ButtonIcon /> component", () => {
        cy.mount(
            <ButtonIcon
                data-testid="testid"
                className="className"
                icon="mail"
                onClick={() => alert("Hello World")}
                iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
            />
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "BUTTON")
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should("have.css", "color", LIB_TOKENS.colors.light.white.rgb)
            .should("have.css", "width", "32px")
            .should("have.css", "height", "32px")
            .should("have.css", "border-radius", LIB_TOKENS.radiuses.circle)
            .should("have.attr", "aria-label", "Mail")
            .children()
            .should("not.have.prop", "tagName", "SPAN")
            .should("have.prop", "tagName", "svg")

        cy.dataTest().click()

        cy.on("window:alert", t => {
            expect(t).to.equal("Hello World")
        })
    })

    it("renders a tooltip", () => {
        cy.mount(
            <ButtonIcon
                data-testid="testid"
                className="className"
                icon="mail"
                tooltip="Email"
                showTooltip
                iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
            />
        )

        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "DIV")

        cy.dataTest("testid.Tooltip")
            .should("have.prop", "tagName", "DIV")
            .should("have.class", "Tooltip")
            .should("have.text", "Email")

        cy.dataTest("testid.Button")
            .should("have.class", "Button")
            .should("have.attr", "aria-label", "Mail")
            .should("have.prop", "tagName", "BUTTON")
            .children()
            .should("have.prop", "tagName", "svg")
    })

    it("renders a <Link />", () => {
        cy.mount(
            <ButtonIcon
                data-testid="testid"
                icon="mail"
                to="/"
                iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
            />
        )
        cy.dataTest()
            .should("have.prop", "tagName", "A")
            .should("have.attr", "href", "/")
    })

    it("renders a <a />", () => {
        cy.mount(
            <ButtonIcon
                data-testid="testid"
                icon="mail"
                href="/"
                blank
                iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
            />
        )
        cy.dataTest()
            .should("have.prop", "tagName", "A")
            .should("have.attr", "href", "/")
            .should("have.attr", "target", "_blank")
    })

    it("renders `plain` variant", () => {
        cy.mount(
            <ButtonIcon
                data-testid="testid"
                icon="mail"
                variant="plain"
                color="secondary"
                iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
            />
        )
        cy.dataTest()
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["secondary-500"].rgb
            )
            .should("have.css", "color", LIB_TOKENS.colors.light.white.rgb)
    })

    it("renders `transparent` variant", () => {
        cy.mount(
            <ButtonIcon
                data-testid="testid"
                icon="mail"
                variant="transparent"
                color="success"
                iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
            />
        )
        cy.dataTest()
            .should(
                "have.css",
                "color",
                LIB_TOKENS.colors.light["success-500"].rgb
            )
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light.transparent.rgb
            )
    })

    it("renders `ghost` variant", () => {
        cy.mount(
            <ButtonIcon
                data-testid="testid"
                icon="mail"
                variant="ghost"
                color="warning"
                iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
            />
        )
        cy.dataTest()
            .should(
                "have.css",
                "color",
                LIB_TOKENS.colors.light["warning-500"].rgb
            )
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["warning-50"].rgb
            )
    })

    it("renders loading state", () => {
        cy.mount(
            <ButtonIcon
                data-testid="testid"
                icon="mail"
                isLoading
                iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
            />
        )
        cy.dataTest().should("have.attr", "disabled")

        cy.dataTest("testid.Loader").should("exist")
    })
})
