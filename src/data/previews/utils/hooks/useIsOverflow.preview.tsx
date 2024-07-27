import { useRef } from "react"
import { useIsOverflow } from "../../../../lib"

export function PreviewUseIsOverflow() {
    const ref = useRef<HTMLDivElement>(null)
    const isOverflow = useIsOverflow(ref, {
        callback: c => console.log({ c }),
        check: "height",
    })

    return (
        <div style={{ width: "100%" }} ref={ref}>
            <p>Overflowing: {isOverflow ? isOverflow.toString() : "false"}</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus aspernatur ut beatae inventore ipsum totam, dolor
                voluptas atque nihil dolores fugiat, voluptatum minima
                temporibus ea dignissimos eveniet rerum eius animi.
            </p>
        </div>
    )
}
