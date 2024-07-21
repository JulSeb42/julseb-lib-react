/*=============================================== ModalPreview ===============================================*/

import { useState } from "react"
import {
    Modal,
    Image,
    Button,
    disableScroll,
    Alert,
    Flexbox,
    Text,
    enableScroll,
} from "../../../"
import type {} from "../../../types"
import type { ILibModal } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const modalPreview: ComponentPreview<ILibModal> = {
    name: "Modal",
    component: Modal,
    category: "components",
    noStretch: true,
    import: "Modal",
    additionalImports: [],
    optionalImports: [],
    propsImport: "ILibModal",
    additionalTypeImports: [],
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
                    <Image src="/images/image-card.jpg" />
                </ModalDemo>
            ),
        },
    ],
}

function ModalDemo(rest: Partial<ILibModal>) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open modal</Button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} {...rest} />
        </>
    )
}

function ModalDemoAlert() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button
                onClick={() => {
                    setIsOpen(true)
                    disableScroll()
                }}
            >
                Open modal
            </Button>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen} contentWidth="100%">
                <Alert maxWidth={400} alertColor="danger">
                    <Text>Modal content</Text>

                    <Flexbox alignItems="center" gap="xs">
                        <Button color="danger">Button</Button>
                        <Button
                            variant="transparent"
                            onClick={() => {
                                setIsOpen(false)
                                enableScroll()
                            }}
                        >
                            Close
                        </Button>
                    </Flexbox>
                </Alert>
            </Modal>
        </>
    )
}
