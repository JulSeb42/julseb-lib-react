/*=============================================== Routes ===============================================*/

import { createBrowserRouter } from "react-router-dom"
import { slugify, toKebabCase } from "ts-utils-julseb"

/*====================== Root ======================*/

import { Homepage } from "../pages/Homepage"
import { Generate } from "../pages/Generate"
import { NotFoundPage } from "../pages/404"

/*====================== Components ======================*/

// import { IconPage } from "../pages/components/IconPage"
// import { KeyPage } from "../pages/components/KeyPage"
// import { TextIconPage } from "../pages/components/TextIconPage"
// import { HighlightPage } from "../pages/components/HighlightPage"
// import { LinkifyPage } from "../pages/components/LinkifyPage"
// import { TooltipPage } from "../pages/components/TooltipPage"
// import { HrPage } from "../pages/components/HrPage"
// import { SkeletonPage } from "../pages/components/SkeletonPage"
// import { ImagePage } from "../pages/components/ImagePage"
// import { MasonryPage } from "../pages/components/MasonryPage"
// import { FullBleedPage } from "../pages/components/FullBleedPage"
// import { VideoPage } from "../pages/components/VideoPage"
// import { YoutubePage } from "../pages/components/YoutubePage"
// import { BadgePage } from "../pages/components/BadgePage"
// import { AvatarPage } from "../pages/components/AvatarPage"
// import { LoaderPage } from "../pages/components/LoaderPage"
// import { BurgerPage } from "../pages/components/BurgerPage"
// import { ButtonPage } from "../pages/components/ButtonPage"
// import { ButtonIconPage } from "../pages/components/ButtonIconPage"
// import { ButtonGroupPage } from "../pages/components/ButtonGroupPage"
// import { TagPage } from "../pages/components/TagPage"
// import { TruncatePage } from "../pages/components/TruncatePage"
// import { CardPage } from "../pages/components/CardPage"
// import { InputPage } from "../pages/components/InputPage"
// import { InputImagePage } from "../pages/components/InputImagePage"
// import { InputCheckPage } from "../pages/components/InputCheckPage"
// import { InputPhonePage } from "../pages/components/InputPhonePage"
// import { InputCounterPage } from "../pages/components/InputCounterPage"
// import { InputSliderPage } from "../pages/components/InputSliderPage"
// import { SelectPage } from "../pages/components/SelectPage"
// import { AutocompletePage } from "../pages/components/AutocompletePage"
// import { RatingPage } from "../pages/components/RatingPage"
// import { FormPage } from "../pages/components/FormPage"
// import { ListGroupPage } from "../pages/components/ListGroupPage"
// import { BreadcrumbsPage } from "../pages/components/BreadcrumbsPage"
// import { AccordionPage } from "../pages/components/AccordionPage"
// import { DropdownPage } from "../pages/components/DropdownPage"
// import { ToastPage } from "../pages/components/ToastPage"
// import { AlertPage } from "../pages/components/AlertPage"
// import { ModalPage } from "../pages/components/ModalPage"
// import { PaginationPage } from "../pages/components/PaginationPage"
// import { PaginatorPage } from "../pages/components/PaginatorPage"
// import { StepperPage } from "../pages/components/StepperPage"
// import { ProgressBarPage } from "../pages/components/ProgressBarPage"

import { ComponentPage } from "../pages/components/ComponentPage"

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
]

export const routes: Array<Route> = [
    { path: "*", element: <NotFoundPage /> },
    { path: "/", element: <Homepage /> },
    { path: "/generate", element: <Generate /> },
    { path: "/:componentName", element: <ComponentPage /> },

    // { path: "/icon", element: <IconPage /> },
    // { path: "/key", element: <KeyPage /> },
    // { path: "/text-icon", element: <TextIconPage /> },
    // { path: "/highlight", element: <HighlightPage /> },
    // { path: "/linkify", element: <LinkifyPage /> },
    // { path: "/tooltip", element: <TooltipPage /> },
    // { path: "/hr", element: <HrPage /> },
    // { path: "/skeleton", element: <SkeletonPage /> },
    // { path: "/image", element: <ImagePage /> },
    // { path: "/masonry", element: <MasonryPage /> },
    // { path: "/full-bleed", element: <FullBleedPage /> },
    // { path: "/video", element: <VideoPage /> },
    // { path: "/youtube", element: <YoutubePage /> },
    // { path: "/badge", element: <BadgePage /> },
    // { path: "/avatar", element: <AvatarPage /> },
    // { path: "/loader", element: <LoaderPage /> },
    // { path: "/burger", element: <BurgerPage /> },
    // { path: "/button", element: <ButtonPage /> },
    // { path: "/button-icon", element: <ButtonIconPage /> },
    // { path: "/button-group", element: <ButtonGroupPage /> },
    // { path: "/tag", element: <TagPage /> },
    // { path: "/truncate", element: <TruncatePage /> },
    // { path: "/card", element: <CardPage /> },
    // { path: "/input", element: <InputPage /> },
    // { path: "/input-image", element: <InputImagePage /> },
    // { path: "/input-check", element: <InputCheckPage /> },
    // { path: "/input-phone", element: <InputPhonePage /> },
    // { path: "/input-counter", element: <InputCounterPage /> },
    // { path: "/input-slider", element: <InputSliderPage /> },
    // { path: "/select", element: <SelectPage /> },
    // { path: "/autocomplete", element: <AutocompletePage /> },
    // { path: "/rating", element: <RatingPage /> },
    // { path: "/form", element: <FormPage /> },
    // { path: "/list-group", element: <ListGroupPage /> },
    // { path: "/breadcrumbs", element: <BreadcrumbsPage /> },
    // { path: "/accordion", element: <AccordionPage /> },
    // { path: "/dropdown", element: <DropdownPage /> },
    // { path: "/toast", element: <ToastPage /> },
    // { path: "/alert", element: <AlertPage /> },
    // { path: "/modal", element: <ModalPage /> },
    // { path: "/pagination", element: <PaginationPage /> },
    // { path: "/paginator", element: <PaginatorPage /> },
    // { path: "/stepper", element: <StepperPage /> },
    // { path: "/progress-bar", element: <ProgressBarPage /> },
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
