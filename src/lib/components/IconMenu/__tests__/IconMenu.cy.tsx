/*=============================================== IconMenu tests ===============================================*/

import { IconMenu } from "../../.."
import { SITE_DATA } from "../../../../data"
import { Check } from "../../../icons"
import type { LibIconMenuItem } from "../../../types"

const items: Array<LibIconMenuItem> = [
    { icon: "edit", href: "/", label: "href" },
    { icon: <Check />, to: "/", label: "to" },
    { icon: "show", onClick: () => alert("Clicked"), label: "onClick" },
]

describe("<IconMenu />", () => {
    it("renders <IconMenu /> component", () => {
        cy.mount(
            <IconMenu
                data-testid="testid"
                className="className"
                items={items}
                iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest()
            .children()
            .should("have.length", items.length + 1)
        cy.dataTest("testid.Item")
            .should("have.length", items.length)
            .should("have.css", "left", "0px")

        cy.dataTest().click()
        cy.dataTest("testid.Item").eq(0).should("have.css", "left", "56px")
    })
})
