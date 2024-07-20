/*=============================================== TextIcon tests ===============================================*/

import { TextIcon, LIB_TOKENS } from "../../.."
import { stringifyPx } from "ts-utils-julseb"

describe("<TextIcon />", () => {
    const testIdIconContainer = (testid: string) =>
        cy.dataTest(`${testid}.IconContainer`)
    const testIdIcon = (testid: string) =>
        cy.dataTest(`${testid}.IconContainer.Icon`)
    const testIdText = (testid: string) => cy.dataTest(`${testid}.Text`)

    it("renders <TextIcon /> component", () => {
        cy.mount(
            <TextIcon
                data-testid="testid"
                className="className"
                icon="close-circle"
            >
                Hello
            </TextIcon>
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("contain.html", "svg")
    })

    it("should have a default font and icon sizes of 16px", () => {
        const height = Number(
            LIB_TOKENS["font-sizes"].body.px.replace("px", "")
        )

        cy.mount(
            <TextIcon data-testid="testid" icon="heart-full">
                Hello
            </TextIcon>
        )

        testIdText("testid").should(
            "have.css",
            "font-size",
            stringifyPx(height)
        )
        testIdIconContainer("testid").should(
            "have.css",
            "height",
            stringifyPx(height * 1.5)
        )
        testIdIcon("testid").invoke("width").should("equal", height)
    })

    it("renders a h1 tag with a font and icon sizes of 40px", () => {
        const height = Number(LIB_TOKENS["font-sizes"].h1.px.replace("px", ""))

        cy.mount(
            <TextIcon data-testid="testid" icon="heart-full" tag="h1">
                Hello
            </TextIcon>
        )

        testIdText("testid").should(
            "have.css",
            "font-size",
            stringifyPx(height)
        )
        testIdIconContainer("testid").should(
            "have.css",
            "height",
            stringifyPx(height * 1.5)
        )
        testIdIcon("testid").invoke("width").should("equal", height)
    })

    it("renders text with color `secondary-400` and icon with `warning-600`", () => {
        cy.mount(
            <TextIcon
                data-testid="testid"
                icon="heart-full"
                color="secondary-400"
                iconColor="warning-600"
            >
                Hello
            </TextIcon>
        )

        testIdText("testid").should(
            "have.css",
            "color",
            LIB_TOKENS.colors.light["secondary-400"].rgb
        )
        testIdIcon("testid").should(
            "have.css",
            "fill",
            LIB_TOKENS.colors.light["warning-600"].rgb
        )
    })

    it("renders a `small` tag, icon with size 48px, and a gap of 24px", () => {
        cy.mount(
            <TextIcon
                data-testid="testid"
                icon="check"
                tag="small"
                iconSize={48}
                gap="l"
            >
                Hello
            </TextIcon>
        )

        testIdText("testid")
            .should("have.prop", "tagName", "SMALL")
            .should("have.css", "font-size", LIB_TOKENS["font-sizes"].small.px)
        testIdIcon("testid").invoke("width").should("equal", 48)
        cy.dataTest().should("have.css", "gap", LIB_TOKENS.spacers.l)
    })
})
