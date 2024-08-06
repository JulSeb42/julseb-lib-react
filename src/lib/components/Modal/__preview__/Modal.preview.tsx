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

function ModalDemo(rest: Partial<ILibModal>) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open modal</Button>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data-testid="testid"
                className="className"
                {...rest}
            />
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

            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                contentWidth="100%"
                data-testid="testid"
                className="className"
            >
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
