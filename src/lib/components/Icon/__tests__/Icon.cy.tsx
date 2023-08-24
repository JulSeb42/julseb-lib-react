/*=============================================== Icon tests ===============================================*/

import { Icon } from "../Icon"
import { cssVariables } from "../../.."

describe("<Icon />", () => {
    it("renders <Icon /> component", () => {
        cy.mount(<Icon data-testid="testid" src="arrow-right" />)
        cy.dataTest("testid")
            .should("exist")
            .should("have.prop", "tagName", "svg")
    })

    it("renders an icon with a size of 120px and a `danger` color", () => {
        const size = 120
        cy.mount(
            <Icon
                data-testid="testid"
                src="close"
                color="danger"
                size={size}
            />,
        )

        cy.dataTest("testid")
            .should(
                "have.css",
                "fill",
                cssVariables.colors.light["danger-500"].rgb,
            )
            .invoke("width")
            .should("equal", size)
    })
})
