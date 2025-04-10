import { LIB_TOKENS } from "../../.."
import { DrawerPreview } from "./Preview"

describe("<Drawer />", () => {
    const drawer = () => cy.dataTest()
    const overlay = () => cy.dataTest("testid.Overlay")
    const content = () => cy.dataTest("testid.Content")
    const buttonOpen = () => cy.dataTest("ButtonOpen")

    it("renders <Drawer /> component", () => {
        cy.mount(<DrawerPreview />)
        drawer()
            .should("exist")
            .should("have.class", "className")
            .should("not.be.visible")
        buttonOpen().click()
        drawer().should("be.visible")
        content()
            .should("have.css", "right", "0px")
            .should("have.css", "width", "360px")
            .should(
                "have.css",
                "backgroundColor",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should("have.css", "color", LIB_TOKENS.colors.light.background.rgb)
        content().children().should("have.length", 7)
        content()
            .children()
            .eq(0)
            .should("have.css", "color", LIB_TOKENS.colors.light.background.rgb)
        cy.get("body").should("have.css", "overflow", "hidden")
        overlay().click()
        drawer().should("not.be.visible")
        buttonOpen().click()
        drawer().should("be.visible")
        content().type("{esc}")
        drawer().should("not.be.visible")
    })

    it("opens from the left", () => {
        cy.mount(<DrawerPreview position="left" />)
        buttonOpen().click()
        content().should("have.css", "left", "0px")
    })

    it("disables escape key and enables scrolling", () => {
        cy.mount(<DrawerPreview disableEsc enableScrollingOpen />)
        buttonOpen().click()
        content().type("{esc}")
        drawer().should("be.visible")
        cy.get("body").should("not.have.css", "overflow", "hidden")
    })

    it("renders different styles", () => {
        cy.mount(
            <DrawerPreview
                backgroundColor="secondary"
                contentColor="success-100"
                linksColor="danger"
                gap="xxl"
                width={100}
                overlayColor="white-50"
                padding="xs"
            />
        )
        buttonOpen().click()
        content()
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["secondary-500"].rgb
            )
            .should(
                "have.css",
                "color",
                LIB_TOKENS.colors.light["success-100"].rgb
            )
            .should("have.css", "gap", LIB_TOKENS.spacers.xxl)
            .should("have.css", "width", "100px")
            .should("have.css", "padding", LIB_TOKENS.spacers.xs)
        overlay().should(
            "have.css",
            "background-color",
            LIB_TOKENS.overlays["white-50"]
        )
        content()
            .children()
            .eq(0)
            .should(
                "have.css",
                "color",
                LIB_TOKENS.colors.light["danger-500"].rgb
            )
    })
})
