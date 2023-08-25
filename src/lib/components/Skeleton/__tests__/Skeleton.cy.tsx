/*=============================================== Skeleton tests ===============================================*/

import { Skeleton } from "../Skeleton"
import { cssVariables } from "../../.."

describe("<Skeleton />", () => {
    it("renders <Skeleton /> component", () => {
        cy.mount(<Skeleton data-testid="testid">Hello</Skeleton>)
        cy.dataTest("testid").should("exist")
    })
})
