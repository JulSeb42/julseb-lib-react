// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands"
import "../../src/lib/index.css"

// Alternatively you can use CommonJS syntax:
// require('./commands')

import type { ReactNode } from "react"
import { mount, type MountOptions, type MountReturn } from "cypress/react18"
import { type MemoryRouterProps, MemoryRouter } from "react-router-dom"

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
    // eslint-disable-next-line
    namespace Cypress {
        interface Chainable {
            mount(
                component: ReactNode,
                options?: MountOptions & { routerProps?: MemoryRouterProps }
            ): Cypress.Chainable<MountReturn>
        }
    }
}

beforeEach(() => {
    cy.viewport(1200, 800)
})

Cypress.Commands.add("mount", (components, options = {}) => {
    const { routerProps = { initialEntries: ["/"] }, ...mountOptions } = options

    const wrapped = (
        <MemoryRouter {...routerProps}>
            <div style={{ padding: 48 }}>{components}</div>
        </MemoryRouter>
    )

    return mount(wrapped, mountOptions)
})

// Example use:
// cy.mount(<MyComponent />)
