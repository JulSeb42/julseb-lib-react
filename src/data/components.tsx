/*=============================================== Preview components ===============================================*/

import { slugify } from "ts-utils-julseb"
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
// prependImport

export interface ComponentPreview<T, C> {
    name: string
    component: C
    category: "styles" | "layouts" | "components" | "utils"
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
    // prependArr
] as Array<ComponentPreview<any, any>>

export const componentPaths: ComponentPaths = previews.map(preview => ({
    path: `/${slugify(preview.name)}`,
}))
