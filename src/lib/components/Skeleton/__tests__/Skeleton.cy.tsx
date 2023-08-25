/*=============================================== Skeleton tests ===============================================*/

import { SkeletonCard, Skeleton } from "../Skeleton"
import { cssVariables } from "../../.."

describe("<Skeleton />", () => {
    it("renders <Skeleton /> component", () => {
        cy.mount(<Skeleton data-testid="testid" />)
        cy.dataTest("testid").should("exist")
    })

    // TODO
    // ? defaults Skeleton => background color, width
    // ? defaults Skeleton card => background color, width
    // ? isShiny prop
    // ? SkeletonCard border + width + height + radius + padding
    // ? Skeleton animation
    // ? Skeleton background color + radius + width + height
})
