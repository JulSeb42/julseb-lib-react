import { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi"
import { toTitleCase } from "@julseb-lib/utils"
import { useLibTheme, useKeyPress, clsx, Input } from "../../lib"
import { routesPaths } from "../../routes"
import { componentPaths } from "../../data/components"
import type { DispatchState, FC } from "../../lib/types"

export const Nav: FC<INav> = ({ isOpen, setIsOpen }) => {
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
		<>
			<nav
				className={clsx(
					"fixed flex flex-col items-stretch gap-2 h-screen overflow-y-scroll no-scrollbar",
					theme === "dark" ? "bg-primary-200" : "bg-primary-800",
					isOpen
						? "w-[250px] p-4 z-20"
						: "md:p-4 md:w-[250px] p-0 w-0",
				)}
			>
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
									r.path
										.replaceAll("/", "")
										.replaceAll("-", " "),
								)}
					</NavLink>
				))}
			</nav>

			<button
				className={clsx(
					"md:hidden top-6 z-30 fixed flex justify-center items-center bg-secondary-500 rounded-full size-6",
					isOpen ? "left-[238px]" : "left-6",
				)}
				onClick={() => setIsOpen(!isOpen)}
			>
				<BiChevronRight />
			</button>
		</>
	)
}

interface INav {
	isOpen: boolean
	setIsOpen: DispatchState<boolean>
}
