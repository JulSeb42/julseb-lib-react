/*=============================================== Fade component ===============================================*/

import { forwardRef, useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { useMergeRefs } from "../../"
import { StyledFade } from "./styles"
import type { ILibFade } from "./types"

/**
 * @description Returns a Fade component
 * @link https://documentation-components-react.vercel.app/components/fade
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 */
export const Fade = forwardRef<HTMLDivElement, ILibFade>(
    ({ "data-testid": testid, as, children, className, ...rest }, ref) => {
        const [isVisible, setVisible] = useState(true)
        const fadeRef = useRef<Element>(null)

        useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setVisible(entry.isIntersecting))
            })

            observer.observe((fadeRef as any).current)
        }, [])

        return (
            <StyledFade
                data-testid={testid}
                ref={useMergeRefs([ref, fadeRef])}
                as={as}
                className={classNames(className, { Visible: isVisible })}
                {...rest}
            >
                {children}
            </StyledFade>
        )
    }
)
