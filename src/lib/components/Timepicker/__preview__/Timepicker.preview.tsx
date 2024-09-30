/*=============================================== TimepickerPreview ===============================================*/

import { Timepicker } from "../../../"
import type { ILibTimepicker } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import { TimepickerPreview } from "./Timepicker.demo"

export const timepickerPreview: ComponentPreview<ILibTimepicker> = {
    name: "Timepicker",
    component: Timepicker,
    category: "components",
    import: "Timepicker",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibTimepicker",
    additionalTypeImports: [
        "LibTimepickerHours",
        "LibTimepickerHalfTimes",
        "LibTimepickerQuarterTimes",
        "LibTimepickerMinutes",
    ],
    extends: ["HTMLInputElement"],
    previews: [
        {
            previewTitle: "With hour step",
            demo: <TimepickerPreview step="1h" />,
        },
        {
            previewTitle: "With half hour step",
            demo: <TimepickerPreview step="30min" />,
        },
        {
            previewTitle: "With quarter hour step",
            demo: <TimepickerPreview step="15min" />,
        },
        {
            previewTitle: "With minute step",
            demo: <TimepickerPreview step="1min" />,
        },
        {
            previewTitle: "With min and max times",
            demo: (
                <TimepickerPreview step="1h" minTime="06:00" maxTime="18:00" />
            ),
        },
        {
            previewTitle: "With different icon",
            demo: (
                <TimepickerPreview
                    label="Hello"
                    icon="calendar"
                    iconSize={16}
                    iconClock="calendar"
                    prefix="Hello"
                    listDirection="up"
                />
            ),
        },
    ],
}
