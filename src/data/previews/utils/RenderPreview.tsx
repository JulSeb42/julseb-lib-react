import { capitalize, uuid } from "ts-utils-julseb"
import { Table, CodeContainer } from "../../../lib"
import type { ReactChildren } from "../../../lib/types"

interface IRenderPreview {
    data: Array<any>
    withCode?: boolean
}

export function RenderPreview({ data, withCode }: IRenderPreview) {
    if (!data?.length) return null

    const headers = Object.keys(data[0]).map(v => capitalize(v))
    const tableData = data.map(u => Object.values(u).map(v => v))

    const tableDataWithCode = data.map(u =>
        Object.values(u).map((v: any, i) => {
            if (i === Object.values(u).length - 1) {
                return (
                    <CodeContainer
                        key={uuid()}
                        highlighterProps={{ language: "typescript" }}
                        copyButton={false}
                        color="white"
                        highlighterStyle={{ height: "100%" }}
                    >
                        {`${v}${
                            typeof v === "string" &&
                            v[0] !== "&" &&
                            v[v.length - 1] !== ";"
                                ? ";"
                                : ""
                        }`}
                    </CodeContainer>
                )
            } else {
                return v
            }
        })
    )

    if (!data.length) return null

    if (withCode) return <Table headers={headers} data={tableDataWithCode} />

    return (
        <Table
            headers={headers}
            data={tableData as Array<Array<ReactChildren>>}
        />
    )
}
