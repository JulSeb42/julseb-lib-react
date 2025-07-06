import type { ReactElement } from "react"
import { createBrowserRouter } from "react-router-dom"
import { slugify, toKebabCase } from "@julseb-lib/utils"
import { Homepage } from "../pages/Homepage"
import { NotFound } from "../pages/NotFound"
import { ComponentPage } from "../pages/Component"
import { MainDefaultDemo } from "../pages/demos/MainDefaultDemo"
import { AsideLeftDemo } from "../pages/demos/AsideDefaultDemo"
import { MainLargeDemo } from "../pages/demos/MainLargeDemo"
import { MainFormDemo } from "../pages/demos/MainFormDemo"
import { AsideRightDemo } from "../pages/demos/AsideRightDemo"
import { AsideBothDemo } from "../pages/demos/AsideBothDemo"
import { CoverCenterDemo } from "../pages/demos/CoverCenterDemo"
import { CoverCenterOverlayDemo } from "../pages/demos/CoverCenterOverlayDemo"
import { CoverBottomDemo } from "../pages/demos/CoverBottomDemo"
import { CoverBottomOverlayDemo } from "../pages/demos/CoverBottomOverlayDemo"
import { PageLoadingDemo } from "../pages/demos/PageLoadingDemo"
/* Prepend demo import - DO NOT REMOVE */

export type Route = {
	path: string
	element: ReactElement
}

export type ComponentPaths = Array<Pick<Route, "path">>

const demos: Array<Route> = [
	{ path: "/main/demo-default", element: <MainDefaultDemo /> },
	{ path: "/main/demo-large", element: <MainLargeDemo /> },
	{ path: "/main/demo-form", element: <MainFormDemo /> },
	{ path: "/aside/demo-left", element: <AsideLeftDemo /> },
	{ path: "/aside/demo-right", element: <AsideRightDemo /> },
	{ path: "/aside/demo-both", element: <AsideBothDemo /> },
	{ path: "/cover/demo-center", element: <CoverCenterDemo /> },
	{ path: "/cover/demo-center-overlay", element: <CoverCenterOverlayDemo /> },
	{ path: "/cover/demo-bottom", element: <CoverBottomDemo /> },
	{ path: "/cover/demo-bottom-overlay", element: <CoverBottomOverlayDemo /> },
	{ path: "/page-loading/demo", element: <PageLoadingDemo /> },
	/* Prepend here - DO NOT REMOVE */
]

export const routes: Array<Route> = [
	{ path: "*", element: <NotFound /> },
	{ path: "/", element: <Homepage /> },
	{ path: "/:componentName", element: <ComponentPage /> },
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
