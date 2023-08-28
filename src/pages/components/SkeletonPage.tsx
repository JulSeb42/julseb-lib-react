/*=============================================== SkeletonPage ===============================================*/

import { Page } from "../../components"
import { SkeletonCard, Skeleton } from "../../lib"

export function SkeletonPage() {
    return (
        <Page title="Skeleton">
            <Skeleton
                width={200}
                height={150}
                borderRadius="l"
                animation="pulse"
            />

            <Skeleton
                width={200}
                height={150}
                borderRadius="l"
                animation="shine"
            />

            <SkeletonCard
                flexDirection="column"
                gap="xs"
                border={{ width: 2 }}
                borderRadius={{
                    topLeft: "xxl",
                    topRight: "xs",
                    bottomLeft: "m",
                    bottomRight: "l",
                }}
                // borderRadius="s"
            >
                <Skeleton
                    width="100%"
                    height={24}
                    borderRadius="s"
                    animation="pulse"
                />
                <Skeleton
                    width="90%"
                    height={24}
                    borderRadius="s"
                    animation="pulse"
                />
            </SkeletonCard>

            <SkeletonCard
                flexDirection="column"
                gap="xs"
                border={{
                    width: 1,
                }}
                padding="s"
                borderRadius="m"
                isShiny
            >
                <Skeleton width={200} height={150} borderRadius="l" />
                <Skeleton width="100%" height={24} borderRadius="s" />
                <Skeleton width="90%" height={24} borderRadius="s" />
            </SkeletonCard>
        </Page>
    )
}
