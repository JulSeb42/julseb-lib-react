import { ProgressBar, LIB_TOKENS } from "../../.."

const PROGRESS_VALUE = 42

describe("<ProgressBar />", () => {
    it("renders <ProgressBar /> component", () => {
        cy.mount(
            <ProgressBar
                data-testid="testid"
                className="className"
                value={PROGRESS_VALUE}
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")
    })

    it("renders a value", () => {
        cy.mount(
            <ProgressBar
                data-testid="testid"
                className="className"
                value={PROGRESS_VALUE}
            />
        )
        cy.dataTest().should("have.attr", "value", PROGRESS_VALUE.toString())
    })

    it("renders a different color", () => {
        cy.mount(
            <ProgressBar
                data-testid="testid"
                className="className"
                value={PROGRESS_VALUE}
                color="secondary"
            />
        )

        cy.before(
            cy.dataTest(),
            "background-color",
            LIB_TOKENS.colors.light["secondary-500"].rgb
        )
    })

    it("renders without animation", () => {
        cy.mount(
            <ProgressBar
                data-testid="testid"
                className="className"
                value={PROGRESS_VALUE}
                noAnimation
            />
        )

        cy.before(
            cy.dataTest(),
            "animation",
            "none 0s ease 0s 1 normal none running"
        )
    })
})
