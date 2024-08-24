/*=============================================== TimepickerPreview ===============================================*/

import { useState } from "react"
import { Timepicker } from "../../../"
import type {
    LibTimepickerHours,
    LibTimepickerHalfTimes,
    LibTimepickerQuarterTimes,
    LibTimepickerMinutes,
} from "../../../types"
import type { ILibTimepicker } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

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

function TimepickerPreview(
    props: Partial<Exclude<ILibTimepicker, "value" | "setValue">>
) {
    const [valueHour, setValueHour] = useState<LibTimepickerHours>("06:00")
    const [valueHalfHour, setValueHalfHour] =
        useState<LibTimepickerHalfTimes>("06:30")
    const [valueQuarterHour, setValueQuarterHour] =
        useState<LibTimepickerQuarterTimes>("06:45")
    const [valueMinute, setValueMinute] =
        useState<LibTimepickerMinutes>("03:12")

    if (props.step === "30min")
        return (
            <Timepicker
                {...props}
                data-testid="testid"
                className="className"
                step="30min"
                value={valueHalfHour}
                setValue={setValueHalfHour}
            />
        )

    if (props.step === "15min")
        return (
            <Timepicker
                {...props}
                data-testid="testid"
                className="className"
                step="15min"
                value={valueQuarterHour}
                setValue={setValueQuarterHour}
            />
        )

    if (props.step === "1min")
        return (
            <Timepicker
                {...props}
                data-testid="testid"
                className="className"
                step="1min"
                value={valueMinute}
                setValue={setValueMinute}
            />
        )

    return (
        <Timepicker
            {...(props as any)}
            data-testid="testid"
            className="className"
            step="1h"
            value={valueHour}
            setValue={setValueHour}
        />
    )
}
