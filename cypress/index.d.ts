declare namespace Cypress {
    interface Chainable {
        dataTest(id?: string): Chainable<any>
    }
}
