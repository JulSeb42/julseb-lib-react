/*=============================================== InputSlider tests ===============================================*/

import { InputSlider } from "../../.."
import { Preview } from "./Preview"

describe("<InputSlider />", () => {
    it("renders <InputSlider /> component", () => {
        cy.mount(<InputSlider data-testid="testid" className="className" />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "range")
    })

    it("renders min and max, and value on hover", () => {
        cy.mount(<Preview />)
        cy.dataTest()
            .should("have.prop", "tagName", "DIV")
            .should("have.class", "className")

        cy.dataTest("testid.SliderWrapper.Min")
            .should("exist")
            .should("have.prop", "tagName", "SMALL")
            .should("have.text", "0")
            .should("have.class", "SliderWrapper__Min")
        cy.dataTest("testid.SliderWrapper.Max")
            .should("exist")
            .should("have.prop", "tagName", "SMALL")
            .should("have.text", "100")
            .should("have.class", "SliderWrapper__Max")

        cy.dataTest("testid.SliderWrapper.SliderContainer")
            .should("exist")
            .should("have.class", "SliderWrapper__SliderContainer")

        cy.dataTest("testid.Input")
            .should("exist")
            .should("have.class", "Input")
            .should("have.value", "50")

        cy.dataTest("testid.SliderWrapper.SliderContainer.Tooltip")
            .should("exist")
            .should("have.class", "SliderWrapper__SliderContainer__Tooltip")
            .should("not.be.visible")

        cy.dataTest("testid.SliderWrapper.SliderContainer").trigger("mouseover")
        cy.dataTest("testid.SliderWrapper.SliderContainer.Tooltip").should(
            "be.visible"
        )
    })
})
