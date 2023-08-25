/*=============================================== Routes ===============================================*/

import { createBrowserRouter } from "react-router-dom"

import { Homepage } from "../pages/Homepage"
import { Generate } from "../pages/Generate"

/*====================== Styles ======================*/

import { ColorsPage } from "../pages/styles/ColorsPage"
import { OverlaysPage } from "../pages/styles/OverlaysPage"
import { TextPage } from "../pages/styles/TextPage"
import { ShadowsPage } from "../pages/styles/ShadowsPage"
import { SpacersPage } from "../pages/styles/SpacersPage"
import { RadiusesPage } from "../pages/styles/RadiusesPage"
import { ThemeProviderPage } from "../pages/styles/ThemeProviderPage"

/*====================== Layouts ======================*/

import { ContainerPage } from "../pages/layouts/ContainerPage"
import { SectionPage } from "../pages/layouts/SectionPage"
import { GridPage } from "../pages/layouts/GridPage"
import { FlexboxPage } from "../pages/layouts/FlexboxPage"
import { IconPage } from "../pages/components/IconPage"
import { KeyPage } from "../pages/components/KeyPage"
import { TextIconPage } from "../pages/components/TextIconPage"
import { HighlightPage } from "../pages/components/HighlightPage"
import { SkeletonPage } from "../pages/components/SkeletonPage"
// prependHere

/*====================== Demos ======================*/
import { DemoMainDefault } from "../pages/demos/DemoMainDefault"
import { DemoMainLarge } from "../pages/demos/DemoMainLarge"
import { DemoMainForm } from "../pages/demos/DemoMainForm"
import { DemoMainNumber } from "../pages/demos/DemoMainNumber"
import { DemoMainFull } from "../pages/demos/DemoMainFull"
import { DemoAsideDefault } from "../pages/demos/DemoAsideDefault"
import { DemoAsideSmall } from "../pages/demos/DemoAsideSmall"
import { DemoAsideBoth } from "../pages/demos/DemoAsideBoth"

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
    { path: "/generate", element: <Generate /> },

    /*====================== Styles ======================*/

    { path: "/colors", element: <ColorsPage /> },
    { path: "/overlays", element: <OverlaysPage /> },
    { path: "/text", element: <TextPage /> },
    { path: "/shadows", element: <ShadowsPage /> },
    { path: "/spacers", element: <SpacersPage /> },
    { path: "/radiuses", element: <RadiusesPage /> },
    { path: "/theme-provider", element: <ThemeProviderPage /> },

    /*====================== Layouts ======================*/

    { path: "/container", element: <ContainerPage /> },
    { path: "/section", element: <SectionPage /> },
    { path: "/grid", element: <GridPage /> },
    { path: "/flexbox", element: <FlexboxPage /> },
    { path: "/icon", element: <IconPage /> },
{ path: "/key", element: <KeyPage /> },
{ path: "/text-icon", element: <TextIconPage /> },
{ path: "/highlight", element: <HighlightPage /> },
{ path: "/skeleton", element: <SkeletonPage /> },
// prependRoute
]

export const router = createBrowserRouter([...routes, ...demos])
