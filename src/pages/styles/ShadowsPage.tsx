/*=============================================== ShadowsPage ===============================================*/

import { Page, StylesCard } from "../../components"

import { allShadows } from "../../data"

export function ShadowsPage() {
    return (
        <Page title="Shadows">
            {allShadows.map(shadow => (
                <StylesCard variable={shadow} type="shadow" key={shadow.css} />
            ))}
        </Page>
    )
}
