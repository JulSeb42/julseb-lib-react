/*=============================================== Message ===============================================*/

import { forwardRef } from "react"
import { convertDateShort, convertDate, getYesterday } from "ts-utils-julseb"
import { Flexbox, Text, linkifyText } from "../../"
import { StyledMessage } from "./styles"
import type { ILibMessage } from "./types"

/**
 * @description Returns a Message component
 * @link https://documentation-components-react.vercel.app/components/messaging
 * @extends HTMLDivElement & ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop type: "sent" | "received"
 * @prop text: string => only if children is not defined
 * @prop children: ReactChildren => only if text is not defined
 * @prop date?: Date | string
 * @prop time?: string
 * @prop textDateTime?: string
 * @prop textToday?: string
 * @prop textYesterday?: string
 * @prop dateFormat?: "short" | "long"
 * @prop className?: string
 */

export const Message = forwardRef<HTMLDivElement, ILibMessage>(
    (
        {
            "data-testid": testid,
            as,
            className,
            type,
            text,
            children,
            date,
            time,
            textToday = "Today",
            textYesterday = "Yesterday",
            textDateTime = "at",
            dateFormat = "short",
            ...rest
        },
        ref
    ) => {
        const format = dateFormat === "short" ? convertDateShort : convertDate

        return (
            <Flexbox
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                alignItems={type === "sent" ? "flex-end" : "flex-start"}
                flexDirection="column"
                gap="xxs"
                {...rest}
            >
                <StyledMessage
                    data-testid={testid && `${testid}.Message`}
                    className={className && "MessageText"}
                    $messageType={type}
                >
                    {text ? linkifyText(text, true) : children}
                </StyledMessage>

                {(date || time) && (
                    <Text
                        tag="small"
                        data-testid={testid && `${testid}.DateAndTime`}
                        className={className && "DateAndTime"}
                    >
                        {date &&
                            (convertDateShort(date) ===
                            convertDateShort(new Date())
                                ? textToday
                                : convertDateShort(date) ===
                                  convertDateShort(getYesterday())
                                ? textYesterday
                                : format(date))}
                        {date && time && ` ${textDateTime} `}
                        {time && time}
                    </Text>
                )}
            </Flexbox>
        )
    }
)
