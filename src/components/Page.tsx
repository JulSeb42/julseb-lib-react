/*=============================================== Page ===============================================*/

import { BasePage, type BasePageProps } from "./BasePage"
import { NavDemo } from "./NavDemo"
import { WrapperDemo } from "./layouts/WrapperDemo"
import { MainDemo } from "./layouts/MainDemo"

import { Text } from "../lib"

export function Page({ title, children }: BasePageProps) {
    return (
        <BasePage title={title}>
            <NavDemo />

            <WrapperDemo>
                <MainDemo>
                    <Text tag="h1">{title}</Text>

                    {children}
                </MainDemo>
            </WrapperDemo>
        </BasePage>
    )
}
