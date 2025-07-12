import { Fragment } from "react"
import { uuid } from "@julseb-lib/utils"

export const URL_REGEX =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

export const linkifyText = (text: string, blank?: boolean) => {
    const words: Array<string> = text?.split(" ")

    return words?.map((word: string) =>
        word.match(URL_REGEX) ? (
            <Fragment key={uuid()}>
                <a
                    href={word}
                    target={blank ? "_blank" : undefined}
                    rel={blank ? "noreferrer noopener" : undefined}
                    className="font-black text-blue-500"
                >
                    {word}
                </a>{" "}
            </Fragment>
        ) : (
            word + " "
        )
    )
}
