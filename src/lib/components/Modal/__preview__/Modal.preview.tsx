/*=============================================== ModalPreview ===============================================*/

import { Modal, Image } from "../../../"
import { ModalDemo, ModalDemoAlert } from "./Previews"
import type { ILibModal } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const modalPreview: ComponentPreview<ILibModal> = {
    name: "Modal",
    component: Modal,
    category: "components",
    noStretch: true,
    import: "Modal",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibModal",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "With alert",
            demo: <ModalDemoAlert />,
        },
        {
            previewTitle: "With image",
            demo: (
                <ModalDemo>
                    <Image
                        src="/images/image-card.jpg"
                        height="100%"
                        fit="contain"
                    />
                </ModalDemo>
            ),
        },
    ],
}
