import { useState } from "react"
import { enableScroll, disableScroll } from "@julseb-lib/utils"
import { Alert, Button, Flexbox, Modal, Text } from "../../.."
import type { ILibModal } from "../types"

export const ModalDemo = (rest: Partial<ILibModal>) => {
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

export const ModalDemoAlert = () => {
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
