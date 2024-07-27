/*=============================================== Tabs component ===============================================*/

import { forwardRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { uuid } from "ts-utils-julseb"
import { Text } from "../../"
import { TabsContainer } from "./TabsContainer"
import { TabsButtonsContainer } from "./TabsButtonsContainer"
import { TabButton } from "./TabButton"
import { TabItem } from "./TabItem"
import type { ILibTabs } from "./types"

/**
 * @description Returns a Tabs component
 * @link https://documentation-components-react.vercel.app/components/tabs
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop tabsItems: Array<LibTabItem>
 * @prop justify?: "start" | "stretch"
 * @prop active?: number
 * @prop variant?: "basic" | "rounded"
 * @prop showInUrl?: true
 * @prop queries?: Array<Array<string>> => only if showInUrl is set to true
 *
 * @type LibTabItem
 * @extends LibButtonLinkBlank
 * @prop "data-testid"?: string
 * @prop className?: string
 * @prop title: string
 * @prop content: ReactNode
 */

export const Tabs = forwardRef<HTMLDivElement, ILibTabs>(
    (
        {
            "data-testid": testid,
            as,
            className,
            tabsItems,
            justify = "start",
            active = 0,
            variant = "basic",
            showInUrl,
            queries,
            ...rest
        },
        ref
    ) => {
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
)
