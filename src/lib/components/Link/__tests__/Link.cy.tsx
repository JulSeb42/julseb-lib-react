import { Link, LIB_TOKENS } from "../../.."

describe("<Link />", () => {
    it("renders <Link /> component", () => {
        cy.mount(
            <Link data-testid="testid" className="className">
                Hello
            </Link>
        )
        cy.dataTest().should("exist").should("have.class", "className")

        // ? check all default props
    })
})
