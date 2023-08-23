/*=============================================== Text tests ===============================================*/

import { Text } from "../Text"

import { tags } from "./utils"
import { colorsLight } from "../../../../data"
import { COLORS_LIGHT } from "../../../Variables"

describe("<Text />", () => {
    it("renders <Text /> component with a default tag p", () => {
        cy.mount(<Text data-testid="testid">Hello</Text>)

        cy.dataTest("testid")
            .should("exist")
            .should("have.prop", "tagName", "P")
    })

    {
        tags.map(tag =>
            it(`renders a "${tag}" tag`, () => {
                cy.mount(
                    <Text tag={tag} data-testid="testid">
                        Text {tag}
                    </Text>
                )
                cy.dataTest("testid").should(
                    "have.prop",
                    "tagName",
                    tag.toUpperCase()
                )
            })
        )
    }

    it("renders text with the primary color", () => {
        const colorPrimary = colorsLight.find(
            color => color.css === COLORS_LIGHT.PRIMARY_500
        )
        const rgb = `rgb(${colorPrimary?.rgb})`

        cy.mount(
            <Text data-testid="testid" color="primary">
                Hello
            </Text>
        )

        cy.dataTest("testid").should("have.css", "color", rgb)
    })

    // TODO
    // ? linkColor
    // ? textAlign
    // ? display => only for h1 to h5
})
