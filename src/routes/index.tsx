import type { ReactElement } from "react"
import { slugify, toKebabCase } from "@julseb-lib/utils"

import { Homepage } from "../pages/Homepage"
import { NotFound } from "../pages/NotFound"
import { ComponentPage } from "../pages/Component"

export type Route = {
	path: string
	element: ReactElement
}

export type ComponentPaths = Array<Pick<Route, "path">>

export const routes: Array<Route> = [
	{ path: "*", element: <NotFound /> },
	{ path: "/", element: <Homepage /> },
	{ path: "/:componentName", element: <ComponentPage /> },

	/* Prepend here - DO NOT REMOVE */
]

export const routesPaths: ComponentPaths = routes
	.filter(route => route.path !== "/:componentName" && route.path !== "*")
	.map(route => ({
		path:
			route.path === "/"
				? "/"
				: `/${toKebabCase(slugify(route.path.replaceAll("/", "")))}`,
	}))
