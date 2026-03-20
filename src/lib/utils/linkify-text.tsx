import { Fragment } from "react"
import { uuid } from "@julseb-lib/utils"

/**
 * Regular expression to match URLs in a string.
 * Matches HTTP/HTTPS URLs with optional www, ports, and paths.
 *
 * @type {RegExp}
 */
export const URL_REGEX =
	/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

/**
 * Splits a string into words and wraps detected URLs in anchor tags, optionally opening them in a new tab.
 *
 * @param {string} text - The input text to linkify.
 * @param {boolean} [blank] - If true, links open in a new tab.
 * @returns {Array<JSX.Element | string>} Array of JSX elements and strings with URLs linkified.
 *
 * @example
 * linkifyText("Visit https://example.com", true)
 */
export const linkifyText = (text: string, blank?: boolean) => {
	const words: Array<string> = text?.split(" ")

	return words?.map((word: string) =>
		word.match(URL_REGEX) ? (
			<Fragment key={uuid()}>
				<a
					href={word}
					target={blank ? "_blank" : undefined}
					rel={blank ? "noreferrer noopener" : undefined}
					className="font-black"
				>
					{word}
				</a>{" "}
			</Fragment>
		) : (
			word + " "
		),
	)
}
