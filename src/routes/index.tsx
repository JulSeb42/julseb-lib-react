/*=============================================== Routes ===============================================*/

import { createBrowserRouter } from "react-router-dom"

import { Homepage } from "../pages/Homepage"

import { ColorsPage } from "../pages/styles/ColorsPage"
import { OverlaysPage } from "../pages/styles/OverlaysPage"
import { TextPage } from "../pages/styles/TextPage"
import { ShadowsPage } from "../pages/styles/ShadowsPage"
import { RadiusesPage } from "../pages/styles/RadiusesPage"
// prependHere

type Route = {
    path: string
    element: JSX.Element
}

export const routes: Route[] = [
    { path: "/", element: <Homepage /> },

    { path: "/colors", element: <ColorsPage /> },
    { path: "/overlays", element: <OverlaysPage /> },
    { path: "/text", element: <TextPage /> },
    { path: "/shadows", element: <ShadowsPage /> },
    { path: "/radiuses", element: <RadiusesPage /> },
    // prependRoute
]

export const router = createBrowserRouter(routes)
