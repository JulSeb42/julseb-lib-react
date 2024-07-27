/*=============================================== SkeletonPreview ===============================================*/

import { Skeleton, SkeletonCard } from "../../../"
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
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "With shine animation",
            props: {
                width: 200,
                height: 150,
                borderRadius: "l",
                animation: "shine",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Inside card & animation pulse",
            demo: (
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
                    data-testid="testid"
                    className="className"
                >
                    <Skeleton
                        width="100%"
                        height={24}
                        borderRadius="s"
                        animation="pulse"
                        data-testid="testid"
                        className="className"
                    />
                    <Skeleton
                        width="90%"
                        height={24}
                        borderRadius="s"
                        animation="pulse"
                        data-testid="testid"
                        className="className"
                    />
                </SkeletonCard>
            ),
        },
        {
            previewTitle: "Inside card & animation shine",
            demo: (
                <SkeletonCard
                    flexDirection="column"
                    gap="xs"
                    border={{
                        width: 1,
                    }}
                    padding="s"
                    borderRadius="m"
                    isShiny
                    data-testid="testid"
                    className="className"
                >
                    <Skeleton
                        width={200}
                        height={150}
                        borderRadius="l"
                        data-testid="testid"
                        className="className"
                    />
                    <Skeleton
                        width="100%"
                        height={24}
                        borderRadius="s"
                        data-testid="testid"
                        className="className"
                    />
                    <Skeleton
                        width="90%"
                        height={24}
                        borderRadius="s"
                        data-testid="testid"
                        className="className"
                    />
                </SkeletonCard>
            ),
        },
    ],
}
