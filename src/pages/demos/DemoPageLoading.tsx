/*=============================================== DemoPageLoading ===============================================*/

import { BasePage } from "../../components"
import { PageLoading } from "../../lib"

export function DemoPageLoading() {
    return (
        <BasePage title="Demo page loading">
            <PageLoading
                backgroundColor="secondary"
                loaderVariant={4}
                data-testid="testid"
                className="className"
            />
        </BasePage>
    )
}
