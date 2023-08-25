/*=============================================== TextIcon tests ===============================================*/

import { TextIcon } from "../TextIcon"
import { cssVariables, stringifyPx } from "../../.."

describe("<TextIcon />", () => {
    const testIdIconContainer = (testid: string) =>
        cy.dataTest(`${testid}.IconContainer`)
    const testIdIcon = (testid: string) =>
        cy.dataTest(`${testid}.IconContainer.Icon`)
    const testIdText = (testid: string) => cy.dataTest(`${testid}.Text`)

    it("renders <TextIcon /> component", () => {
        cy.mount(
            <TextIcon data-testid="testid" icon="close-circle">
                Hello
            </TextIcon>,
        )
        cy.dataTest("testid").should("exist").should("contain.html", "svg")
    })

    it("should have a default font and icon sizes of 16px", () => {
        const height = Number(
            cssVariables["font-sizes"].body.px.replace("px", ""),
        )

        cy.mount(
            <TextIcon data-testid="testid" icon="heart-full">
                Hello
            </TextIcon>,
        )

        testIdText("testid").should(
            "have.css",
            "font-size",
            stringifyPx(height),
        )
        testIdIconContainer("testid").should(
            "have.css",
            "height",
            stringifyPx(height * 1.5),
        )
        testIdIcon("testid").invoke("width").should("equal", height)
    })

    it("renders a h1 tag with a font and icon sizes of 40px", () => {
        const height = Number(
            cssVariables["font-sizes"].h1.px.replace("px", ""),
        )

        cy.mount(
            <TextIcon data-testid="testid" icon="heart-full" tag="h1">
                Hello
            </TextIcon>,
        )

        testIdText("testid").should(
            "have.css",
            "font-size",
            stringifyPx(height),
        )
        testIdIconContainer("testid").should(
            "have.css",
            "height",
            stringifyPx(height * 1.5),
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
            </TextIcon>,
        )

        testIdText("testid").should(
            "have.css",
            "color",
            cssVariables.colors.light["secondary-400"].rgb,
        )
        testIdIcon("testid").should(
            "have.css",
            "fill",
            cssVariables.colors.light["warning-600"].rgb,
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
            </TextIcon>,
        )

        testIdText("testid")
            .should("have.prop", "tagName", "SMALL")
            .should(
                "have.css",
                "font-size",
                cssVariables["font-sizes"].small.px,
            )
        testIdIcon("testid").invoke("width").should("equal", 48)
        cy.dataTest("testid").should("have.css", "gap", cssVariables.spacers.l)
    })
})
