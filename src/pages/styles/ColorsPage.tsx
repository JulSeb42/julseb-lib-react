/*=============================================== ColorsPage ===============================================*/

import { Page, ColorCard } from "../../components"

import { colorsLight, colorsDark } from "../../data/all-colors"

export function ColorsPage() {
    return (
        <Page title="Colors">
            {[...colorsLight, ...colorsDark].map(c => (
                <ColorCard color={c} key={c.name} />
            ))}
        </Page>
    )
}
