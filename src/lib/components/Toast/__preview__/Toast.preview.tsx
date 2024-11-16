/*=============================================== ToastPreview ===============================================*/

import { Toast } from "../../../"
import type { ILibToast } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import { ToasterDemo } from "./Toaster.demo"

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
                hideCloseButton: true,
                status: "error"
            },
        },
        { previewTitle: "With toaster", demo: <ToasterDemo /> },
    ],
}
