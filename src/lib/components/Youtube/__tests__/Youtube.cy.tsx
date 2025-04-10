import { Youtube } from "../../.."

describe("<Youtube />", () => {
    beforeEach(() => {
        cy.mount(
            <Youtube
                src="https://www.youtube.com/watch?v=33KKr1ZGSzg"
                data-testid="testid"
                className="className"
            />
        )
    })
    it("renders <Youtube /> component", () => {
        cy.dataTest().should("exist").should("have.class", "className")
    })

    it("converts automatically a Youtube link to an embed URL", () => {
        cy.dataTest().should(
            "have.prop",
            "src",
            "https://www.youtube.com/embed/33KKr1ZGSzg"
        )
    })
})
