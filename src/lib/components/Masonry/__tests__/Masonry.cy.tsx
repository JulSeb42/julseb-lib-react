/*=============================================== Masonry tests ===============================================*/

import { uuid } from "ts-utils-julseb"
import { Masonry, Image } from "../../.."
import { images } from "../__preview__/Masonry.preview"

describe("<Masonry />", () => {
    it("renders <Masonry /> component", () => {
        cy.mount(
            <Masonry data-testid="testid" className="className">
                {images.map((image, i) => (
                    <Image src={image} alt={`Img ${i}`} key={uuid()} />
                ))}
            </Masonry>
        )

        cy.dataTest()
            .should("exist")
            .should("have.class", "className")
            .children()
            .should("have.length", 4)
    })

    it("renders 3 cols", () => {
        cy.mount(
            <Masonry col={3} gap="xl" data-testid="testid">
                {images.map((image, i) => (
                    <Image src={image} alt={`Img ${i}`} key={uuid()} />
                ))}
            </Masonry>
        )

        cy.dataTest().should("exist").children().should("have.length", 3)
    })
})
