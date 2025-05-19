import { useEffect, type FC } from "react"
import classNames from "classnames"
import {
    enableScroll,
    disableScroll as disableScrollFn,
} from "@julseb-lib/utils"
import { useKeyPress } from "../../"
import { StyledDrawer, Overlay, DrawerContent } from "./styles"
import type { ILibDrawer } from "./types"

/**
 * Drawer component for displaying a sliding panel from the left or right side of the screen.
 *
 * @component
 * @param {Object} props - Drawer props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {ReactNode} [props.children] - Content of the drawer.
 * @param {string} [props.className] - Additional class names.
 * @param {boolean} props.isOpen - Whether the drawer is open.
 * @param {Dispatch<SetStateAction<boolean>>} props.setIsOpen - Setter for the open state.
 * @param {boolean} [props.enableScrollingOpen] - Allow scrolling when drawer is open.
 * @param {boolean} [props.disableEsc] - Disable closing the drawer with Escape key.
 * @param {string} [props.backgroundColor="primary"] - Drawer background color.
 * @param {string} [props.contentColor="background"] - Drawer content color.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.linksColor="background"] - Color for links inside the drawer.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="s"] - Gap between drawer content elements.
 * @param {string|number} [props.width="30vw"] - Width of the drawer.
 * @param {number} [props.zIndex=998] - z-index of the drawer.
 * @param {string} [props.overlayColor="black-80"] - Overlay color.
 * @param {"left" | "right"} [props.position="right"] - Drawer position.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | Object} [props.padding="l"] - Padding for the drawer content.
 * @returns {JSX.Element} The rendered Drawer component.
 *
 * @example
 * <Drawer isOpen={open} setIsOpen={setOpen} position="left">
 *   <p>Drawer content</p>
 * </Drawer>
 */
export const Drawer: FC<ILibDrawer> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    className,
    isOpen,
    setIsOpen,
    enableScrollingOpen,
    disableEsc,
    backgroundColor = "primary",
    contentColor = "background",
    linksColor = "background",
    gap = "s",
    width = "30vw",
    zIndex = 998,
    overlayColor = "black-80",
    position = "right",
    padding = "l",
    ...rest
}) => {
    useEffect(() => {
        if (isOpen && !enableScrollingOpen) disableScrollFn()
        else enableScroll()
    }, [isOpen])

    const handleClose = () => {
        setIsOpen(false)
        enableScroll()
    }

    useKeyPress("Escape", () => {
        if (!disableEsc && isOpen) handleClose()
    })

    return (
        <StyledDrawer
            data-testid={testid}
            ref={ref}
            as={as}
            className={classNames(className, { Open: isOpen })}
            $zIndex={zIndex}
            {...rest}
        >
            <Overlay
                data-testid={testid && `${testid}.Overlay`}
                onClick={handleClose}
                className={classNames(
                    { DrawerOverlay: className },
                    { Open: isOpen }
                )}
                $overlayColor={overlayColor}
            />

            <DrawerContent
                data-testid={testid && `${testid}.Content`}
                className={classNames(
                    { DrawerContent: className },
                    { Open: isOpen }
                )}
                $gap={gap}
                $backgroundColor={backgroundColor}
                $contentColor={contentColor}
                $linksColor={linksColor}
                $width={width}
                $position={position}
                $padding={padding}
            >
                {children}
            </DrawerContent>
        </StyledDrawer>
    )
}
