import { Input, LIB_TOKENS } from "../../.."
import { InputPropsPreview, InputSearchPreview } from "./Preview"

describe("<Input />", () => {
    it("renders <Input /> component", () => {
        cy.mount(<Input data-testid="testid" className="className" />)
        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .should("have.prop", "tagName", "DIV")
            .should(
                "have.css",
                "border-color",
                LIB_TOKENS.colors.light["gray-200"].rgb
            )

        cy.dataTest("testid.Input").focus().type("Hello")

        cy.dataTest().should(
            "have.css",
            "border-color",
            LIB_TOKENS.colors.light["primary-500"].rgb
        )

        cy.dataTest("testid.Input").should("have.value", "Hello")
    })

    it("renders several props", () => {
        cy.mount(<InputPropsPreview />)

        cy.dataTest().should("exist").should("have.class", "className")

        cy.dataTest("testid.Label")
            .should("exist")
            .should("have.class", "Label")

        cy.dataTest("testid.Helper")
            .should("exist")
            .should("have.class", "Helper")

        cy.dataTest("testid.HelperBottomContainer")
            .should("exist")
            .should("have.class", "HelperBottomContainer")

        cy.dataTest("testid.HelperBottom.IconContainer")
            .should("exist")
            .should("have.class", "BottomIconContainer")

        cy.dataTest("testid.HelperBottom.IconContainer.Icon")
            .should("exist")
            .should("have.class", "HelperBottomIcon")

        cy.dataTest("testid.Counter")
            .should("exist")
            .should("have.class", "Counter")

        cy.dataTest("testid.ValidationHelper")
            .should("exist")
            .should("have.class", "ValidationHelper")

        cy.dataTest("testid.ValidationHelper.IconContainer")
            .should("exist")
            .should("have.class", "ValidationIconContainerBottom")

        cy.dataTest("testid.ValidationHelper.IconContainer")
            .should("exist")
            .should("have.class", "ValidationIconContainerBottom")
        cy.dataTest("testid.ValidationHelper.Text")
            .should("exist")
            .should("have.class", "ValidationTextBottom")
        cy.dataTest("testid.Input")
            .should("exist")
            .should("have.class", "Input")
    })

    it("renders an input color", () => {
        cy.mount(
            <Input
                data-testid="testid"
                type="color"
                inputVariant="pill"
                inputBackground="dark"
            />
        )

        cy.dataTest()
            .should("exist")
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.dark.background.rgb
            )
            .should("have.css", "border-radius", "1584px")
    })

    it("renders an input password", () => {
        cy.mount(<Input data-testid="testid" type="password" />)
        cy.dataTest().should("exist")

        cy.dataTest("testid.Input")
            .should("have.attr", "type", "password")
            .type("Hello")
        cy.dataTest("testid.Button").click()
        cy.dataTest("testid.Input").should("have.attr", "type", "text")
    })

    it("renders an input password without button", () => {
        cy.mount(<Input data-testid="testid" type="password" hideButton />)
        cy.dataTest("testid.Button").should("not.exist")
    })

    it("renders a search input", () => {
        cy.mount(<InputSearchPreview />)
        cy.dataTest("testid.Input").should("exist")
        cy.dataTest("testid.Button").should("not.exist")
        cy.dataTest("testid.Input").type("Hello")
        cy.dataTest("testid.Button").should("exist")
        cy.dataTest("testid.Button").click()
        cy.dataTest("testid.Input").should("have.value", "")
        cy.dataTest("testid.Button").should("not.exist")
    })

    it("renders a select", () => {
        cy.mount(
            <Input data-testid="testid" type="select">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </Input>
        )
        cy.dataTest("testid.Select")
            .should("exist")
            .should("have.prop", "tagName", "SELECT")
    })

    it("renders a textarea", () => {
        cy.mount(<Input data-testid="testid" type="textarea" />)
        cy.dataTest().should("exist").should("have.prop", "tagName", "DIV")
        cy.dataTest("testid.Textarea")
            .should("exist")
            .should("have.prop", "tagName", "TEXTAREA")
    })
})
