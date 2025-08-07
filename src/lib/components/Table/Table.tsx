import { type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import {
	clsx,
	linkifyText,
	genLinkColor,
	genButtonColor,
	genTextAlign,
	genVAlign,
} from "../../utils"
import { TEXT_BASE_CLASSES } from "../Text"
import type { ILibTable } from "./types"

/**
 * Table component for creating structured data tables with customizable styling, variants, and automatic link detection.
 *
 * @component
 *
 * @example
 * <Table
 *   variant="bordered"
 *   headers={["Name", "Email", "Role"]}
 *   data={[
 *     ["John Doe", "john@example.com", "Admin"],
 *     ["Jane Smith", "jane@example.com", "User"]
 *   ]}
 *   footers={["Total: 2 users", "", ""]}
 *   linkify
 * />
 *
 * @extends HTMLTableElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the table.
 * @prop {React.Ref<HTMLTableElement>} [props.ref] - Ref to the table element.
 * @prop {React.ReactNode} [props.children] - Table content when not using data prop.
 * @prop {"bordered" | "stripped" | "border-bottom"} [props.variant="bordered"] - Visual variant for table styling.
 * @prop {"align-baseline" | "align-top" | "align-middle" | "align-bottom" | "align-text-top" | "align-text-bottom" | "align-sub" | "align-super"} [props.vAlign="align-top"] - Vertical alignment for table cells.
 * @prop {"left" | "center" | "right" | "justify"} [props.textAlign="left"] - Text alignment for table content.
 * @prop {boolean} [props.linkify] - Whether to automatically convert URLs in text to clickable links.
 * @prop {boolean} [props.blank] - Whether links should open in new tab when linkify is enabled.
 * @prop {Array<React.ReactNode>} [props.headers] - Array of header content for table columns.
 * @prop {Array<React.ReactNode>} [props.footers] - Array of footer content for table columns.
 * @prop {Array<Array<React.ReactNode>>} [props.data] - 2D array of table data for automatic table generation.
 *
 * @returns {JSX.Element} The rendered Table component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/table
 */
export const Table: FC<ILibTable> = ({
	className,
	ref,
	children,
	variant = "bordered",
	vAlign = "align-top",
	textAlign = "left",
	linkify,
	blank,
	headers,
	footers,
	data,
	...rest
}) => {
	return (
		<table
			ref={ref}
			className={clsx(
				"table bg-background w-full h-[1px] border-collapse border-spacing-0 table-fixed no-scrollbar [&_*]:no-scrollbar",
				TEXT_BASE_CLASSES,
				"text-(length:--font-size-small)",
				genLinkColor["primary"],
				genButtonColor["primary"],
				"[&_thead]:bg-primary-500 [&_thead]:text-white [&_thead]:font-bold",
				"[&_td]:overflow-x-scroll [&_td]:px-2 [&_td]:py-1 [&_th]:overflow-x-scroll [&_th]:px-2 [&_th]:py-1",
				"md:[&_td]:table-cell md:[&_th]:table-cell [&_td]:block [&_th]:block",
				variant === "bordered" && [
					"border border-gray-200",
					"[&_thead_th:not(:last-child)]:border-r [&_thead_th:not(:last-child)]:border-background [&_td]:border [&_td]:border-gray-200",
				],
				variant === "stripped" && [
					"[&_tbody_tr:nth-child(even)]:bg-gray-100",
				],
				variant === "border-bottom" && [
					"[&_tbody_tr]:border-b [&_tbody_tr]:border-b-gray-200",
				],
				genVAlign[vAlign],
				genTextAlign[textAlign],
				"table",
				className,
			)}
			{...rest}
		>
			{headers && (
				<thead className={clsx(genVAlign[vAlign])}>
					<tr className={clsx(genVAlign[vAlign])}>
						{headers.map(header => (
							<th
								className={clsx(genVAlign[vAlign])}
								key={uuid()}
							>
								{linkify && typeof header === "string"
									? linkifyText(header, blank)
									: header}
							</th>
						))}
					</tr>
				</thead>
			)}

			{data ? (
				<tbody className={clsx(genVAlign[vAlign])}>
					{data.map(row => (
						<tr key={uuid()}>
							{row.map(col => (
								<td key={uuid()}>
									{linkify && typeof col === "string"
										? linkifyText(col, blank)
										: col}
								</td>
							))}
						</tr>
					))}
				</tbody>
			) : (
				<tbody>{children}</tbody>
			)}

			{footers && (
				<tfoot>
					<tr>
						{footers.map(footer => (
							<td key={uuid()}>
								{linkify && typeof footer === "string"
									? linkifyText(footer, blank)
									: footer}
							</td>
						))}
					</tr>
				</tfoot>
			)}
		</table>
	)
}
