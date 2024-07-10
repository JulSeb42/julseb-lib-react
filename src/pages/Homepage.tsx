/*=============================================== Homepage ===============================================*/

import { Page } from "../components"

export function Homepage() {
    const components = [
        "Icon",
        "Key",
        "Text Icon",
        "Highlight",
        "Linkify",
        "Hr",
        "Skeleton",
        "Image",
        "Masonry",
        "Full Bleed",
        "Video",
        "Youtube",
        "Avatar",
        "Loader",
        "Burger",
        "Button",
        "Button Icon",
        "Button Group",
        "Tag",
        "Truncate",
        "Card",
        "Badge",
        "Tooltip",
        "Input",
        "Input Image",
        "Input Check",
        "Input Phone",
        "Input Counter",
        "Input Slider",
        "Select",
        "Autocomplete",
        "Rating",
        "Datepicker",
        "Timepicker",
        "Form",
        "List Group",
        "Breadcrumbs",
        "Accordion",
        "Dropdown",
        "Toast",
        "Alert",
        "Modal",
        "Pagination",
        "Paginator",
        "Stepper",
        "Progress Bar",
    ]

    return (
        <Page title="Homepage">
            <ul>
                {components.map(c => (
                    <li key={c}>{`yarn plop:p ${c.replaceAll(
                        " ",
                        ""
                    )} components n`}</li>
                ))}
            </ul>
        </Page>
    )
}
