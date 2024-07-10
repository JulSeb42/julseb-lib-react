/*=============================================== Truncate tests ===============================================*/

import { Truncate, libTokens, Tag } from "../../.."
import { names } from "./utils"

describe("<Truncate />", () => {
    it("renders <Truncate /> component", () => {
        cy.mount(
            <Truncate data-testid="testid" className="className">
                {names.map((name, i) => (
                    <Tag
                        borderRadius="round"
                        padding={{ topBottom: "xxs", leftRight: "s" }}
                        data-testid={`tag-${i}`}
                        key={i}
                    >
                        {name}
                    </Tag>
                ))}
            </Truncate>
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.css", "gap", libTokens.spacers.xs)
    })

    it("renders a tag with +n when the viewport is smaller", () => {
        cy.mount(
            <Truncate data-testid="testid" className="className">
                {names.map((name, i) => (
                    <Tag
                        borderRadius="round"
                        padding={{ topBottom: "xxs", leftRight: "s" }}
                        data-testid={`tag-${i}`}
                        key={i}
                    >
                        {name}
                    </Tag>
                ))}
            </Truncate>
        )
        cy.dataTest("testid.Plus").should("not.exist")
        cy.viewport(400, 800)
        cy.dataTest("testid.Plus")
            .should("exist")
            .should("have.class", "Plus")
            .should("have.text", "+ 5")
    })

    it("renders with a different gap", () => {
        cy.mount(
            <Truncate data-testid="testid" gap="l">
                {names.map((name, i) => (
                    <Tag
                        borderRadius="round"
                        padding={{ topBottom: "xxs", leftRight: "s" }}
                        data-testid={`tag-${i}`}
                        key={i}
                    >
                        {name}
                    </Tag>
                ))}
            </Truncate>
        )

        cy.dataTest()
            .should("exist")
            .should("have.css", "gap", libTokens.spacers.l)
    })
})
