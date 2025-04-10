import { Header, LIB_TOKENS } from "../../.."
import type { LibHeaderLink } from "../../../types"

const links: Array<LibHeaderLink> = [
    {
        text: "Link",
        to: "/",
    },
    {
        text: "Link",
        to: "/about",
    },
    {
        text: "Link",
        to: "/hello",
    },
    {
        text: "Button",
        onClick: () => alert("Clicked"),
    },
]

describe("<Header />", () => {
    const search = () => cy.dataTest("testid.SearchInput")
    const searchInput = () => cy.dataTest("testid.SearchInput.Input")
    const logo = () => cy.dataTest("testid.HeaderLogo")
    const nav = () => cy.dataTest("testid.HeaderNav")
    const navLink = () => cy.dataTest("testid.NavLink")
    const navButton = () => cy.dataTest("testid.NavButton")

    it("renders <Header /> component", () => {
        cy.mount(
            <Header
                data-testid="testid"
                className="className"
                links={links}
                logo="Logo"
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")
        logo()
            .should("exist")
            .should("have.text", "Logo")
            .should("have.prop", "tagName", "A")
            .should("have.attr", "href", "/")
        nav().should("exist").should("have.class", "HeaderNav")
        navLink().should("exist").should("have.length", 3)
        navButton().should("exist").should("have.length", 1)
        cy.dataTest()
            .should(
                "have.css",
                "background-color",
                LIB_TOKENS.colors.light["primary-500"].rgb
            )
            .should("have.css", "position", "relative")
    })

    it("renders a search", () => {
        cy.mount(
            <Header
                data-testid="testid"
                className="className"
                links={links}
                logo="Logo"
                search={{ pathname: "/" }}
            />
        )

        search().should("exist")
        searchInput().should("exist")
        searchInput().focus().type("Hello")
        searchInput().should("have.value", "Hello")
        searchInput().focus().type("{enter}")
        searchInput().should("have.value", "")
    })

    it("renders a transparant variant", () => {
        cy.mount(
            <Header
                data-testid="testid"
                className="className"
                links={links}
                logo="Logo"
                variant="transparent"
            />
        )
        cy.dataTest().should(
            "have.css",
            "background-color",
            LIB_TOKENS.colors.light.transparent.rgb
        )
    })
})
