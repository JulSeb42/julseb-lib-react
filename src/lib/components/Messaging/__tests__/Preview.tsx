/*=============================================== Messaging Tests preview ===============================================*/

import { useState } from "react"
import { getYesterday } from "@julseb-lib/utils"
import { Messaging } from "../../../"
import type { LibMessage } from "../../../types"

const messagesList: Array<LibMessage> = [
    {
        type: "received",
        text: "Message received https://julien-sebag.com/",
        date: "2022-05-23",
        time: "11:15",
    },
    {
        type: "sent",
        text: "Message sent",
        date: "2022-05-23",
        time: "11:17",
    },
    {
        type: "received",
        text: "Message received today",
        date: new Date(),
        time: "11:17",
    },
    {
        type: "sent",
        text: "Message send yesterday",
        date: getYesterday(),
        time: "11:17",
    },
]

const Preview = ({ allMessages }: { allMessages: Array<LibMessage> }) => {
    const [messages, setMessages] = useState(allMessages)
    const [message, setMessage] = useState("")

    const handleSubmit = () => {
        setMessages([
            ...messages,
            {
                type: "sent",
                text: message,
                date: new Date(),
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
            },
        ])
        setMessage("")
    }

    return (
        <Messaging
            data-testid="testid"
            className="className"
            items={messages}
            input={{ message, setMessage }}
            handleSubmit={handleSubmit}
        />
    )
}

export const MessagingPreview = () => {
    return <Preview allMessages={messagesList} />
}

export const MessagingEmptyPreview = () => {
    return <Preview allMessages={[]} />
}
