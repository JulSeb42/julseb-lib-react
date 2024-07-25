/*=============================================== Routes ===============================================*/

import { createBrowserRouter } from "react-router-dom"
import { slugify, toKebabCase } from "ts-utils-julseb"

/*====================== Root ======================*/

import { Homepage } from "../pages/Homepage"
import { Generate } from "../pages/Generate"
import { NotFoundPage } from "../pages/404"

/*====================== Components ======================*/

import { ComponentPage } from "../pages/components/ComponentPage"

/*====================== Demos ======================*/

import { DemoMainDefault } from "../pages/demos/DemoMainDefault"
import { DemoMainLarge } from "../pages/demos/DemoMainLarge"
import { DemoMainForm } from "../pages/demos/DemoMainForm"
import { DemoMainNumber } from "../pages/demos/DemoMainNumber"
import { DemoMainFull } from "../pages/demos/DemoMainFull"
import { DemoAsideDefault } from "../pages/demos/DemoAsideDefault"
import { DemoAsideSmall } from "../pages/demos/DemoAsideSmall"
import { DemoAsideBoth } from "../pages/demos/DemoAsideBoth"
import { DemoCoverCenter } from "../pages/demos/DemoCoverCenter"
import { DemoCoverCenterOverlay } from "../pages/demos/DemoCoverCenterOverlay"
import { DemoCoverBottom } from "../pages/demos/DemoCoverBottom"
import { DemoCoverBottomOverlay } from "../pages/demos/DemoCoverBottomOverlay"
import { DemoPageLoading } from "../pages/demos/DemoPageLoading"
import { BackToTopDemo } from "../pages/demos/BackToTopDemo"
import { DemoHeader } from "../pages/demos/DemoHeader"

export type Route = {
    path: string
    element: JSX.Element
}

export type ComponentPaths = Array<Pick<Route, "path">>

const demos: Array<Route> = [
    { path: "/demos/main-default", element: <DemoMainDefault /> },
    { path: "/demos/main-large", element: <DemoMainLarge /> },
    { path: "/demos/main-form", element: <DemoMainForm /> },
    { path: "/demos/main-number", element: <DemoMainNumber /> },
    { path: "/demos/main-full", element: <DemoMainFull /> },
    { path: "/demos/aside-default", element: <DemoAsideDefault /> },
    { path: "/demos/aside-small", element: <DemoAsideSmall /> },
    { path: "/demos/aside-both-sides", element: <DemoAsideBoth /> },

    { path: "/cover/cover-center", element: <DemoCoverCenter /> },
    {
        path: "/cover/cover-center-overlay",
        element: <DemoCoverCenterOverlay />,
    },
    { path: "/cover/cover-bottom", element: <DemoCoverBottom /> },
    {
        path: "/cover/cover-bottom-overlay",
        element: <DemoCoverBottomOverlay />,
    },

    { path: "/page-loading/demo", element: <DemoPageLoading /> },

    { path: "/back-to-top/demo", element: <BackToTopDemo /> },

    { path: "/header/demo", element: <DemoHeader /> },
]

export const routes: Array<Route> = [
    { path: "*", element: <NotFoundPage /> },
    { path: "/", element: <Homepage /> },
    { path: "/generate", element: <Generate /> },
    { path: "/:componentName", element: <ComponentPage /> },

    // prependRoute
    // { path: "/reset-scroll", element: <></> },
]

export const routesPaths: ComponentPaths = routes
    .filter(route => route.path !== "/:componentName" && route.path !== "*")
    .map(route => ({
        path:
            route.path === "/"
                ? "/"
                : `/${toKebabCase(slugify(route.path.replaceAll("/", "")))}`,
    }))

export const router = createBrowserRouter([...routes, ...demos])
