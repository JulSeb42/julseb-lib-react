/*=============================================== RadiusesPage ===============================================*/

import { Page, StylesCard } from "../../components"

import { allRadiuses } from "../../data/styles/all-radiuses"

export function RadiusesPage() {
    return (
        <Page title="Radiuses">
            {allRadiuses.map(r => (
                <StylesCard variable={r} type="radius" key={r.css} />
            ))}
        </Page>
    )
}
