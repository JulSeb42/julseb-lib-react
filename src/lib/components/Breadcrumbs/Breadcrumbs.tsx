/*=============================================== Breadcrumbs component ===============================================*/

import { forwardRef } from "react"
import { uuid } from "ts-utils-julseb"
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
 */
export const Breadcrumbs = forwardRef<HTMLDivElement, ILibBreadcrumbs>(
    (
        {
            "data-testid": testid,
            className,
            children,
            breadcrumbsItems,
            ...rest
        },
        ref
    ) => {
        return (
            <BreadcrumbsFn
                data-testid={testid}
                ref={ref}
                className={className}
                {...rest}
            >
                {breadcrumbsItems?.map((item, i) => (
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
