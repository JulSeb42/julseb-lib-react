/*=============================================== Alert tests ===============================================*/

import { Alert, LIB_TOKENS } from "../../.."
import type { LibColorsShort } from "../../../types"

const alertColors: Array<Exclude<LibColorsShort, "black" | "white">> = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "gray",
]

describe("<Alert />", () => {
    it("renders <Alert /> component", () => {
        cy.mount(
            <Alert data-testid="testid" className="className">
                Hello
            </Alert>
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "P")
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["primary-50"].rgb
            )
            .should(
                "have.css",
                "border-color",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should("have.css", "border-width", "1px")
            .should("have.css", "border-style", "solid")
            .should("have.css", "border-radius", LIB_TOKENS.radiuses.m)
            .should("have.css", "color", LIB_TOKENS.colors.light.font.rgb)
            .should("have.css", "padding", LIB_TOKENS.spacers.s)
            .should("have.css", "gap", LIB_TOKENS.spacers.xs)
    })

    {
        alertColors.map(c =>
            it(`renders ${c} color`, () => {
                cy.mount(
                    <Alert
                        data-testid="testid"
                        className="className"
                        alertColor={c}
                    >
                        Hello
                    </Alert>
                )

                cy.dataTest()
                    .should(
                        "have.css",
                        "background-color",
                        LIB_TOKENS.colors.light[`${c}-50`].rgb
                    )
                    .should(
                        "have.css",
                        "border-color",
                        LIB_TOKENS.colors.light[`${c}-500`].rgb
                    )
            })
        )
    }

    it("renders a max width and different colors", () => {
        cy.mount(
            <Alert
                data-testid="testid"
                className="className"
                maxWidth={200}
                backgroundColor="secondary"
                border={{ color: "success-100" }}
            >
                Hello
            </Alert>
        )
        cy.dataTest()
            .should("have.css", "max-width", "200px")
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["secondary-500"].rgb
            )
            .should(
                "have.css",
                "border-color",
                LIB_TOKENS.colors.light["success-100"].rgb
            )
    })
})
