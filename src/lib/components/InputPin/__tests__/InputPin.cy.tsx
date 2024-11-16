/*=============================================== InputPin tests ===============================================*/

import { LIB_TOKENS } from "../../.."
import { InputPinPreview } from "./Preview"

describe("<InputPin />", () => {
    it("renders <InputPin /> component", () => {
        cy.mount(<InputPinPreview />)
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest("testid.Input")
            .should("exist")
            .should("have.length", 4)
            .should("have.class", "InputPin")

        cy.dataTest("testid.Input").eq(0).focus().type("1")
        cy.dataTest("testid.Input").eq(1).should("be.focused")
    })

    it("renders a different size", () => {
        cy.mount(
            <InputPinPreview
                inputSize={120}
                inputFontSize="h2"
                placeholders={["0", "0", "0", "0"]}
            />
        )
        cy.dataTest("testid.Input")
            .should("have.css", "width", "120px")
            .should("have.css", "height", "120px")
            .should("have.css", "font-size", LIB_TOKENS["font-sizes"].h2.px)
            .should("have.attr", "placeholder", "0")
    })

    it("hides values", () => {
        cy.mount(<InputPinPreview hideValues />)
        cy.dataTest("testid.Input").should("have.attr", "type", "password")
    })

    it("is disabled", () => {
        cy.mount(<InputPinPreview disabled />)
        cy.dataTest("testid.Input").should("be.disabled")
    })
})
