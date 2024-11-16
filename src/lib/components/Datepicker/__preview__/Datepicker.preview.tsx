/*=============================================== DatepickerPreview ===============================================*/

import { useState } from "react"
import { getToday, addMonth, formatDate } from "@julseb-lib/utils"
import { Datepicker } from "../../../"
import type { ILibDatepicker } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const today = getToday()
const nextMonth = formatDate(addMonth(1))

const DatepickerDemo = (props: Omit<ILibDatepicker, "value" | "setValue">) => {
    const [value, setValue] = useState<string>(getToday())
    return <Datepicker value={value} setValue={setValue} {...props} />
}

export const datepickerPreview: ComponentPreview<ILibDatepicker> = {
    name: "Datepicker",
    component: Datepicker,
    category: "components",
    import: "Datepicker",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibDatepicker",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "Default",
            demo: <DatepickerDemo className="className" data-testid="testid" />,
        },
        {
            previewTitle: "With min and max dates",
            demo: (
                <DatepickerDemo
                    className="className"
                    data-testid="testid"
                    minDate={today}
                    maxDate={nextMonth}
                />
            ),
        },
        {
            previewTitle: "With validation",
            demo: (
                <DatepickerDemo
                    className="className"
                    data-testid="testid"
                    validation={{
                        status: false,
                        message: "Hello",
                    }}
                />
            ),
        },
        {
            previewTitle: "Light",
            demo: (
                <DatepickerDemo
                    className="className"
                    data-testid="testid"
                    inputBackground="light"
                />
            ),
        },
        {
            previewTitle: "Dark",
            demo: (
                <DatepickerDemo
                    className="className"
                    data-testid="testid"
                    inputBackground="dark"
                    calendarDirection="up"
                />
            ),
        },
        {
            previewTitle: "Disabled",
            demo: (
                <DatepickerDemo
                    className="className"
                    data-testid="testid"
                    calendarDirection="up"
                    disabled
                />
            ),
        },
        {
            previewTitle: "With different icons, prefix and label",
            demo: (
                <DatepickerDemo
                    className="className"
                    data-testid="testid"
                    calendarDirection="up"
                    icons={{
                        left: "mail",
                        prev: "arrow-left",
                        next: "arrow-right",
                        calendar: "clock",
                    }}
                    prefix="Hello"
                    label="Label"
                />
            ),
        },
    ],
}
