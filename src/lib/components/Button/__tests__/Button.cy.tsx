/*=============================================== Button tests ===============================================*/

import { Button, libTokens } from "../../.."

describe("<Button />", () => {
    it("renders <Button /> component", () => {
        cy.mount(
            <Button data-testid="testid" className="className">
                Hello
            </Button>
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should(
                "have.css",
                "background-color",
                libTokens.colors.light["primary-500"].rgb
            )
            .should("have.css", "color", libTokens.colors.light.background.rgb)
            .should("have.text", "Hello")
            .should("have.prop", "tagName", "BUTTON")
            .should("have.css", "font-size", libTokens["font-sizes"].body.px)
            .should(
                "have.css",
                "padding",
                `${libTokens.spacers.xs} ${libTokens.spacers.s}`
            )
            .should("have.css", "border-radius", libTokens.radiuses.m)
    })

    it("renders as button with an onClick", () => {
        cy.mount(
            <Button
                data-testid="testid"
                onClick={() => alert("Hello World")}
                color="success"
            >
                Hello
            </Button>
        )
        cy.dataTest()
            .should("have.prop", "tagName", "BUTTON")
            .should(
                "have.css",
                "background-color",
                libTokens.colors.light["success-500"].rgb
            )
            .should("have.css", "color", libTokens.colors.light.white.rgb)
            .click()
        cy.on("window:alert", t => {
            expect(t).to.equal("Hello World")
        })
    })

    it("renders a link when adding `to`", () => {
        cy.mount(
            <Button data-testid="testid" to="/" size="small">
                Hello
            </Button>
        )
        cy.dataTest()
            .should("have.prop", "tagName", "A")
            .should("have.attr", "href", "/")
            .should("have.css", "font-size", libTokens["font-sizes"].small.px)
            .should(
                "have.css",
                "padding",
                `${libTokens.spacers.xxs} ${libTokens.spacers.xs}`
            )
            .should("have.css", "border-radius", libTokens.radiuses.s)
    })

    it("renders a link when adding `href`", () => {
        cy.mount(
            <Button data-testid="testid" href="/" blank>
                Hello
            </Button>
        )
        cy.dataTest()
            .should("have.prop", "tagName", "A")
            .should("have.attr", "href", "/")
            .should("have.attr", "target", "_blank")
    })

    it("renders icons", () => {
        cy.mount(
            <Button
                data-testid="testid"
                icons={{ left: "arrow-left", right: "arrow-right" }}
                gap="s"
                className="className"
            >
                Hello
            </Button>
        )
        cy.dataTest().should("have.css", "gap", libTokens.spacers.s)

        cy.dataTest()
            .children()
            .eq(0)
            .should("have.prop", "tagName", "svg")
            .should("have.class", "IconLeft")
            .should("have.attr", "data-testid", "testid.IconLeft")

        cy.dataTest()
            .children()
            .eq(1)
            .should("have.prop", "tagName", "svg")
            .should("have.class", "IconRight")
            .should("have.attr", "data-testid", "testid.IconRight")
    })

    it("renders loading state", () => {
        cy.mount(
            <Button
                data-testid="testid"
                icons={{ left: "arrow-left" }}
                className="className"
                isLoading
            >
                Hello
            </Button>
        )
        cy.dataTest().should("have.attr", "disabled")
        cy.dataTest()
            .children()
            .eq(0)
            .should("have.prop", "tagName", "SPAN")
            .should("not.have.prop", "tagName", "svg")
    })

    it("renders variant `plain`", () => {
        cy.mount(
            <Button data-testid="testid" color="background">
                Hello
            </Button>
        )

        cy.dataTest()
            .should(
                "have.css",
                "background-color",
                libTokens.colors.light.background.rgb
            )
            .should("have.css", "color", libTokens.colors.light.font.rgb)
    })

    it("renders variant `outline`", () => {
        cy.mount(
            <Button data-testid="testid" variant="outline" color="secondary">
                Hello
            </Button>
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
                libTokens.colors.light["secondary-500"].rgb
            )
            .should(
                "have.css",
                "border-color",
                libTokens.colors.light["secondary-500"].rgb
            )
    })

    it("renders variant `ghost`", () => {
        cy.mount(
            <Button data-testid="testid" variant="ghost" color="white">
                Hello
            </Button>
        )

        cy.dataTest()
            .should(
                "have.css",
                "background-color",
                libTokens.colors.light["gray-50"].rgb
            )
            .should(
                "have.css",
                "color",
                libTokens.colors.light["primary-500"].rgb
            )
    })

    it("renders variant `transparent`", () => {
        cy.mount(
            <Button
                data-testid="testid"
                variant="transparent"
                color="success"
                noPadding
            >
                Hello
            </Button>
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
            .should("have.css", "padding", "0px")
    })
})
