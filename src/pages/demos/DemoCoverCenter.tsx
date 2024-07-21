/*=============================================== DemoCoverCenter ===============================================*/

import React from "react"
import { CoverLayout } from "../../components"
import { Cover, Text } from "../../lib"

export function DemoCoverCenter() {
    return (
        <CoverLayout title="Cover Center">
            <Cover
                img="/images/cover-img.avif"
                alt="Cover"
                alignItems="center"
                justifyContent="center"
            >
                <Text tag="h1" display>
                    Title
                </Text>
                <Text tag="h2" display>
                    Subtitle
                </Text>
            </Cover>
        </CoverLayout>
    )
}
