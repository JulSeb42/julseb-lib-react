import { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import { toTitleCase } from "@julseb-lib/utils"
import { useLibTheme, useKeyPress } from "../../lib"
import { routesPaths } from "../../routes"
import { componentPaths } from "../../data/components"

export const Nav = () => {
	const { switchTheme } = useLibTheme()

	const [search, setSearch] = useState("")

	const filteredRoutes: Array<{ path: string }> = [
		...routesPaths,
		...componentPaths,
	].filter(route => route.path.toLowerCase().includes(search.toLowerCase()))

	const el = useRef<HTMLInputElement>(null)
	useKeyPress(["Command", "KeyK"], () => el?.current?.focus())

	return (
		<nav className="bg-blue-800 w-[250px] h-[100vh] overflow-y-scroll p-4 fixed flex flex-col items-stretch gap-4 no-scrollbar">
			<input
				type="text"
				placeholder="Search component"
				className="bg-white border-solid border-gray-200 focus:border-blue-200 w-full rounded-sm p-1 outline-none border-1"
				value={search}
				onChange={e => setSearch(e.target.value)}
				ref={el}
			/>

			<button
				onClick={switchTheme}
				className="text-white font-black bg-blue-500 hover:bg-blue-300 active:bg-blue-600 py-2 px-4 rounded-md"
			>
				Switch theme
			</button>

			{filteredRoutes?.map(r => (
				<NavLink
					to={r.path}
					key={r.path}
					className="text-white [&.active]:font-black"
					end={!!(r.path === "/")}
				>
					{r.path === "/"
						? "Homepage"
						: toTitleCase(
								r.path.replaceAll("/", "").replaceAll("-", " "),
							)}
				</NavLink>
			))}
		</nav>
	)
}
