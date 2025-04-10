import { PageLoading, LIB_TOKENS } from "../../.."

describe("<PageLoading />", () => {
    it("renders <PageLoading /> component", () => {
        cy.mount(<PageLoading data-testid="testid" className="className" />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )

        cy.dataTest("testid.Loader")
            .should("exist")
            .should("have.class", "Loader")
    })
})
