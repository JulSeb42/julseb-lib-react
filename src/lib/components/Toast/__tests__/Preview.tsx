/*=============================================== Toaster tests preview ===============================================*/

import { useToast, Button } from "../../../"

export function PreviewSuccess() {
    const toast = useToast()

    return (
        <Button
            data-testid="trigger"
            onClick={() =>
                toast.success("Success", {
                    "data-testid": "Success",
                    className: "Toast",
                })
            }
        >
            Trigger
        </Button>
    )
}

export function PreviewError() {
    const toast = useToast()

    return (
        <Button
            data-testid="trigger"
            onClick={() =>
                toast.error("Error", {
                    "data-testid": "Error",
                    className: "Toast",
                    duration: 10000,
                    withTimer: true,
                })
            }
        >
            Trigger
        </Button>
    )
}

export function PreviewWarning() {
    const toast = useToast()

    return (
        <Button
            data-testid="trigger"
            onClick={() =>
                toast.warning("Warning", {
                    "data-testid": "Warning",
                    className: "Toast",
                    icons: { left: "warning" },
                })
            }
        >
            Trigger
        </Button>
    )
}

export function PreviewInfo() {
    const toast = useToast()

    return (
        <Button
            data-testid="trigger"
            onClick={() =>
                toast.info("Info", {
                    "data-testid": "Info",
                    className: "Toast",
                })
            }
        >
            Trigger
        </Button>
    )
}
