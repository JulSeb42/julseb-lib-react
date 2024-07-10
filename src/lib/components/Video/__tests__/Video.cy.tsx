/*=============================================== Video tests ===============================================*/

import { Video } from "../../.."

describe("<Video />", () => {
    it("renders <Video /> component", () => {
        cy.mount(
            <Video
                data-testid="testid"
                className="className"
                src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")
    })

    it("renders with a specified width", () => {
        cy.mount(
            <Video
                data-testid="testid"
                src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"
                width={300}
            />
        )
        cy.dataTest().should("exist").invoke("width").should("equal", 300)
    })
})
