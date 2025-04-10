import { forwardRef } from "react"
import { uuid } from "@julseb-lib/utils"
import { Linkify } from "../../"
import { THead } from "./THead"
import { TBody } from "./TBody"
import { Tr } from "./Tr"
import { Td } from "./Td"
import { StyledTable } from "./styles"
import type { ILibTable } from "./types"

/**
 * @description Returns a Table component
 * @link https://documentation-components-react.vercel.app/components/table
 * @extends HTMLTableElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLTableElement>
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
                                                className={
                                                    className && "TBodyTd"
                                                }
                                                noPadding={
                                                    typeof col === "object"
                                                }
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
)
