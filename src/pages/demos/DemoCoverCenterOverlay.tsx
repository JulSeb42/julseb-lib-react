import { CoverLayout } from "../../components"
import { Cover, Text } from "../../lib"

export const DemoCoverCenterOverlay = () => {
    return (
        <CoverLayout title="Cover Center Overlay">
            <Cover
                img="/images/cover-img.avif"
                alt="Cover"
                alignItems="center"
                justifyContent="center"
                overlay="black-80"
                padding="xs"
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
