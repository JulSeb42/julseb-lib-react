import type { FC } from "react"
import classNames from "classnames"
import {
    convertDateShort,
    convertDate,
    getYesterday,
    capitalize,
} from "@julseb-lib/utils"
import { Flexbox, Text, linkifyText } from "../../"
import { StyledMessage } from "./styles"
import type { ILibMessage } from "./types"

/**
 * Message component for displaying a chat message with optional date, time, and flexible layout.
 *
 * @component
 * @extends HTMLDivElement & ILibFlexbox
 * @param {Object} props - Message props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {ElementType} [props.as] - Custom element type to render as.
 *  * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {"sent" | "received"} props.type - Message type (sent or received).
 * @param {string} [props.text] - Message text (used if children is not defined).
 *  * @param {ReactNode} [props.children] - Message content (used if text is not defined).
 * @param {string} [props.id] - Message id.
 * @param {Date | string} [props.date] - Date of the message.
 * @param {string} [props.textToday="Today"] - Text to display for today's date.
 * @param {string} [props.textYesterday="Yesterday"] - Text to display for yesterday's date.
 * @param {"short" | "long"} [props.dateFormat="short"] - Date format.
 * @param {string} [props.textDateTime="at"] - Text between date and time.
 * @param {string} [props.time] - Time of the message.
 * @param {boolean} [props.inline] - Display message inline.
 * @param {CssFlexDirection} [props.flexDirection] - Flex direction.
 * @param {CssFlexWrap} [props.flexWrap] - Flex wrap.
 * @param {CssJustifyContent} [props.justifyContent] - Justify content.
 * @param {CssAlignItems} [props.alignItems] - Align items.
 * @param {CssJustifyItems} [props.justifyItems] - Justify items.
 * @param {CssAlignContent} [props.alignContent] - Align content.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap] - Gap between elements.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.columnGap] - Column gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.rowGap] - Row gap.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }} [props.padding] - Padding for the message container.
 * @returns {JSX.Element} The rendered Message component.
 *
 * @see https://documentation-components-react.vercel.app/components/messaging
 * @example
 * <Message
 *   type="sent"
 *   text="Hello!"
 *   date={new Date()}
 *   time="14:30"
 * />
 */
export const Message: FC<ILibMessage> = ({
    "data-testid": testid,
    as,
    ref,
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
}) => {
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
                className={classNames(
                    { MessageText: className },
                    capitalize(type)
                )}
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
                        (convertDateShort(date) === convertDateShort(new Date())
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
