/*=============================================== Tag tests ===============================================*/

import { Tag, libTokens } from "../../.."
import { getIconSizeFromFont } from "../../../lib-utils"
import { Close } from "../../../icons"

describe("<Tag />", () => {
    it("renders <Tag /> component", () => {
        cy.mount(
            <Tag data-testid="testid" className="className">
                Hello
            </Tag>
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.text", "Hello")
            .should(
                "have.css",
                "background-color",
                libTokens.colors.light["primary-500"].rgb
            )
            .should("have.css", "color", libTokens.colors.light.white.rgb)
            .should("have.css", "padding-top", libTokens.spacers.xxs)
            .should("have.css", "padding-bottom", libTokens.spacers.xxs)
            .should("have.css", "padding-left", libTokens.spacers.s)
            .should("have.css", "padding-right", libTokens.spacers.s)
            .should(
                "have.css",
                "border-radius",
                `${Number(libTokens.radiuses.round.replace("em", "")) * 14}px`
            )
            .should("have.css", "gap", libTokens.spacers.xs)
            .should("have.css", "font-size", libTokens["font-sizes"].small.px)
    })

    it("renders with a set backgroundColor", () => {
        cy.mount(
            <Tag data-testid="testid" backgroundColor="white">
                Hello
            </Tag>
        )
        cy.dataTest()
            .should(
                "have.css",
                "background-color",
                libTokens.colors.light.white.rgb
            )
            .should(
                "have.css",
                "color",
                libTokens.colors.light["primary-500"].rgb
            )
    })

    it("renders with a set textColor", () => {
        cy.mount(
            <Tag
                data-testid="testid"
                backgroundColor="success"
                textColor="warning-300"
            >
                Hello
            </Tag>
        )
        cy.dataTest()
            .should(
                "have.css",
                "background-color",
                libTokens.colors.light["success-500"].rgb
            )
            .should(
                "have.css",
                "color",
                libTokens.colors.light["warning-300"].rgb
            )
    })

    it("renders with a border", () => {
        cy.mount(
            <Tag
                data-testid="testid"
                backgroundColor="transparent"
                border={{ width: 2, color: "success" }}
                textColor="success"
                padding={{ left: "xs", topBottom: "xxl", right: "s" }}
            >
                Hello
            </Tag>
        )
        cy.dataTest()
            .should(
                "have.css",
                "background-color",
                libTokens.colors.light.transparent.rgb
            )
            .should(
                "have.css",
                "color",
                libTokens.colors.light["success-500"].rgb
            )
            .should(
                "have.css",
                "border-color",
                libTokens.colors.light["success-500"].rgb
            )
            .should("have.css", "border-width", "2px")
            .should("have.css", "padding-left", libTokens.spacers.xs)
            .should("have.css", "padding-right", libTokens.spacers.s)
            .should("have.css", "padding-top", libTokens.spacers.xxl)
            .should("have.css", "padding-bottom", libTokens.spacers.xxl)
    })

    it("renders with a different borderRadius", () => {
        cy.mount(
            <Tag data-testid="testid" borderRadius="m" fontSize="body">
                Hello
            </Tag>
        )
        cy.dataTest()
            .should("have.css", "border-radius", libTokens.radiuses.m)
            .should("have.css", "font-size", libTokens["font-sizes"].body.px)
    })

    it("renders with icons", () => {
        cy.mount(
            <Tag
                data-testid="testid"
                fontSize="h4"
                icons={{
                    left: "star",
                    right: (
                        <Close
                            size={getIconSizeFromFont("h4")}
                            className=""
                            data-testid=""
                        />
                    ),
                }}
                gap="m"
            >
                Hello
            </Tag>
        )
        cy.dataTest().should("have.css", "gap", libTokens.spacers.m)
        cy.dataTest()
            .children()
            .eq(0)
            .should("have.prop", "tagName", "svg")
            .should("have.css", "width", libTokens["font-sizes"].h4.px)
        cy.dataTest().children().eq(1).should("have.prop", "tagName", "svg")
    })
})
