/*=============================================== Routes ===============================================*/

import { createBrowserRouter } from "react-router-dom"

import { Homepage } from "../pages/Homepage"

/*====================== Styles ======================*/

import { ColorsPage } from "../pages/styles/ColorsPage"
import { OverlaysPage } from "../pages/styles/OverlaysPage"
import { TextPage } from "../pages/styles/TextPage"
import { ShadowsPage } from "../pages/styles/ShadowsPage"
import { RadiusesPage } from "../pages/styles/RadiusesPage"
import { ThemeProviderPage } from "../pages/styles/ThemeProviderPage"

/*====================== Layouts ======================*/

import { ContainerPage } from "../pages/layouts/ContainerPage.tsx"
import { SectionPage } from "../pages/layouts/SectionPage.tsx"
// prependHere

/*====================== Demos ======================*/
import { DemoMainDefault } from "../pages/demos/DemoMainDefault.tsx"
import { DemoMainLarge } from "../pages/demos/DemoMainLarge.tsx"
import { DemoMainForm } from "../pages/demos/DemoMainForm.tsx"
import { DemoMainNumber } from "../pages/demos/DemoMainNumber.tsx"
import { DemoMainFull } from "../pages/demos/DemoMainFull.tsx"
import { DemoAsideDefault } from "../pages/demos/DemoAsideDefault.tsx"
import { DemoAsideSmall } from "../pages/demos/DemoAsideSmall.tsx"
import { DemoAsideBoth } from "../pages/demos/DemoAsideBoth.tsx"

type Route = {
    path: string
    element: JSX.Element
}

const demos: Route[] = [
    { path: "/demos/main-default", element: <DemoMainDefault /> },
    { path: "/demos/main-large", element: <DemoMainLarge /> },
    { path: "/demos/main-form", element: <DemoMainForm /> },
    { path: "/demos/main-number", element: <DemoMainNumber /> },
    { path: "/demos/main-full", element: <DemoMainFull /> },
    { path: "/demos/aside-default", element: <DemoAsideDefault /> },
    { path: "/demos/aside-small", element: <DemoAsideSmall /> },
    { path: "/demos/aside-both-sides", element: <DemoAsideBoth /> },
]

export const routes: Route[] = [
    { path: "/", element: <Homepage /> },

    /*====================== Styles ======================*/

    { path: "/colors", element: <ColorsPage /> },
    { path: "/overlays", element: <OverlaysPage /> },
    { path: "/text", element: <TextPage /> },
    { path: "/shadows", element: <ShadowsPage /> },
    { path: "/radiuses", element: <RadiusesPage /> },
    { path: "/theme-provider", element: <ThemeProviderPage /> },

    /*====================== Layouts ======================*/

    { path: "/container", element: <ContainerPage /> },
    { path: "/section", element: <SectionPage /> },
    // prependRoute
]

export const router = createBrowserRouter([...routes, ...demos])
