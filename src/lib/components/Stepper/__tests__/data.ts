/*=============================================== Stepper tests data ===============================================*/

import type { LibStep } from "../../../types"

export const stepperTestsData: Array<LibStep> = [
    {
        text: "Step",
        to: "#",
        "data-testid": "passed",
    },
    {
        text: "Step",
        href: "#",
        "data-testid": "active",
    },
    {
        text: "Step",
        onClick: () => alert("hello"),
        "data-testid": "next",
    },
    {
        text: "Step",
    },
    {
        text: "Step",
    },
]

export const ACTIVE_STEP = 1
