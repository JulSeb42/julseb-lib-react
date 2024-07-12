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
import { imagePreview } from "../lib/components/Image/__preview__/Image.preview"
import { masonryPreview } from "../lib/components/Masonry/__preview__/Masonry.preview"
import { fullBleedPreview } from "../lib/components/FullBleed/__preview__/FullBleed.preview"
import { videoPreview } from "../lib/components/Video/__preview__/Video.preview"
import { youtubePreview } from "../lib/components/Youtube/__preview__/Youtube.preview"
import { badgePreview } from "../lib/components/Badge/__preview__/Badge.preview"
import { avatarPreview } from "../lib/components/Avatar/__preview__/Avatar.preview"
import { loaderPreview } from "../lib/components/Loader/__preview__/Loader.preview"
import { burgerPreview } from "../lib/components/Burger/__preview__/Burger.preview"
import { buttonPreview } from "../lib/components/Button/__preview__/Button.preview"
import { buttonIconPreview } from "../lib/components/ButtonIcon/__preview__/ButtonIcon.preview"
// prependImport
// import { accordionPreview } from "../lib/components/Accordion/__preview__/Accordion.preview"

export type PreviewProp<T> = {
    props: T
}

export type PreviewDemo = {
    demo: JSX.Element
}

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
    // TODO?: noAs: boolean
    previews?: Array<
        (PreviewProp<T> | PreviewDemo) & {
            previewTitle?: string
        }
    >
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
    imagePreview,
    masonryPreview,
    fullBleedPreview,
    videoPreview,
    youtubePreview,
    badgePreview,
    avatarPreview,
    loaderPreview,
    burgerPreview,
    buttonPreview,
    buttonIconPreview,
    // prependArr
    // accordionPreview
] as Array<ComponentPreview<any>>

export const componentPaths: ComponentPaths = previews.map(preview => ({
    path: `/${toKebabCase(preview.name)}`,
}))
