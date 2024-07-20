/*=============================================== ToastPreview ===============================================*/

import { Button, Toast, useToast } from "../../../"
import type {} from "../../../types"
import type { ILibToast } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const toastPreview: ComponentPreview<ILibToast> = {
    name: "Toast",
    component: Toast,
    category: "components",
    noStretch: true,
    import: "Toast", // import Component (ex: Skeleton)
    additionalImports: null, // import OtherComponent (ex: SkeletonCard)
    optionalImports: null, // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: "ILibToast", // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: null, // import ILibComponentItem (ex: ILibAccordionItem)
    extends: ["HTMLDivElement", "LibToast"],
    previews: [
        { previewTitle: "Default", props: { title: "Toast" } },
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
        })

    return <Button onClick={handleClick}>Render toast</Button>
}
