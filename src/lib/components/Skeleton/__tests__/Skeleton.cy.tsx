import { SkeletonCard, Skeleton, LIB_TOKENS } from "../../.."

describe("<Skeleton />", () => {
    it("renders <Skeleton /> component", () => {
        cy.mount(
            <SkeletonCard data-testid="testid" className="className">
                <Skeleton data-testid="testid.Skeleton" />
            </SkeletonCard>
        )

        const card = cy.dataTest()

        card.should("exist").should("have.class", "className")
        cy.dataTest("testid.Shine").should("not.exist")
        card.children().should("have.length", 1)
    })

    it("has default properties", () => {
        cy.mount(<Skeleton data-testid="testid" />)
        cy.dataTest().should(
            "have.css",
            "background-color",
            LIB_TOKENS.colors.light["gray-100"].rgb
        )
    })

    it("renders a shine when using the `isShiny` prop", () => {
        cy.mount(
            <SkeletonCard data-testid="testid" className="className" isShiny />
        )

        cy.dataTest("testid.Shine")
            .should("exist")
            .should("have.class", "Shine")
    })

    it("renders a default border when the width is set to 1", () => {
        cy.mount(
            <SkeletonCard
                data-testid="testid"
                border={{ width: 1 }}
                borderRadius="xs"
            />
        )

        cy.dataTest()
            .should("have.css", "border-width", "1px")
            .should(
                "have.css",
                "border-color",
                LIB_TOKENS.colors.light["gray-200"].rgb
            )
            .should("have.css", "border-style", "solid")
            .should("have.css", "border-radius", LIB_TOKENS.radiuses.xs)
    })

    it("renders a default border when the color is set to gray-300, and set border radius", () => {
        cy.mount(
            <SkeletonCard
                data-testid="testid"
                border={{ color: "gray-300" }}
                borderRadius={{
                    topLeft: "xxl",
                    topRight: "xs",
                    bottomLeft: "m",
                    bottomRight: "l",
                }}
                padding={{
                    topBottom: "xxl",
                    left: "s",
                    right: "m",
                }}
            />
        )

        cy.dataTest()
            .should("have.css", "border-width", "1px")
            .should(
                "have.css",
                "border-color",
                LIB_TOKENS.colors.light["gray-300"].rgb
            )
            .should("have.css", "border-style", "solid")
            .should(
                "have.css",
                "border-top-left-radius",
                LIB_TOKENS.radiuses.xxl
            )
            .should(
                "have.css",
                "border-top-right-radius",
                LIB_TOKENS.radiuses.xs
            )
            .should(
                "have.css",
                "border-bottom-left-radius",
                LIB_TOKENS.radiuses.m
            )
            .should(
                "have.css",
                "border-bottom-right-radius",
                LIB_TOKENS.radiuses.l
            )
            .should("have.css", "padding-top", LIB_TOKENS.spacers.xxl)
            .should("have.css", "padding-bottom", LIB_TOKENS.spacers.xxl)
            .should("have.css", "padding-left", LIB_TOKENS.spacers.s)
            .should("have.css", "padding-right", LIB_TOKENS.spacers.m)
    })

    it("renders set width and height", () => {
        cy.mount(<SkeletonCard data-testid="testid" width={300} height={400} />)

        cy.dataTest().invoke("width").should("equal", 300)
        cy.dataTest().invoke("height").should("equal", 400)
    })
})
