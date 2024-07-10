/*=============================================== Avatar tests ===============================================*/

import { Avatar, libTokens } from "../../.."
import { roundIconSize } from "../../../lib-utils"
import { StarFull } from "../../../icons"

describe("<Avatar />", () => {
    it("renders <Avatar /> component", () => {
        cy.mount(
            <Avatar
                data-testid="testid"
                className="className"
                img="/images/pic-avatar.jpg"
            />
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.css", "border-radius", libTokens.radiuses.circle)
            .children()
            .should("have.prop", "tagName", "IMG")
            .should("have.prop", "alt", "Avatar")
            .should("have.class", "Image")
            .should("have.attr", "data-testid", "testid.Image")
    })

    it("renders with text", () => {
        cy.mount(<Avatar data-testid="testid" letter="ab" />)
        cy.dataTest()
            .should("have.text", "ab")
            .should("have.css", "text-transform", "uppercase")
    })

    it("renders with an icon", () => {
        cy.mount(
            <Avatar
                data-testid="testid"
                icon="user"
                backgroundColor="secondary-300"
                contentColor="danger-800"
            />
        )
        cy.dataTest()
            .should(
                "have.css",
                "background-color",
                libTokens.colors.light["secondary-300"].rgb
            )
            .should(
                "have.css",
                "color",
                libTokens.colors.light["danger-800"].rgb
            )
            .children()
            .should("have.prop", "tagName", "svg")
    })

    it("renders with a JSX icon", () => {
        cy.mount(
            <Avatar
                data-testid="testid"
                size={48}
                icon={
                    <StarFull
                        size={roundIconSize(48)}
                        data-testid=""
                        className=""
                    />
                }
            />
        )
        cy.dataTest()
            .should("have.css", "width", "48px")
            .children()
            .should("have.prop", "tagName", "svg")
    })

    it("renders a border", () => {
        cy.mount(
            <Avatar
                data-testid="testid"
                letter="ab"
                border={{ width: 1, style: "dashed", color: "warning-400" }}
                borderRadius="s"
            />
        )
        cy.dataTest()
            .should("have.css", "border-width", "1px")
            .should("have.css", "border-style", "dashed")
            .should(
                "have.css",
                "border-color",
                libTokens.colors.light["warning-400"].rgb
            )
            .should("have.css", "border-radius", libTokens.radiuses.s)
    })

    it("renders a badge", () => {
        cy.mount(
            <Avatar
                data-testid="testid"
                className="className"
                letter="ab"
                badge
            />
        )
        cy.dataTest()
            .children()
            .last()
            .should(
                "have.css",
                "background-color",
                libTokens.colors.light["primary-500"].rgb
            )
            .should("have.class", "Badge")
            .should("have.attr", "data-testid", "testid.Badge")
    })

    it("renders badge with set props", () => {
        cy.mount(
            <Avatar
                data-testid="testid"
                className="className"
                letter="ab"
                badge={{
                    content: 123,
                    size: 16,
                    backgroundColor: "danger",
                    contentColor: "warning-700",
                    position: "bottom",
                    padding: {
                        leftRight: "xl",
                    },
                    outline: { width: 1 },
                }}
            />
        )
        cy.dataTest()
            .get('[data-testid="testid.Badge"]')
            .should("have.text", 123)
            .should("have.css", "min-width", "16px")
            .should(
                "have.css",
                "background-color",
                libTokens.colors.light["danger-500"].rgb
            )
            .should(
                "have.css",
                "color",
                libTokens.colors.light["warning-700"].rgb
            )
            .should("have.css", "bottom", libTokens.spacers.xxs)
            .should("have.css", "padding-left", libTokens.spacers.xl)
            .should("have.css", "padding-right", libTokens.spacers.xl)
            .should("have.css", "padding-top", "0px")
            .should("have.css", "padding-bottom", "0px")
            .should("have.css", "outline-width", "1px")
            .should(
                "have.css",
                "outline-color",
                libTokens.colors.light.white.rgb
            )
            .should("have.css", "outline-style", "solid")
    })
})
