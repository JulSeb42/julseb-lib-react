/*=============================================== ColorsDemo ===============================================*/

import { ColorCard } from "../../components"

import { colorsLight, colorsDark } from "../../data/all-colors"

export function ColorsDemo() {
    return (
        <>
            {[...colorsLight, ...colorsDark].map(c => (
                <ColorCard color={c} key={c.name} />
            ))}
        </>
    )
}
