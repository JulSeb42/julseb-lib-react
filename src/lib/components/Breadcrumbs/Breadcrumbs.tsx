/*=============================================== Breadcrumbs component ===============================================*/

import { forwardRef } from "react"
import { uuid } from "@julseb-lib/utils"
import { BreadcrumbsFn } from "./BreadcrumbsFn"
import { BreadcrumbItem } from "./BreadcrumbItem"
import type { ILibBreadcrumbs } from "./types"

/**
 * @description Returns a Breadcrumbs component
 * @link https://documentation-components-react.vercel.app/components/breadcrumbs
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType$
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop items: Array<LibBreadcrumbItem> => only if children is not defined
 * @prop children?: Array<ReactNode> => only if items is not defined
 * @prop linksColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop activeColor?: Any color from the library
 * @prop separatorColor?: Any color from the library
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop separator?: "slash" | "chevron" | JSX.Element
 *
 * @type LibBreadcrumbItem
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLAnchorElement & HTMLSpanElement>
 * @prop text: string
 */
export const Breadcrumbs = forwardRef<HTMLDivElement, ILibBreadcrumbs>(
    ({ "data-testid": testid, className, children, items, ...rest }, ref) => {
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
)
