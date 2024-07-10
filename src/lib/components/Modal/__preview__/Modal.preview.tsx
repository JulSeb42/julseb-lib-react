/*=============================================== ModalPreview ===============================================*/

import { Modal } from "../../../"
import {  } from "../../../types"
import type { ModalProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const modalPreview: ComponentPreview<ModalProps, typeof Modal> = {
    name: "Modal",
    component: Modal,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
