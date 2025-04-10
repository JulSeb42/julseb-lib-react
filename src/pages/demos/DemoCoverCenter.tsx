import React from "react"
import { CoverLayout } from "../../components"
import { Cover, Text } from "../../lib"

export const DemoCoverCenter = () => {
    return (
        <CoverLayout title="Cover Center">
            <Cover
                img="/images/cover-img.avif"
                alt="Cover"
                alignItems="center"
                justifyContent="center"
                data-testid="testid"
                className="className"
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
