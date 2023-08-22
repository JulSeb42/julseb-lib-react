/*=============================================== Routes ===============================================*/

import { createBrowserRouter } from "react-router-dom"

import { Homepage } from "../pages/Homepage"

import { ColorsPage } from "../pages/styles/ColorsPage"

// prependHere

type Route = {
    path: string
    element: JSX.Element
}

export const routes: Route[] = [
    { path: "/", element: <Homepage /> },

    { path: "/colors", element: <ColorsPage /> },
    // prependRoute
]

export const router = createBrowserRouter(routes)
