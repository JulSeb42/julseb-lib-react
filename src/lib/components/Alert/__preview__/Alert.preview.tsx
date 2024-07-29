/*=============================================== AlertPreview ===============================================*/

import { Alert, Text, Button, Flexbox } from "../../../"
import { type LibColorsShort, typeValues } from "../../../types"
import type { ILibAlert } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const colors: Array<Exclude<LibColorsShort, "black" | "white">> = Object.values(
    typeValues.colorsShort
).filter(color => color !== "black" && color !== "white")

export const alertPreview: ComponentPreview<ILibAlert> = {
    name: "Alert",
    component: Alert,
    category: "components",
    import: "Alert",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibAlert",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        ...colors.map(c => ({
            props: {
                alertColor: c,
                children: `Alert ${c}`,
                "data-testid": "testid",
                className: "className",
            },
        })),
        { previewTitle: "With buttons", demo: <DemoAlertButtons /> },
    ],
}

function DemoAlertButtons() {
    return (
        <Alert
            alertColor="danger"
            data-testid="testid"
            className="className"
            id="alert"
            maxWidth={400}
        >
            <Text>Alert with button</Text>

            <Flexbox alignItems="center" gap="xs">
                <Button color="danger">Button</Button>
                <Button variant="transparent">Button</Button>
            </Flexbox>
        </Alert>
    )
}
