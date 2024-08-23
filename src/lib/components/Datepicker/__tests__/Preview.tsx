/*=============================================== Datapicker tests preview ===============================================*/

import { useState } from "react"
import { Datepicker } from "../../../"
import type { ILibDatepicker } from "../../../types/components-props"

export function DatepickerDemo(
    props: Omit<ILibDatepicker, "value" | "setValue">
) {
    const [value, setValue] = useState<string>("2024-08-23")

    return (
        <Datepicker
            value={value}
            setValue={setValue}
            data-testid="testid"
            className="className"
            {...props}
        />
    )
}
