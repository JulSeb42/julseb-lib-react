/*=============================================== Toaster demo ===============================================*/

import { Button, useToast } from "../../../"

export const ToasterDemo = () => {
    const toast = useToast()

    // * @function success
    // * @function error
    // * @function warning
    // * @function info
    // * @function loading

    // const handleClick = () =>

    return (
        <>
            <Button
                onClick={() =>
                    toast.success("Success", {
                        icons: { left: "check" },
                        body: "Hello World",
                        withTimer: true,
                        "data-testid": "testid",
                        className: "className",
                        duration: 10000,
                    })
                }
            >
                Toast success
            </Button>

            <Button
                onClick={() =>
                    toast.error("Error", {
                        // icons: { left: "check" },
                        // body: "Hello World",
                        // withTimer: true,
                        // "data-testid": "testid",
                        // className: "className",
                        // duration: 10000,
                    })
                }
            >
                Toast error
            </Button>

            <Button
                onClick={() =>
                    toast.warning("Warning", {
                        icons: { left: "check" },
                        // body: "Hello World",
                        withTimer: true,
                        // "data-testid": "testid",
                        // className: "className",
                        duration: 10000,
                    })
                }
            >
                Toast warning
            </Button>

            <Button
                onClick={() =>
                    toast.info("Info", {
                        icons: { left: "check" },
                        body: "Hello World",
                        withTimer: true,
                        "data-testid": "testid",
                        className: "className",
                        duration: 10000,
                    })
                }
            >
                Toast info
            </Button>
        </>
    )
}
