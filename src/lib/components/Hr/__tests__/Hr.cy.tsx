import { Hr, LIB_TOKENS } from "../../.."
import { stringifyPx } from "@julseb-lib/utils"

describe("<Hr />", () => {
    it("renders <Hr /> component", () => {
        cy.mount(<Hr data-testid="testid" className="className" />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "HR")
            .should("have.css", "height", "1px")
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["gray-200"].rgb
            )
            .should("have.css", "max-width", "100%")
            .invoke("height")
            .should("equal", 1)
    })

    it("renders a set height", () => {
        const height = 8
        cy.mount(<Hr data-testid="testid" height={height} />)
        cy.dataTest().invoke("height").should("equal", height)
    })

    it("renders a set max width", () => {
        const maxWidth = 200
        cy.mount(<Hr data-testid="testid" maxWidth={maxWidth} />)
        cy.dataTest().should("have.css", "max-width", `${maxWidth}px`)
    })

    it("renders with background color `primary-400`", () => {
        cy.mount(<Hr data-testid="testid" color="primary-400" />)
        cy.dataTest().should(
            "have.css",
            "background-color",
            LIB_TOKENS.colors.light["primary-400"].rgb
        )
    })

    it("renders with margin top 24px, margin bottom 16px and margins left & right 8px", () => {
        cy.mount(
            <Hr
                data-testid="testid"
                margin={{ top: "l", bottom: "m", leftRight: "xs" }}
            />
        )
        cy.dataTest()
            .should("have.css", "margin-top", LIB_TOKENS.spacers.l)
            .should("have.css", "margin-bottom", LIB_TOKENS.spacers.m)
            .should("have.css", "margin-left", LIB_TOKENS.spacers.xs)
            .should("have.css", "margin-right", LIB_TOKENS.spacers.xs)
    })

    it("renders a rounded line", () => {
        cy.mount(<Hr data-testid="testid" isRounded />)
        cy.dataTest().should(
            "have.css",
            "border-radius",
            stringifyPx(
                Number(LIB_TOKENS.radiuses.round.replace("em", "")) * 16
            )
        )
    })
})
