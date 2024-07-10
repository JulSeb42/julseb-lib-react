/*=============================================== Preview components ===============================================*/

import type { FC, ForwardRefExoticComponent, RefAttributes } from "react"
import { toKebabCase } from "ts-utils-julseb"
import type { ComponentPaths } from "../routes"

/*====================== Styles ======================*/

import { colorsPreview } from "./previews/styles/Colors.preview"
import { overlaysPreview } from "./previews/styles/Overlays.preview"
import { textPreviews } from "../lib/components/Text/__preview__/Text"
import { shadowsPreview } from "./previews/styles/Shadows.preview"
import { spacersPreview } from "./previews/styles/Spacers.preview"
import { radiusesPreview } from "./previews/styles/Radiuses.preview"
import { themeProviderPreview } from "./previews/styles/ThemeProvider.preview"

/*====================== Layouts ======================*/

import { containerPreview } from "./previews/layouts/Container.preview"
import { sectionPreview } from "../lib/components/Section/__preview__/Section.preview"
import { gridPreview } from "../lib/components/Grid/__preview__/Grid.preview"
import { flexboxPreview } from "../lib/components/Flexbox/__preview__/Flexbox.preview"

/*====================== Components ======================*/

import { iconPreview } from "../lib/components/Icon/__preview__/Icon.preview"
import { keyPreview } from "../lib/components/Key/__preview__/Key.preview"
import { textIconPreview } from "../lib/components/TextIcon/__preview__/TextIcon.preview"
import { highlightPreview } from "../lib/components/Highlight/__preview__/Highlight.preview"
import { linkifyPreview } from "../lib/components/Linkify/__preview__/Linkify.preview"
import { tooltipPreview } from "../lib/components/Tooltip/__preview__/Tooltip.preview"
import { hrPreview } from "../lib/components/Hr/__preview__/Hr.preview"
import { skeletonPreview } from "../lib/components/Skeleton/__preview__/Skeleton.preview"
// prependImport
// import { accordionPreview } from "../lib/components/Accordion/__preview__/Accordion.preview"

export interface ComponentPreview<T> {
    name: string
    component: FC | ForwardRefExoticComponent<T & RefAttributes<any>> | null
    category: "styles" | "layouts" | "components" | "utils"
    imports: string | Array<string>
    typeImports: string | Array<string> | null
    extends:
        | string
        | Array<string>
        | Array<{ name: string; from: string }>
        | null
    props?: Array<T & { previewTitle?: string }>
    demos?: Array<{ previewTitle?: string; element: JSX.Element }>
}

export const previews = [
    /*====================== Styles ======================*/
    colorsPreview,
    overlaysPreview,
    textPreviews,
    shadowsPreview,
    spacersPreview,
    radiusesPreview,
    themeProviderPreview,

    /*====================== Layouts ======================*/

    containerPreview,
    sectionPreview,
    gridPreview,
    flexboxPreview,

    /*====================== Components ======================*/
    iconPreview,
    keyPreview,
    textIconPreview,
    highlightPreview,
    linkifyPreview,
    tooltipPreview,
    hrPreview,
    skeletonPreview,
    // prependArr
    // accordionPreview
] as Array<ComponentPreview<any>>

export const componentPaths: ComponentPaths = previews.map(preview => ({
    path: `/${toKebabCase(preview.name)}`,
}))
