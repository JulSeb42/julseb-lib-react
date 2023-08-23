/*=============================================== Routes ===============================================*/

import { createBrowserRouter } from "react-router-dom"

import { Homepage } from "../pages/Homepage"

import { ColorsPage } from "../pages/styles/ColorsPage"
import { OverlaysPage } from "../pages/styles/OverlaysPage"

import { TextPage } from "../pages/styles/TextPage.tsx"
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
// prependRoute
]

export const router = createBrowserRouter(routes)
