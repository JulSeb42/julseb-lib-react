/*=============================================== DemoCoverBottomOverlay ===============================================*/

import { CoverLayout } from "../../components"
import { Cover, Text } from "../../lib"

export function DemoCoverBottomOverlay() {
    return (
        <CoverLayout title="Cover Bottom Overlay">
            <Cover
                img="/images/cover-img.avif"
                alt="Cover"
                alignItems="flex-start"
                justifyContent="flex-end"
                overlay="gradient-black"
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
