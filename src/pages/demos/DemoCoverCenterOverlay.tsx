/*=============================================== DemoCoverCenterOverlay ===============================================*/

import { CoverLayout } from "../../components"
import { Cover, Text } from "../../lib"

export function DemoCoverCenterOverlay() {
    return (
        <CoverLayout title="Cover Center Overlay">
            <Cover
                img="/images/cover-img.avif"
                alt="Cover"
                alignItems="center"
                justifyContent="center"
                overlay="black-80"
                padding="xs"
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
