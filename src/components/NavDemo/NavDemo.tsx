import { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import { toTitleCase } from "@julseb-lib/utils"
import { useLibTheme, useKeyPress, Button, Input } from "../../lib"
import { routesPaths } from "../../routes"
import { componentPaths } from "../../data/components"
import { StyledNavDemo } from "./styles"

export const NavDemo = () => {
    const { toggleTheme, selectedTheme } = useLibTheme()

    const [search, setSearch] = useState("")

    const filteredRoutes: Array<{ path: string }> = [
        ...routesPaths,
        ...componentPaths,
    ].filter(route => route.path.toLowerCase().includes(search.toLowerCase()))

    const el = useRef<HTMLInputElement>(null)
    useKeyPress(["Command", "KeyK"], () => el?.current?.focus())

    return (
        <StyledNavDemo>
            <Input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
                ref={el}
                clearSearch={() => setSearch("")}
                inputBackground="light"
            />

            <Button onClick={toggleTheme} color="white" variant="transparent">
                Theme: {selectedTheme}
            </Button>

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
