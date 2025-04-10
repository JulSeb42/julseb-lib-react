import styled from "styled-components"
import { Text } from "../lib"
import type { ReactChildren } from "../lib/types"

interface SbDemoLayoutProps {
    title: string
    children?: ReactChildren
}

export const SbDemoLayout = ({ title, children }: SbDemoLayoutProps) => {
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
