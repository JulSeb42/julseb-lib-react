/*=============================================== Message ===============================================*/

import { forwardRef } from "react"
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
 * @description Returns a Message component
 * @link https://documentation-components-react.vercel.app/components/messaging
 * @extends HTMLDivElement & ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop type: "sent" | "received"
 * @prop text: string => only if children is not defined
 * @prop children?: ReactChildren => only if text is not defined
 * @prop id?: string
 * @prop date?: Date | string
 * @prop textToday?: string => only if date is defined
 * @prop textYesterday?: string => only if date is defined
 * @prop dateFormat?: "short" | "long" => only if date is defined
 * @prop time?: string
 * @prop inline?: boolean
 * @prop flexDirection?: CssFlexDirection
 * @prop flexWrap?: CssFlexWrap
 * @prop justifyContent?: CssJustifyContent
 * @prop alignItems?: CssAlignItems
 * @prop justifyItems?: CssJustifyItems
 * @prop alignContent?: CssAlignContent
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop columnGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop rowGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
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
