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

import { wrapperPreview } from "../lib/components/Wrapper/__preview__/Wrapper.preview"
import { mainPreview } from "../lib/components/Main/__preview__/Main.preview"
import { asidePreview } from "../lib/components/Aside/__preview__/Aside.preview"
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
import { buttonGroupPreview } from "../lib/components/ButtonGroup/__preview__/ButtonGroup.preview"
import { tagPreview } from "../lib/components/Tag/__preview__/Tag.preview"
import { truncatePreview } from "../lib/components/Truncate/__preview__/Truncate.preview"
import { cardPreview } from "../lib/components/Card/__preview__/Card.preview"
import { inputPreview } from "../lib/components/Input/__preview__/Input.preview"
import { inputImagePreview } from "../lib/components/InputImage/__preview__/InputImage.preview"
import { inputCheckPreview } from "../lib/components/InputCheck/__preview__/InputCheck.preview"
import { inputPhonePreview } from "../lib/components/InputPhone/__preview__/InputPhone.preview"
import { inputCounterPreview } from "../lib/components/InputCounter/__preview__/InputCounter.preview"
import { inputSliderPreview } from "../lib/components/InputSlider/__preview__/InputSlider.preview"
import { selectPreview } from "../lib/components/Select/__preview__/Select.preview"
import { autocompletePreview } from "../lib/components/Autocomplete/__preview__/Autocomplete.preview"
import { ratingPreview } from "../lib/components/Rating/__preview__/Rating.preview"
import { formPreview } from "../lib/components/Form/__preview__/Form.preview"
import { listGroupPreview } from "../lib/components/ListGroup/__preview__/ListGroup.preview"
import { breadcrumbsPreview } from "../lib/components/Breadcrumbs/__preview__/Breadcrumbs.preview"
import { accordionPreview } from "../lib/components/Accordion/__preview__/Accordion.preview"
import { dropdownPreview } from "../lib/components/Dropdown/__preview__/Dropdown.preview"
import { toastPreview } from "../lib/components/Toast/__preview__/Toast.preview"
import { alertPreview } from "../lib/components/Alert/__preview__/Alert.preview"
import { modalPreview } from "../lib/components/Modal/__preview__/Modal.preview"
import { paginationPreview } from "../lib/components/Pagination/__preview__/Pagination.preview"
import { paginatorPreview } from "../lib/components/Paginator/__preview__/Paginator.preview"
import { stepperPreview } from "../lib/components/Stepper/__preview__/Stepper.preview"
import { progressBarPreview } from "../lib/components/ProgressBar/__preview__/ProgressBar.preview"
import { progressCirclePreview } from "../lib/components/ProgressCircle/__preview__/ProgressCircle.preview"
import { tabsPreview } from "../lib/components/Tabs/__preview__/Tabs.preview"
import { slideshowPreview } from "../lib/components/Slideshow/__preview__/Slideshow.preview"
import { coverPreview } from "../lib/components/Cover/__preview__/Cover.preview"
import { tablePreview } from "../lib/components/Table/__preview__/Table.preview"
import { pageLoadingPreview } from "../lib/components/PageLoading/__preview__/PageLoading.preview"
import { stickyPreview } from "../lib/components/Sticky/__preview__/Sticky.preview"
import { messagingPreview } from "../lib/components/Messaging/__preview__/Messaging.preview"
import { markdownEditorPreview } from "../lib/components/MarkdownEditor/__preview__/MarkdownEditor.preview"
import { markdownContainerPreview } from "../lib/components/MarkdownContainer/__preview__/MarkdownContainer.preview"
// prependImport

/*====================== Helpers ======================*/

import { srOnlyPreview } from "../lib/components/SrOnly/__preview__/SrOnly.preview"

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
    import: string | null // import Component (ex: Skeleton)
    additionalImports: Array<string> | null // import OtherComponent (ex: SkeletonCard)
    optionalImports: Array<string> | null // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    propsImport: string | null // import ILibComponent (ex: ILibAccordion)
    additionalTypeImports: Array<string> | null // import ILibComponentItem (ex: ILibAccordionItem)
    extends: Array<string> | Array<{ name: string; from: string }> | null
    noStretch?: boolean
    // TODO?: noAs: boolean
    // TODO?: noRef?: boolean
    previews: Array<
        (PreviewProp<T> | PreviewDemo) & {
            previewTitle?: string
        }
    > | null
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

    wrapperPreview,
    mainPreview,
    asidePreview,
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
    buttonGroupPreview,
    tagPreview,
    truncatePreview,
    cardPreview,
    inputPreview,
    inputImagePreview,
    inputCheckPreview,
    inputPhonePreview,
    inputCounterPreview,
    inputSliderPreview,
    selectPreview,
    autocompletePreview,
    ratingPreview,
    formPreview,
    listGroupPreview,
    breadcrumbsPreview,
    accordionPreview,
    dropdownPreview,
    toastPreview,
    alertPreview,
    modalPreview,
    paginationPreview,
    paginatorPreview,
    stepperPreview,
    progressBarPreview,
    progressCirclePreview,
    tabsPreview,
slideshowPreview,
coverPreview,
tablePreview,
pageLoadingPreview,
stickyPreview,
messagingPreview,
markdownEditorPreview,
markdownContainerPreview,
// prependArr

    /*====================== Helpers ======================*/
    srOnlyPreview,
] as Array<ComponentPreview<any>>

export const componentPaths: ComponentPaths = previews.map(preview => ({
    path: `/${toKebabCase(preview.name)}`,
}))
