import { useState, type FC } from "react"
import { useSearchParams } from "react-router-dom"
import { uuid } from "@julseb-lib/utils"
import { Text } from "../../"
import { TabsContainer } from "./TabsContainer"
import { TabsButtonsContainer } from "./TabsButtonsContainer"
import { TabButton } from "./TabButton"
import { TabItem } from "./TabItem"
import type { ILibTabs } from "./types"

/**
 * Tabs component for rendering a set of tabbed panels with customizable tab items, active state, URL sync, and visual variants.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Tabs props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {Array<LibTabItem>} props.tabsItems - Array of tab item objects.
 * @param {boolean} [props.showInUrl] - If true, syncs the active tab with the URL query string (requires react-router).
 * @param {Array<Array<string>>} [props.queries] - Query parameters for URL sync (only if showInUrl is true).
 * @param {"start" | "stretch"} [props.justify="start"] - Justification of the tab buttons.
 * @param {number} [props.active=0] - Index of the initially active tab.
 * @param {"basic" | "rounded"} [props.variant="basic"] - Visual variant of the tabs.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Tabs component.
 *
 * @see https://documentation-components-react.vercel.app/components/tabs
 * @example
 * <Tabs
 *   tabsItems={[
 *     { title: "Tab 1", content: <div>Content 1</div> },
 *     { title: "Tab 2", content: <div>Content 2</div> }
 *   ]}
 *   active={0}
 *   justify="start"
 *   variant="basic"
 * />
 */
export const Tabs: FC<ILibTabs> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    tabsItems,
    justify = "start",
    active = 0,
    variant = "basic",
    showInUrl,
    queries,
    ...rest
}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const tab = searchParams.get("tab") || active.toString()

    const [activeTab, setActiveTab] = useState<number>(
        showInUrl ? Number(tab) : active
    )

    const handleClick = (activeTab: number) => {
        setActiveTab(activeTab)

        if (showInUrl) {
            setSearchParams(
                queries
                    ? {
                          tab: activeTab,
                          ...Object.fromEntries(queries),
                      }
                    : { tab: activeTab }
            )
        }
    }

    return (
        <TabsContainer
            data-testid={testid}
            className={className}
            ref={ref}
            as={as}
            {...rest}
        >
            <TabsButtonsContainer
                data-testid={testid && `${testid}.TabsButtonsContainer`}
                className={className && "TabsButtonsContainer"}
                justify={justify}
                variant={variant}
            >
                {tabsItems.map((item, i) => (
                    <TabButton
                        key={uuid()}
                        data-testid={
                            item["data-testid"]
                                ? item["data-testid"]
                                : testid &&
                                  `${testid}.TabsButtonsContainer.TabButton`
                        }
                        className={
                            item.className
                                ? `${item.className}.Button`
                                : className && "TabButton"
                        }
                        id={item.id && `${item.id}.TabButton`}
                        ref={item.ref}
                        isActive={activeTab === i}
                        onClick={() => handleClick(i)}
                        justify={justify}
                        variant={variant}
                    >
                        {item.title}
                    </TabButton>
                ))}
            </TabsButtonsContainer>

            {tabsItems.map((item, i) => (
                <TabItem
                    key={uuid()}
                    data-testid={
                        item["data-testid"]
                            ? item["data-testid"]
                            : testid && `${testid}.TabItem`
                    }
                    className={
                        item.className
                            ? `${item.className}.Tab`
                            : className && "TabItem"
                    }
                    id={item.id && `${item.id}.Tab`}
                    ref={item.ref}
                    as={typeof item.content === "string" ? Text : "span"}
                    isActive={activeTab.toString() === i.toString()}
                >
                    {item.content}
                </TabItem>
            ))}
        </TabsContainer>
    )
}
