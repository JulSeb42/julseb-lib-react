/*=============================================== ColorsDemo ===============================================*/

import { Flexbox } from "../../lib"
import { ColorCard, SbDemoLayout } from "../../components"

import { colorsLight, colorsDark } from "../../data"

export function ColorsDemo() {
    return (
        <SbDemoLayout title="Colors">
            {/* <Text tag="h1">Colors</Text> */}

            <Flexbox gap="s" flexDirection="column" alignItems="stretch">
                {[...colorsLight, ...colorsDark].map(c => (
                    <ColorCard color={c} key={c.name} />
                ))}
            </Flexbox>
        </SbDemoLayout>
    )
}
