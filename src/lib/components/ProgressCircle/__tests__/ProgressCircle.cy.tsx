import { ProgressCircle, LIB_TOKENS } from "../../.."
import { SITE_DATA } from "../../../../data"

describe("<ProgressCircle />", () => {
    it("renders <ProgressCircle /> component", () => {
        cy.mount(
            <ProgressCircle
                value={42}
                data-testid="testid"
                className="className"
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest()
            .children()
            .children()
            .eq(1)
            .should(
                "have.css",
                "stroke",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should(
                "have.css",
                "transition",
                LIB_TOKENS.transitions.progressCircle
            )
    })

    it("renders a number", () => {
        cy.mount(
            <ProgressCircle
                value={42}
                data-testid="testid"
                className="className"
                showValue
            />
        )

        cy.dataTest("testid.Value").should("exist").should("have.text", "42%")
    })

    it("renders an icon", () => {
        cy.mount(
            <ProgressCircle
                value={42}
                data-testid="testid"
                className="className"
                icon="check"
                iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
            />
        )

        cy.dataTest("testid.Icon")
            .should("exist")
            .should("have.prop", "tagName", "svg")
    })

    it("renders a different color", () => {
        cy.mount(
            <ProgressCircle
                value={42}
                data-testid="testid"
                className="className"
                color="secondary"
            />
        )

        cy.dataTest()
            .children()
            .children()
            .eq(1)
            .should(
                "have.css",
                "stroke",
                LIB_TOKENS.colors.light["secondary-500"].rgb
            )
    })
})
