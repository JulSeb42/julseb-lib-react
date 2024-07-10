/*=============================================== Video tests ===============================================*/

import { Video } from "../../.."
import { VIDEO_SRC } from "../__preview__/Video.preview"

describe("<Video />", () => {
    it("renders <Video /> component", () => {
        cy.mount(
            <Video data-testid="testid" className="className" src={VIDEO_SRC} />
        )
        cy.dataTest().should("exist").should("have.class", "className")
    })

    it("renders with a specified width", () => {
        cy.mount(<Video data-testid="testid" src={VIDEO_SRC} width={300} />)
        cy.dataTest().should("exist").invoke("width").should("equal", 300)
    })
})
