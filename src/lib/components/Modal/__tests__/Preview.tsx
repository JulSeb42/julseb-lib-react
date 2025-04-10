import { useState } from "react"
import { enableScroll, disableScroll } from "@julseb-lib/utils"
import { Modal, Button, Image, Alert } from "../../../"

export const Preview = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button
                data-testid="trigger"
                onClick={() => {
                    setIsOpen(true)
                    disableScroll()
                }}
            >
                Open
            </Button>

            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data-testid="testid"
                className="className"
            >
                <Image src="/images/image-card.jpg" />
            </Modal>
        </>
    )
}

export const PreviewWithAlert = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button
                data-testid="trigger"
                onClick={() => {
                    setIsOpen(true)
                    disableScroll()
                }}
            >
                Open
            </Button>

            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data-testid="testid"
                className="className"
                disableEsc
                hideCloseButton
                contentWidth={400}
            >
                <Alert>
                    <Button
                        data-testid="close-modal"
                        onClick={() => {
                            setIsOpen(false)
                            enableScroll()
                        }}
                    >
                        Close modal
                    </Button>
                </Alert>
            </Modal>
        </>
    )
}
