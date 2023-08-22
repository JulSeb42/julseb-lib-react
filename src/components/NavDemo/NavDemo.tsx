/*=============================================== NavDemo ===============================================*/

import { NavLink } from "react-router-dom"

import { capitalize, useTheme } from "../../lib"
import { routes } from "../../routes"

import { StyledNavDemo } from "./styles"

export function NavDemo() {
    const { toggleTheme, selectedTheme } = useTheme()

    return (
        <StyledNavDemo>
            <button onClick={toggleTheme}>Theme: {selectedTheme}</button>

            {routes.map(r => (
                <NavLink to={r.path} key={r.path}>
                    {r.path === "/"
                        ? "Homepage"
                        : capitalize(r.path.replaceAll("/", ""))}
                </NavLink>
            ))}
        </StyledNavDemo>
    )
}
