/*=============================================== ColorsPage ===============================================*/

import { Page, ColorCard } from "../../components"

import { uuid, Flexbox } from "../../lib"
import { colorsLight, colorsDark } from "../../data"

export function ColorsPage() {
    return (
        <Page title="Colors">
            <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
                {[...colorsLight, ...colorsDark].map(c => (
                    <ColorCard color={c} key={uuid()} />
                ))}
            </Flexbox>
        </Page>
    )
}
