/*=============================================== Table component ===============================================*/

import { forwardRef } from "react"
import { uuid } from "ts-utils-julseb"
import { Linkify } from "../../"
import { StyledTable, StyledTd } from "./styles"
import type { ILibTable } from "./types"

/**
 * @description Returns a Table component
 * @link https://documentation-components-react.vercel.app/components/table
 * @extends HTMLTableElement
 * @prop data-testid?: string
 * @prop data: Array<Array<ReactChildren>> => only if children is not defined
 * @prop children?: ReactChildren => only if data is not defined
 * @prop headers?: Array<ReactChildren>
 * @prop variant?: LibTableVariant
 * @prop vAlign?: CssVerticalAlign
 * @prop linkify?: boolean
 */

export const Table = forwardRef<HTMLTableElement, ILibTable>(
    (
        {
            "data-testid": testid,
            children,
            className,
            variant = "bordered",
            data,
            headers,
            linkify,
            vAlign = "top",
            ...rest
        },
        ref
    ) => {
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
                    <thead
                        data-testid={testid && `${testid}.THead`}
                        className={className && "THead"}
                    >
                        <tr
                            data-testid={testid && `${testid}.THead.Tr`}
                            className={className && "TheadTr"}
                        >
                            {headers.map(header => (
                                <td
                                    key={uuid()}
                                    data-testid={
                                        testid && `${testid}.THead.Tr.Td`
                                    }
                                    className={className && "TheadTd"}
                                >
                                    {linkify && typeof header === "string" ? (
                                        <Linkify>{header}</Linkify>
                                    ) : (
                                        header
                                    )}
                                </td>
                            ))}
                        </tr>
                    </thead>
                )}

                {data ? (
                    <tbody
                        data-testid={testid && `${testid}.TBody`}
                        className={className && "TBody"}
                    >
                        {data.map(row => {
                            return (
                                <tr
                                    key={uuid()}
                                    data-testid={testid && `${testid}.TBody.Tr`}
                                    className={className && "TBodyTr"}
                                >
                                    {row.map(col => {
                                        return (
                                            <StyledTd
                                                key={uuid()}
                                                data-testid={
                                                    testid &&
                                                    `${testid}.TBody.Tr.Td`
                                                }
                                                className={
                                                    className && "TBodyTd"
                                                }
                                                $noPadding={
                                                    typeof col === "object"
                                                }
                                            >
                                                {linkify &&
                                                typeof col === "string" ? (
                                                    <Linkify>{col}</Linkify>
                                                ) : (
                                                    col
                                                )}
                                            </StyledTd>
                                        )
                                    })}
                                    {/* {row.map(col => {
                                        return (
                                            <StyledTd
                                                key={uuid()}
                                                data-testid={
                                                    testid &&
                                                    `${testid}.TBody.Tr.Td`
                                                }
                                                className={
                                                    className && "TBodyTd"
                                                }
                                                $noPadding={
                                                    typeof col === "object"
                                                }
                                            >
                                                {linkify &&
                                                typeof col === "string" ? (
                                                    <Linkify>{col}</Linkify>
                                                ) : (
                                                    col
                                                )}
                                            </StyledTd>
                                        )
                                    })} */}
                                </tr>
                            )
                        })}
                    </tbody>
                ) : (
                    children
                )}
            </StyledTable>
        )
    }
)
