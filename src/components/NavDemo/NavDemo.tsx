/*=============================================== NavDemo ===============================================*/

import { useState } from "react"
import { NavLink } from "react-router-dom"

import { capitalize, useTheme } from "../../lib"
import { routes } from "../../routes"

import { StyledNavDemo } from "./styles"

export function NavDemo() {
    const { toggleTheme, selectedTheme } = useTheme()

    const [search, setSearch] = useState("")

    const filteredRoutes = routes.filter(route =>
        route.path.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <StyledNavDemo>
            <input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
            />

            <button onClick={toggleTheme}>Theme: {selectedTheme}</button>

            {filteredRoutes.map(r => (
                <NavLink to={r.path} key={r.path}>
                    {r.path === "/"
                        ? "Homepage"
                        : capitalize(r.path.replaceAll("/", ""))}
                </NavLink>
            ))}
        </StyledNavDemo>
    )
}
