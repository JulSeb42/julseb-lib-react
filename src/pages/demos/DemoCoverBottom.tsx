/*=============================================== DemoCoverBottom ===============================================*/

import { CoverLayout } from "../../components"
import { Cover, Text } from "../../lib"

export const DemoCoverBottom = () => {
    return (
        <CoverLayout title="Cover Bottom">
            <Cover
                img="/images/cover-img.avif"
                alt="Cover"
                alignItems="flex-start"
                justifyContent="flex-end"
                height="70vh"
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
