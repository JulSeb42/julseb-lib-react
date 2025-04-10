import { Tag, LIB_TOKENS } from "../../.."
import { getIconSizeFromFont } from "../../../lib-utils"
import { Close } from "../../../icons"
import { SITE_DATA } from "../../../../data"

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
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should("have.css", "color", LIB_TOKENS.colors.light.white.rgb)
            .should("have.css", "padding-top", LIB_TOKENS.spacers.xxs)
            .should("have.css", "padding-bottom", LIB_TOKENS.spacers.xxs)
            .should("have.css", "padding-left", LIB_TOKENS.spacers.s)
            .should("have.css", "padding-right", LIB_TOKENS.spacers.s)
            .should(
                "have.css",
                "border-radius",
                `${Number(LIB_TOKENS.radiuses.round.replace("em", "")) * 14}px`
            )
            .should("have.css", "gap", LIB_TOKENS.spacers.xs)
            .should("have.css", "font-size", LIB_TOKENS["font-sizes"].small.px)
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
                LIB_TOKENS.colors.light.white.rgb
            )
            .should(
                "have.css",
                "color",
                LIB_TOKENS.colors.light["primary-500"].rgb
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
                LIB_TOKENS.colors.light["success-500"].rgb
            )
            .should(
                "have.css",
                "color",
                LIB_TOKENS.colors.light["warning-300"].rgb
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
                LIB_TOKENS.colors.light.transparent.rgb
            )
            .should(
                "have.css",
                "color",
                LIB_TOKENS.colors.light["success-500"].rgb
            )
            .should(
                "have.css",
                "border-color",
                LIB_TOKENS.colors.light["success-500"].rgb
            )
            .should("have.css", "border-width", "2px")
            .should("have.css", "padding-left", LIB_TOKENS.spacers.xs)
            .should("have.css", "padding-right", LIB_TOKENS.spacers.s)
            .should("have.css", "padding-top", LIB_TOKENS.spacers.xxl)
            .should("have.css", "padding-bottom", LIB_TOKENS.spacers.xxl)
    })

    it("renders with a different borderRadius", () => {
        cy.mount(
            <Tag data-testid="testid" borderRadius="m" fontSize="body">
                Hello
            </Tag>
        )
        cy.dataTest()
            .should("have.css", "border-radius", LIB_TOKENS.radiuses.m)
            .should("have.css", "font-size", LIB_TOKENS["font-sizes"].body.px)
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
                iconBaseUrl={SITE_DATA.TESTS_ICON_BASE_URL}
            >
                Hello
            </Tag>
        )
        cy.dataTest().should("have.css", "gap", LIB_TOKENS.spacers.m)
        cy.dataTest()
            .children()
            .eq(0)
            .should("have.prop", "tagName", "svg")
            .should("have.css", "width", LIB_TOKENS["font-sizes"].h4.px)
        cy.dataTest().children().eq(1).should("have.prop", "tagName", "svg")
    })
})
