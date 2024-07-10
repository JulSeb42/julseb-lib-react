/*=============================================== NavDemo ===============================================*/

import { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import { toTitleCase } from "ts-utils-julseb"
import { useLibTheme, useKeyPress, Button, Input } from "../../lib"
import {
    // routes,
    // type Route,
    // type ComponentDemoPath,
    routesPaths,
} from "../../routes"
import { componentPaths } from "../../data/components"
import { StyledNavDemo } from "./styles"

export function NavDemo() {
    const { toggleTheme, selectedTheme } = useLibTheme()

    const [search, setSearch] = useState("")

    const filteredRoutes: Array<{ path: string }> = [
        ...routesPaths,
        ...componentPaths,
    ].filter(route => route.path.toLowerCase().includes(search.toLowerCase()))

    const el = useRef<HTMLInputElement>(null)
    useKeyPress(() => el?.current?.focus(), ["Command", "KeyK"])

    return (
        <StyledNavDemo>
            <Input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
                ref={el}
                clearSearch={() => setSearch("")}
            />

            <Button onClick={toggleTheme}>Theme: {selectedTheme}</Button>

            {filteredRoutes?.map(r => (
                <NavLink to={r.path} key={r.path}>
                    {r.path === "/"
                        ? "Homepage"
                        : toTitleCase(
                              r.path.replaceAll("/", "").replaceAll("-", " ")
                          )}
                </NavLink>
            ))}
        </StyledNavDemo>
    )
}
