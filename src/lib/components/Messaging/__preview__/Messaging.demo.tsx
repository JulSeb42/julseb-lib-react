/*=============================================== MessagingDemo ===============================================*/

import { useState } from "react"
import { convertDateShort } from "ts-utils-julseb"
import { Messaging } from "../../../"
import type { ILibMessaging } from "../types"
import type { LibMessage } from "../../../types"

export function MessagingDemo({
    items: data,
    ...rest
}: Omit<ILibMessaging, "handleSubmit" | "input">) {
    const [message, setMessage] = useState("")
    const [messagesList, setMessagesList] = useState<Array<LibMessage>>(data)

    const handleSubmit = () => {
        setMessagesList([
            ...messagesList,
            {
                type: "sent",
                text: message,
                date: convertDateShort(new Date()),
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
            },
        ])
        setMessage("")
    }

    return (
        <Messaging
            items={messagesList}
            handleSubmit={handleSubmit}
            input={{ message, setMessage }}
            data-testid="testid"
            className="className"
            {...rest}
        />
    )
}
