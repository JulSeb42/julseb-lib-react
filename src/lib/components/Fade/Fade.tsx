import { useEffect, useRef, useState, type FC } from "react"
import classNames from "classnames"
import { useMergeRefs } from "../../"
import { StyledFade } from "./styles"
import type { ILibFade } from "./types"

/**
 * Fade component for animating its children with a fade-in effect when visible in the viewport.
 *
 * @component
 * @param {Object} props - Fade props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.children] - Content to animate with fade effect.
 * @returns {JSX.Element} The rendered Fade component.
 *
 * @example
 * <Fade>
 *   <p>This content will fade in when visible.</p>
 * </Fade>
 */
export const Fade: FC<ILibFade> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    className,
    ...rest
}) => {
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
