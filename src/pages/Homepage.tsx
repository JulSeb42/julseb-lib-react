/*=============================================== Homepage ===============================================*/

import { toPascalCase } from "ts-utils-julseb"
import { Page } from "../components"

export function Homepage() {
    const components = [
        // { path: "/key", element: "KeyPage" },
        // { path: "/text-icon", element: "TextIconPage" },
        // { path: "/highlight", element: "HighlightPage" },
        // { path: "/linkify", element: "LinkifyPage" },
        // { path: "/tooltip", element: "TooltipPage" },
        // { path: "/hr", element: "HrPage" },
        // { path: "/skeleton", element: "SkeletonPage" },
        // { path: "/image", element: "ImagePage" },
        // { path: "/masonry", element: "MasonryPage" },
        // { path: "/full-bleed", element: "FullBleedPage" },
        // { path: "/video", element: "VideoPage" },
        // { path: "/youtube", element: "YoutubePage" },
        // { path: "/badge", element: "BadgePage" },
        // { path: "/avatar", element: "AvatarPage" },
        // { path: "/loader", element: "LoaderPage" },
        // { path: "/burger", element: "BurgerPage" },
        // { path: "/button", element: "ButtonPage" },
        // { path: "/button-icon", element: "ButtonIconPage" },
        // { path: "/button-group", element: "ButtonGroupPage" },
        { path: "/tag", element: "TagPage" },
        { path: "/truncate", element: "TruncatePage" },
        { path: "/card", element: "CardPage" },
        { path: "/input", element: "InputPage" },
        { path: "/input-image", element: "InputImagePage" },
        { path: "/input-check", element: "InputCheckPage" },
        { path: "/input-phone", element: "InputPhonePage" },
        { path: "/input-counter", element: "InputCounterPage" },
        { path: "/input-slider", element: "InputSliderPage" },
        { path: "/select", element: "SelectPage" },
        { path: "/autocomplete", element: "AutocompletePage" },
        { path: "/rating", element: "RatingPage" },
        { path: "/form", element: "FormPage" },
        { path: "/list-group", element: "ListGroupPage" },
        { path: "/breadcrumbs", element: "BreadcrumbsPage" },
        { path: "/dropdown", element: "DropdownPage" },
        { path: "/toast", element: "ToastPage" },
        { path: "/alert", element: "AlertPage" },
        { path: "/modal", element: "ModalPage" },
        { path: "/pagination", element: "PaginationPage" },
        { path: "/paginator", element: "PaginatorPage" },
        { path: "/stepper", element: "StepperPage" },
        { path: "/progress-bar", element: "ProgressBarPage" },
    ].map(a => toPascalCase(a.path.replaceAll("/", "")))

    const mixins = [
        "ColorsShort",
        "AllColors",
        "ColorsAndOverlays",
        "ColorsHoverDefault",
        "ColorsHoverHover",
        "ColorsHoverActive",
        "ColorsGhostDefault",
        "ColorsGhostHover",
        "ColorsGhostActive",
        "Colors50",
    ]

    return (
        <Page title="Homepage">
            <ul>
                {mixins.map(m => (
                    <li key={m}>
                        {`${m}: ($color, theme: DefaultTheme = THEME_LIGHT) => theme.${m}($color),`}
                    </li>
                ))}
            </ul>

            <ul>
                {/* {components.map(c => (
                    <li key={c}>{`yarn plop:p ${c?.replaceAll(
                        " ",
                        ""
                    )} components n`}</li>
                ))} */}
                {components.map(c => (
                    <li key={c}>
                        {`rm -rf src/lib/components/${c}/__preview__`}
                    </li>
                ))}
            </ul>
        </Page>
    )
}
