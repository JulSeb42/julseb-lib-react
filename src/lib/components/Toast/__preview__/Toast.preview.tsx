/*=============================================== ToastPreview ===============================================*/

import { Button, Toast, useToast } from "../../../"
import type { ILibToast } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const toastPreview: ComponentPreview<ILibToast> = {
    name: "Toast",
    component: Toast as any,
    category: "components",
    noStretch: true,
    import: "Toast",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibToast",
    additionalTypeImports: null,
    extends: ["HTMLDivElement", "LibToast"],
    previews: [
        {
            previewTitle: "Default",
            props: {
                title: "Toast",
                "data-testid": "testid",
                className: "className",
            },
        },
        { previewTitle: "With toaster", demo: <ToasterDemo /> },
    ],
}

function ToasterDemo() {
    const toast = useToast()

    const handleClick = () =>
        toast.success("Success", {
            icons: { left: "check" },
            body: "Hello World",
            withTimer: true,
            "data-testid": "testid",
            className: "className",
            duration: 10000,
        })

    return <Button onClick={handleClick}>Render toast</Button>
}
