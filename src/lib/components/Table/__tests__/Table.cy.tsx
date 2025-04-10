import { Table, Text, uuid } from "../../.."

const HEADERS = ["Header", "Header", "Header"]
const DATA = [
    ["Content 1", <Text key={uuid()}>Content 2</Text>, "Content 3"],
    ["Content 1", <Text key={uuid()}>Content 2</Text>, "Content 3"],
]

describe("<Table />", () => {
    it("renders <Table /> component", () => {
        cy.mount(
            <Table
                data-testid="testid"
                className="className"
                headers={HEADERS}
                data={DATA}
            />
        )
        cy.dataTest().should("exist").should("have.class", "className")
        cy.dataTest("testid.THead").should("exist")
    })
})
