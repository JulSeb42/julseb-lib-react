/*=============================================== Image tests ===============================================*/

import { Image, libTokens } from "../../.."

const IMG_URL = "/images/pic-avatar.jpg"

describe("<Image />", () => {
    it("renders <Image /> component", () => {
        cy.mount(
            <Image
                data-testid="testid"
                className="className"
                src={IMG_URL}
                width={100}
            />
        )
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "IMG")
            .invoke("width")
            .should("equal", 100)

        cy.dataTest("testid.Caption").should("not.exist")
    })

    it("renders with a set object fit, aspect ratio & border radius", () => {
        const fit = "contain"
        const aspectRatio = "16 / 9"

        cy.mount(
            <Image
                data-testid="testid"
                src={IMG_URL}
                fit={fit}
                aspectRatio={aspectRatio}
                borderRadius="xs"
            />
        )
        cy.dataTest()
            .should("have.css", "object-fit", fit)
            .should("have.css", "aspect-ratio", aspectRatio)
            .should("have.css", "border-radius", libTokens.radiuses.xs)
    })

    // TODO
    // ? width & auto size
    // ? height and auto width

    it("renders with a caption", () => {
        cy.mount(
            <Image
                data-testid="testid"
                src={IMG_URL}
                caption="Hello"
                width={200}
                className="Image"
            />
        )
        cy.dataTest()
            .should("have.prop", "tagName", "FIGURE")
            .should("have.class", "Image")
        cy.dataTest("testid.Image")
            .should("exist")
            .should("have.class", "Image")
        cy.dataTest("testid.Caption")
            .should("exist")
            .should("have.class", "Caption")
            .should("have.prop", "tagName", "FIGCAPTION")
            .should(
                "have.css",
                "background-color",
                libTokens.overlays["black-50"]
            )
            .should("have.css", "color", libTokens.colors.light.white.rgb)
            .should("have.text", "Hello")
    })

    it("renders with a caption and a set background", () => {
        cy.mount(
            <Image
                data-testid="testid"
                src={IMG_URL}
                caption={{
                    text: "Hello",
                    background: "white-80",
                    textColor: "primary",
                }}
                width={200}
            />
        )

        cy.dataTest().should("have.prop", "tagName", "FIGURE")
        cy.dataTest("testid.Caption")
            .should("exist")
            .should("have.prop", "tagName", "FIGCAPTION")
            .should(
                "have.css",
                "background-color",
                libTokens.overlays["white-80"]
            )
            .should(
                "have.css",
                "color",
                libTokens.colors.light["primary-500"].rgb
            )
            .should("have.text", "Hello")
    })
})
