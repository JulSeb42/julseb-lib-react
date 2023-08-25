/*=============================================== SbDemoLayout ===============================================*/

import type { ReactNode } from "react"
import styled from "styled-components"

import { Text } from "../lib"

interface SbDemoLayoutProps {
    title: string
    children?: ReactNode | ReactNode[]
}

export function SbDemoLayout({ title, children }: SbDemoLayoutProps) {
    return (
        <Wrapper>
            <Main>
                <Text tag="h1">{title}</Text>
                {children}
            </Main>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 4rem 20px;
`

const Main = styled.main`
    max-width: 1000px;
    margin: 0 auto;
`
