/*=============================================== Toaster demo ===============================================*/

import { Button, useToast } from "../../../"

export const ToasterDemo = () => {
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
