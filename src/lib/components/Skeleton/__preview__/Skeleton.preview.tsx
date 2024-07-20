/*=============================================== SkeletonPreview ===============================================*/

import { Skeleton, SkeletonCard } from "../../../"
import {} from "../../../types"
import type { ILibSkeleton } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const skeletonPreview: ComponentPreview<ILibSkeleton> = {
    name: "Skeleton",
    component: Skeleton,
    category: "components",
    import: "Skeleton",
    additionalImports: ["SkeletonCard", "SkeletonShine"],
    optionalImports: null,
    propsImport: "ILibSkeleton",
    additionalTypeImports: ["ILibSkeletonCard", "ILibSkeletonShine"],
    extends: ["HTMLDivElement"],
    previews: [
        {
            previewTitle: "With pulse animation",
            props: {
                width: 200,
                height: 150,
                borderRadius: "l",
                animation: "pulse",
            },
        },
        {
            previewTitle: "With shine animation",
            props: {
                width: 200,
                height: 150,
                borderRadius: "l",
                animation: "shine",
            },
        },
        {
            previewTitle: "Inside card & animation pulse",
            demo: <SkeletonCardDemo1 />,
        },
        {
            previewTitle: "Inside card & animation shine",
            demo: <SkeletonCardDemo2 />,
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
