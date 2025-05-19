import type { FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { BreadcrumbsFn } from "./BreadcrumbsFn"
import { BreadcrumbItem } from "./BreadcrumbItem"
import type { ILibBreadcrumbs } from "./types"

/**
 * Breadcrumbs component for displaying navigation hierarchy.
 *
 * @component
 * @param {Object} props - Breadcrumbs props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {Array<LibBreadcrumbItem>} [props.items] - Array of breadcrumb items (used if children is not provided).
 * @param {ReactNode} [props.children] - Breadcrumb items as children (used if items is not provided).
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.linksColor] - Color for breadcrumb links.
 * @param {string} [props.activeColor] - Color for the active breadcrumb.
 * @param {string} [props.separatorColor] - Color for the separator.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap] - Gap between breadcrumb items.
 * @param {"slash" | "chevron" | JSX.Element} [props.separator] - Separator between breadcrumb items.
 * @returns {JSX.Element} The rendered Breadcrumbs component.
 *
 * @example
 * <Breadcrumbs
 *   items={[
 *     { text: "Home", to: "/" },
 *     { text: "Library", to: "/library" },
 *     { text: "Data" }
 *   ]}
 *   linksColor="primary"
 *   separator="chevron"
 * />
 */
export const Breadcrumbs: FC<ILibBreadcrumbs> = ({
    "data-testid": testid,
    ref,
    className,
    children,
    items,
    ...rest
}) => {
    return (
        <BreadcrumbsFn
            data-testid={testid}
            ref={ref}
            className={className}
            {...rest}
        >
            {items?.map((item, i) => (
                <BreadcrumbItem
                    key={uuid()}
                    data-testid={testid}
                    className={className}
                    item={item}
                    index={i}
                />
            )) ?? children}
        </BreadcrumbsFn>
    )
}
