import type { FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { Linkify } from "../../"
import { THead } from "./THead"
import { TBody } from "./TBody"
import { Tr } from "./Tr"
import { Td } from "./Td"
import { StyledTable } from "./styles"
import type { ILibTable } from "./types"

/**
 * Table component for rendering a customizable table with optional headers, data, children, and linkified content.
 *
 * @component
 * @extends HTMLTableElement
 * @param {Object} props - Table props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {Ref<HTMLTableElement>} [props.ref] - Ref forwarded to the table element.
 * @param {Array<Array<React.ReactNode>>} [props.data] - Table data as an array of rows (only if children is not defined).
 * @param {ReactNode} [props.children] - Table content (only if data is not defined).
 * @param {Array<React.ReactNode>} [props.headers] - Table headers.
 * @param {"bordered" | "borderless" | "striped"} [props.variant="bordered"] - Table variant style.
 * @param {CssVerticalAlign} [props.vAlign="top"] - Vertical alignment for table cells.
 * @param {boolean} [props.linkify] - Whether to automatically linkify string content.
 * @param {string} [props.className] - Additional class names.
 * @param {any} [props.rest] - Additional props passed to the table element.
 * @returns {JSX.Element} The rendered Table component.
 *
 * @see https://documentation-components-react.vercel.app/components/table
 * @example
 * <Table
 *   headers={["Name", "Email"]}
 *   data={[
 *     ["Alice", "alice@email.com"],
 *     ["Bob", "bob@email.com"]
 *   ]}
 *   linkify
 * />
 */
export const Table: FC<ILibTable> = ({
    "data-testid": testid,
    ref,
    children,
    className,
    variant = "bordered",
    data,
    headers,
    linkify,
    vAlign = "top",
    ...rest
}) => {
    return (
        <StyledTable
            data-testid={testid}
            ref={ref}
            className={className}
            $vAlign={vAlign}
            $variant={variant}
            {...rest}
        >
            {headers && (
                <THead
                    data-testid={testid && `${testid}.THead`}
                    className={className && "THead"}
                >
                    <Tr
                        data-testid={testid && `${testid}.THead.Tr`}
                        className={className && "TheadTr"}
                    >
                        {headers.map(header => (
                            <Td
                                key={uuid()}
                                data-testid={testid && `${testid}.THead.Tr.Td`}
                                className={className && "TheadTd"}
                            >
                                {linkify && typeof header === "string" ? (
                                    <Linkify>{header}</Linkify>
                                ) : (
                                    header
                                )}
                            </Td>
                        ))}
                    </Tr>
                </THead>
            )}

            {data ? (
                <TBody
                    data-testid={testid && `${testid}.TBody`}
                    className={className && "TBody"}
                >
                    {data.map(row => {
                        return (
                            <Tr
                                key={uuid()}
                                data-testid={testid && `${testid}.TBody.Tr`}
                                className={className && "TBodyTr"}
                            >
                                {row.map(col => {
                                    return (
                                        <Td
                                            key={uuid()}
                                            data-testid={
                                                testid &&
                                                `${testid}.TBody.Tr.Td`
                                            }
                                            className={className && "TBodyTd"}
                                            noPadding={typeof col === "object"}
                                        >
                                            {linkify &&
                                            typeof col === "string" ? (
                                                <Linkify>{col}</Linkify>
                                            ) : (
                                                col
                                            )}
                                        </Td>
                                    )
                                })}
                            </Tr>
                        )
                    })}
                </TBody>
            ) : (
                children
            )}
        </StyledTable>
    )
}
