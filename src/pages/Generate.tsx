/*=============================================== Generate ===============================================*/

import { Page } from "../components"

export function Generate() {
    const abc = [
        "inline: boolean",
        "col: number | string",
        "gap: LibSpacers",
        "columnGap: LibSpacers",
        "rowGap: LibSpacers",
        "justifyItems: JustifyItems",
        "alignItems: AlignItems",
        "justifyContent: JustifyContent",
        "alignContent: AlignContent",
    ]

    return (
        <Page title="Generate">
            <ul>
                {abc.map(a => (
                    <li key={a}>{a.split(":")[0]},</li>
                ))}
            </ul>

            <ul>
                {abc.map(a => {
                    const v = a.split(":")[0]

                    return <li key={a}>{`$${v}={${v}}`}</li>
                })}
            </ul>
        </Page>
    )
}
