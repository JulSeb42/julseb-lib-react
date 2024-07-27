import { useRef, useState } from "react"
import { useClickOutside, Button } from "../../../../lib"

export function PreviewUseClickOutside() {
    const [click, setClick] = useState<"nowhere" | "inside" | "outside">(
        "nowhere"
    )
    const ref = useRef<HTMLButtonElement>(null)
    useClickOutside(ref, () => setClick("outside"))

    return (
        <div>
            <Button ref={ref as any} onClick={() => setClick("inside")}>
                You clicked {click}
            </Button>
        </div>
    )
}
