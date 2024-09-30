/*=============================================== DemoPageLoading ===============================================*/

import type { FC } from "react"
import { BasePage } from "../../components"
import { PageLoading } from "../../lib"

export const DemoPageLoading: FC = () => {
    return (
        <BasePage title="Demo page loading">
            <PageLoading
                backgroundColor="secondary"
                // loaderVariant={4}
                data-testid="testid"
                className="className"
            />
        </BasePage>
    )
}
