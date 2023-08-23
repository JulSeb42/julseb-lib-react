/*=============================================== Page ===============================================*/

import { useEffect, type ReactNode } from "react"
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"

import { NavDemo } from "./NavDemo"
import { WrapperDemo } from "./layouts/WrapperDemo"
import { MainDemo } from "./layouts/MainDemo"

import { Text } from "../lib"
import { SITE_DATA } from "../data"

interface PageProps {
    title: string
    children?: ReactNode
}

export function Page({ title, children }: PageProps) {
    const { pathname, search } = useLocation()

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
    }, [pathname, search])

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
                    <Text tag="h1">{title}</Text>

                    {children}
                </MainDemo>
            </WrapperDemo>
        </>
    )
}
