/*=============================================== MessagingPreview ===============================================*/

import { getToday, getYesterday } from "ts-utils-julseb"
import { Messaging } from "../../../"
import type { ILibMessaging } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import { MessagingDemo } from "./Messaging.demo"
import type { LibMessage } from "../../../types"

const messages: Array<LibMessage> = [
    {
        type: "received",
        text: "Message received https://julien-sebag.com/",
        date: "2022-05-23",
        time: "11:15",
        "data-testid": "testid-first",
    },
    {
        type: "sent",
        text: "Message sent https://julien-sebag.com/",
        date: "2022-05-23",
        time: "11:17",
    },
    {
        type: "received",
        text: "Message received https://julien-sebag.com/",
        date: "2022-05-23",
        time: "11:18",
    },
    {
        type: "sent",
        text: "Message sent https://julien-sebag.com/",
        date: "2022-05-23",
        time: "11:19",
    },
    {
        type: "received",
        text: "Message received https://julien-sebag.com/",
        date: "2022-05-23",
        time: "11:20",
    },
    {
        type: "sent",
        text: "Message sent https://julien-sebag.com/",
        date: "2022-05-23",
        time: "11:21",
    },
    {
        type: "received",
        text: "Message received https://julien-sebag.com/",
        date: "2022-05-23",
        time: "11:22",
    },
    {
        type: "sent",
        text: "Message sent https://julien-sebag.com/",
        date: "2022-05-23",
        time: "11:23",
    },
    {
        type: "received",
        text: "Message received https://julien-sebag.com/",
        date: "2022-05-23",
        time: "11:24",
    },
    {
        type: "sent",
        text: "Message sent https://julien-sebag.com/",
        date: "2022-05-23",
        time: "11:25",
    },
    {
        type: "received",
        text: "Message received https://julien-sebag.com/",
        date: "2022-05-23",
        time: "11:26",
    },
    {
        type: "sent",
        text: "Message sent yesterday https://julien-sebag.com/",
        date: getYesterday(),
        time: "11:17",
    },
    {
        type: "received",
        text: "Message received today https://julien-sebag.com/",
        date: getToday(),
        time: "11:17",
    },
]

export const messagingPreview: ComponentPreview<ILibMessaging> = {
    name: "Messaging",
    component: Messaging,
    category: "components",
    import: "Messaging",
    additionalImports: null,
    optionalImports: [
        "MessagesContainer",
        "MessagesList",
        "MessageForm",
        "Message",
    ],
    propsImport: "ILibMessaging",
    additionalTypeImports: ["LibMessage"],
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "With messages",
            demo: (
                <MessagingDemo
                    data={messages}
                    data-testid="testid"
                    className="className"
                />
            ),
        },
        {
            previewTitle: "Empty",
            demo: (
                <MessagingDemo
                    data={[]}
                    button={{ text: "Send" }}
                    data-testid="testid"
                    className="className"
                />
            ),
        },
    ],
}
