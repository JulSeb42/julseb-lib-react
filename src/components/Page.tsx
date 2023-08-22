/*=============================================== Page ===============================================*/

import type { ReactNode } from "react"
import { Helmet } from "react-helmet"

import { NavDemo } from "./NavDemo"
import { WrapperDemo } from "./layouts/WrapperDemo"
import { MainDemo } from "./layouts/MainDemo"

import { SITE_DATA } from "../data"

interface PageProps {
    title: string
    children?: ReactNode
}

export function Page({ title, children }: PageProps) {
    return (
        <>
            <Helmet>
                <title>
                    {title} | {SITE_DATA.TITLE}
                </title>
            </Helmet>

            <NavDemo />

            <WrapperDemo>
                <MainDemo>
                    <h1>{title}</h1>

                    {children}
                </MainDemo>
            </WrapperDemo>
        </>
    )
}
