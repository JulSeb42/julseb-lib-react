import { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import { toTitleCase } from "@julseb-lib/utils"
import { useLibTheme, useKeyPress, clsx, Input } from "../../lib"
import { routesPaths } from "../../routes"
import { componentPaths } from "../../data/components"

export const Nav = () => {
	const { switchTheme, theme } = useLibTheme()

	const [search, setSearch] = useState("")
	const clearSearch = () => setSearch("")

	const filteredRoutes: Array<{ path: string }> = [
		...routesPaths,
		...componentPaths,
	].filter(route => route.path.toLowerCase().includes(search.toLowerCase()))

	const el = useRef<HTMLInputElement>(null)
	useKeyPress(["Command", "KeyK"], () => el?.current?.focus())

	return (
		<nav className="fixed flex flex-col items-stretch gap-2 bg-primary-800 p-4 w-[250px] h-screen overflow-y-scroll no-scrollbar">
			<div className="block h-8">
				<Input
					type="search"
					clearSearch={clearSearch}
					placeholder="Search component"
					className={clsx(
						"p-1 w-full",
						"border border-gray-200 focus:border-primary-200 border-solid rounded-sm outline-none",
						theme === "dark" ? "dark:bg-black" : "bg-white",
					)}
					value={search}
					onChange={e => setSearch(e.target.value)}
					ref={el as any}
				/>
			</div>

			<button
				onClick={switchTheme}
				className="bg-primary-500 hover:bg-primary-300 active:bg-primary-600 px-4 py-2 rounded-md font-black text-white"
			>
				Switch theme
			</button>

			{filteredRoutes?.map(r => (
				<NavLink
					to={r.path}
					key={r.path}
					className="[&.active]:font-black text-white"
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
