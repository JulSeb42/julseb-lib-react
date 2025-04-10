import { Fragment, type CSSProperties } from "react"
import { uuid, slugify } from "@julseb-lib/utils"
import { Text } from ".."
import type { ReactChildren } from "../types"

export const getHighlightedText = (
    text: ReactChildren,
    value: string,
    className?: string,
    styles?: CSSProperties
) => {
    const parts = text?.toString().split(new RegExp(`(${value})`, "gi"))

    return (parts as Array<string>).map(part => (
        <Fragment key={uuid()}>
            {slugify(part) === slugify(value) ? (
                <Text
                    tag="strong"
                    className={className && "HighlightedText"}
                    style={styles}
                >
                    {part}
                </Text>
            ) : (
                part
            )}
        </Fragment>
    ))
}
