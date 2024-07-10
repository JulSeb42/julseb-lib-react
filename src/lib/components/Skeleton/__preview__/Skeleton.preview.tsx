/*=============================================== SkeletonPreview ===============================================*/

import { Skeleton, SkeletonCard } from "../../../"
import {} from "../../../types"
import type { SkeletonProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const skeletonPreview: ComponentPreview<SkeletonProps> = {
    name: "Skeleton",
    component: Skeleton,
    category: "components",
    imports: ["Skeleton", "SkeletonCard", "SkeletonShine"],
    typeImports: "SkeletonProps",
    props: [
        { previewTitle: "Default" },
        {
            previewTitle: "With pulse animation",
            width: 200,
            height: 150,
            borderRadius: "l",
            animation: "pulse",
        },
        {
            previewTitle: "With shine animation",
            width: 200,
            height: 150,
            borderRadius: "l",
            animation: "shine",
        },
    ],
    demos: [
        {
            previewTitle: "Inside card & animation pulse",
            element: <SkeletonCardDemo1 />,
        },
        {
            previewTitle: "Inside card & animation shine",
            element: <SkeletonCardDemo2 />,
        },
    ],
}

function SkeletonCardDemo1() {
    return (
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
    )
}

function SkeletonCardDemo2() {
    return (
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
    )
}
