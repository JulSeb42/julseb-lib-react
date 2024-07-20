/*=============================================== Icon tests ===============================================*/

import { Icon, LIB_TOKENS } from "../../.."

describe("<Icon />", () => {
    it("renders <Icon /> component", () => {
        cy.mount(
            <Icon
                data-testid="testid"
                src="arrow-right"
                className="className"
            />
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "svg")
    })

    it("renders an icon with a size of 120px and a `danger` color", () => {
        const size = 120
        cy.mount(
            <Icon data-testid="testid" src="close" color="danger" size={size} />
        )

        cy.dataTest()
            .should(
                "have.css",
                "fill",
                LIB_TOKENS.colors.light["danger-500"].rgb
            )
            .invoke("width")
            .should("equal", size)
    })
})
